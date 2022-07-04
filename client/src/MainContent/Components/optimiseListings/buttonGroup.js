import {GiSellCard} from 'react-icons/gi'
import {MdSell} from 'react-icons/md'
import {CgTrack} from 'react-icons/cg'
const ButtonGroup = (props) => {



    return (<>



<div class={`inline-flex rounded-lg mx-auto shadow-md left-6 relative items-center text-center mt-7 mb-4`}>
   <a href="javascript:void(0)" onClick = {()=> {
      props.changeOp('top-prod')
   }} class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
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
      `}>
      <span class="pr-2">
         <GiSellCard/>
      </span>
      Analyze Top Products
   </a>
   <a href="javascript:void(0)" onClick = {()=> {
      props.changeOp('marketplace-overview')
   }} class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
      inline-flex
      items-center
      justify-center
      font-semibold
      border-y border-light
      text-center  text-sm
      sm:text-base
      transition-all
      ${props.operation==='marketplace-overview'?"border-blue-700 text-center text-white text-base bg-blue-700":'text-black bg-white'}
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      `}>
      <span class="pr-2">
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
      sm:px-6
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
      `}>
      <span class="pr-2">
         <CgTrack/>
      </span>
      Track Product Performance
   </a>
</div>
    
    </>)
}

export default ButtonGroup