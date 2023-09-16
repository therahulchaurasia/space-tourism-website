import React from 'react'
import Navbar from '../components/Navbar'
import moon from '../assets/destination/image-moon.webp'
const Destination = () => {
  return (
    <div className="bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-cover w-screen h-screen absolute text-center">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-6">
        <span className="text-gray-500 font-bold pr-2">01</span> Pick your
        destination
      </h6>
      <div className="">
        <img src={moon} alt="" className="w-1/2 mx-auto" />
      </div>
      <div className="flex justify-between w-1/2 text-lilac font-barlow mx-auto">
        <p className="hover:text-white text-sm uppercase tracking-widest">
          Moon
        </p>
        <p className="hover:text-white text-sm uppercase tracking-widest">
          Mars
        </p>
        <p className="hover:text-white text-sm uppercase tracking-widest">
          Europa
        </p>
        <p className="hover:text-white text-sm uppercase tracking-widest">
          Titan
        </p>
      </div>
    </div>
  )
}

export default Destination
