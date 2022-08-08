import { Avatar, Box } from '@mui/material'

import { StatusChip } from 'components/CampaignCard/modules/statusChip'
import { Image } from 'components/Image/image'
import { SvgIconStyle } from 'components/SvgIconStyle/svgIconStyle'

import shapeAvatar from './shape-avatar.svg'

interface ComponentProps {
	headerImage: string
	organizationImage: string
	status: string
}

export function Header({ organizationImage, headerImage, status }: ComponentProps) {
	return (
		<Box sx={{ position: 'relative' }}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 1,
				}}
			>
				<StatusChip status={status} variant="campaignStatus" />
			</Box>
			<SvgIconStyle
				src={shapeAvatar.src}
				sx={{
					width: 144,
					height: 62,
					zIndex: 10,
					left: 0,
					right: 0,
					bottom: -26,
					mx: 'auto',
					position: 'absolute',
					color: 'background.paper',
				}}
			/>
			<Avatar
				alt={'Organization Image'}
				src={organizationImage}
				sx={{
					width: 64,
					height: 64,
					zIndex: 11,
					left: 0,
					right: 0,
					bottom: -32,
					mx: 'auto',
					position: 'absolute',
				}}
			/>
			<Image src={headerImage} alt="Card cover" ratio="16/9" />
		</Box>
	)
}
