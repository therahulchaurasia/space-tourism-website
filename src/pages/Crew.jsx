import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import commander from '../assets/crew/image-douglas-hurley.webp'
const Crew = () => {
  const [showCrew, setShowCrew] = useState([])
  const [crewIndex, setCrewIndex] = useState(0)
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
  console.log(showCrew)
  return (
    <div className="bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute">
      <Navbar />
      <h6 className="text-white font-barlow uppercase tracking-widest mb-8 text-center md:text-xl xl:text-start xl:ml-56 xl:mt-8">
        <span className="text-gray-500 font-bold pr-2">02</span> Meet your crew
      </h6>
      <div className="flex flex-col md:flex-col-reverse xl:flex-row-reverse">
        <section className="xl:w-5/12">
          <div className="mb-8 border-b border-slate-600 w-10/12 mx-auto md:border-0 md:mb-0">
            <img src={showCrew?.images.webp} alt="" className="w-1/2 mx-auto" />
            {/* <hr className="w-10/12 mx-auto opacity-30" /> */}
          </div>
        </section>
        <section className="flex flex-col md:flex-col-reverse xl:w-5/12">
          <div className="flex justify-between w-1/4 mx-auto mb-8 sm:w-2/12	xl:m-0">
            <button
              className="w-3 h-3 rounded-full bg-zinc-600"
              onClick={() => {
                setCrewIndex(0)
              }}
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-zinc-600"
              onClick={() => {
                setCrewIndex(1)
              }}
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-zinc-600"
              onClick={() => {
                setCrewIndex(2)
              }}
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-zinc-600"
              onClick={() => {
                setCrewIndex(3)
              }}
            ></button>
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
        </section>
      </div>
    </div>
  )
}

export default Crew
