import React from 'react'
import Navbar from '../components/Navbar'
import moon from '../assets/destination/image-moon.webp'
const Destination = () => {
  return (
    <div className="bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-cover w-screen min-w-screen min-h-screen absolute">
      <Navbar />
      <h6 className="text-white  text-center  font-barlow uppercase tracking-widest mb-8">
        <span className="text-gray-500 font-bold pr-2">01</span> Pick your
        destination
      </h6>
      <div className="mb-6">
        <img src={moon} alt="" className="w-1/2 mx-auto" />
      </div>
      <div className="flex justify-between w-1/2 text-lilac font-barlow mx-auto mb-5">
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
      <div className="mb-8  text-center">
        <h4 className="uppercase text-white font-bellefair text-5xl mb-2">
          Moon
        </h4>
        <p className="text-lilac font-barlow w-10/12 mx-auto px-2 mb-8">
          See our planet as you've never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you're
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <span className="w-10/12 border-b-2 mx-auto "></span>
      </div>
      <div className="mb-8  text-center border-t w-10/12 mx-auto pt-3  border-slate-700">
        <h5 className="uppercase text-lilac font-barlow tracking-widest mb-3">
          Avg. Distance
        </h5>
        <h2 className="text-white text-3xl font-bellefair">384,400 KM</h2>
      </div>
      <div className="mb-8  text-center ">
        <h5 className="uppercase text-lilac font-barlow tracking-widest mb-3">
          Est. Travel Time
        </h5>
        <h2 className="text-white text-3xl font-bellefair uppercase">3 days</h2>
      </div>
    </div>
  )
}

export default Destination
