import ButtonGroup from "./buttonGroup"
import {FiShoppingCart} from 'react-icons/fi'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {TbReportSearch} from 'react-icons/tb'
import axios from "axios"
import TopProdResult from "./TopProdResult"
import { useState, useEffect } from "react"
import Tooltip from 'react-power-tooltip'

const OptimiseListings = () => {
  const [showToolTip, setShowToolTip] = useState(false)
    const [analysis, setAnalysis] = useState()
    const [keyword, setKeyWord] = useState()
    const [loading, setLoading] = useState(false)
    const [currentPlatform, setCurrentPlatform] = useState('Amazon') 

    const [operation, setOperation] = useState('top-prod')
    useEffect(()=> {
      if(sessionStorage.getItem('redirect')==='toMarket'){
        setOperation('marketplace-overview')
      }
    },[])
    const changeOp = (op) => {
      setAnalysis()
      setOperation(op)
    }

  const subHandle = async ()=> {
    setLoading(true)
    setKeyWord(document.getElementById('keywords').value.toLowerCase())
    if(operation === 'top-prod'){

   await axios.post(process.env.NODE_ENV ==='production'?"https://spire-insights.herokuapp.com/api/user/topProductAnalysis":'http://localhost:4000/api/user/topProductAnalysis',{platform:currentPlatform,sentence:document.getElementById('keywords').value.trim(), token:sessionStorage.getItem('token')}).then(res=> {
        setAnalysis(res.data)
        console.log(res.data)
        setLoading(false)
}).catch(err=> {
      console.log(err.response.message)
      setLoading(false)

    })

  }else if(operation === 'marketplace-overview'){
console.log({platform:currentPlatform,sentence:document.getElementById('keywords').value})
    await axios.post(process.env.NODE_ENV ==='production'?"https://spire-insights.herokuapp.com/api/user/marketPlaceOverview":'http://localhost:4000/api/user/marketPlaceOverview',
    {platform:currentPlatform,sentence:document.getElementById('keywords').value.trim(), token:sessionStorage.getItem('token')}).then(res=> {
      setAnalysis(res.data)
      console.log(res.data)
      setLoading(false)
}).catch(err=> {
    console.log(err)
    setLoading(false)
  })

  }else if(operation === 'track-product'){
   await axios.post(process.env.NODE_ENV ==='production'?"https://spire-insights.herokuapp.com/api/user/trackProductPerformance":'http://localhost:4000/api/user/trackProductPerformance',{platform:currentPlatform,asin:document.getElementById('keywords').value.toUpperCase(), token:sessionStorage.getItem('token')}).then(res=> {
      setAnalysis(res.data)
      console.log(res.data)
      setLoading(false)
}).catch(err=> {
    console.log(err)
    setLoading(false)
  })

  }
  }

    return (
        <>
        <div class = 'relative mx-auto  z-[100]  w-fit'>
            <h1 class = 'sm:text-4xl text-3xl font-bold mt-[40px] mb-4 px-4 bottom-2 relative text-center'>Optimize E-Commerce Listings</h1>
            <hr class = 'relative top-1 w-[150%] mt-1 right-[25%]'/>
            <div class = 'md:px-2.5 sm:px-12 px-6'>
            <ButtonGroup operation = {operation} changeOp = {changeOp}/>
            </div>
            <hr class = 'relative top-1 w-[150%] my-1 right-[25%]'/>
            <div class="flex flex-wrap md:pb-0 pb-1  -mx-4 relative lg:w-[120%] w-[96%] right-[-3.8%] lg:right-[8%] mt-8">
   <div class="md:w-1/3 sm:w-1/2 w-[75%] sm:left-0 left-1.5 mx-auto block md:mt-0 -mt-2  px-4">
      <div class="sm:mb-12 mb-10 block relative ">
         <label for="" class="font-medium text-base text-black block mb-3">
         Enter Product {operation==='track-product'?'ASIN ID':'Keywords'} {operation==='track-product'?
         <svg 
         onMouseOver={() => {
             setShowToolTip(true)      
         }} 
         onMouseLeave={() =>{
             setShowToolTip(false)    
         }}
         xmlns="http://www.w3.org/2000/svg" class="h-[19px] w-[19px] relative left-1 bottom-[1.8px] hover:text-gray-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>:''}

<div class = 'relative right-16'>
       <Tooltip show={showToolTip} position = 'bottom' fontSize = '16px' padding = '5px 5px'>
  <span class = 'font-semibold text-center relative  font-sans'>ASIN is a unique ID given on Amazon product pages.</span>
</Tooltip></div>
         </label>
         <input type="text" id = 'keywords' placeholder={`Ex. ${operation==='track-product'?'B001TJ3HUG':'Wireless Mouse'}`} class="
            w-full
            border-[1.5px] border-form-stroke
            rounded-lg
            py-3
            px-5
            font-medium
            text-body-color
            placeholder-body-color
            outline-none
            focus:border-primary
            active:border-primary
            transition
            disabled:bg-[#F5F7FD] disabled:cursor-default
            "/>
      </div>
   </div>

   <div class="w-[95%] md:left-0 sm:left-[2.9%] left-[4%] md:mt-0 -mt-5 md:w-2/3 px-2   relative">
   <label for="" class="font-semibold text-base text-black block mb-3">
         Select E-Commerce Platform
         </label>
   <a onClick={()=> {
    setCurrentPlatform('Amazon')
   }} class={`
      py-[10px]
      sm:py-3
       rounded-l-md
       shadow-t-md
       shadow-l-md
       shadow-b-md
       ${currentPlatform === 'Amazon' ? 'bg-blue-700 text-white':'text-black bg-white'}
      w-[50%]
      sm:px-20
      inline-flex
      items-center
      justify-center
      font-semibold
      cursor-pointer
      border border-primary
      text-center  text-base
      bg-white
      hover:bg-blue-700 hover:text-white hover:border-primary
      `}>
  <AiFillAmazonCircle class = 'mr-2 text-xl top-[0.5px] font-bold relative'/> Amazon
   </a>
   
   <a
   onClick={()=> {
    setCurrentPlatform('Al Anees')
   }}
   class={`
      py-[11.5px]
      sm:py-3
      w-[50%]
      cursor-pointer
      sm:px-6 px-5
      sm:top-0
      -top-[4.9px] relative
      lg:px-20
      inline-flex
      items-center
      rounded-r-md
      shadow-t-md
      shadow-r-md
      shadow-b-md
      justify-center
      font-semibold
      border border-light
      text-center  text-sm
      sm:text-base
      ${currentPlatform === 'Al Anees' ? 'bg-blue-700 text-white':'text-black bg-white'}
      hover:bg-blue-700 hover:text-white hover:border-primary
      `}>
    <FiShoppingCart class = 'mr-2 text-xl sm:inline hidden top-[0.5px] font-bold relative'/> Al Anees (Qatar)
   </a>
</div>

</div>

<a onClick={()=> {
    subHandle()
}} href="javascript:void(0)" class="
   py-3
   px-6
   lg:px-8
   xl:px-10
   lg:w-full
   sm:w-[92%] w-[88%]
  lg:left-0
  sm:left-[4.2%] left-[6.3%]
  md:bottom-2 -bottom-8
   md:-mt-7 sm:-mt-2 -mt-3
   shadow-lg
   relative
   inline-flex
   items-center
    md:mb-0 mb-4
   justify-center
   text-center text-white text-base
   bg-blue-700
   hover:bg-opacity-90
   font-semibold
    mx-auto
   rounded-md
   ">
<TbReportSearch class = 'mr-2 text-xl font-bold relative'/> Show Insights
</a>
</div>
<hr class = 'relative md:mt-6 mt-10 w-[90%] mx-auto'/>
<TopProdResult loading={loading} operation = {operation} analysis = {analysis} keyword = {keyword}/>

        
        </>
    )
}

export default OptimiseListings