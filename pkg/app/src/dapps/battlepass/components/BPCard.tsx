import { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const calc = (x, y, w, h) => [(y - w / 2) / 40, -(x - h / 2) / 40, 1.1]
const trans = (x, y, s) => `perspective(2048px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const BPCard = ({ children }) => {
	const ref = useRef(null)

	const [w, setDimensions] = useState({
		w: window.innerWidth,
		h: window.innerHeight,
	})

	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 },
	}))

	const [data, setData] = useState({ x: 0, y: 0, w: 0, h: 0, hw: 0, hh: 0, ax: 0, ay: 0 })

	useEffect(() => {
		setData({
			x: ref?.current.offsetLeft,
			y: ref?.current.offsetTop,
			w: ref?.current.offsetWidth,
			h: ref?.current.offsetHeight,
			hw: ref?.current.offsetWidth / 2,
			hh: ref?.current.offsetHeight / 2,
			ax: ref?.current.x - ref.current.offsetWidth / 6,
			ay: ref?.current.y - ref.current.offsetHeight / 14,
		})
	}, [ref, w])

	const handleResize = () => {
		setDimensions({
			w: window.innerWidth,
			h: window.innerHeight,
		})
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize, false)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const update = (x, y) => {
		set({ xys: calc(x, y, w.w, w.h) })
	}

	return (
		<animated.div
			ref={ref}
			onMouseMove={({ clientX: x, clientY: y }) => update(x, y)}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{
				transform: props?.xys.interpolate(trans),
				// dropShadow: `(${-w.w}px ${-w.h}px 15px #000000)`
			}}
		>
			{children}
		</animated.div>
	)
}
