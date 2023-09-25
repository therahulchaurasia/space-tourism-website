import React from 'react'
import Navbar from '../components/Navbar'
import commander from '../assets/crew/image-douglas-hurley.webp'
const Crew = () => {
  return (
    <div className="bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-8 text-center md:text-xl xl:text-start xl:ml-56 xl:mt-8">
        <span className="text-gray-500 font-bold pr-2">02</span> Meet your crew
      </h6>
      <div className="flex flex-col md:flex-col-reverse xl:flex-row-reverse">
        <section className="xl:w-5/12">
          <div className="mb-8 border-b border-slate-600 w-10/12 mx-auto md:border-0 md:mb-0">
            <img src={commander} alt="" className="w-1/2 mx-auto" />
            {/* <hr className="w-10/12 mx-auto opacity-30" /> */}
          </div>
        </section>
        <section className="flex flex-col md:flex-col-reverse xl:w-5/12">
          <div className="flex justify-between w-1/4 mx-auto mb-8 sm:w-2/12	xl:m-0">
            <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-600"></button>
          </div>

          <div className="mb-8 text-center xl:text-start">
            <h5 className="uppercase font-bellefair text-zinc-400 mb-2 md:text-2xl xl:text-3xl">
              Commander
            </h5>
            <h3 className="uppercase text-white text-2xl font-bellefair mb-4 md:text-4xl xl:text-5xl">
              Douglas Hurley
            </h3>
            <p className="text-lilac w-11/12 mx-auto sm:w-8/12 md:5/12 xl:m-0">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Crew
