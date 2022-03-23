import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useWallet } from './Wallet'
import { decodeAddressAsString } from '../utils/helper'
import { useApiProvider } from '@substra-hooks/core'
import { createQuestNotification } from '../utils/notification'

interface QuestState {
	screenIndex: number
	introTextPlayed: boolean
	quest1Played: boolean
	quest2Played: boolean
	quest3Played: boolean
	quest4Played: boolean
	quest5Played: boolean
	quest6Played: boolean
	endgamePlayed: boolean
	endgameFormPlayed: boolean

	hasQuest1Completed: boolean
	hasQuest2Completed: boolean
	hasQuest3Completed: boolean
	hasQuest4Completed: boolean
	hasQuest5Completed: boolean
	hasQuest6Completed: boolean
	hasAllQuestsCompleted: boolean
	updateQuestState: any
}

const INITIAL_VALUE: QuestState = {
	screenIndex: 0,
	introTextPlayed: false,
	quest1Played: false,
	quest2Played: false,
	quest3Played: false,
	quest4Played: false,
	quest5Played: false,
	quest6Played: false,
	endgamePlayed: false,
	endgameFormPlayed: false,

	hasQuest1Completed: false,
	hasQuest2Completed: false,
	hasQuest3Completed: false,
	hasQuest4Completed: false,
	hasQuest5Completed: false,
	hasQuest6Completed: false,
	hasAllQuestsCompleted: false,
	updateQuestState: () => {},
}
const QuestContext = createContext<QuestState>(INITIAL_VALUE)
export const useQuestContext = () => useContext<QuestState>(QuestContext)

// Handle quests
function handleQuests(state: QuestState, apiProvider, address, updateQuestState) {
	if (!state.hasQuest1Completed) {
		if (!state.quest1Played) return
		return checkFirstQuest(apiProvider, address, updateQuestState)
	} else if (!state.hasQuest2Completed) {
		if (!state.quest2Played) return
		return checkSecondQuest(apiProvider, address, updateQuestState)
	} else if (!state.hasQuest3Completed) {
		if (!state.quest3Played) return
		return checkThirdQuest(apiProvider, address, updateQuestState)
	} else if (!state.hasQuest4Completed) {
		if (!state.quest4Played) return
		return checkFourthQuest(apiProvider, address, updateQuestState)
	} else if (!state.hasQuest5Completed) {
		if (!state.quest5Played) return
		return checkFifthQuest(apiProvider, address, updateQuestState)
	} else if (!state.hasQuest6Completed) {
		if (!state.quest6Played) return
		return checkSixthQuest(apiProvider, address, updateQuestState)
	} else if (!state.hasAllQuestsCompleted) {
		if (!state.endgamePlayed) return
		return checkFinalQuestQuest(apiProvider, address, updateQuestState)
	}
}

// Quest 1
// Connected wallet has more than 0 Zero token
async function checkFirstQuest(apiProvider, address, updateQuestState) {
	try {
		const task = await apiProvider.query.system.account(address)
		if (task.toHuman().data.free?.split(' ')[0] > 0) {
			updateQuestState({ hasQuest1Completed: true })
			createQuestNotification(
				'You have successfully completed the first quest. More information can be found on the quest site'
			)
		}
	} catch (e) {
		return
	}
}

// Quest 2
// Connected wallet has an dao created
async function checkSecondQuest(apiProvider, address, updateQuestState) {
	try {
		const task = await apiProvider.query.gameDaoControl.controlledBodiesCount(address)
		if (task.toNumber() > 0) {
			updateQuestState({ hasQuest2Completed: true })
			createQuestNotification(
				'You have successfully completed the second quest. More information can be found on the quest site'
			)
		}
	} catch (e) {
		return
	}
}

// Quest 3
// An owned dao has more than 2 members
async function checkThirdQuest(apiProvider, address, updateQuestState) {
	try {
		const daoList = await apiProvider.query.gameDaoControl.controlledBodies(address)
		let taskCompleted = false
		for (let dao of daoList.toHuman()) {
			const daoMemberCount = await apiProvider.query.gameDaoControl.bodyMemberCount(dao)
			if (daoMemberCount.toNumber() > 2) {
				taskCompleted = true
				break
			}
		}
		if (taskCompleted) {
			updateQuestState({ hasQuest3Completed: true })
			createQuestNotification(
				'You have successfully completed the third quest. More information can be found on the quest site'
			)
		}
	} catch (e) {
		return
	}
}

// Quest 4
// Connected wallet has created a campaign
async function checkFourthQuest(apiProvider, address, updateQuestState) {
	try {
		const daoList = await apiProvider.query.gameDaoControl.controlledBodies(address)
		let taskCompleted = false
		for (let dao of daoList.toHuman()) {
			const campaignsCount = await apiProvider.query.gameDaoCrowdfunding.campaignsOwnedCount(
				dao
			)
			if (campaignsCount.toNumber() > 0) {
				taskCompleted = true
				break
			}
		}

		if (taskCompleted) {
			updateQuestState({ hasQuest4Completed: true })
			createQuestNotification(
				'You have successfully completed the fourth quest. More information can be found on the quest site'
			)
		}
	} catch (e) {
		return
	}
}

