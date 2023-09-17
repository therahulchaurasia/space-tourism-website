import React from 'react'
import Navbar from '../components/Navbar'
import commander from '../assets/crew/image-douglas-hurley.webp'
const Crew = () => {
  return (
    <div className="bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop bg-no-repeat bg-cover min-h-screen w-screen min-w-screen text-center absolute">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-8">
        <span className="text-gray-500 font-bold pr-2">02</span> Meet your crew
      </h6>
      <div className="mb-8">
        <img src={commander} alt="" className="w-1/2 mx-auto" />
        <hr className="w-10/12 mx-auto opacity-30" />
      </div>
      <div className="flex justify-between w-1/4 mx-auto mb-8">
        <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
        <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
        <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
        <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
      </div>
      <div className="mb-8">
        <h5 className="uppercase font-bellefair text-zinc-400 mb-2">
          Commander
        </h5>
        <h3 className="uppercase text-white text-2xl font-bellefair mb-4">
          Douglas Hurley
        </h3>
        <p className="text-lilac w-11/12 mx-auto">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </div>
  )
}

export default Crew
