import { useAnimation, motion } from 'framer-motion'

export function FadeInWhenVisible({ d, children }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			// whileHover={{ scale: 1.1 }}
			// whileTap={{ opacity: 0.8 }}
			viewport={{ once: true }}
			transition={{
				delay: 0.1 + d / 10,
				duration: 0.1,
			}}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0.9 },
			}}
		>
			{children}
		</motion.div>
	)
}
