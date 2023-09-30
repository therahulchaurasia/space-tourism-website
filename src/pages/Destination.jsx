import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import moon from '../assets/destination/image-moon.webp'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import Loader from '../components/Loader'

const Destination = () => {
  const [showDestination, setShowDestination] = useState([])
  const [planetIndex, setPlanetIndex] = useState(0)
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])
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
  }, [planetIndex])

  return loader ? (
    <Loader />
  ) : (
    <div className="bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute transition-all duration-200 ease-in-out">
      <Navbar />
      <h6 className="text-white text-center font-barlow uppercase tracking-widest mb-8 md:text-xl xl:text-start xl:ml-40 xl:mt-8">
        <span className="text-gray-500 font-bold pr-2">01</span> Pick your
        destination
      </h6>

      <div className="flex flex-col xl:flex-row xl:justify-around">
        <section className="xl:w-3/12">
          <div className="mb-6 relative">
            <motion.img
              //TODO: As soon as I setup the animation it starts overlapping everything
              animate={{ rotate: 360 }}
              transition={{ repeat: 'Infinity', duration: 150 }}
              src={showDestination?.images?.webp}
              alt="Planet"
              className="w-1/2 mx-auto sm:w-5/12 xl:w-full"
            />
          </div>
        </section>
        <section className="xl:w-5/12 ">
          <div className="flex justify-between w-1/2 text-lilac font-barlow mx-auto mb-5 sm:w-4/12 xl:w-5/12 xl:mx-0 xl:pl-2 ">
            <p
              className={classNames(
                'text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-b-2 hover:border-gray-400 cursor-pointer transition duration-200 ease-in-out',
                {
                  'border-white': planetIndex === 0,
                },
              )}
              onClick={() => {
                setPlanetIndex(0)
              }}
            >
              Moon
            </p>
            <p
              className={classNames(
                'text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-b-2 hover:border-gray-400 cursor-pointer transition duration-200 ease-in-out',
                {
                  'border-white': planetIndex === 1,
                },
              )}
              onClick={() => {
                setPlanetIndex(1)
              }}
            >
              Mars
            </p>
            <p
              className={classNames(
                'text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-b-2 hover:border-gray-400 cursor-pointer transition duration-200 ease-in-out',
                {
                  'border-white': planetIndex === 2,
                },
              )}
              onClick={() => {
                setPlanetIndex(2)
              }}
            >
              Europa
            </p>
            <p
              className={classNames(
                'text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-b-2 hover:border-gray-400 cursor-pointer transition duration-200 ease-in-out',
                {
                  'border-white': planetIndex === 3,
                },
              )}
              onClick={() => {
                setPlanetIndex(3)
              }}
            >
              Titan
            </p>
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
        </section>
      </div>
    </div>
  )
}

export default Destination
