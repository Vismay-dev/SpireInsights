import { useState } from "react"
import ButtonGroup from "./buttonGroup"
import ContentSetup from "./Content"

const SetupListings = () => {

    const [currentSegment, setCurrentSegment] = useState(1)
    const changeSeg = (segNum) => {
        setCurrentSegment(segNum)
    }

    const titles = ['Introduction','Preparation', 'Search Engine Optimization (SEO)','Create Product Listing']

   
    return (
        <>
        <div class = 'relative mx-auto   w-fit'>
            <h1 class = 'md:text-4xl text-3xl px-5 font-bold mt-[40px] mb-4 bottom-2 relative text-center'>Set-Up E-Commerce Listings</h1>
            <hr class = 'relative top-1 w-[120%] mt-1 right-[10%]'/>
            <div class = 'block mx-auto sm:py-0 py-4 relative'>
            <ButtonGroup segment = {currentSegment} changeSeg = {changeSeg}/>
            </div>
            <hr class = 'relative top-1 w-[150%] my-1 right-[25%]'/>
            <h1 class = 'text-3xl font-bold mt-[40px] mb-4 px-4 bottom-3 relative text-center'>{titles[currentSegment-1]}</h1>
            <hr class = 'relative w-[150%] my-1 right-[25%]'/>

<div class = 'w-screen px-8'>
            <ContentSetup segment = {currentSegment} changeSeg = {changeSeg}/>
            </div>
        </div>
        
        </>
    )
}

export default SetupListings