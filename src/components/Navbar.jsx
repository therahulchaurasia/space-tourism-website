import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
const Navbar = () => {
  return (
    <div>
      <navbar className="flex justify-between items-center mx-6 my-6">
        <img src={logo} alt="Logo" className="h-auto max-w-full" />
        <img
          src={hamburger}
          alt="hamburger"
          className="h-auto max-w-full"
          // onClick={() => {
          //   console.log('HEllo')
          // }}
        />
      </navbar>
      <aside className="bg-blue-500 w-2/3 h-screen fixed top-0 right-0 bg-opacity-10 backdrop-blur-2xl">
        <div className="my-6 mx-6 flex items-center justify-end">
          <img src={close} alt="Close" className="h-auto max-w-full" />
        </div>
        <div className="uppercase text-white mt-8 flex flex-col gap-y-4 font-barlow px-10">
          <h4>
            <span className="font-bold mr-2">00</span> Home
          </h4>
          <h4>
            <span className="font-bold  mr-2">01</span> Destination
          </h4>
          <h4>
            <span className="font-bold  mr-2">02</span> Crew
          </h4>
          <h4>
            <span className="font-bold  mr-2">03</span> Technology
          </h4>
        </div>
      </aside>
    </div>
  )
}

export default Navbar
