import {useState, useRef, useEffect, Fragment} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import logo from '../logo.png'

import axios from 'axios'
import { ChevronDownIcon } from '@heroicons/react/solid'

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  UserGroupIcon
} from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'


import AOS from 'aos';
import "aos/dist/aos.css";

import LogModal from '../Modals/LogModal'
import RegModal from '../Modals/RegModal'
import ExitModal from '../Modals/ExitModal'

const NavBar = () => {

  const history = useNavigate()
  const location = useLocation()

  const [logModal, setLogModal] = useState()
  const [regModal, setRegModal] = useState()
  const [exitModalShow, setExitModalShow] = useState(false)

  const logOutHandle = () => {
    setExitModalShow(true)
  }

    return ( 
      <>
      {
        logModal?
        <LogModal close = {()=> {
          setLogModal(false)
        }}/>
        :''
      }
       {
        regModal?
        <RegModal close = {()=> {
          setRegModal(false)
        }}/>
        :''
      }
              {
                exitModalShow?
                <ExitModal close = {()=> {
                  setExitModalShow(false)
                }}/>
                 :''
              }
<nav class="bg-white border-gray-200 px-2 z-[1] block relative sm:px-4 py-3.5 shadow-md rounded ">
<div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src={logo} class="mr-1 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center text-xl font-semibold whitespace-nowrap ">Spire Insights</span>
  </a>
  <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu" aria-expanded="false">
    <span class="sr-only">Open main menu</span>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
  <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
   
  {sessionStorage.getItem('token')===null?

<ul class="flex flex-col mt-6 relative md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
                  
                <div class = 'relative mx-auto w-fit bottom-[5px]'>

                <a  href="#" onClick = {()=> {
                     history.push('/home')

          }} 
          className={`uppercase items-center justify-center ${location.pathname==='/home'?'text-blue-700':'text-gray-700'} px-3 top-[5px] active:shadow-sm hover:font-semibold relative mr-4 py-[9px]  pb-2.5 border border-transparent rounded-md text-md tracking-wide font-semibold hover:text-blue-700 text-gray-700 bg-gradient-to-r  `}>
          Home
         </a>

         <a  href="#" onClick = {()=> {
          history.push('/team')
          }} 
          className={`uppercase items-center justify-center ${location.pathname==='/team'?'text-blue-700':'text-gray-700'} px-3 top-[5px] active:shadow-sm hover:font-semibold relative mr-4 py-[9px]  pb-2.5 border border-transparent rounded-md text-md tracking-wide font-semibold hover:text-blue-700  text-gray-700 bg-gradient-to-r  `}>
          Team
         </a>

         <a  href="#" onClick = {()=> {
          setLogModal(true)
          }} 
          className="uppercase items-center justify-center top-[5px] hover:font-semibold relative mr-4  p-2 border border-transparent rounded-md hover:shadow-lg text-md tracking-wide font-semibold hover:text-white text-gray-700 bg-gradient-to-r  hover:from-indigo-400 hover:to-indigo-600 active:bg-blue-500">
          Log in
         </a>

         <a 
         onClick = {() => { 
          setRegModal(true)
          }}
           href="#"
           className="uppercase items-center justify-center  top-[5px] hover:font-semibold relative p-2 border border-transparent rounded-md hover:shadow-lg text-md tracking-wide font-semibold hover:text-white text-gray-700 bg-gradient-to-r  hover:from-indigo-400 hover:to-indigo-600 active:bg-blue-500"
         >
           Sign up
         </a>
         </div>
      
    </ul> :
    <ul class="flex flex-col mt-6 top-[4px]  relative md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a class={`block py-2 cursor-pointer pr-4 pl-3  bg-blue-700 rounded md:bg-transparent ${location.pathname === '/profile'?'text-blue-700':'text-gray-700'} md:p-0 text-sm uppercase `} aria-current="page" onClick={()=> {
          history('/profile')
        }}>Profile</a>
      </li>
      <li>
        <a class={`block py-2 pr-4 cursor-pointer  pl-3 ${location.pathname === '/setupListings'?'text-blue-700':'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0`} onClick={()=> {
          history('/setupListings')
        }}>E-COMMERCE SET-UP</a>
      </li>
      <li>
        <a  class="block py-2 pr-4 pl-3 cursor-pointer  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0 " onClick={()=> {
          history('/profile')
        }}>MANAGE LISTING</a>
      </li>
      <li>
        <a class={`block py-2 pr-4 pl-3 cursor-pointer  ${location.pathname === '/optimiseListings'?'text-blue-700':'text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0`} onClick={()=> {
          history('/optimiseListings')
        }}>OPTIMIZE LISTING</a>
      </li>
      <li>
        <a class={`block  cursor-pointer  -mt-2 -ml-4  border-b border-gray-100  md:hover:bg-transparent md:border-0 hover:text-white text-sm uppercase p-2 border border-transparent rounded-md hover:shadow-lg tracking-wide font-semibold  text-gray-700 bg-gradient-to-r  hover:from-indigo-400 hover:to-indigo-600 active:bg-blue-500`} onClick={()=> {
        logOutHandle()
        }}>LOG OUT</a>
      </li>
      
    </ul>}
  </div>
</div>
</nav>
</>
    )
}

export default NavBar