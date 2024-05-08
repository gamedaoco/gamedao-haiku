import styled from 'styled-components'

const Root = styled.div`
	position: relative;
`
const Wrapper = styled.div`
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	'& > *': { height: '100%', width: '100%' },
`

export const AspectRatio = ({ children, ratio = 1 }) => {
	return (
		<Root>
			<Wrapper>{children}</Wrapper>
			<div style={{ paddingBottom: (1 / ratio) * 100 + '%' }} />
		</Root>
	)
}

export default AspectRatio