// Quest 5
// An owned campaign ist fully funded
async function checkFifthQuest(apiProvider, address, updateQuestState) {
	try {
		const daoList = await apiProvider.query.gameDaoControl.controlledBodies(address)
		let taskCompleted = false
		for (let dao of daoList.toHuman()) {
			// Should return an array and not just a hash
			const campaignsList = await apiProvider.query.gameDaoCrowdfunding.campaignsByBody(dao)
			for (let campaign of campaignsList.toHuman()) {
				const state = await apiProvider.query.gameDaoCrowdfunding.campaignState(campaign)
				if (state.toNumber() === 3) {
					taskCompleted = true
					break
				}
			}

			if (taskCompleted) {
				break
			}
		}
		if (taskCompleted) {
			updateQuestState({ hasQuest5Completed: true })
			createQuestNotification(
				'You have successfully completed the fifth quest. More information can be found on the quest site'
			)
		}
	} catch (e) {
		return
	}
}

// Quest 6
// Connected wallet has created a proposal
async function checkSixthQuest(apiProvider, address, updateQuestState) {
	try {
		const task = await apiProvider.query.gameDaoGovernance.proposalsByOwnerCount(address)
		const proposals = await apiProvider.query.gameDaoGovernance.proposalsByOwnerArray.multi(
			[...new Array(task.toNumber())].map((_, i) => [address, i])
		)
		const proposalsData = await apiProvider.query.gameDaoGovernance.proposals.multi(
			proposals.map((x) => x.toHuman())
		)
		const data = proposalsData
			.map((x) => x.toHuman())
			.find((prop) => prop['proposal_type'] == 3)
		if (data) {
			updateQuestState({ hasQuest6Completed: true })
			createQuestNotification(
				'You have successfully completed the sixth quest. More information can be found on the quest site'
			)
		}
	} catch (e) {
		return
	}
}

// Final quest
// Solved if withdrawal proposal was passed with majority of YES votings
async function checkFinalQuestQuest(apiProvider, address, updateQuestState) {
	try {
		const task = await apiProvider.query.gameDaoGovernance.proposalsByOwnerCount(address)
		const proposals = await apiProvider.query.gameDaoGovernance.proposalsByOwnerArray.multi(
			[...new Array(task.toNumber())].map((_, i) => [address, i])
		)
		const proposalsData = await apiProvider.query.gameDaoGovernance.proposals.multi(
			proposals.map((x) => x.toHuman())
		)
		const data = proposalsData
			.map((x) => x.toHuman())
			.filter((prop) => prop['proposal_type'] == 3)
		if (!data) {
			return
		}
		const state = await apiProvider.query.gameDaoGovernance.proposalStates.multi(
			data.map((props) => props['proposal_id'])
		)
		const taskComp = state.map((x) => x.toHuman()).find((stateData) => stateData == 6)

		if (taskComp) {
			updateQuestState({ hasAllQuestsCompleted: true })
			createQuestNotification('Congratulations: 🎉🎉🎉 You have mastered all quests 🎉🎉🎉')
		}
	} catch (e) {
		return
	}
}

export function QuestProvider({ children }) {
	const [state, setState] = useState<QuestState>(INITIAL_VALUE)
	const [localStoreState, setLocalStoreState] = useState<any>(null)
	const { address } = useWallet()
	const apiProvider = useApiProvider()
	const intervalRef = useRef<any>(0)

	const updateQuestState = useCallback(
		(obj) => {
			let storeData = {}
			const rawAddress = decodeAddressAsString(address)
			const localStorageState = localStorage.getItem('STORE_QUEST_STATE')
			if (localStorageState) {
				storeData = JSON.parse(localStorageState)
			}
			let newState = { ...state, ...obj }
			if (storeData[rawAddress]) {
				newState = { ...storeData[rawAddress], ...obj }
			}

			storeData[rawAddress] = newState
			localStorage.setItem('STORE_QUEST_STATE', JSON.stringify(storeData))
			setState(newState)
		},
		[state, setState, address]
	)

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [])

	useEffect(() => {
		// Load old questState from store
		try {
			const localStorageState = localStorage.getItem('STORE_QUEST_STATE')
			setLocalStoreState(JSON.parse(localStorageState))
		} catch (e) {
			return
		}
	}, [address])

	useEffect(() => {
		if (address && localStoreState) {
			const rawAddress = decodeAddressAsString(address)
			if (localStoreState[rawAddress]) {
				setState(localStoreState[rawAddress])
			} else {
				setState(INITIAL_VALUE)
			}
		}
	}, [address, localStoreState])

	useEffect(() => {
		if (apiProvider && address && state) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}

			intervalRef.current = setInterval(
				handleQuests,
				10000,
				state,
				apiProvider,
				address,
				updateQuestState
			)
		}
	}, [apiProvider, address, state, updateQuestState])

	return (
		<QuestContext.Provider value={{ ...state, updateQuestState }}>
			{children}
		</QuestContext.Provider>
	)
}
