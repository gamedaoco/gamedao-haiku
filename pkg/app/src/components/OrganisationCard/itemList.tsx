import { Grid } from '@mui/material'
import { BodyData } from 'src/@types/bodydata'
import { Item } from './item'

interface ComponentProps {
	data: BodyData[]
}

export function ItemList({ data }: ComponentProps) {
	if (!Array.isArray(data)) return null

	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
			{data?.map((itemData, index) => (
				<Grid item xs={4} md={6} key={index}>
					<Item item={itemData} />
				</Grid>
			))}
		</Grid>
	)
}
