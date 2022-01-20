import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import Icon from '@mui/material/Icon'
import SvgIcon from '@mui/material/SvgIcon'

export const ICON_MAPPING = {
	logo: `/assets/gamedao-logo-color.svg`,
	logoWhite: `/assets/gamedao-logo-white.svg`,
	campaign: `/assets/icon_campaigns.svg`,
	dashboard: `/assets/icon_dashboard.svg`,
	documentation: `/assets/icon_documentation.svg`,
	howitworks: `/assets/icon_howitworks.svg`,
	organizations: `/assets/icon_organizations.svg`,
	organizations2: `/assets/icon_organizations_2.svg`,
	store: `/assets/icon_store.svg`,
	tangram: `/assets/icon_tangram.svg`,
	voting: `/assets/icon_voting.svg`,
	wallet: `/assets/icon_wallet.svg`,
	moon: `/assets/icon_moon.svg`,
	sun: `/assets/icon_sun.svg`,
	logout: `/assets/icon_logout.svg`,
}

export function Icons({ src, alt, ...props }) {
	return <Box component={'img'} src={src} alt={alt || 'icon'} {...props} />
}

export function FontIcon({ name = 'tangram', ...props }) {
	const url = ICON_MAPPING[name]
	return <Icon baseClassName="gamedao-icon-font" className={'icon-' + name} {...props} />
}
