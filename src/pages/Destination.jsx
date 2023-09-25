import React from 'react'
import Navbar from '../components/Navbar'
import moon from '../assets/destination/image-moon.webp'
const Destination = () => {
  return (
    <div className="bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute">
      <Navbar />
      <h6 className="text-white text-center font-barlow uppercase tracking-widest mb-8 md:text-xl xl:text-start xl:ml-40 xl:mt-8">
        <span className="text-gray-500 font-bold pr-2">01</span> Pick your
        destination
      </h6>
      <div className="flex flex-col xl:flex-row xl:justify-around">
        <section className="xl:w-3/12">
          <div className="mb-6">
            <img
              src={moon}
              alt=""
              className="w-1/2 mx-auto sm:w-5/12 xl:w-full"
            />
          </div>
        </section>
        <section className="xl:w-5/12 ">
          <div className="flex justify-between w-1/2 text-lilac font-barlow mx-auto mb-5 sm:w-4/12 xl:w-5/12 xl:mx-0 xl:pl-2">
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
          <div className="mb-8  text-center xl:text-start">
            <h4 className="uppercase text-white font-bellefair text-5xl mb-2 sm:text-6xl md:text-7xl xl:text-8xl">
              Moon
            </h4>
            <p className="text-lilac font-barlow w-10/12 mx-auto px-2 mb-8 sm:w-8/12 md:5/12 xl:m-0">
              See our planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <span className="w-10/12 border-b-2 mx-auto "></span>
          </div>

          <div className="flex flex-col items-center text-center border-t w-10/12 mx-auto pt-3 border-slate-700 sm:w-8/12 md:5/12 md:flex-row md:justify-evenly xl:m-0 xl:justify-between">
            <div className="mb-6 xl:m-0">
              <h5 className="uppercase text-lilac font-barlow tracking-widest mb-3">
                Avg. Distance
              </h5>
              <h2 className="text-white text-3xl font-bellefair">384,400 KM</h2>
            </div>
            <div className="mb-6 xl:m-0">
              <h5 className="uppercase text-lilac font-barlow tracking-widest mb-3">
                Est. Travel Time
              </h5>
              <h2 className="text-white text-3xl font-bellefair uppercase">
                3 days
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Destination
