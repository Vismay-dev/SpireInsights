import {FcOldTimeCamera, FcShipped, FcMoneyTransfer} from 'react-icons/fc'
import {SiEventstore} from 'react-icons/si'
import { GiSellCard } from 'react-icons/gi'
import { MdSell } from 'react-icons/md'
import { CgTrack } from 'react-icons/cg'
import { AiFillAmazonCircle } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'


import { useState } from 'react'

const ContentSetup = (props)=> {
   const [isOpen,setIsOpen] = useState(false)
   const [currentPlatform, setCurrentPlatform] = useState('Amazon')

    const contentList = [
                    <div className="mt-12 relative mx-auto lg:mt-14 mb-14">
                            <div class = 'w-[64%] left-[18%] bg-gray-800 relative shadow-xl rounded-lg rounded-bl-2xl rounded-br-2xl'>
                                <img className="w-full h-[280px] object-contain" src="https://blog.hubspot.com/hubfs/ecommerce-1.png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Company Name</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">20th June, 2022</p>
                                </div>
                                <div className="bg-white px-10 py-6 pt-8 rounded-bl-2xl rounded-br-2xl">
                                    <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">E-Commerce Product Listing</h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Creating a new ecommerce product listing isn't as easy as you might think. With a few simple mistakes it's easy to create an entry which is either unappealing or doesn't contain enough information for your target audience to make a purchase.</p>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-4 w-11/12">"We will continue to see a <span class = 'text-indigo-600 font-semibold'>convergence of the physical and digital world.</span> Those who <span class = 'text-indigo-600 font-semibold'>conquer that trend will be market leaders.</span>" - John Phillips, Senior VP of Logistics @ Pepsico</p>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-4 w-11/12">Our Step-by-Step guide will take you through the process of setting <span class = 'text-indigo-600 font-semibold'>your E-Commerce Product Listings</span> up. From  <span class = 'text-indigo-600 font-semibold'>Set-Up Details & Search Engine Optimization</span> to  <span class = 'text-indigo-600 font-semibold'>Keyword Validation & Market Analysis</span>, we've got it all, and we're here to help you achieve success in the internet's toughest E-Commerce marketplaces.</p>

                                    
                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                            </div>   ,

<section class="pt-20 lg:pt-[25px] pb-12 lg:pb-[12px]  px-10 mx-auto relative">
<div class="container">
   <div class="flex flex-wrap -mx-4">
      <div class="w-full px-4">
         <div class="text-center mx-auto mb-12 lg:mb-14 max-w-[700px]">
            <span class="font-semibold text-lg text-primary mb-2 block">
             Step-By-Step Guide
            </span>
            <h2
               class="
               font-bold
               text-3xl
               sm:text-4xl
               md:text-[40px]
               text-dark
               mb-4
               "
               >
               Plan Your Listings
            </h2>
            <p class="text-base text-body-color relative top-3">
               Use these instructions to systematically organize your E-Commerce Listings. An aspect ignored by most online business, comprehensive planning of listings is key to better consumer exposure & higher sales.
               Planning & storing these details early saves time later when setting up online stores.
            </p>
         </div>
         <a href="javascript:void(0)" class="
py-2
px-5
-top-6
w-1/
lg:px-8 
mb-3
mx-auto
block
relative
xl:px-6
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
">
Save All Details
</a>
      </div>
   </div>
   <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2  px-4">
         <div
            class="
            p-10
            pb-[30px]
            md:px-7
            xl:px-10
            rounded-[20px]
            bg-white
            shadow-md
            hover:shadow-lg
            mb-8
            "
            >
           <div
               class="
               w-[140px]
               h-[125px]
               px-3 py-5
               pt-5
               flex
               items-center
               justify-center
               mx-auto
               bg-blue-200
               -mt-1.5
               rounded-xl
               mb-7
               "
               >
               <SiEventstore class = 'w-96 text-8xl text-gray-500 mx-auto relative text-center'/>
            </div>
            <h4 class="font-semibold text-xl text-dark mt-1 mb-1.5">
               Record Store Details
            </h4>
            <p class="text-body-color">
               <span class = 'underline font-semibold -mb-9 block relative top-1.5'>Track the following details:</span><br/><br/>
               - E-Commerce Platform of Choice<br/>
               - Product Name <br/>
               - Rough Product Details
            </p>
            <hr class = 'mt-6'/>
            <div class="flex flex-wrap -mx-4 mt-6">
<div class="w-full md:w-1/2 lg:w-1/2 px-2">
   <div class="mb-12">
      <label for="" class="font-medium text-base text-black block mb-3">
      E-Commerce Platform
      </label>
      <input type="text" placeholder="Platform" class="
         w-full
         border-[1.5px] border-form-stroke
         rounded-lg
         py-2
         px-2
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
<div class="w-full md:w-1/2 lg:w-1/2 px-2">
   <div class="mb-12">
      <label for="" class="font-medium text-base text-black block mb-3">
      Product Name
      </label>
      <input type="text" placeholder="Product Name" class="
         w-full
         border-[1.5px] border-primary
         rounded-lg
         p-2
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
<div class="w-full px-2 -mt-7">
   <div class="mb-4">
      <label for="" class="font-medium text-base text-black block mb-3">
      Rough Product Details
      </label>
      <input type="text" placeholder="One-line Description" disabled="" class="
         w-full
         border-[1.5px] border-form-stroke
         rounded-lg
         p-2
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
<a href="javascript:void(0)" class="
py-2
px-5
lg:px-8 left-2 my-3
-mb-1
relative
xl:px-6
inline-flex
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
">
Save Details
</a>
</div>
         </div>
      </div>
      <div class="w-full md:w-1/2 px-4">
         <div
            class="
            p-10
            pb-[30px]
            md:px-7
            xl:px-10
            rounded-[20px]
            bg-white
            shadow-md
            hover:shadow-lg
            mb-8
            "
            >
            <div
               class="
               w-[150px]
               h-[135px]
               px-3 py-3
               pt-8
               flex
               items-center
               justify-center
               mx-auto
               bg-blue-200
               -mt-1.5
               rounded-xl
               mb-7
               "
               >
               <FcMoneyTransfer class = 'w-96 text-9xl mx-auto relative text-center'/>
            </div>
            <h4 class="font-semibold text-xl text-dark mb-3">
               Decide on Pricing
            </h4>
            <p class="text-body-color">
               Considering factors such as <p class = 'font-semibold inline'>cost of material, time & expertise needed, default order size (single or bulk),</p> decide and finalize your product's pricing. <strong>Use our optimization feature to evaluate the market & set a competitive price.</strong>
            </p>
            <hr class = 'mt-6'/>
            <div class="w-full px-2 mt-6">
   <div class="mb-4">
      <label for="" class="font-medium text-base text-black block mb-3">
      Product Pricing
      </label>
      <input type="number" placeholder="Pricing" disabled="" class="
         w-full
         border-[1.5px] border-form-stroke
         rounded-lg
         p-2
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
<div class="w-full px-2 mt-4">
   <div class="mb-4">
      <label for="" class="font-medium text-base text-black block mb-3">
      Currency
      </label>
      <select class="
            w-full
            border-[1.5px] border-form-stroke
            rounded-lg
            py-2
            px-2
            font-medium
            text-body-color
            outline-none
            focus:border-primary
            active:border-primary
            transition
            disabled:bg-[#F5F7FD] disabled:cursor-default
            appearance-none
            ">
            <option value="AED">AED - Dirham (United Arab Emirates)</option>
            <option value="QR">QR - Qatari Rial (Qatar)</option>
            {/* <option value="">Option</option> */}
         </select>
   </div>
</div>
<a href="javascript:void(0)" class="
py-2
px-5
lg:px-8 left-2 my-3
-mb-1
relative
xl:px-6
inline-flex
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
">
Save Details
</a>
         </div>
      </div>
      <div class="w-full md:w-1/2  px-4">
         <div
            class="
            p-10
            pb-[30px]
            md:px-7
            xl:px-10
            rounded-[20px]
            bg-white
            shadow-md
            hover:shadow-lg
            mb-8
            "
            >
            <div
               class="
               w-[140px]
               h-[119px]
               px-3 py-0
               flex
               items-center
               justify-center
               mx-auto
               bg-blue-200
               -mt-1.5
               rounded-xl
               mb-7
               "
               >
               <FcShipped class = 'w-96 text-9xl mx-auto relative text-center'/>
            </div>
            <h4 class="font-semibold text-xl text-dark mb-1.5">
             Calculate Shipping Details
            </h4>
            <p class="text-body-color">
            <span class = 'underline  font-semibold -mb-9 block relative top-1.5'>Pre-plan these details:</span><br/><br/>
               - Product Dimensions & Weight<br/>
               - Shipping Cost (Local & Abroad)<br/>
               - Estimated Shipping Times<br/>
            </p>
            <hr class = 'mt-6'/>

            <div class="flex flex-wrap -mx-4 mt-6">
<div class="w-full md:w-1/2 lg:w-1/2 px-2">
   <div class="mb-4">
      <label for="" class="font-medium text-base text-black block mb-3">
      Product Dimensions
      </label>
      <input type="text" placeholder="Platform" class="
         w-full
         border-[1.5px] border-form-stroke
         rounded-lg
         py-2
         px-2
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
<div class="w-full md:w-1/2 lg:w-1/2 px-2">
   <div class="mb-4">
      <label for="" class="font-medium text-base text-black block mb-3">
      Product Weight (Estimated)
      </label>
      <input type="text" placeholder="Product Name" class="
         w-full
         border-[1.5px] border-primary
         rounded-lg
         p-2
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



<a href="javascript:void(0)" class="
py-2
px-5
lg:px-8 left-2 my-3
-mb-1
relative
xl:px-6
inline-flex
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
">
Save Details
</a>
</div>
           
         </div>
      </div>
      <div class="w-full md:w-1/2  px-4">
         <div
            class="
            p-10
            md:px-7
            xl:px-10
            rounded-[20px]
            bg-white
            shadow-md
            hover:shadow-lg
            mb-8
            "
            >
            <div
               class="
               w-[140px]
               h-[115px]
               px-3 py-0
               flex
               items-center
               justify-center
               mx-auto
               bg-blue-200
               -mt-1.5
               rounded-xl
               mb-7
               "
               >
               <FcOldTimeCamera class = 'w-96 text-8xl mx-auto relative text-center'/>
            </div>
            <h4 class="font-semibold text-xl text-dark mb-3">
               Image Checklist
            </h4>
            <span class = 'underline  font-semibold -mb-10 block relative top-0.5'>Pre-plan these details:</span><br/><br/>

            <p class="text-body-color">
             - Use a plain background <br/>- Take photos from several angles & in suitable lighting <br/>- Show your product in use in one atleast image
            </p>
<hr class = 'mt-6'/>
            <div class="flex flex-wrap -mx-4 mt-6">
<div class="w-full lg:w-full px-4">
   <div class="mb-[35px]">
      <label for="" class="font-medium text-base text-black block mb-3">
      Default file input
      </label>
      <input type="file" class="
         w-full
         border-[1.5px] border-form-stroke
         rounded-lg
         font-medium
         text-body-color
         placeholder-body-color
         outline-none
         focus:border-primary
         active:border-primary
         transition
         disabled:bg-[#F5F7FD] disabled:cursor-default
         cursor-pointer
         file:bg-[#F5F7FD]
         file:border-0
         file:border-solid
         file:border-r
         file:border-collapse
         file:border-form-stroke
         file:py-3
         file:px-5
         file:mr-5
         file:text-body-color
         file:cursor-pointer
         file:hover:bg-primary
         file:hover:bg-opacity-10
         "/>
   </div>
</div>
</div>
<a href="javascript:void(0)" class="
py-2
px-5
-mt-14
top-0.5
lg:px-8 
-mb-9
relative
xl:px-6
inline-flex
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
">
Save Details
</a>
         </div>
        
      </div>
      
     </div>
     </div>
</section>,

<section class="pt-20 lg:pt-[20px] pb-12 lg:pb-[12px]  px-10 mx-auto relative">
<div class="container">
   <div class="flex flex-wrap -mx-4">
      <div class="w-full px-4">
         <div class="text-center mx-auto mb-12 lg:mb-14 max-w-[1000px]">
            <span class="font-semibold text-lg text-primary mb-2 block">
             Maximize Consumer Exposure
            </span>
            <h2
               class="
               font-bold
               text-3xl
               sm:text-4xl
               md:text-[40px]
               text-dark
               mb-4
               "
               >
               Select High-Performing Keywords
            </h2>
            <p class="text-base text-body-color relative top-3">
               Use the services listed below to select the highest-ranking keywords suitable to your product listing. Understand the Competition. Conquer the online marketplace. Win.
            </p>
         </div>

         <div class = 'grid bottom-2 w-[80%] mx-auto relative mb-8  grid-cols-2 gap-x-7'>
            <div class = 'bg-white hover:cursor-pointer hover:bg-gray-200 h-[250px] rounded-sm shadow-md'>
            <GiSellCard class = 'text-[120px] rounded-lg text-white bg-blue-700 p-5 px-8 text-center mx-auto block top-4 mt-2 mb-4.5 relative'/>
            <h2 class = 'text-xl mt-[35px]  text-center font-semibold'>Analyze Top Products <br/><hr class = 'w-2/3 mx-auto text-center block mt-1.5 my-[2px]'/> <span class = 'text-lg font-medium text-gray-600'>Listings & Keywords</span></h2>
            </div>
            <div class = 'bg-white h-[250px] hover:cursor-pointer hover:bg-gray-200 rounded-sm shadow-md'>
            <MdSell class = 'text-[120px] rounded-lg text-white bg-blue-700 p-5 px-8 text-center mx-auto block top-4 mt-2 mb-4.5 relative'/>
            <h2 class = 'text-xl mt-[35px]  text-center font-semibold'>Market Analysis <br/><hr class = 'w-2/3 mx-auto text-center block mt-1.5 my-[2px]'/> <span class = 'text-lg font-medium text-gray-600'>Demand & Sales</span></h2>

            </div>


           



         </div>
         <hr class = 'mt-5 mb-8 border-t-2 border-blue-700 border-dotted'/>
         <h1 class = 'text-2xl text-center mx-auto relative block font-semibold my-3'>Enter 5 Keywords:<br/> <p class = 'text-xl'>(Select One of the Above Features to Find Keywords)</p></h1>


         <div class="flex flex-wrap w-[90%] mx-auto mt-9">
         <div class="w-full md:w-1/2 lg:w-1/5 px-1.5">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Key Word 1
         </label>
         <input type="text" placeholder="Enter Keyword" class="
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
   <div class="w-full md:w-1/2 lg:w-1/5 px-1.5">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Key Word 2
         </label>
         <input type="text" placeholder="Enter Keyword" class="
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
   <div class="w-full md:w-1/2 lg:w-1/5 px-1.5">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Key Word 3
         </label>
         <input type="text" placeholder="Enter Keyword" class="
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
   <div class="w-full md:w-1/2 lg:w-1/5 px-1.5">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Key Word 4
         </label>
         <input type="text" placeholder="Enter Keyword" class="
            w-full
            border-[1.5px] border-primary
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
   <div class="w-full md:w-1/2 lg:w-1/5 px-1.5">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Key Word 5
         </label>
         <input type="text" placeholder="Enter Keyword" disabled="" class="
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
</div>
<a href="javascript:void(0)" class="
py-2
px-5
-top-6
w-1/3
lg:px-8 
mt-7
mx-auto
block
relative
xl:px-6
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
">
Save All Details
</a>
       
      </div>
     
</div>
</div>
</section>,

<div class="flex flex-wrap -mx-4 mt-7 w-[1000px]">
<div class="w-full  px-4">
   <div
      class="
      single-faq
      w-[700px]
      bg-white
      mx-auto block relative
      border border-[#F3F4FE]
      rounded-lg
      p-4
   
      sm:p-8
      lg:px-6
      xl:px-8
      mb-8
      "
      >
      <button
         class="faq-btn flex w-full text-left"
         // @click="openFaq1 = !openFaq1"
         onClick ={()=>setIsOpen(!isOpen)}
         >
         <div
            class="
            w-full
            max-w-[40px]
            h-8
            flex
            items-center
            justify-center
            rounded-lg
            bg-primary
            text-primary
            bg-opacity-5
            mr-5
            "
            >
            <svg
               width="17"
               height="10"
               viewBox="0 0 17 10"
               class={`fill-current icon relative bottom-0.5 ${isOpen?'rotate-180':'rotate-0'} `}
               >
               <path
                  d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                  fill="#3056D3"
                  stroke="#3056D3"
                  />
            </svg>
         </div>
         <div class="w-full">
            <h4 class="text-lg font-semibold text-black">
               How to Create a New E-Commerce Product Listing?
            </h4>
         </div>
      </button>
      <div class={`${isOpen?'block':'hidden'}  pl-[62px]`}>
         <p class="text-base text-body-color leading-relaxed py-3 pb-0">
         Whether you're using Amazon, WooCommerce, Shopify, or another platform, this usually involves nothing more than logging in,
         navigating to your product collection, then clicking "New Listing" (or the equivalent).
         </p>
      </div>
   </div>

   <div class="w-[80%] left-[10%] mb-9  px-2   relative">
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
text-center text-white text-base
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
text-white 
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

{
currentPlatform==='Amazon'?

''

:currentPlatform==='Al Anees'?

''

:

''
}

</div>
</div>
    ]

    return (<>
     <div className="mx-auto container bg-gradient-to-tr from-blue-100 to-indigo-200 p-4 py-1 rounded-md shadow-lg border-2 border-dotted border-blue-700 mt-[66px] mb-[70px]">
     {contentList[props.segment-1]}
     </div>  
    </>)
}

export default ContentSetup