import Hero from "./Hero"
import Features from "./Features"
import Pricing from "./Pricing"
import Contact from './Contact'

const Home = () => {

    return (<>
    <div class = 'block mt-[0px] -mb-4  overflow-hidden'>
        <Hero/>
        <Features/>
        <Pricing/>
        <Contact/>
    </div>
    </>)

}

export default Home