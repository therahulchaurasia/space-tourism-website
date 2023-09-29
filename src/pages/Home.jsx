import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'

const Home = () => {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])
  return loader ? (
    <Loader />
  ) : (
    <div className="bg-heroMobile md:bg-heroTablet xl:bg-heroDesktop bg-no-repeat bg-cover w-full max-w-screen min-h-screen absolute transition duration-200 ease-in-out">
      <Navbar />
      <div className="flex flex-col xl:flex-row items-center justify-around xl:mt-20">
        <section className="text-center my-10 xl:w-2/5 xl:text-start">
          <h5 className="uppercase font-barlow tracking-wide text-lilac md:text-xl xl:pl-2 xl:text-3xl">
            So, You Want To Travel To
          </h5>
          <h1 className="uppercase font-bellefair text-white text-7xl my-4 md:text-[150px]">
            Space
          </h1>
          <h6 className="w-9/12 font-barlow text-lilac mx-auto sm:w-7/12 xl:m-0 xl:pl-2 xl:text-xl xl:w-8/12">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </h6>
        </section>
        <div className="text-center xl:w-2/5">
          <button className="bg-white w-32 h-32 rounded-full font-bellefair tracking-wide uppercase text-l sm:w-40 sm:h-40 md:w-52 md:h-52 sm:text-2xl md:text-3xl xl:w-60 xl:h-60 hover:shadow-ring md:hover:shadow-ringmd xl:hover:shadow-ringxl transistion-all duration-300 ease-in-out">
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
