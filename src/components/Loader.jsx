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
    <div className="h-screen w-screen flex justify-center items-center bg-black text-white transition-all duration-200 easeOut">
      <motion.h1 className="text-6xl font-barlow">{rounded}</motion.h1>
    </div>
  )
}
