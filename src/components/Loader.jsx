import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader() {
  const count = useMotionValue(5)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, 0, { ease: 'easeInOut', duration: 4 })

    return animation.stop
  }, [])

  return (
    <motion.div
      className="h-screen w-full flex justify-center items-center bg-black text-white transition duration-50 ease-out"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1 className="text-9xl font-barlow">{rounded}</motion.h1>
    </motion.div>
  )
}
