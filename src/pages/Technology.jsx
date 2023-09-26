import React from 'react'
import Navbar from '../components/Navbar'
import rocketld from '../assets/technology/image-launch-vehicle-landscape.jpg'
import rocketpt from '../assets/technology/image-launch-vehicle-portrait.jpg'
const Technology = () => {
  return (
    <div className="bg-techMobile md:bg-techTablet xl:bg-techMobile bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-8  text-center md:text-xl  xl:mt-8 xl:text-start">
        <span className="text-gray-500 font-bold pr-2">03</span> Space launch
        101
      </h6>
      <div className="flex flex-col xl:flex-row xl:justify-evenly">
        <div className="mb-8">
          <img src={rocketld} alt="" className="w-full h-auto xl:hidden" />
        </div>
        <div className="mb-8 xl:order-3 xl:w-3/12">
          <img
            src={rocketpt}
            alt=""
            className="hidden w-full h-auto xl:block"
          />
        </div>
        <div className="flex justify-between mx-auto w-2/5 mb-6 sm:w-3/12 xl:flex-col xl:w-1/12">
          <button className="bg-white w-10 h-10 rounded-full xl:w-14 xl:h-14">
            1
          </button>
          <button className="text-white border border-gray-600 w-10 h-10 rounded-full xl:w-14 xl:h-14">
            {/* TODO: border-l. looks cool */}2
          </button>
          <button className="text-white  w-10 h-10 rounded-full xl:w-14 xl:h-14">
            3
          </button>
        </div>
        <div className=" text-center mb-8 xl:text-start xl:w-5/12">
          <h6 className="uppercase font-barlow text-lilac tracking-widest mb-2">
            The Terminology ...
          </h6>
          <h4
            className="uppercase font-bellefair text-white 
        text-2xl mb-4 md:text-4xl"
          >
            Launch Vehicle
          </h4>
          <p className="text-lilac w-11/12 mx-auto sm:w-8/12 md:5/12 xl:m-0">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch
          </p>
        </div>
      </div>
    </div>
  )
}

export default Technology
