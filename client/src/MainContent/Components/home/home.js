import Hero from "./Hero"
import Features from "./Features"
import Pricing from "./Pricing"
import Contact from './Contact'
import About from './About'

const Home = () => {

    return (<>
    <div class = 'block mt-[0px] -mb-4  overflow-hidden'>
        <Hero/>
        <Features/>
        <About/>
        <Pricing/>
        <Contact/>
    </div>
    </>)

}

export default Home