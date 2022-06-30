import {MdOutlineWork, MdScreenSearchDesktop, MdRestartAlt} from 'react-icons/md'
import {IoCreateSharp} from 'react-icons/io5'
const ButtonGroup = (props) => {

    return (<>

<div class={`inline-flex rounded-lg mx-auto ${props.segment === 4?'left-[75px]':'left-[212.5px]'} shadow-md  relative items-center text-center mt-7 mb-4`}>
   <a href="javascript:void(0)"
    onClick={()=> {
      props.changeSeg(1)
   }}
   class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
      inline-flex
      items-center
      justify-center
      font-semibold
      border 
      ${props.segment === 1 ? 'text-white text-base bg-blue-700 border-blue-700':'text-black text-base bg-white'}
      text-center  text-base
      bg-white
      transition-all
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      rounded-l-lg
      `}>
      <span class="pr-2">
         <MdRestartAlt/>
      </span>
      Introduction
   </a>
   <a href="javascript:void(0)"
    onClick={()=> {
      props.changeSeg(2)
   }}
   class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
      inline-flex
      items-center
      justify-center
      font-semibold
      border-y border-light
      ${props.segment === 2 ? 'text-white text-base bg-blue-700 border-blue-700':'text-black text-base bg-white'}
      text-center  text-sm
      sm:text-base
      transition-all
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      `}>
      <span class="pr-2">
         <MdOutlineWork/>
      </span>
      Preparation
   </a>
   <a href="javascript:void(0)"
    onClick={()=> {
      props.changeSeg(3)
   }}
   class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
      inline-flex
      items-center
      justify-center
      ${props.segment === 3 ? 'text-white text-base bg-blue-700 border-blue-700':'text-black text-base bg-white'}

      font-semibold
      border border-light
      text-center text-sm
      sm:text-base
      transition-all
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      
      `}>
      <span class="pr-2">
         <MdScreenSearchDesktop/>
      </span>
      Search Engine Optimization
   </a>
   <a href="javascript:void(0)"
   onClick={()=> {
      props.changeSeg(4)
   }}
    class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
      inline-flex
      items-center
      justify-center
      ${props.segment === 4 ? 'text-white text-base bg-blue-700 border-blue-700':'text-black text-base bg-white'}

      font-semibold
      border border-light
      text-center  text-sm
      sm:text-base
      transition-all
      hover:bg-blue-700 hover:text-white hover:border-gray-300
      rounded-r-lg
      `}>
      <span class="pr-2">
         <IoCreateSharp/>
      </span>
      Create Product Listing
   </a>
</div>
    
    </>)
}

export default ButtonGroup