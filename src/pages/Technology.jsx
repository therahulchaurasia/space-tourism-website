import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import rocketld from '../assets/technology/image-launch-vehicle-landscape.jpg'
import rocketpt from '../assets/technology/image-launch-vehicle-portrait.jpg'
import classNames from 'classnames'
const Technology = () => {
  const [showTech, setShowTech] = useState([])
  const [techIndex, setTechIndex] = useState(0)
  const fetchData = async () => {
    try {
      let res = await fetch('technology.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      let result = await res.json()
      setShowTech(result.technology[techIndex])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [techIndex])
  console.log(showTech)

  return (
    <div className="bg-techMobile md:bg-techTablet xl:bg-techDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute transition-all duration-200 ease-in-out">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-8  text-center md:text-xl  xl:mt-8 xl:text-start xl:mb-0 xl:mx-auto xl:w-11/12 xl:pl-10">
        <span className="text-gray-500 font-bold pr-2">03</span> Space launch
        101
      </h6>
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <div className="mb-8">
          <img
            src={showTech?.images?.landscape}
            alt=""
            className="w-full h-auto xl:hidden"
          />
        </div>
        <div className="mb-8 xl:order-3 xl:w-4/12">
          <img
            src={showTech?.images?.portrait}
            alt=""
            className="hidden w-full h-auto xl:block"
          />
        </div>
        <div className="flex justify-between mx-auto w-2/5 mb-6 sm:w-3/12 xl:flex-col xl:w-1/12 xl:m-0 xl:items-end gap-y-8 font-bellefair xl:text-2xl">
          <button
            className={classNames(
              'text-white w-10 h-10 rounded-full xl:w-14 xl:h-14 border-l border-t hover:border hover:border-gray-400 transition duration-300 ease-in-out',
              {
                'bg-white text-black border-b': techIndex === 0,
              },
            )}
            onClick={() => {
              setTechIndex(0)
            }}
          >
            1
          </button>
          <button
            className={classNames(
              'text-white w-10 h-10 rounded-full xl:w-14 xl:h-14 border-b border-r hover:border hover:border-gray-400 transition duration-300 ease-in-out',
              {
                'bg-white text-black border-b': techIndex === 1,
              },
            )}
            onClick={() => {
              setTechIndex(1)
            }}
          >
            {/* TODO: border-l. looks cool */}2
          </button>
          <button
            className={classNames(
              'text-white w-10 h-10 rounded-full xl:w-14 xl:h-14 border-l border-t hover:border hover:border-gray-400 transition duration-300 ease-in-out',
              {
                'bg-white text-black border-b': techIndex === 2,
              },
            )}
            onClick={() => {
              setTechIndex(2)
            }}
          >
            3
          </button>
        </div>
        <div className=" text-center mb-8 xl:text-start xl:w-6/12">
          <h6 className="uppercase font-barlow text-lilac tracking-widest mb-2">
            The Terminology ...
          </h6>
          <h4
            className="uppercase font-bellefair text-white 
        text-2xl mb-4 md:text-4xl xl:text-5xl"
          >
            {showTech?.name}
          </h4>
          <p className="text-lilac w-11/12 mx-auto sm:w-8/12 md:5/12 xl:m-0">
            {showTech?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Technology
