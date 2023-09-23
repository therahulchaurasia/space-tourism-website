import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import classNames from 'classnames'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false)
  return (
    <div>
      <nav className="flex justify-between items-center mx-6 my-6">
        <motion.img
          whileHover={{ rotate: 90 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          src={logo}
          alt="Logo"
          className="h-auto max-w-full"
        />
        <motion.img
          src={hamburger}
          whileHover={{ rotate: 90 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          alt="hamburger"
          className="h-auto max-w-full"
          onClick={() => {
            setToggleNavBar(!toggleNavBar)
          }}
        />
      </nav>

      <motion.aside
        animate={{ x: toggleNavBar ? 5 : 0 }}
        // transition={{ type: 'spring', stiffness: 200 }}
        // transition={{ delay: 5 }}
        className={classNames(
          'bg-blue-500 w-2/3 h-screen fixed top-0 right-0 bg-opacity-10 backdrop-blur-2xl',
          { hidden: !toggleNavBar, fixed: toggleNavBar }
        )}
      >
        <div className="my-6 mx-6 flex items-center justify-end">
          <motion.img
            animate={{
              rotate: [0, 200, 200, 0],
              // x: [0, 200, 200, 0, -200, -200, 0],
            }} //! Keyframing
            transition={{ repeat: Infinity, duration: 0.2 }}
            // transition={{ ease: 'easeOut', duration: 0.2 }}
            src={close}
            alt="Close"
            className="h-auto max-w-full"
            onClick={() => {
              setToggleNavBar(!toggleNavBar)
            }}
          />
        </div>
        <div className="uppercase text-white mt-8 flex flex-col gap-y-4 font-barlow px-10">
          <h4>
            <span className="font-bold mr-2">00</span> Home
          </h4>
          <h4>
            <span className="font-bold  mr-2">01</span> Destination
          </h4>
          <h4>
            <span className="font-bold  mr-2">02</span> Crew
          </h4>
          <h4>
            <span className="font-bold  mr-2">03</span> Technology
          </h4>
        </div>
      </motion.aside>
    </div>
  )
}

export default Navbar
