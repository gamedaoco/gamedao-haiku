import { Person } from '@mui/icons-material'
import { Group } from '@mui/icons-material'

import { BaseForm } from 'components/Forms/baseForm'
import { RadioItem } from 'components/Forms/modules/radioItem'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
}

/*
	INFO: currently type 1 and 3 are dysfunctional / disabled
	value is not a counter but an int representing an enum
*/

export function Controller({ selected, setSelected }: ComponentProps) {
	return (
		<BaseForm title={'Who will control the organization?'}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'Single Entity'}
				description={'A single entity can take decisions on behalf of the organization.'}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
			/>
			<RadioItem
				icon={<Group sx={{ width: '40px', height: '40px' }} />}
				title={'Community'}
				description={'The community will take decisions together as a group.'}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
			/>
		</BaseForm>
	)
}
