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

const NavBar = (props) => {

  const history = useNavigate()
  const location = useLocation()

  const [logModal, setLogModal] = useState()
  const [regModal, setRegModal] = useState()
  const [exitModalShow, setExitModalShow] = useState(false)
const [isMenuOpen, setIsMenuOpen] = useState(false)

const myRef = useRef()

useEffect(
  () => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!myRef.current || myRef.current.contains(event.target)) {
        return;
      }
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  },
  // Add ref and handler to effect dependencies
  // It's worth noting that because the passed-in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [myRef, () => props.close()]
);

useEffect(() => {
  AOS.init({
    duration : 650
  });
}, []);


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
  <a href="https://flowbite.com/" class="flex sm:ml-2 ml-3 items-center">
      <img src={logo} class="mr-1 md:h-9 h-9 -top-[2px] relative md:ml-0 sm:ml-3 ml-2" alt="Flowbite Logo"/>
      <span class="self-center text-xl relative lg:bottom-0 bottom-[1.5px] font-semibold whitespace-nowrap ">Spire Insights</span>
  </a>
  {/* <button
  
  data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 mr-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu" aria-expanded="false">
    <span class="sr-only">Open main menu</span>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button> */}
  <div class="block w-auto lg:mr-3" id="mobile-menu">
   
  {sessionStorage.getItem('token')===null?

<ul class="lg:flex hidden flex-col mt-6 relative md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
                  
                <div class = 'relative mx-auto w-fit bottom-[5px]'>

                <a  href="#" onClick = {()=> {
                     history('/home')

          }} 
          className={`uppercase items-center justify-center ${location.pathname==='/home'?'text-blue-700':'text-gray-700'} px-3 top-[5px] active:shadow-sm hover:font-semibold relative mr-3.5 py-[9px]  pb-2.5 border border-transparent rounded-md text-md tracking-wide font-semibold hover:text-blue-700 text-gray-700 bg-gradient-to-r  `}>
          Home
         </a>

         <a  href="#" onClick = {()=> {
          history('/team')
          }} 
          className={`uppercase items-center justify-center ${location.pathname==='/team'?'text-blue-700':'text-gray-700'} px-3 top-[5px] active:shadow-sm hover:font-semibold relative mr-4 py-[9px]  pb-2.5 border border-transparent rounded-md text-md tracking-wide font-semibold hover:text-blue-700  text-gray-700 bg-gradient-to-r  `}>
          Team
         </a>

         <a  href="#" onClick = {()=> {
          setLogModal(true)
          }} 
          className="uppercase items-center justify-center top-[5px] hover:font-semibold relative mr-4  p-2 border border-transparent rounded-md hover:shadow-lg text-md tracking-wide font-semibold hover:text-white text-gray-700 bg-gradient-to-r  hover:from-blue-600 hover:to-blue-600 active:bg-blue-500">
          Log in
         </a>

         <a 
         onClick = {() => { 
          setRegModal(true)
          }}
           href="#"
           className="uppercase items-center justify-center  top-[5px] hover:font-semibold relative p-2 border border-transparent rounded-md hover:shadow-lg text-md tracking-wide font-semibold hover:text-white text-gray-700 bg-gradient-to-r  hover:from-blue-600 hover:to-blue-600 active:bg-blue-500"
         >
           Sign up
         </a>
         </div>
      
    </ul> :
    <ul class="flex-col mt-6 top-[4px] md:mr-2 md:flex hidden relative md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a class={`block py-2 cursor-pointer pr-4 pl-3  bg-blue-700 rounded md:bg-transparent ${location.pathname === '/profile'?'text-blue-700':'text-gray-700'} md:p-0 text-sm uppercase `} aria-current="page" onClick={()=> {
          history('/profile')
        }}>Profile</a>
      </li>
      <li>
        <a class={`block py-2 pr-4 cursor-pointer  pl-3 ${location.pathname === '/setupListings'?'text-blue-700':'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0`} onClick={()=> {
          history('/setupListings')
        }}> SET-UP</a>
      </li>
      <li>
        <a  class={`block py-2 pr-4 pl-3 cursor-pointer  ${location.pathname === '/manageListings'?'text-blue-700':'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0`} onClick={()=> {
          history('/manageListings')
        }}>MANAGE</a>
      </li>
      <li>
        <a class={`block py-2 pr-4 pl-3 cursor-pointer  ${location.pathname === '/optimiseListings'?'text-blue-700':'text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-sm uppercase md:p-0`} onClick={()=> {
          history('/optimiseListings')
        }}>OPTIMIZE </a>
      </li>
      <li>
        <a class={`block  cursor-pointer  -mt-2 -ml-4  border-b border-gray-100  md:hover:bg-transparent md:border-0 hover:text-white text-sm uppercase p-2 border border-transparent rounded-md hover:shadow-lg tracking-wide font-semibold  text-gray-700 bg-gradient-to-r  hover:from-blue-600 hover:to-blue-600 active:bg-blue-500`} onClick={()=> {
        logOutHandle()
        }}>LOG OUT</a>
      </li>
      
    </ul>}

    {sessionStorage.getItem('token')===null?
       <div class="lg:hidden">
       <button
         aria-label="Open Menu"
         title="Open Menu"
         class="p-2 py-1.5 sm:-mr-10 -mr-16 absolute right-24  block bottom-3  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:from-blue-200 hover:to-indigo-300 hover:bg-gradient-to-r focus:bg-blue-400"
         onClick={() => setIsMenuOpen(true)}
       >
         <svg class={`${sessionStorage.getItem('token')===null?'w-7':'w-7'} text-gray-600 sm:top-2`} viewBox="0 0 24 24">
           <path
             fill="currentColor"
             d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
           />
           <path
             fill="currentColor"
             d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
           />
           <path
             fill="currentColor"
             d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
           />
         </svg>
       </button>
       {isMenuOpen && (
         <div data-aos = 'zoom-in-down' data-aos-once = 'true'  class="absolute  top-0 z-50 w-screen left-0">
           <div ref = {myRef} class="p-5 bg-white border rounded shadow-xl z-50">
             <div class="flex items-center justify-between mb-4">
               <div>
                 <a
                   href="/"
                   aria-label="Company"
                   title="Company"
                   class="inline-flex items-center mb-5"
                 >
                
                   <img src = {logo} className="w-16 md:w-20 absolute md:-mt-12 -mt-10 top-16 sm:visible invisible "/>

                 </a>
               </div>
               <div>
                 <button
                   aria-label="Close Menu"
                   title="Close Menu"
                   class="p-2 -mr-2 top-2 right-[2px]  relative transition before:rotate-90 hover:rotate-90 duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline -mt-10 mb-3"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <svg class="w-6 text-gray-600 bottom-1" viewBox="0 0 24 24">
                     <path
                       fill="currentColor"
                       d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                     />
                   </svg>
                 </button>
               </div>
             </div>
           
           
             <nav class = ''>
               
               <ul class="space-y-4  relative bottom-8 mt-3  sm:bottom-8">
               
                 <li class = "text-center mb-2 block relative">
                   <a
                        onClick={()=> {
                         setIsMenuOpen(false)
                         history('/home')
                       }}
                     aria-label="Our product"
                     title="Our product"
                     class="hover:cursor-pointer mb-2 font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                   >
                    Home
                   </a>
                 </li>
                 <li class = "text-center">
                   <a
                        onClick={()=> {
                         setIsMenuOpen(false)
                         history('/team')
                       }}
                     aria-label="Our product"
                     title="Our product"
                     class="hover:cursor-pointer font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                   >
                    Team
                   </a>
                 </li>
                
                
               
                 
               </ul>
               <div className="align-middle justify-items-center justify-center mt-7 mb-3.5 bottom-[2px] mx-auto relative">
         <div class = 'relative mx-auto w-fit bottom-[5px]'>
         <a  href="#" onClick = {()=> {
           setIsMenuOpen(false)
           setLogModal(true)}} className="uppercase items-center justify-center whitespace-nowrap px-3 mr-3 py-2 text-md tracking-wide font-semibold text-gray-700 hover:text-gray-900 ">
           Sign in
         </a>

         <a 
         onClick = {() => {setIsMenuOpen(false); setRegModal(true)}}
           href="#"
           className="uppercase items-center justify-center px-3 py-[9px] pb-2.5 border border-transparent rounded-md shadow-lg text-md tracking-wide font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-400 hover:to-indigo-600 active:bg-blue-500"
         >
           Sign up
         </a>
         
         </div>
         
         </div>
             </nav>
           </div>
         </div>
          
       )}
     </div>
      :
      <div class="md:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        class="p-2 py-1.5 sm:-mr-10 -mr-16 absolute right-24  block bottom-3  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:from-blue-200 hover:to-indigo-300 hover:bg-gradient-to-r focus:bg-blue-400"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg class={`${sessionStorage.getItem('token')===null?'w-7':'w-7'} text-gray-600 sm:top-2`} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
          />
          <path
            fill="currentColor"
            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
          />
          <path
            fill="currentColor"
            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div data-aos = 'zoom-in-down' data-aos-once = 'true'  class="absolute  top-0 z-50 w-screen left-0">
          <div ref = {myRef} class="p-5 bg-white border rounded shadow-xl z-50">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center mb-5"
                >
               
                  <img src = {logo} className="w-16 md:w-20 absolute md:-mt-12 -mt-10 top-16 sm:visible invisible "/>

                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mr-2 top-2 right-[2px]  relative transition before:rotate-90 hover:rotate-90 duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline -mt-10 mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg class="w-6 text-gray-600 bottom-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          
          
            <nav class = ''>
              
              <ul class="space-y-4  relative bottom-8 mt-3  sm:bottom-8">
              
                <li class = "text-center mb-2 block relative">
                  <a
                       onClick={()=> {
                        setIsMenuOpen(false)
                        history('/profile')
                      }}
                    aria-label="Our product"
                    title="Our product"
                    class="hover:cursor-pointer mb-2 font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                  >
                   Profile
                  </a>
                </li>
                <li class = "text-center">
                  <a
                       onClick={()=> {
                        setIsMenuOpen(false)
                        history('/setupListings')
                      }}
                    aria-label="Our product"
                    title="Our product"
                    class="hover:cursor-pointer font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                  >
                   Set-Up
                  </a>
                </li>
                <li class = "text-center">
                  <a
                       onClick={()=> {
                        setIsMenuOpen(false)
                        history('/manageListings')
                      }}
                    aria-label="Our product"
                    title="Our product"
                    class="hover:cursor-pointer font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                  >
                   Manage
                  </a>
                </li>
                <li class = "text-center">
                  <a
                       onClick={()=> {
                        setIsMenuOpen(false)
                        history('/optimiseListings')
                      }}
                    aria-label="Our product"
                    title="Our product"
                    class="hover:cursor-pointer font-semibold tracking-wide text-gray-700  right-1.5 relative transition-colors duration-200 hover:text-indigo-500"
                  >
                   Optimize
                  </a>
                </li>
               
           
     
     
  
              
                
              </ul>
              <div className="align-middle justify-items-center justify-center mt-7 mb-3.5 bottom-[2px] mx-auto relative">
        
        <div  class = 'relative right-[3px] block mx-auto w-fit'>
        <a
          onClick={()=> {
            setIsMenuOpen(false)
            sessionStorage.removeItem('token')
            history('/home')
          }}
          className="whitespace-nowrap bottom-1 relative uppercase items-center justify-center px-3 py-2 border border-transparent rounded-sm shadow-sm text-lg  font-semibold hover:cursor-pointer  text-white bg-blue-600 hover:bg-blue-700"
        >
        Log Out
        </a>
       </div>
      </div>
            </nav>
          </div>
        </div>
         
      )}
    </div>
      } 
    




  </div>
</div>
</nav>
</>
    )
}

export default NavBar