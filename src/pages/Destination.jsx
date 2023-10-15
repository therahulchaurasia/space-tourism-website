import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import OtherLoader from '../components/OtherLoader'

const Destination = () => {
  const options = ['Moon', 'Mars', 'Europa', 'Titan']
  const [showDestination, setShowDestination] = useState([])
  const [planetIndex, setPlanetIndex] = useState(0)
  const [loader, setLoader] = useState(false)

  const containerVariants = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.5 },
    },
  }

  // TODO: Why should I fetch all the data again and again if I am going to change the index
  const fetchData = useCallback(async () => {
    try {
      let res = await fetch('destination.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      let result = await res.json()
      setShowDestination(result.destinations[planetIndex])
    } catch (error) {
      console.log(error)
    }
  }, [planetIndex])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  //! Loader
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      <AnimatePresence>{loader && <OtherLoader />} </AnimatePresence>
      <AnimatePresence>
        {!loader && (
          <motion.div className="bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute transition-all duration-200 ease-in-out overflow-hidden">
            <Navbar />
            <motion.h6
              className="text-white text-center font-barlow uppercase tracking-widest mb-8 md:text-xl xl:text-start xl:ml-40 xl:mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-gray-500 font-bold pr-2">01</span> Pick your
              destination
            </motion.h6>

            <motion.div className="flex flex-col xl:flex-row xl:justify-around ">
              <motion.section
                className="xl:w-3/12"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, delay: 0.5 }}
              >
                <div className="mb-6 relative">
                  <motion.img
                    animate={{ rotate: 360 }}
                    transition={{ repeat: 'Infinity', duration: 150 }}
                    src={showDestination?.images?.webp}
                    alt="Planet"
                    className="w-1/2 mx-auto sm:w-5/12 xl:w-full"
                  />
                </div>
              </motion.section>
              <motion.section
                className="xl:w-5/12 "
                variants={containerVariants}
                initial={{ x: '100vw' }}
                animate="visible"
              >
                <div className="flex justify-between w-1/2 text-lilac font-barlow mx-auto mb-5 sm:w-4/12 xl:w-5/12 xl:mx-0 xl:pl-2 ">
                  {options.map((option, id) => {
                    return (
                      <p
                        className={classNames(
                          'text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-b-2 hover:border-gray-400 cursor-pointer transition duration-200 ease-in-out',
                          {
                            'border-white': planetIndex === id,
                          },
                        )}
                        onClick={() => {
                          setPlanetIndex(id)
                        }}
                      >
                        {option}
                      </p>
                    )
                  })}
                </div>
                <div className="mb-8  text-center xl:text-start">
                  <h4 className="uppercase text-white font-bellefair text-5xl mb-2 sm:text-6xl md:text-7xl xl:text-8xl">
                    {showDestination?.name}
                  </h4>
                  <p className="text-lilac font-barlow w-10/12 mx-auto px-2 mb-8 sm:w-8/12 md:5/12 xl:m-0">
                    {showDestination?.description}
                  </p>
                  <span className="w-10/12 border-b-2 mx-auto "></span>
                </div>

                <div className="flex flex-col items-center text-center border-t w-10/12 mx-auto pt-3 border-slate-700 sm:w-8/12 md:5/12 md:flex-row md:justify-evenly xl:m-0 xl:justify-between">
                  <div className="mb-6 xl:m-0">
                    <h5 className="uppercase text-lilac font-barlow tracking-widest mb-3">
                      Avg. Distance
                    </h5>
                    <h2 className="text-white text-3xl font-bellefair">
                      {showDestination?.distance?.toUpperCase()}
                    </h2>
                  </div>
                  <div className="mb-6 xl:m-0">
                    <h5 className="uppercase text-lilac font-barlow tracking-widest mb-3">
                      Est. Travel Time
                    </h5>
                    <h2 className="text-white text-3xl font-bellefair uppercase">
                      {showDestination?.travel}
                    </h2>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Destination
