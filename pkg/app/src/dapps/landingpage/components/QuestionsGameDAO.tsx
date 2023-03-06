import React, { useCallback } from 'react'

import { Box, Typography } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const content = [
	{
		question: `What is ZERO?`,
		answer: `ZERO is the next generation multichain infrastructure built on blockchain technology enabling new breed economics and interoperable ecosystems for the video game industry. One such ecosystem is GameDAO.`,
	},
	{
		question: `What is GameDAO?`,
		answer: `GameDAO is a Layer 3 dApp running on the ZERO blockchain. It enables communities with governance, fundraising, coordination and operates as a protocol for the videogames economy.`,
	},
	{
		question: `What can I do with $ZERO Token?`,
		answer: `The $ZERO Token is network token of ZERO network. It can be used to pay transaction fees but also for network governance`,
	},
	{
		question: `What can I do with $GAME Token?`,
		answer: `The $GAME Token is the access and governance token needed to interact with GameDAO protocols. It is limited to 100'000'000 tokens..`,
	},
	{
		question: `What is $PLAY Token and do I need it?`,
		answer: `The $PLAY Token along other stable token is a payment token currently only usable on ZERO testnets.`,
	},
	{
		question: `What is Staking?`,
		answer: `Staking serves a similar function to mining tokens,
	in that it’s the process by which a network participant gets selected to add the latest batch of transactions to the blockchain and earn some tokens in exchange.
Users put their tokens on the line for a chance to add a new block onto the blockchain in exchange for a reward.
Their staked tokens act as a guarantee of the legitimacy of any new transaction they add to the blockchain.`,
	},
	{
		question: `What is a Nominator?`,
		answer: `Nominators are responsible for choosing validators and securing the core of the blockchain.
	They participate themselves in the network by deciding and choosing which validators operate their duties.`,
	},
	{
		question: `What is a Validator?`,
		answer: `Validators are chosen by a nominator and participate in the network by running nodes to stake on.
	They secure the blockchain by staking, validating proofs from collators and participating in consensus with other validators.`,
	},
	{
		question: `What are Relay Chains, Parachains, Parathreads and Bridges?`,
		answer: `These are the building blocks of the Polkadot ecosystem. Polkadot is often referred to as a network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.
	The Relay Chain is the core of this network. It coordinates consensus and communication between parachains, is responsible for the network’s shared security, consensus and cross-chain interoperability.
	Parachains are sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases. They benefit from Polkadot’s security and infrastructure. A slot as a parachain can be won through an auction from DOT holders.
	Parathreads are similar to parachains but with a pay-as-you-go model. More economical for blockchains that don’t need continuous connectivity to the network.
	Bridges allow parachains and parathreads to connect and communicate with external networks like Ethereum and Bitcoin.`,
	},
	{
		question: `What is a Crowdloan?`,
		answer: `A crowdloan is a way of fundraising.
	Instead of relying on institutions or a smaller group of investors, you utilize the strength of a community.
	Every participant has the choice to contribute to the project.`,
	},
	{
		question: `What is a DAO?`,
		answer: `DAO stands for Decentralized Autonomous Organization and operates as an independent association.
	The organization has no central instant or board. Such organizations are built on the blockchain through
	smart contracts and offer each member the possibility to vote about the future of the organization itself.`,
	},
	{
		question: `What is the Architecture of GameDAO?`,
		answer: ``,
	},
	{
		question: `How do I create an Account?`,
		answer: `You’ll need a few things to get started. Firstly you need a Dotsama capable wallet. We recommend Talisman. Go ahead and download the wallet on their website, make sure to hold on to your seed phrases and look for the ZERO network.
Once you’ve connected your wallet to the ZERO network, you’ll be able to add tokens to your wallet through our faucet in Discord.`,
	},
	{
		question: `What is a DID and why do I need it?`,
		answer: ``,
	},
	{
		question: `How can I create an Organisation?`,
		answer: ``,
	},
	{
		question: `How can I create a Fundraising Campaign?`,
		answer: ``,
	},
	{
		question: `How can I use the Money?`,
		answer: ``,
	},
	{
		question: `Why do I need Community Governance?`,
		answer: ``,
	},
	{
		question: `What is the security model of GameDAO, an Organisation or a Campaign?`,
		answer: ``,
	},
]

export const Questions = () => {
	return (
		<Box>
			<Typography variant={'h3'} px={'2rem'} pb={'2rem'}>
				Frequently Asked Questions
			</Typography>
			{content.map((item, index) => (
				<Accordion key={index} sx={{ background: 'transparent', px: '1rem', boxShadow: 0 }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={'panel' + index + '-content'}
						id={'panel' + index + '-header'}
					>
						<Typography>{item.question}</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ boxShadow: 0 }}>
						<Typography>{item.answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	)
}
