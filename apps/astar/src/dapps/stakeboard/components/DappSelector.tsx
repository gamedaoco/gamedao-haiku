import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useItemHighlighted } from '@mui/x-charts'
import { cleanContent } from 'discord.js'

export const DappSelector = ({ content, onUpdate, id }) => {
	return (
		<Grid item xs={12}>
			<FormControl sx={{ flex: 1, width: '100%' }}>
				<InputLabel id="dapp">Select dApp</InputLabel>
				<Select
					name={'dapp'}
					value={id}
					onChange={onUpdate}
					labelId="dapp"
					label="Select dApp"
					variant="outlined"
				>
					{content &&
						id &&
						content.length > 0 &&
						content
							// .filter((item) => item.stakers.length > 0)
							.map((item, index) => (
								<MenuItem
									value={item.address}
									key={index}
									sx={{
										backgroundColor: '#00000099',
										backdropFilter: 'blur(10px)',
									}}
								>
									{item.name}
								</MenuItem>
							))}
				</Select>
			</FormControl>
		</Grid>
	)
}
