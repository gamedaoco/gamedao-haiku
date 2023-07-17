# GameDAO Campaign DApp

The campaign DApp is a collection of interfaces which implement the Flow Protocol. It is designed for decentralized fundraising and integrates with the SIGNAL protocol to govern funds collected from a campaign.

## Flow Protocol

Flow protocol provides a mechanism for raising funds from contributors in a non custodial way, meaning that GameDAO never holds client funds in any way. A creator can create a campaign by meeting some entry criteria:

- Governance access to an organization as prime or council membership
- Staking / deposit of GAME token or related wrapper NFT to collateralize a fundraiser

By meeting the entry criteria a creator may create a campaign, resulting in the required collateral to be locked. The collateral will be unlocked after the campaign ended, e.g.:

- on success, the collateral will be locked until all funds of the campaign have been spent
- on failure, the collateral will be immediately unlocked

## Campaign DApp




