import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader() {
  const count = useMotionValue(3)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, 0, { ease: 'easeInOut', duration: 2 })

    return animation.stop
  }, [])

  return <motion.h1>{rounded}</motion.h1>
}
