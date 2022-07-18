import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function CampaignDetailsOverview() {
	const theme = useTheme()
	return (
		<Box mt="1rem">
			<Typography variant="overline" color={theme.palette.common.white}>
				Overview
			</Typography>
			<Typography variant="body1" mt="1rem">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec
				vitae odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse
				nisi, sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis
				lectus. Amet ipsum justo pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in nulla.Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae
				odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi,
				sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus. Amet
				ipsum justo pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in nulla.Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae odio leo enim
				eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi, sodales. Vel
				arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus. Amet ipsum justo
				pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in
			</Typography>
			<Typography variant="overline" display="block" color={theme.palette.common.white} mt="2rem">
				Reasons To Invest
			</Typography>
			<ul style={{ paddingLeft: '2rem', marginTop: '1rem' }}>
				<li>Some cool reason</li>
				<li>Laces</li>
				<li>More reasons insert here</li>
			</ul>
		</Box>
	)
}
