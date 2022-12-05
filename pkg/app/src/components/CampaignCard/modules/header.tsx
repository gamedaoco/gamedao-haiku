import React, { useCallback, useState } from 'react'

import { DeleteOutlined } from '@mui/icons-material'
import { Avatar, Box, Chip } from '@mui/material'
import { CampaignState } from 'src/constants/campaign'
import { StatusChip } from 'components/CampaignCard/modules/statusChip'
import { Image } from 'components/Image/image'
import { ConfirmDeleteCampaignDraft } from 'components/Modals/confirmDeleteCampaignDraft'
import { SvgIconStyle } from 'components/SvgIconStyle/svgIconStyle'

import shapeAvatar from './shape-avatar.svg'

interface ComponentProps {
	headerImage: string
	organizationImage: string
	id: string
	orgId: string
	status: string
}

export function Header({ organizationImage, headerImage, status, id, orgId }: ComponentProps) {
	const [modalState, setModalState] = useState<boolean>(false)

	const handleDelete = useCallback(
		(event) => {
			event.stopPropagation()
			setModalState(true)
		},
		[setModalState],
	)

	return (
		<>
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
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						right: 0,
						zIndex: 1,
					}}
				>
					{status === CampaignStatus.Draft && (
						<Chip variant="campaignCard" onClick={handleDelete} label={<DeleteOutlined />} />
					)}
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
			<ConfirmDeleteCampaignDraft orgId={orgId} id={id} onClose={() => setModalState(false)} open={modalState} />
		</>
	)
}
