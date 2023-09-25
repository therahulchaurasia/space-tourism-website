import React from 'react'
import Navbar from '../components/Navbar'
import rocket from '../assets/technology/image-launch-vehicle-landscape.jpg'
const Technology = () => {
  return (
    <div className="bg-techMobile md:bg-techTablet xl:bg-techMobile bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-8  text-center md:text-xl">
        <span className="text-gray-500 font-bold pr-2">03</span> Space launch
        101
      </h6>
      <div className="flex flex-col xl:flex-row">
        <div className="mb-8">
          <img src={rocket} alt="" className="w-full h-auto" />
        </div>
        <div className="flex justify-between mx-auto w-2/5 mb-6 sm:w-3/12">
          <button className="bg-white w-10 h-10 rounded-full">1</button>
          <button className="text-white border border-gray-600 w-10 h-10 rounded-full">
            {/* TODO: border-l. looks cool */}2
          </button>
          <button className="text-white  w-10 h-10 rounded-full">3</button>
        </div>
        <div className=" text-center mb-8">
          <h6 className="uppercase font-barlow text-lilac tracking-widest mb-2">
            The Terminology ...
          </h6>
          <h4
            className="uppercase font-bellefair text-white 
        text-2xl mb-4 md:text-4xl"
          >
            Launch Vehicle
          </h4>
          <p className="text-lilac w-11/12 mx-auto text-center sm:w-8/12 md:5/12">
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
