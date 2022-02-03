// SPDX-License-Identifier: LGPL-3.0-only
// Created By: Art Blocks Inc.

import "../libs/0.8.x/IERC20.sol";

import "../interfaces/0.8.x/IGenArt721CoreContract.sol";
import "../interfaces/0.8.x/IMinterFilter.sol";
import "../interfaces/0.8.x/IFilteredMinter.sol";

pragma solidity 0.8.9;

/**
 * @title Filtered Minter contract that allows tokens to be minted with ETH
 * or any ERC-20 token.
 * @author Art Blocks Inc.
 */
contract GenArt721FilteredMinter is IFilteredMinter {
    /// Art Blocks core contract this minter may interact with.
    IGenArt721CoreContract public artblocksContract;
    /// Minter filter this minter may interact with.
    IMinterFilter public minterFilter;

    /// minterType for this minter
    string public constant minterType = "GenArt721FilteredMinter";

    uint256 constant ONE_MILLION = 1_000_000;

    /// projectId => are contracts allowed to mint?
    mapping(uint256 => bool) public contractMintable;
    /// projectId => are tokens allowed to be minted to other addresses?
    mapping(uint256 => bool) public purchaseToDisabled;
    /// purchaser address => projectId => number of mints purchased
    mapping(address => mapping(uint256 => uint256)) public projectMintCounter;
    /// projectId => maximum number of mints a given address may invoke
    mapping(uint256 => uint256) public projectMintLimit;
    /// projectId => has project reached its maximum number of invocations?
    mapping(uint256 => bool) public projectMaxHasBeenInvoked;
    /// projectId => project's maximum number of invocations
    mapping(uint256 => uint256) public projectMaxInvocations;
    /// projectId => price per token in wei - supersedes any defined core price
    mapping(uint256 => uint256) public projectIdToPricePerTokenInWei;

    modifier onlyCoreWhitelisted() {
        require(
            artblocksContract.isWhitelisted(msg.sender),
            "Only Core whitelisted"
        );
        _;
    }

    modifier onlyArtist(uint256 _projectId) {
        require(
            msg.sender ==
                artblocksContract.projectIdToArtistAddress(_projectId),
            "Only Artist"
        );
        _;
    }

    /**
     * @notice Initializes contract to be a Filtered Minter for
     * `_minterFilter`, integrated with Art Blocks core contract
     * at address `_genArt721Address`.
     * @param _genArt721Address Art Blocks core contract for which this
     * contract will be a minter.
     * @param _minterFilter Minter filter for which
     * this will a filtered minter.
     */
    constructor(address _genArt721Address, address _minterFilter) {
        artblocksContract = IGenArt721CoreContract(_genArt721Address);
        minterFilter = IMinterFilter(_minterFilter);
    }

    /**
     * @notice Gets your balance of the ERC-20 token currently set
     * as the payment currency for project `_projectId`.
     * @param _projectId Project ID to be queried.
     * @return balance Balance of ERC-20
     */
    function getYourBalanceOfProjectERC20(uint256 _projectId)
        external
        view
        returns (uint256 balance)
    {
        balance = IERC20(
            artblocksContract.projectIdToCurrencyAddress(_projectId)
        ).balanceOf(msg.sender);
        return balance;
    }

    /**
     * @notice Gets your allowance for this minter of the ERC-20
     * token currently set as the payment currency for project
     * `_projectId`.
     * @param _projectId Project ID to be queried.
     * @return remaining Remaining allowance of ERC-20
     */
    function checkYourAllowanceOfProjectERC20(uint256 _projectId)
        external
        view
        returns (uint256 remaining)
    {
        remaining = IERC20(
            artblocksContract.projectIdToCurrencyAddress(_projectId)
        ).allowance(msg.sender, address(this));
        return remaining;
    }

    /**
     * @notice Sets the mint limit of a single purchaser for project
     * `_projectId` to `_limit`.
     * @param _projectId Project ID to set the mint limit for.
     * @param _limit Number of times a given address may mint the project's
     * tokens.
     */
    function setProjectMintLimit(uint256 _projectId, uint8 _limit)
        external
        onlyCoreWhitelisted
    {
        projectMintLimit[_projectId] = _limit;
    }

    /**
     * @notice Sets the maximum invocations of project `_projectId` based
     * on the value currently defined in the core contract.
     * @param _projectId Project ID to set the maximum invocations for.
     * @dev also checks and may refresh projectMaxHasBeenInvoked for project
     */
    function setProjectMaxInvocations(uint256 _projectId)
        external
        onlyCoreWhitelisted
    {
        uint256 maxInvocations;
        uint256 invocations;
        (, , invocations, maxInvocations, , , , , ) = artblocksContract
            .projectTokenInfo(_projectId);
        projectMaxInvocations[_projectId] = maxInvocations;
        if (invocations < maxInvocations) {
            projectMaxHasBeenInvoked[_projectId] = false;
        }
    }

    /**
     * @notice Toggles if contracts are allowed to mint tokens for
     * project `_projectId`.
     * @param _projectId Project ID to be toggled.
     */
    function toggleContractMintable(uint256 _projectId)
        external
        onlyCoreWhitelisted
    {
        contractMintable[_projectId] = !contractMintable[_projectId];
    }

    /**
     * @notice Toggles if purchases to other address are enabled for
     * project `_projectId`.
     * @param _projectId Project ID to be toggled.
     */
    function togglePurchaseToDisabled(uint256 _projectId)
        external
        onlyCoreWhitelisted
    {
        purchaseToDisabled[_projectId] = !purchaseToDisabled[_projectId];
        emit PurchaseToDisabledUpdated(
            _projectId,
            purchaseToDisabled[_projectId]
        );
    }

    /**
     * @notice Updates this minter's price per token of project `_projectId`
     * to be '_pricePerTokenInWei`, in Wei.
     * This price supersedes any legacy core contract price per token value.
     */
    function updatePricePerTokenInWei(
        uint256 _projectId,
        uint256 _pricePerTokenInWei
    ) public onlyArtist(_projectId) {
        projectIdToPricePerTokenInWei[_projectId] = _pricePerTokenInWei;
        emit PricePerTokenInWeiUpdated(_projectId, _pricePerTokenInWei);
    }

    /**
     * @notice Purchases a token from project `_projectId`.
     * @param _projectId Project ID to mint a token on.
     * @return tokenId Token ID of minted token
     */
    function purchase(uint256 _projectId)
        external
        payable
        returns (uint256 tokenId)
    {
        tokenId = purchaseTo(msg.sender, _projectId);
        return tokenId;
    }

    /**
     * @notice Purchases a token from project `_projectId` and sets
     * the token's owner to `_to`.
     * @param _to Address to be the new token's owner.
     * @param _projectId Project ID to mint a token on.
     * @return tokenId Token ID of minted token
     */
    function purchaseTo(address _to, uint256 _projectId)
        public
        payable
        returns (uint256 tokenId)
    {
        require(
            !projectMaxHasBeenInvoked[_projectId],
            "Maximum number of invocations reached"
        );

        // if contract filter is off, allow calls from another contract
        if (!contractMintable[_projectId]) {
            require(msg.sender == tx.origin, "No Contract Buys");
        }

        // if purchaseTo is disabled, enforce purchase destination to be the TX
        // sending address.
        if (purchaseToDisabled[_projectId]) {
            require(msg.sender == _to, "No `purchaseTo` Allowed");
        }

        // limit mints per address by project
        if (projectMintLimit[_projectId] > 0) {
            require(
                projectMintCounter[msg.sender][_projectId] <
                    projectMintLimit[_projectId],
                "Reached minting limit"
            );
            projectMintCounter[msg.sender][_projectId]++;
        }

        if (
            keccak256(
                abi.encodePacked(
                    artblocksContract.projectIdToCurrencySymbol(_projectId)
                )
            ) != keccak256(abi.encodePacked("ETH"))
        ) {
            require(
                msg.value == 0,
                "this project accepts a different currency and cannot accept ETH"
            );
            require(
                IERC20(artblocksContract.projectIdToCurrencyAddress(_projectId))
                    .allowance(msg.sender, address(this)) >=
                    projectIdToPricePerTokenInWei[_projectId],
                "Insufficient Funds Approved for TX"
            );
            require(
                IERC20(artblocksContract.projectIdToCurrencyAddress(_projectId))
                    .balanceOf(msg.sender) >=
                    projectIdToPricePerTokenInWei[_projectId],
                "Insufficient balance."
            );
            _splitFundsERC20(_projectId);
        } else {
            require(
                msg.value >= projectIdToPricePerTokenInWei[_projectId],
                "Must send minimum value to mint!"
            );
            _splitFundsETH(_projectId);
        }

        tokenId = minterFilter.mint(_to, _projectId, msg.sender);
        // what if projectMaxInvocations[_projectId] is 0 (default value)?
        // that is intended, so that by default the minter allows infinite transactions,
        // allowing the artblocks contract to stop minting
        // uint256 tokenInvocation = tokenId % ONE_MILLION;
        if (
            projectMaxInvocations[_projectId] > 0 &&
            tokenId % ONE_MILLION == projectMaxInvocations[_projectId] - 1
        ) {
            projectMaxHasBeenInvoked[_projectId] = true;
        }
        return tokenId;
    }

    /**
     * @dev splits ETH funds between sender (if refund), foundation,
     * artist, and artist's additional payee for a token purchased on
     * project `_projectId`.
     * @dev utilizes transfer() to send ETH, so access lists may need to be
     * populated when purchasing tokens.
     */
    function _splitFundsETH(uint256 _projectId) internal {
        if (msg.value > 0) {
            uint256 pricePerTokenInWei = projectIdToPricePerTokenInWei[
                _projectId
            ];
            uint256 refund = msg.value - pricePerTokenInWei;
            if (refund > 0) {
                payable(msg.sender).transfer(refund);
            }
            uint256 foundationAmount = (pricePerTokenInWei / 100) *
                artblocksContract.artblocksPercentage();
            if (foundationAmount > 0) {
                artblocksContract.artblocksAddress().transfer(foundationAmount);
            }
            uint256 projectFunds = pricePerTokenInWei - foundationAmount;
            uint256 additionalPayeeAmount;
            if (
                artblocksContract.projectIdToAdditionalPayeePercentage(
                    _projectId
                ) > 0
            ) {
                additionalPayeeAmount =
                    (projectFunds / 100) *
                    artblocksContract.projectIdToAdditionalPayeePercentage(
                        _projectId
                    );
                if (additionalPayeeAmount > 0) {
                    artblocksContract
                        .projectIdToAdditionalPayee(_projectId)
                        .transfer(additionalPayeeAmount);
                }
            }
            uint256 creatorFunds = projectFunds - additionalPayeeAmount;
            if (creatorFunds > 0) {
                artblocksContract.projectIdToArtistAddress(_projectId).transfer(
                        creatorFunds
                    );
            }
        }
    }

    /**
     * @dev splits ERC-20 funds between foundation, artist, and artist's
     * additional payee, for a token purchased on project `_projectId`.
     */
    function _splitFundsERC20(uint256 _projectId) internal {
        uint256 pricePerTokenInWei = projectIdToPricePerTokenInWei[_projectId];
        uint256 foundationAmount = (pricePerTokenInWei / 100) *
            artblocksContract.artblocksPercentage();
        if (foundationAmount > 0) {
            IERC20(artblocksContract.projectIdToCurrencyAddress(_projectId))
                .transferFrom(
                    msg.sender,
                    artblocksContract.artblocksAddress(),
                    foundationAmount
                );
        }
        uint256 projectFunds = pricePerTokenInWei - foundationAmount;
        uint256 additionalPayeeAmount;
        if (
            artblocksContract.projectIdToAdditionalPayeePercentage(_projectId) >
            0
        ) {
            additionalPayeeAmount =
                (projectFunds / 100) *
                artblocksContract.projectIdToAdditionalPayeePercentage(
                    _projectId
                );
            if (additionalPayeeAmount > 0) {
                IERC20(artblocksContract.projectIdToCurrencyAddress(_projectId))
                    .transferFrom(
                        msg.sender,
                        artblocksContract.projectIdToAdditionalPayee(
                            _projectId
                        ),
                        additionalPayeeAmount
                    );
            }
        }
        uint256 creatorFunds = projectFunds - additionalPayeeAmount;
        if (creatorFunds > 0) {
            IERC20(artblocksContract.projectIdToCurrencyAddress(_projectId))
                .transferFrom(
                    msg.sender,
                    artblocksContract.projectIdToArtistAddress(_projectId),
                    creatorFunds
                );
        }
    }

    /**
     * @notice Gets price of minting a token on project `_projectId`,
     * assuming this is project's minter.
     * @param _projectId Project ID to get price of token in wei.
     */
    function getPrice(uint256 _projectId) public view returns (uint256) {
        return projectIdToPricePerTokenInWei[_projectId];
    }
}
