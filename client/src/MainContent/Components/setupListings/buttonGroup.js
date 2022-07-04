import {MdOutlineWork, MdScreenSearchDesktop, MdRestartAlt} from 'react-icons/md'
import {IoCreateSharp} from 'react-icons/io5'
import userContext from '../../../context/userContext'
import {useContext, useState} from 'react'
import Tooltip from 'react-power-tooltip'

const ButtonGroup = (props) => {
   const [showToolTip, setShowToolTip] = useState(false)
   const [showToolTip2, setShowToolTip2] = useState(false)

   const user = useContext(userContext).user
   let current = user.pipeline?user.pipeline.current:''
   current = current === 'preparation'  ?  1: current === 'seo' ? 2: 3


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
      if(current&&current>=2){
         props.changeSeg(3)
      }   }}

      onMouseOver={() => {
         if(!(current&&current>=2)){
            setShowToolTip(true)      }
      } } 
      onMouseLeave={() =>{
         if(!(current&&current>=2)){
            setShowToolTip(false)    
          }
      }
         }


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
      ${
         current&&current>=2?
         'hover:bg-blue-700 hover:text-white hover:border-gray-300'
:'bg-gray-300 cursor-default text-gray-500'
      }
      
      `}>
         <div class = 'relative -right-28 top-6'>
         <Tooltip show={showToolTip} position = 'bottom' fontSize = '16px' padding = '5px 5px'>
  <span class = 'font-semibold text-center relative  font-sans -bottom-0'>Complete Preparation</span>
</Tooltip>
</div>
      <span class="pr-2">
         <MdScreenSearchDesktop/>
      </span>
      Search Engine Optimization
   </a>
   <a href="javascript:void(0)"
   onClick={()=> {
      if(current&&current>=3){
         props.changeSeg(4)
      }
   }}
   onMouseOver={() => {
      if(!(current&&current>=3)){
         setShowToolTip2(true)      }
   } } 
   onMouseLeave={() =>{
      if(!(current&&current>=3)){
         setShowToolTip2(false)    
       }
   }
      }
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

${
         current&&current>=3?
         'hover:bg-blue-700 hover:text-white hover:border-gray-300'
:'bg-gray-300 text-gray-500 cursor-default'
      }      rounded-r-lg
      `}>
         <div class = 'relative -right-28 top-6'>
         <Tooltip show={showToolTip2} position = 'bottom' fontSize = '16px' padding = '5px 5px'>
  <span class = 'font-semibold text-center font-sans '>Complete {current&&current===1?'Preparation':current&&current===2?'SEO':''}</span>
</Tooltip>
</div>
      <span class="pr-2">
         <IoCreateSharp/>
      </span>
      Create Product Listing
   </a>
</div>
    
    </>)
}

export default ButtonGroup