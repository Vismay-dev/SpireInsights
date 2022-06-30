import ButtonGroup from "./buttonGroup"
import {FiShoppingCart} from 'react-icons/fi'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {TbReportSearch} from 'react-icons/tb'
import axios from "axios"
import TopProdResult from "./TopProdResult"
import { useState } from "react"

const OptimiseListings = () => {
    const [analysis, setAnalysis] = useState()
    const [keyword, setKeyWord] = useState()
    const [loading, setLoading] = useState(false)
    const [currentPlatform, setCurrentPlatform] = useState('Amazon') 
  const subHandle = ()=> {
    setLoading(true)
    setKeyWord(document.getElementById('keywords').value.toLowerCase())
    axios.post(process.env.NODE_ENV ==='production'?"https://spire-insights.herokuapp.com/api/user/sendUserQuery":'http://localhost:4000/api/user/topProductAnalysis',{platform:currentPlatform,sentence:document.getElementById('keywords').value}).then(res=> {
        setAnalysis(res.data)
        console.log(res.data)
        setLoading(false)
}).catch(err=> {
      console.log(err.response.message)
    })
  }

    return (
        <>
        <div class = 'relative mx-auto  w-fit'>
            <h1 class = 'text-4xl font-bold mt-[40px] mb-4 bottom-2 relative text-center'>Optimize E-Commerce Listings</h1>
            <hr class = 'relative top-1 w-[150%] mt-1 right-[25%]'/>
            <ButtonGroup/>
            <hr class = 'relative top-1 w-[150%] my-1 right-[25%]'/>
            <div class="flex flex-wrap -mx-4 relative w-[130%] right-[14%] mt-8">
   <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Enter Product Keywords
         </label>
         <input type="text" id = 'keywords' placeholder="Ex. Wireless Mouse" class="
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

   <div class="w-full md:w-1/2 lg:w-2/3 px-2   relative">
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
      py-[10px]
      sm:py-3
      w-[50%]
      cursor-pointer
      
      sm:px-20
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
    <FiShoppingCart class = 'mr-2 text-xl top-[0.5px] font-bold relative'/> Al Anees (Qatar)
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
   w-full
  bottom-2
   -mt-7
   shadow-lg
   relative
   inline-flex
   items-center
   
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
<hr class = 'relative mt-6 w-[90%] mx-auto'/>
<TopProdResult loading={loading} analysis = {analysis} keyword = {keyword}/>

        
        </>
    )
}

export default OptimiseListings