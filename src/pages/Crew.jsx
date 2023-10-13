import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import OtherLoader from '../components/OtherLoader'
const Crew = () => {
  const [showCrew, setShowCrew] = useState([])
  const [crewIndex, setCrewIndex] = useState(0)
  const button = [1, 2, 3, 4]
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

  const fetchData = async () => {
    try {
      let res = await fetch('crew.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      let result = await res.json()
      setShowCrew(result.crew[crewIndex])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [crewIndex])

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
          <motion.div className="bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute transition-all duration-200 ease-in-out overflow-hidden z-10">
            <Navbar />
            <motion.h6
              className="text-white font-barlow uppercase tracking-widest mb-8 text-center md:text-xl xl:text-start xl:ml-56 xl:mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-gray-500 font-bold pr-2">02</span> Meet your
              crew
            </motion.h6>
            <div className="flex flex-col md:flex-col-reverse xl:flex-row-reverse">
              <motion.section
                className="xl:w-5/12"
                variants={containerVariants}
                initial={{ x: '100vw' }}
                animate="visible"
              >
                <div className="mb-8 border-b border-slate-600 w-10/12 mx-auto md:border-0 md:mb-0">
                  <img
                    src={showCrew?.images?.webp}
                    alt=""
                    className="w-1/2 mx-auto"
                  />
                </div>
              </motion.section>
              <motion.section
                className="flex flex-col md:flex-col-reverse xl:w-5/12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-between w-1/4 mx-auto mb-8 sm:w-2/12	xl:m-0">
                  {button.map((count, idx) => {
                    return (
                      <button
                        className={classNames(
                          'w-3 h-3 rounded-full hover:bg-zinc-400',
                          {
                            'bg-white': crewIndex === idx,
                            'bg-zinc-600': crewIndex !== idx,
                          }
                        )}
                        onClick={() => {
                          setCrewIndex(idx)
                        }}
                      ></button>
                    )
                  })}
                </div>

                <div className="mb-8 text-center xl:text-start">
                  <h5 className="uppercase font-bellefair text-zinc-400 mb-2 md:text-2xl xl:text-3xl">
                    {showCrew?.role}
                  </h5>
                  <h3 className="uppercase text-white text-2xl font-bellefair mb-4 md:text-4xl xl:text-5xl">
                    {showCrew?.name}
                  </h3>
                  <p className="text-lilac w-11/12 mx-auto sm:w-8/12 md:5/12 xl:m-0">
                    {showCrew?.bio}
                  </p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Crew
