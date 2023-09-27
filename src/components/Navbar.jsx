import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false)

  return (
    <div>
      <nav className="hidden md:flex justify-between items-center pl-8 mb-4 xl:mt-8 relative">
        <motion.img
          whileHover={{ rotate: 90 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          src={logo}
          alt="Logo"
          className="h-auto max-w-full"
        />

        <div
          className="md:flex text-white font-barlow uppercase justify-evenly w-6/12
				pt-8 bg-slate-400 bg-opacity-10 backdrop-blur-2xl
				"
        >
          <h4 className="border-b-2 border-slate-400 border-active:border-b-2 pb-8">
            <Link to="/">
              <span className="font-bold mr-2 hidden xl:inline">00</span>
              Home
            </Link>
          </h4>
          <h4 className="active:border-b-2 pb-8">
            <Link to="/destination">
              <span className="font-bold mr-2 hidden xl:inline">01</span>
              Destination
            </Link>
          </h4>
          <h4 className="active:border-b-2 pb-8">
            <Link to="/crew">
              <span className="font-bold mr-2 hidden xl:inline">02</span>
              Crew
            </Link>
          </h4>
          <h4 className="active:border-b-2 pb-8">
            <Link to="/technology">
              <span className="font-bold mr-2 hidden xl:inline">03</span>
              Technology
            </Link>
          </h4>
        </div>
        <div
          className="absolute xl:border-b xl:border-zinc-600 xl:w-5/12 xl:h-px xl:left-40
				"
        ></div>
      </nav>
      <nav className="flex justify-between items-center mx-6 my-6 md:hidden">
        <motion.img
          whileHover={{ rotate: 90 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          src={logo}
          alt="Logo"
          className="h-auto max-w-full"
        />
        <motion.img
          src={hamburger}
          // whileHover={{ rotate: 90 }}
          // transition={{ ease: 'easeOut', duration: 0.2 }}
          alt="hamburger"
          className="h-auto max-w-full md:hidden cursor-pointer"
          onClick={() => {
            setToggleNavBar(!toggleNavBar)
          }}
        />
      </nav>
      <div
        className={classNames(
          'fixed top-0 left-0 w-screen h-screen bg-transparent md:hidden',
          { hidden: !toggleNavBar, fixed: toggleNavBar },
        )}
      >
        <motion.aside
          initial={{ x: 0 }}
          animate={{ x: 5 }}
          exit={{ x: 0 }}
          // animate={{ x: toggleNavBar ? 5 : 0 }}
          transition={{ ease: 'easeIn', duration: 0.5 }}
          // transition={{ duration: 0.5 }}
          className={classNames(
            'bg-blue-500 w-2/3 h-screen fixed top-0 right-0 bg-opacity-10 backdrop-blur-2xl md:hidden',
            { hidden: !toggleNavBar, fixed: toggleNavBar },
          )}
        >
          <div className="my-6 mx-6 flex items-center justify-end">
            <motion.img
              // animate={{
              //   rotate: [0, 200, 200, 0],
              // }} //! Keyframing
              whileHover={{ rotate: 90 }}
              // transition={{ repeat: Infinity, duration: 0.2 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
              src={close}
              alt="Close"
              className="h-auto max-w-full cursor-pointer"
              onClick={() => {
                setToggleNavBar(!toggleNavBar)
              }}
            />
          </div>
          <div className="uppercase text-white mt-8 flex flex-col justify-start gap-y-4 font-barlow pl-10 pr-1">
            <h4 className="border-r-4">
              <Link to="/">
                <span className="font-bold mr-2 ">00</span> Home
              </Link>
            </h4>
            <h4>
              <Link to="/destination">
                <span className="font-bold  mr-2">01</span> Destination
              </Link>
            </h4>
            <h4>
              <Link to="/crew">
                <span className="font-bold  mr-2">02</span> Crew
              </Link>
            </h4>
            <h4>
              <Link to="/technology">
                <span className="font-bold  mr-2">03</span> Technology
              </Link>
            </h4>
          </div>
        </motion.aside>
      </div>
    </div>
  )
}

export default Navbar
