import { ethers } from "hardhat";

export const CONFIG_MERKLE_ROOT =
  ethers.utils.formatBytes32String("merkleRoot");
export const CONFIG_USE_MAX_INVOCATIONS_PER_ADDRESS_OVERRIDE =
  ethers.utils.formatBytes32String("useMaxMintsPerAddrOverride");
export const CONFIG_MAX_INVOCATIONS_OVERRIDE = ethers.utils.formatBytes32String(
  "maxMintsPerAddrOverride"
);

// expected revert messages
export const revertMessages = {
  onlyArtist: "Only Artist",
  maximumInvocationsReached: "Max invocations reached",
  invalidMaxInvocations: "Invalid max invocations",
  priceNotConfigured: "Price not configured",
  projectIdDoesNotExist: "Project ID does not exist",
  needMoreValue: "Min value to mint req.",
  noRenounceOwnership: "Cannot renounce ownership",
  onlyAdminACL: "Only Admin ACL allowed",
  onlyCoreAdminACL: "Only Core AdminACL allowed",
  onlyCoreAdminACLOrArtist: "Only Artist or Core Admin ACL",
  onlyMinterFilterACL: "Only MinterFilter AdminACL",
  onlyRegisteredCore: "Only registered core contract",
  onlyNonZeroAddress: "Only non-zero address",
  onlyNonZero: "Only non-zero",
  minterAlreadyApproved: "Minter already approved",
  mustSendCorrectAmount: "Only max price gte token price",
  noMinterAssigned: "No minter assigned",
  onlyPreviouslyApprovedMinter: "Only previously approved minter",
  onlyApprovedMinters: "Only approved minters",
  onlyValidProjectId: "Only valid project ID",
  onlyAssignedMinter: "Only assigned minter",
  nonExistentKey: "EnumerableMap: nonexistent key",
  lengthOfArraysMustMatch: "TokenHolderLib: arrays neq length",
  onlyRegisteredNFTAddresses: "TokenHolderLib: address not registered",
  purchaseRequiresNFT: "Purchase requires NFT ownership",
  currencyAddressMatch: "Currency addresses must match",
  needMoreAllowance: "Insufficient ERC20 allowance",
  needMoreBalance: "Insufficient ERC20 balance",
  ERC20TransferToZeroError: "ERC20: transfer to the zero address",
  ERC20MockBannedTransfer: "ERC20Mock: transfer to banned address",
  ERC20NotConfigured: "ERC20: payment not configured",
  ERC20NoEther: "ERC20: No ETH when using ERC20",
  ERC20NullAddress: "null address, only ERC20",
  ERC20NonNullSymbol: "only non-null symbol",
  panelAlreadyMinted: "Panel already minted",
  unexpectedHashSeed: "Unexpected token hash seed",
  inactiveFunction: "Inactive function",
  onlyFutureAuctionsOrZero: "Only future start times or 0",
  auctionTooShort: "Auction duration below minimum",
  onlyUnconfiguredProjects: "Only unconfigured projects",
  onlyConfiguredProjects: "Project not configured",
  noNextToken: "No next token",
  onlyGteStartTime: "Only gte project start time",
  insufficientInitialBid: "Insufficient initial bid",
  onlyNextTokenPopulated: "No next token, check max invocations",
  incorrectTokenId: "Incorrect target token ID",
  tokenNotBeingAuctioned: "Token ID does not match auction",
  auctionAlreadyEnded: "Auction already ended",
  bidTooLow: "Bid is too low",
  auctionNotInitialized: "Auction not initialized",
  auctionNotEnded: "Auction not yet ended",
  onlySameProject: "Only tokens in same project",
  noAuction: "No auction exists on project",
  nextTokenNotPopulated: "Next token not populated",
  onlyGte7000: "Only gte 7_000",
  onlyConfiguredAuctions: "Only configured auctions",
  halfLifeTooShort:
    "Price decay half life must be greater than min allowable value",
  noMidAuction: "No modifications mid-auction",
  onlyFutureAuctions: "Only future auctions",
  auctionNotStarted: "Auction not yet started",
  invalidDAPrices: "Auction start price must be greater than auction end price",
  noZeroHalfLife: "Half life of zero not allowed",
  tooShortAuction:
    "Auction length must be at least minimumAuctionLengthSeconds",
  notImplemented: "Not implemented",
  onlyDecreasingPrice: "Only monotonic decreasing price",
  onlyBeforeRevenuesWithdrawn: "Only before revenues collected",
  onlyGteBasePrice: "Only gte base price",
  onlyCompleteAuction: "Auction must be complete",
  onlyReduceSelloutPrice: "May only reduce sellout price",
  onlyNonZeroBasePrice: "Base price must be non-zero",
  revenuesAlreadyCollected: "Revenues already collected",
  auctionNotSoldOut: "Active auction not yet sold out",
  onlyNonZeroLatestPurchasePrice: "Only latestPurchasePrice > 0",
  noClaimToZeroAddress: "No claiming to the zero address",
  noPurchasesMade: "No purchases made by this address",
  reclaimingFailed: "Reclaiming failed",
  noZeroAddress: "No zero address",
  arrayLengthsMatch: "Array lengths must match",
  refundFailed: "Refund failed",
  renderProviderPaymentFailed: "Render Provider payment failed",
  onlyBeforePurchases: "Only before purchases",
  actionNotSupported: "Action not supported",
  onlyPreAuction: "Only pre-auction",
  onlyLiveAuction: "Only live auction",
  onlyStateC: "Only state C",
  onlyStateCOrD: "Only state C or D",
  onlyPostAuctionOpenMint: "Only post-auction open mint",
  onlyStateDOrE: "Only state D or E",
  onlyStateE: "Only state E",
  onlyStateErrorE1: "Only in state E1",
  onlyEmergencyLTMax: "Only emergency hours lt max",
  notInExtraTime: "Not allowed in extra time",
  auctionTooShortRAM: "Auction too short",
  onlyGTE0p05ETH: "Only base price gte 0.05 ETH",
  onlyAdminArtistMintPeriod: "Only admin-artist mint period",
  onlyNoAdminArtistMintPeriod: "Only no admin-artist mint period",
  noPreviousAdminExtension: "No previous admin extension",
  onlyReduceAuctionLength: "Only reduce auction length",
  onlyFutureEndTime: "Only future end time",
  revenuesAlreadyWithdrawn: "Revenues already withdrawn",
  minterNotActive: "Minter not active",
  valueDNEBidSlot: "msg.value must equal slot value",
  noTokensInAuction: "No tokens in auction",
  insufficientBidValue: "Insufficient bid value",
  bidDNE: "Bid dne - were you outbid?",
  invalidBidId: "invalid Bid ID",
  onlyBidderOfExistingBid: "Only bidder of existing bid",
  onlyBidder: "Only bidder",
  incorrectAddedValue: "incorrect added value",
  reachedMaxInvocations: "Reached max invocations",
  onlyAuctionReservePrice: "Only send auction reserve price",
  onlyUnsettledBid: "Only un-settled bid",
  tooManyTokensToMint: "tokens to mint gt tokens owed",
  noExceedMaxInvocations: "Must not exceed max invocations",
  onlySenderIsBidder: "Only sender is bidder",
  tooManyBidsToRefund: "bids to refund gt available qty",
  auctionNotConfigured: "auction not configured",
  auctionEndedSellout: "auction ended, sellout",
  noBidsInAuction: "No bids in auction",
  onlySlotLtNumSlots: "Only slot index lt NUM_SLOTS",
};
