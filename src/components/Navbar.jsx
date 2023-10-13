import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation()
  const { pathname } = location
  const [toggleNavBar, setToggleNavBar] = useState(false)

  return (
    <div>
      <motion.nav
        className="hidden md:flex justify-between items-center pl-8 mb-4 xl:mt-8 relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
      >
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
          <Link to="/">
            <h4
              className={classNames(
                'border-b-2 border-transparent hover:border-slate-400 hover:border-b-2 pb-8 transition duration-300 ease-out',
                {
                  'border-white': pathname === '/',
                },
              )}
            >
              <span className="font-bold mr-2 hidden xl:inline">00</span>
              Home
            </h4>
          </Link>
          <Link to="/destination">
            <h4
              className={classNames(
                'border-b-2 border-transparent hover:border-slate-400 hover:border-b-2 pb-8 transition duration-300 ease-out',
                {
                  'border-white': pathname === '/destination',
                },
              )}
            >
              <span className="font-bold mr-2 hidden xl:inline">01</span>
              Destination
            </h4>
          </Link>
          <Link to="/crew">
            <h4
              className={classNames(
                'border-b-2 border-transparent hover:border-slate-400 hover:border-b-2 pb-8 transition duration-300 ease-out',
                {
                  'border-white': pathname === '/crew',
                },
              )}
            >
              <span className="font-bold mr-2 hidden xl:inline">02</span>
              Crew
            </h4>
          </Link>
          <Link to="/technology">
            <h4
              className={classNames(
                'border-b-2 border-transparent hover:border-slate-400 hover:border-b-2 pb-8 transition duration-300 ease-out',
                {
                  'border-white': pathname === '/technology',
                },
              )}
            >
              <span className="font-bold mr-2 hidden xl:inline">03</span>
              Technology
            </h4>
          </Link>
        </div>
        <div
          className="absolute xl:border-b xl:border-zinc-600 xl:w-5/12 xl:h-px xl:left-40
				"
        ></div>
      </motion.nav>
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
          alt="hamburger"
          className="h-auto max-w-full md:hidden cursor-pointer"
          onClick={() => {
            setToggleNavBar(!toggleNavBar)
          }}
        />
      </nav>
      <motion.div
        className={classNames(
          'fixed top-0 left-0 w-screen h-screen bg-nearTransparent md:hidden z-50',
          { hidden: !toggleNavBar, fixed: toggleNavBar },
        )}
      >
        <motion.aside
          animate={{ x: toggleNavBar ? 5 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
          }}
          className={classNames(
            'bg-blue-500 w-2/3 h-screen fixed top-0 right-0 bg-opacity-10 backdrop-blur-2xl md:hidden z-50',
            { hidden: !toggleNavBar, fixed: toggleNavBar },
          )}
        >
          <div className="my-6 mx-6 flex items-center justify-end">
            <motion.img
              whileHover={{ rotate: 90 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
              src={close}
              alt="Close"
              className="h-auto max-w-full cursor-pointer"
              onClick={() => {
                setToggleNavBar(!toggleNavBar)
              }}
            />
          </div>
          <div className="uppercase text-white mt-8 flex flex-col justify-start gap-y-6 font-barlow pl-10 pr-1 tracking-widest">
            <Link to="/">
              <h4
                className={classNames(
                  'hover:border-r-4 hover:border-gray-400 transition duration-300 ease-out',
                  {
                    'border-r-4 border-white': pathname === '/',
                  },
                )}
              >
                <span className="font-bold mr-2">00</span> Home
              </h4>
            </Link>
            <Link to="/destination">
              <h4
                className={classNames(
                  'hover:border-r-4 hover:border-gray-400 transition duration-300 ease-out',
                  {
                    'border-r-4 border-white': pathname === '/destination',
                  },
                )}
              >
                <span className="font-bold  mr-2">01</span> Destination
              </h4>
            </Link>
            <Link to="/crew">
              <h4
                className={classNames(
                  'hover:border-r-4 hover:border-gray-400 transition duration-300 ease-out',
                  {
                    'border-r-4 border-white': pathname === '/crew',
                  },
                )}
              >
                <span className="font-bold  mr-2">02</span> Crew
              </h4>
            </Link>
            <Link to="/technology">
              <h4
                className={classNames(
                  'hover:border-r-4 hover:border-gray-400 transition duration-300 ease-out',
                  {
                    'border-r-4 border-white': pathname === '/technology',
                  },
                )}
              >
                <span className="font-bold  mr-2">03</span> Technology
              </h4>
            </Link>
          </div>
        </motion.aside>
      </motion.div>
    </div>
  )
}

export default Navbar
