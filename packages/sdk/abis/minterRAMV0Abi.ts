export const minterRAMV0Abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "minterFilter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionBufferSeconds",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxAuctionExtraSeconds",
        type: "uint256",
      },
    ],
    name: "AuctionBufferTimeParamsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestampStart",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestampEnd",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "basePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowExtraTime",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "adminArtistOnlyMintPeriodIfSellout",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokensInAuction",
        type: "uint256",
      },
    ],
    name: "AuctionConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestampEnd",
        type: "uint256",
      },
    ],
    name: "AuctionTimestampEndUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "BidCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "BidMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
    ],
    name: "BidRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
    ],
    name: "BidRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
    ],
    name: "BidSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newSlotIndex",
        type: "uint256",
      },
    ],
    name: "BidToppedUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "ConfigValueSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum RAMLib.AdminMintingConstraint",
        name: "adminMintingConstraint",
        type: "uint8",
      },
    ],
    name: "ContractConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minAuctionDurationSeconds",
        type: "uint256",
      },
    ],
    name: "MinAuctionDurationSecondsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint24",
        name: "refundGasLimit",
        type: "uint24",
      },
    ],
    name: "MinterRefundGasLimitUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "numSlots",
        type: "uint256",
      },
    ],
    name: "NumSlotsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokensInAuction",
        type: "uint256",
      },
    ],
    name: "NumTokensInAuctionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxInvocations",
        type: "uint256",
      },
    ],
    name: "ProjectMaxInvocationsLimitUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "TokenPurchased",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_AUCTION_DURATION_SECONDS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "emergencyHoursToAdd",
        type: "uint8",
      },
    ],
    name: "adminAddEmergencyAuctionHours",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "numTokensToMint",
        type: "uint24",
      },
    ],
    name: "adminArtistAutoMintTokensToWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint32[]",
        name: "bidIds",
        type: "uint32[]",
      },
    ],
    name: "adminArtistDirectMintTokensToWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint32[]",
        name: "bidIds",
        type: "uint32[]",
      },
    ],
    name: "adminArtistDirectRefundWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "numBidsToRefund",
        type: "uint24",
      },
    ],
    name: "adminAutoRefundWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint32[]",
        name: "bidIds",
        type: "uint32[]",
      },
    ],
    name: "collectSettlements",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "contractConfigurationDetails",
    outputs: [
      {
        internalType: "enum RAMLib.AdminMintingConstraint",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "slotIndex",
        type: "uint16",
      },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "getAuctionDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "auctionTimestampStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "auctionTimestampEnd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "basePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numTokensInAuction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numBids",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numBidsMintedTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numBidsErrorRefunded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBidSlotIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowExtraTime",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "adminArtistOnlyMintPeriodIfSellout",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "revenuesCollected",
        type: "bool",
      },
      {
        internalType: "enum RAMLib.ProjectMinterStates",
        name: "projectMinterState",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "getIsErrorE1",
    outputs: [
      {
        internalType: "bool",
        name: "isError",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numBidsToRefund",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "getLowestBidValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "getMinimumNextBid",
    outputs: [
      {
        internalType: "uint256",
        name: "minNextBidValueInWei",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minNextBidSlotIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "getPriceInfo",
    outputs: [
      {
        internalType: "bool",
        name: "isConfigured",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "tokenPriceInWei",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "currencySymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "currencyAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "getProjectBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "isEngineView",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "maxInvocations",
        type: "uint24",
      },
    ],
    name: "manuallyLimitProjectMaxInvocations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "maxInvocationsProjectConfig",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "maxHasBeenInvoked",
            type: "bool",
          },
          {
            internalType: "uint24",
            name: "maxInvocations",
            type: "uint24",
          },
        ],
        internalType: "struct MaxInvocationsLib.MaxInvocationsProjectConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minterConfigurationDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "minAuctionDurationSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "auctionBufferSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAuctionExtraSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAuctionAdminEmergencyExtensionHours",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "adminArtistOnlyMintTimeSeconds",
        type: "uint256",
      },
      {
        internalType: "uint24",
        name: "minterRefundGasLimit",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minterFilterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minterType",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minterVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "projectMaxHasBeenInvoked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "projectMaxInvocations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "purchase",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "purchaseTo",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "auctionTimestampEnd",
        type: "uint40",
      },
    ],
    name: "reduceAuctionLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "auctionTimestampStart",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "auctionTimestampEnd",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "basePrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowExtraTime",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "adminArtistOnlyMintPeriodIfSellout",
        type: "bool",
      },
    ],
    name: "setAuctionDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "enum RAMLib.AdminMintingConstraint",
        name: "adminMintingConstraint",
        type: "uint8",
      },
    ],
    name: "setContractConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "slotIndex",
        type: "uint16",
      },
    ],
    name: "slotIndexToBidValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "syncProjectMaxInvocationsToCore",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "bidId",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "newSlotIndex",
        type: "uint16",
      },
    ],
    name: "topUpBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "minterRefundGasLimit",
        type: "uint24",
      },
    ],
    name: "updateRefundGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint32[]",
        name: "bidIds",
        type: "uint32[]",
      },
    ],
    name: "winnerDirectMintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
      {
        internalType: "uint32[]",
        name: "bidIds",
        type: "uint32[]",
      },
    ],
    name: "winnerDirectRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "coreContract",
        type: "address",
      },
    ],
    name: "withdrawArtistAndAdminRevenues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
