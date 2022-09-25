import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useMemo } from 'react'

export const EditorWrapperStyled = styled(Box)(({ theme }) => ({
	overflow: 'hidden',
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	border: `solid 1px ${theme.palette.grey[500_32]}`,
	'& .ql-container.ql-snow': {
		borderColor: 'transparent',
		...theme.typography.body1,
		fontFamily: theme.typography.fontFamily,
	},
	'& .ql-editor': {
		minHeight: 200,
		'&.ql-blank::before': {
			fontStyle: 'normal',
			color: theme.palette.text.disabled,
		},
		'& pre.ql-syntax': {
			...theme.typography.body2,
			padding: theme.spacing(2),
			borderRadius: theme.shape.borderRadius,
			backgroundColor: theme.palette.grey[900],
		},
	},
}))

export const EditorWrapper = ({ readOnly, sx, children }) => {
	const styles = useMemo(() => {
		const styles: any = {}

		if (readOnly) {
			styles.borderRadius = 0
			styles.border = 'none'
		}

		return styles
	}, [readOnly])

	return (
		<>
			<EditorWrapperStyled
				sx={{
					...sx,
					...styles,
				}}
			>
				{children}
			</EditorWrapperStyled>
		</>
	)
}
