import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
const Home = () => {
  return (
    <div className="">
      <div className="bg-heroMobile md:bg-heroTablet xl:bg-heroDesktop bg-no-repeat bg-cover w-screen h-screen absolute">
        <navbar className="flex justify-between">
          <img src={logo} alt="Logo" className="max-w-full h-auto" />
          <img src={hamburger} alt="hamburger" className="max-w-full h-auto" />
        </navbar>
        <navbar className="flex justify-between">
          <div
            style={{ backgroundImage: `${logo}` }}
            alt="Logo"
            className="max-w-full h-auto"
          ></div>
          <div
            src={hamburger}
            alt="hamburger"
            className="max-w-full h-auto"
          ></div>
        </navbar>
        <section>
          <h5>So, You Want To Travel To Space</h5>
          <h1>Space</h1>
          <h6>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </h6>
        </section>
        <div>
          <button>Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Home
