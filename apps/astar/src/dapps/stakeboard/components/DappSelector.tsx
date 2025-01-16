import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { cleanContent } from 'discord.js'

export const DappSelector = ({ content, onUpdate, id }) => (
	<Grid item xs={12}>
		<FormControl sx={{ flex: 1, width: '100%' }}>
			<InputLabel id="dapp">Select dApp</InputLabel>
			{content && content.length > 0 && (
				<Select
					name={'dapp'}
					value={id}
					onChange={onUpdate}
					labelId="dapp"
					label="Select dApp"
					variant="outlined"
				>
					{content.map((item, index) => (
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
			)}
		</FormControl>
	</Grid>
)
