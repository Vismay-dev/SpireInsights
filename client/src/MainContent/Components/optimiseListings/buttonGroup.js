import {GiSellCard} from 'react-icons/gi'
import {MdSell} from 'react-icons/md'
import {CgTrack} from 'react-icons/cg'
const ButtonGroup = (props) => {



    return (<>



<div class={`flex flex-wrap rounded-lg w-fit mx-auto md:shadow-md right-[3px] relative items-center text-center mt-7 mb-4`}>
   <a href="javascript:void(0)" onClick = {()=> {
      props.changeOp('top-prod')
   }} class={`
      py-[10px]
      sm:py-3
      px-[7px]
      md:w-fit
      sm:left-0
      
      sm:w-1/2
      md:right-0 sm:right-1 relative
      w-[70%] left-[15%] md:mt-0 
      sm:px-4
      lg:px-6
      inline-flex
      items-center
      justify-center
      font-semibold
      border  text-sm
      sm:text-base
      text-center  
      
      transition-all
      ${props.operation==='top-prod'?"border-blue-700 text-center text-white text-base bg-blue-700":'text-black bg-white'}
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      rounded-l-lg
      sm:rounded-r-none rounded-r-lg
      `}>
      <span class="pr-2 sm:inline hidden">
         <GiSellCard/>
      </span>
      Analyze Top Products
   </a>
   <a href="javascript:void(0)" onClick = {()=> {
      props.changeOp('marketplace-overview')
   }} class={`
      py-[10px]
      sm:py-3
      px-[7px]
      sm:px-4
      lg:px-6
      md:w-fit
      md:left-0 sm:left-1 relative
      sm:w-1/2 sm:-top-[4px] md:-top-[0px]
      w-[70%] left-[15%] md:mt-0 mt-2
      inline-flex
      items-center
      justify-center
      font-semibold
      md:rounded-none rounded-r-lg
      sm:rounded-l-none rounded-l-lg

      border-y border-light
      text-center  text-sm
      sm:text-base
      transition-all
      ${props.operation==='marketplace-overview'?"border-blue-700 text-center text-white text-base bg-blue-700":'text-black bg-white'}
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      `}>
      <span class="pr-2 sm:inline hidden">
         <MdSell/>
      </span>
      Market Place Analysis
   </a>
   <a href="javascript:void(0)" onClick = {()=> {
      props.changeOp('track-product')
      document.getElementById('keywords').value = ''
      document.getElementById('keywords').textContent = ''
   }} class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-4
      lg:px-6
      md:w-fit
      w-[70%] md:left-0 left-[15%] md:mt-0 mt-2 relative
      inline-flex
      items-center
      justify-center
      font-semibold
      border border-light
      text-center  text-sm
      sm:text-base
      transition-all
      ${props.operation==='track-product'?"border-blue-700 text-center text-white text-base bg-blue-700":'text-black bg-white'}
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      rounded-r-lg
      md:rounded-l-none rounded-l-lg
      `}>
      <span class="pr-2 sm:inline hidden">
         <CgTrack/>
      </span>
      Track Product Performance
   </a>
</div>
    
    </>)
}

export default ButtonGroup