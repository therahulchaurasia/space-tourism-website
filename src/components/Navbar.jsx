import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
const Navbar = () => {
  return (
    <div>
      <navbar className="flex justify-between items-center mx-6 my-6">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <img
          src={hamburger}
          alt="hamburger"
          className="w-6 h-6"
          // onClick={() => {
          //   console.log('HEllo')
          // }}
        />
      </navbar>
    </div>
  )
}

export default Navbar
