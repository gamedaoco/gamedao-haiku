import React, { useState, useEffect, useMemo } from 'react'
import LockIcon from '@mui/icons-material/Lock'
import OpenLockIcon from '@mui/icons-material/LockOpen'
import WebsiteIcon from '@mui/icons-material/Web'
import MemberIcon from '@mui/icons-material/AccountBox'
import { Typography, Box, Stack, Link } from '@mui/material'

import { TileCard } from 'src/components/OrganisationCard/modules/tileCard'

export function Item({ data }) {
	return (
		<TileCard
			// linkTo={`/app/organisations/${data.id}`}
			// imageURL={imageState}
			// headline={metaDataState?.name}
			// metaHeadline={textState}
			// metaContent={metaContent}
			data={data}
		>
			<Typography>{'description'}</Typography>
		</TileCard>
	)
}
