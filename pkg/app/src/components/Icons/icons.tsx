import { Icon } from '@mui/material'

type FontIconsProps = {
	name: string
}

export function FontIcons({ name = 'tangram', ...restProps }: FontIconsProps) {
	return <Icon baseClassName="gamedao-icon-font" className={`icon-${name}`} {...restProps} />
}
