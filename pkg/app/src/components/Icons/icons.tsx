import { Icon, SxProps } from '@mui/material'
import { MouseEventHandler } from 'react'

type FontIconsProps = {
	name: string
	sx?: SxProps
	onClick?: any
}

export function FontIcons({ name, ...restProps }: FontIconsProps) {
	return <Icon baseClassName="gamedao-icon-font" className={`icon-${name}`} {...restProps} />
}
