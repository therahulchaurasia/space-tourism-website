import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-heroMobile md:bg-heroTablet xl:bg-heroDesktop bg-no-repeat bg-cover w-screen min-w-screen min-h-screen absolute">
      <Navbar />
      <section className="text-center my-10">
        <h5 className="uppercase font-barlow tracking-wide text-lilac">
          So, You Want To Travel To Space
        </h5>
        <h1 className="uppercase font-bellefair text-white text-7xl my-4">
          Space
        </h1>
        <h6 className="w-9/12 font-barlow text-lilac mx-auto">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </h6>
      </section>
      <div className="text-center">
        <button className="bg-white w-32 h-32 rounded-full font-bellefair tracking-wide uppercase text-l">
          Explore
        </button>
      </div>
    </div>
  )
}

export default Home
