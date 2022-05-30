import { BaseForm } from 'components/Forms/baseForm'
import { RadioItem } from 'components/Forms/modules/radioItem'
import { Person } from '@mui/icons-material'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
}

export function Controller({ selected, setSelected }: ComponentProps) {
	return (
		<BaseForm title={'Who will control the organization?'}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'One Entity'}
				description={'A single entity can take decisions on behalf of the organization.'}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'Community'}
				description={'The community will take decisions together as a group.'}
				value={1}
				selectedValue={selected}
				onChange={setSelected}
			/>
		</BaseForm>
	)
}
