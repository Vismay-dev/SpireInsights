import {FcOldTimeCamera, FcShipped, FcMoneyTransfer} from 'react-icons/fc'
import {SiEventstore} from 'react-icons/si'
import { GiSellCard } from 'react-icons/gi'
import { MdSell } from 'react-icons/md'
import { CgTrack } from 'react-icons/cg'
import { AiFillAmazonCircle } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import {ImCross} from 'react-icons/im'
import {TiTick} from 'react-icons/ti'
import { useState, useContext, useEffect, useRef } from 'react'
import axios from 'axios'
import userContext from '../../../context/userContext'
import Tooltip from 'react-power-tooltip'
import image from './image.png'

import {useNavigate} from 'react-router-dom'

const ContentSetup = (props)=> {
   const [isOpen,setIsOpen] = useState(false)
   const [currentPlatform, setCurrentPlatform] = useState('Amazon')
   const userCon = useContext(userContext)
   const [showToolTip, setShowToolTip] = useState(false)
   const [currentPrep, setCurrentPrep] = useState({
      storeDetails:{
               platform: '',
               productName: '',
               productDetails: '',
               beingEdited:false,
               isSaved:false
            },
            pricing: {
               productPricing: 0,
               currency: 'AED',
               beingEdited:false,
               isSaved:false
      
            },
            shipping: {
               productDimension: '',
               productWeight: 0,
               beingEdited:false,
               isSaved:false
            },
            images: {
               collection:[],
               beingEdited:false,
               isSaved:false
            },
            keyWords: {
               one: '',
               two: '',
               three: '',
               four: '',
               five: ''
            }
   })


   const [width, setWidth] = useState(window.innerWidth);

   function handleWindowSizeChange() {
       setWidth(window.innerWidth);
   }
   useEffect(() => {
       window.addEventListener('resize', handleWindowSizeChange);
       return () => {
           window.removeEventListener('resize', handleWindowSizeChange);
       }
   }, []);
   
   const isMobile = width <= 768;
   
   
   


   const [keyWords,setKeyWords] = useState(currentPrep.keyWords)

   const [storeDetails, setStoreDetails] = useState(currentPrep.storeDetails)

   const [pricing, setPricing] = useState(currentPrep.pricing)

   const [shipping, setShipping] = useState(currentPrep.shipping)

   const [images, setImages] = useState(currentPrep.images)


   const [upload, setUpload] = useState({
      title: '',
      image: '',
  })


  const [uploading, setUploading] = useState(false)
  const [file,setFile] = useState()

  const history = useNavigate()

  const fileUploadHandler = (e) => {
   const data = new FormData();
   setUploading(true)
   data.append('image',e.target.files[0]);
   console.log(e.target.files[0].name)
   let currTitle = e.target.files[0].name

   setFile(e.target.files[0])
   data.append('token',sessionStorage.getItem('token') )
   axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/uploadPic':'http://localhost:4000/api/user/uploadPic'
   ,data).then(res=> {
       setUpload({
         ...upload,
         image:res.data,
         title:currTitle
     })
     setImages({
      ...images, collection: [{
         ...upload,
         image:res.data,
         title: currTitle
     }], beingEdited:true,
     isSaved:false
     })
     if(userCon.user.pipeline.current!=='preparation'){
      userNow = userCon.user
      userCon.setUser({...userNow, pipeline: {
         ...userNow.pipeline,
         prepBeingEdited:true
      }})
      axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipeline':'http://localhost:4000/api/user/saveCurrentPipeline',
{pipeline:{data:{...currentPrep}, prepBeingEdited:true },token:sessionStorage.getItem('token')}).then(res=> {
      userCon.setUser(res.data)
  }).catch(err=> {
      console.log(err.response)
  })
}
   setUploading(false)
   }).catch(err=> {
       console.log(err)
       setUploading(false)
   })
   }


   let userNow

   let inputRef = useRef()


   useEffect(()=> {
         axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/getUser':'http://localhost:4000/api/user/getUser',
      {token: sessionStorage.getItem('token')}).then(res=> {
        setCurrentPrep(res.data.pipeline.data)
        setStoreDetails(res.data.pipeline.data.storeDetails)
      setPricing(res.data.pipeline.data.pricing)
      setShipping(res.data.pipeline.data.shipping)
      setImages(res.data.pipeline.data.images)
      setKeyWords(res.data.pipeline.data.keyWords)

      if(res.data.pipeline.current==='completed'){
            props.changeSeg(4)
      }else if(res.data.pipeline.current==='seo'){
            props.changeSeg(3)
      }

      }).catch(err=> {
        console.log(err.response)
      })


   },[])


   const keyWordChange = (e)=> {
      setKeyWords({
         ...keyWords,
         [e.target.name]:e.target.value,
         beingEdited:true,
         isSaved:false
      })

      setCurrentPrep({
         ...currentPrep,
         keyWords:keyWords
      })

      if(userCon.user.pipeline.current!=='seo'){
         userNow = userCon.user
         userCon.setUser({...userNow, pipeline: {
            ...userNow.pipeline,
            keyWordsBeingEdited:true
         }})
         axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipeline':'http://localhost:4000/api/user/saveCurrentPipeline',
   {pipeline:{data:{...currentPrep}, keyWordsBeingEdited:true },token:sessionStorage.getItem('token')}).then(res=> {
         userCon.setUser(res.data)
     }).catch(err=> {
         console.log(err.response)
     })
   }
   }

   const storeDetailsChange = (e) => {
      setStoreDetails({
         ...storeDetails, 
         [e.target.name]:e.target.value.trim(),
         beingEdited:true,
         isSaved:false
      })

      setCurrentPrep({
         ...currentPrep,
         storeDetails:storeDetails
      })

      if(userCon.user.pipeline.current!=='preparation'){
         userNow = userCon.user
         userCon.setUser({...userNow, pipeline: {
            ...userNow.pipeline,
            prepBeingEdited:true
         }})
         axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipeline':'http://localhost:4000/api/user/saveCurrentPipeline',
   {pipeline:{data:{...currentPrep}, prepBeingEdited:true },token:sessionStorage.getItem('token')}).then(res=> {
         userCon.setUser(res.data)
     }).catch(err=> {
         console.log(err.response)
     })
   }

   }

   const pricingChange = (e) => {
      setPricing({
         ...pricing, 
         [e.target.name]:e.target.value.trim(),
         beingEdited:true,
         isSaved:false
      })

      setCurrentPrep({
         ...currentPrep,
         pricing:pricing
      })

      if(userCon.user.pipeline.current!=='preparation'){
         userNow = userCon.user
         userCon.setUser({...userNow, pipeline: {
            ...userNow.pipeline,
            prepBeingEdited:true
         }})
         axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipeline':'http://localhost:4000/api/user/saveCurrentPipeline',
   {pipeline:{...userNow.pipeline, prepBeingEdited:true   },token:sessionStorage.getItem('token')}).then(res=> {
         userCon.setUser(res.data)
     }).catch(err=> {
         console.log(err.response)
     })
   }

  

  

}

   const shippingChange = (e) => {
      setShipping({
         ...shipping, 
         [e.target.name]:e.target.value.trim(),
         beingEdited:true,
         isSaved:false
      })

      setCurrentPrep({
         ...currentPrep,
         shipping:shipping
      })

      if(userCon.user.pipeline.current!=='preparation'){
         userNow = userCon.user
         userCon.setUser({...userNow, pipeline: {
            ...userNow.pipeline,
            prepBeingEdited:true
         }})
         axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipeline':'http://localhost:4000/api/user/saveCurrentPipeline',
   {pipeline:{...userCon.user.pipeline,data:{...currentPrep}, prepBeingEdited:true },token:sessionStorage.getItem('token')}).then(res=> {
         userCon.setUser(res.data)
     }).catch(err=> {
         console.log(err.response)
     })
   }}

   const subKeyWords = () => {


      let details = {
         ...currentPrep, keyWords : {
            ...keyWords, isSaved:true
         }
      }



      setKeyWords({
         ...keyWords, 
         isSaved:true,
      })

      setCurrentPrep({
         ...currentPrep,
         keyWords:{
            ...keyWords, isSaved:true
         }
      })


      axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipelineKeyWords':'http://localhost:4000/api/user/saveCurrentPipelineKeyWords',
      {details,token:sessionStorage.getItem('token')}).then(res=> {
         console.log({...userCon.user,pipeline:res.data})
         userCon.setUser({...userCon.user,pipeline:res.data})
        }).catch(err=> {
            console.log(err.response)
        })
   }
   

   const saveFunc = async(type) => {

      let details = 

      type === 'all'?
      {
         ...currentPrep, storeDetails : {
            ...storeDetails, isSaved:true
         },
         pricing: {
            ...pricing, isSaved:true
         },
         images: {
            ...currentPrep.images, isSaved:true
         },
         shipping: {
            ...shipping, isSaved: true
         }
      }:
      type === 'storeDetails' ? {
         ...currentPrep, storeDetails : {
            ...storeDetails, isSaved:true
         }
      }: type === 'pricing' ? {
         ...currentPrep, pricing : {
            ...pricing, isSaved:true
         }
      } : type === 'shipping' ?  {
         ...currentPrep, shipping : {
            ...shipping, isSaved:true
         }      } : type === 'image' ? {
            ...currentPrep, images : {...images, isSaved:true}} : {}

      console.log(details)

      if(type === 'storeDetails') {
         setStoreDetails({
            ...storeDetails, 
            isSaved:true,
         })
   
         setCurrentPrep({
            ...currentPrep,
            storeDetails:{
            ...storeDetails, isSaved:true
         }
         })
   
      } else if(type === 'pricing') {
         setPricing({
            ...pricing, 
            isSaved:true,
         })
   
         setCurrentPrep({
            ...currentPrep,
            pricing:{
               ...pricing, isSaved:true
         }})
      } else if(type === 'shipping') {
         setShipping({
            ...shipping, 
            isSaved:true,
      })
   
         setCurrentPrep({
            ...currentPrep,
            shipping:{
               ...shipping, isSaved:true
            }
         })
      }else if(type = 'image') {
         setImages({
            ...images,
            collection: [{...images.collection[0],title:upload.title}],
            isSaved:true,
      })
   
         setCurrentPrep({
            ...currentPrep,
            images:{
               ...images, isSaved:true
            }
         })
      }

      await axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/saveCurrentPipelinePrep':'http://localhost:4000/api/user/saveCurrentPipelinePrep',
      {details,token:sessionStorage.getItem('token')}).then(res=> {
            userCon.setUser({...userCon.user,pipeline:res.data})
        }).catch(err=> {
            console.log(err.response)
        })
   }



   const saveDetails1 = ()=> {
      saveFunc('storeDetails')
   }

   const saveDetails2 = ()=> {
      saveFunc('pricing')
   }

   const saveDetails3 = ()=> {
      saveFunc('shipping')
   }

   const saveDetails4 = ()=> {
      saveFunc('image')
   }

   const saveAllDetailsPrep = async() => {
      setCurrentPrep({
         ...currentPrep,
         storeDetails:{
            ...currentPrep.storeDetails,isSaved:true
         },
         pricing: {
            ...currentPrep.pricing, isSaved:true
         },
         images: {
            ...currentPrep.images, isSaved:true
         },
         shipping: {
            ...currentPrep.shipping, isSaved:true
         }
      })
      setStoreDetails({...storeDetails, isSaved:true})
      setPricing({...pricing, isSaved:true})
      setImages({...images, isSaved:true})
      setShipping({...shipping, isSaved:true})
      

      userCon.setUser({
         ...userCon.user, pipeline:{
            ...userCon.user.pipeline, prepBeingEdited:false
         } 
      })

      await saveDetails1()
      await saveDetails2()
      await saveDetails3()
      if(images.collection.length!==0){
         await saveDetails4()
      }



      await saveFunc('all')
      // props.changeSeg(3)
   }

   const saveAllDetailsKeyWords = () => {
      subKeyWords()
      setTimeout(()=> {
         props.changeSeg(4)
      },200)   }

    const contentList = [
                    <div className="mt-12 relative mx-auto lg:mt-14 lg:mb-14 mb-12">
                            <div class = 'lg:w-[75%] w-[85%] lg:left-[12.5%] left-[7.5%] bg-gray-800 relative shadow-xl rounded-lg rounded-bl-2xl rounded-br-2xl'>
                                <img className="w-full h-[280px] md:object-contain object-cover" src="https://blog.hubspot.com/hubfs/ecommerce-1.png" alt="computer" />
                                <div className="py-4 sm:px-8 px-5 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Spire</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">20th June, 2022</p>
                                </div>
                                <div className="bg-white sm:text-left text-center  sm:pl-10 sm:pr-2 px-2 block sm:mx-0 mx-auto  py-6 pt-8 rounded-bl-2xl rounded-br-2xl">
                                    <h1 className="md:text-4xl text-3xl pr-3 text-gray-900 sm:text-left text-center sm:mx-0 mx-auto block sm:px-0 px-3 font-semibold tracking-wider">E-Commerce Product Listing</h1>
                                    <p className="text-gray-700 text-base lg:text-lg sm:text-left text-center sm:mx-0 mx-auto block lg:leading-8 tracking-wide sm:mt-6 mt-7 w-11/12">Creating a new ecommerce product listing isn't as easy as you might think. With a few simple mistakes it's easy to create an entry which is either unappealing or doesn't contain enough information for your target audience to make a purchase.</p>
                                    <p className="text-gray-700 text-base lg:text-lg sm:text-left text-center sm:mx-0 mx-auto block lg:leading-8 tracking-wide sm:mt-4 mt-5 w-11/12">"We will continue to see a <span class = 'text-indigo-600 font-semibold'>convergence of the physical and digital world.</span> Those who <span class = 'text-indigo-600 font-semibold'>conquer that trend will be market leaders.</span>" - John Phillips, Senior VP of Logistics @ Pepsico</p>
                                    <p className="text-gray-700 text-base lg:text-lg sm:text-left text-center sm:mx-0 mx-auto block lg:leading-8 tracking-wide sm:mt-4 mt-5 w-11/12">Our Step-by-Step guide will take you through the process of setting <span class = 'text-indigo-600 font-semibold'>your E-Commerce Product Listings</span> up. From  <span class = 'text-indigo-600 font-semibold'>Set-Up Details & Search Engine Optimization</span> to  <span class = 'text-indigo-600 font-semibold'>Keyword Validation & Market Analysis</span>, we've got it all, and we're here to help you achieve success in the internet's toughest E-Commerce marketplaces.</p>

                                    
                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                            </div>   ,

<section class="pt-20 lg:pt-[25px] pb-12 w-full lg:pb-[12px] block lg:px-10 -mb-4 md:px-3 sm:px-7 px-3 mx-auto relative">
<div class="xl:container w-full lg:my-0 -my-20 lg:mt-0 -mt-12  ">
   <div class="flex flex-wrap w-full xl:-mx-4">
      <div class="w-full px-4">
         <div class="text-center relative left-2 mx-auto mb-12 lg:mb-14 lg:max-w-[800px] max-w-[700px]">
            <span class="font-semibold text-lg left-1 relative text-primary mb-2 block">
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
               relative 
               "
               >
               Plan Your Listings
            </h2>
            <p class="text-base text-body-color relative top-3 mb-5 block">
               Use these instructions to systematically organize your E-Commerce Listings. An aspect ignored by most online business, comprehensive planning of listings is key to better consumer exposure & higher sales.
               Planning & storing these details early saves time later when setting up online stores.
            </p>
         </div>
      
         <a 
         onClick= {()=>{
            if(userCon.user && userCon.user.pipeline && userCon.user.pipeline.current !== 'preparation'){
               saveAllDetailsPrep()
               props.changeSeg(3)
            }
            }}
         class={`
xl:py-2 py-2.5
px-5

xl:w-1/4 lg:w-1/3 lg:-top-[14px] -top-[3px] sm:w-[50%] w-[90%]
lg:px-8 
lg:mb-6 mb-[34px]
left-3
mx-auto
block
relative
xl:px-6
items-center
justify-center
text-center text-white text-lg
${
   userCon.user && userCon.user.pipeline && userCon.user.pipeline.current !== 'preparation'?
  'bg-blue-700 hover:bg-opacity-90 hover:shadow-md cursor-pointer mt-2':
  'bg-blue-300 cursor-default text-gray-100'
}
rounded-md
`}>
Save All Details & Continue
</a>

{
   userCon.user && userCon.user.pipeline && userCon.user.pipeline.current !== 'preparation'?
   <div class = 'block mx-auto -mt-1 -top-2 mb-2 left-4 relative'>{
   !userCon.user.pipeline.prepBeingEdited?
   <TiTick class = 'text-green-600 text-center mx-auto relative mb-3  mt-1 text-4xl bg-gradient-to-br block from-blue-100 to-indigo-100 rounded-full'/>:
   <><ImCross class = 'text-red-600 text-center mx-auto relative mb-3 -top-[1px] text-4xl p-1 bg-gradient-to-br block from-blue-100 to-indigo-100 rounded-full'/> <h1 class = 'text-center uppercase mb-3 font-semibold underline'>Being Edited...</h1></>
}</div>
   :
   ''
}


      </div>
   </div>
   <div class="flex mt-1  flex-wrap -mx-4">
      <div class="w-full md:w-1/2 md:pb-10  px-4">
         <div
            class="
            p-10
            md:pb-[20px]
            pb-[32px]
            md:px-7
            xl:px-10
            md:h-full
            rounded-[20px]
            bg-white
            shadow-md
            hover:shadow-lg
            mb-8 lg:mb-4
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
      <span class = 'lg:inline hidden'>E-Commerce</span> Platform
      </label>
      <input type="text"  name = 'platform' defaultValue = {storeDetails.platform} onChange={storeDetailsChange} placeholder="Platform" class="
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
      <input type="text"  name = 'productName' defaultValue = {storeDetails.productName} onChange={storeDetailsChange} placeholder="Product Name" class="
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
      <input type="text" name = 'productDetails'  defaultValue = {storeDetails.productDetails} onChange={storeDetailsChange} placeholder="One-line Description" disabled="" class="
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
"
onClick = {()=>saveDetails1()}
>
Save Details
</a>
<div class = 'relative inline left-8 top-[18px]'>

{
   storeDetails.beingEdited?
   storeDetails.isSaved?
   <TiTick class = 'text-green-600 text-4xl bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full'/>:
   <ImCross class = 'text-red-600 text-4xl p-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full'/>:
   ''
}
</div>
</div>
         </div>
      </div>
      <div class="w-full md:pb-10  md:w-1/2 px-4">
         <div
            class="
            p-10
            md:pb-[0px]
            pb-8
            md:px-7
            xl:px-10
            rounded-[20px]
            bg-white
            md:h-full 
            shadow-md
            hover:shadow-lg
            lg:mb-4 md:mb-0 mb-8
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
               Considering factors such as <p class = 'font-semibold inline'>cost of material<span class = 'lg:inline hidden'>, time & expertise needed,</span> <span class = 'lg:hidden inline'>and</span> default order size (single or bulk),</p> <span class = 'xl:inline hidden'>decide and finalize your product's pricing.</span>  <strong>Use our optimization feature to <span class = 'lg:inline hidden'>evaluate the market &</span> set a <span class = 'xl:inline hidden'>competitive</span> price.</strong>
            </p>
            <hr class = 'mt-6'/>
            <div class="w-full px-2 mt-6">
   <div class="mb-4">
      <label for="" class="font-medium text-base text-black block mb-3">
      Product Pricing
      </label>
      <input type="number" min = {0}  name = 'productPricing' defaultValue={pricing.productPricing} onChange={pricingChange} placeholder="Pricing" disabled="" class="
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
      <select 
      name = 'currency'
      defaultValue={pricing.currency===""?'AED':pricing.currency}
      class="
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
            "
            onChange={pricingChange}
            >
            <option value={null} defaultChecked disabled>Select Currency</option>
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
lg:-mb-1
md:-mb-5
-mb-1
mr-2
relative
xl:px-6
inline-flex
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
"
onClick = {()=>saveDetails2()}
>
Save Details
</a>
<div class = 'relative inline left-6 top-[-1px]'>
{
   pricing.beingEdited?
   pricing.isSaved?
   <TiTick class = 'text-green-600 text-4xl inline bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full'/>:
   <ImCross class = 'text-red-600 text-4xl inline bg-gradient-to-br p-1 from-blue-100 to-indigo-100 rounded-full'/>:
   ''
}
</div>
         </div>
      </div>
      <div class="w-full md:w-1/2 pb-14  px-4">
         <div
            class="
            p-10
            pb-[0px]
            md:px-7
            xl:px-10
            h-full
            rounded-[20px]
            bg-white
            shadow-md
            hover:shadow-lg
            mb-6
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
      <span class = 'xl:inline hidden'>Product</span> Dimensions
      </label>
      <input type="text" name = 'productDimension' defaultValue = {shipping.productDimension} onChange={shippingChange} placeholder="Ex. 30 x 40 cm" class="
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
       Weight (<span class = 'lg:inline hidden'>Estimated - </span>Kg)
      </label>
      <input onChange={shippingChange} min = {0} name = 'productWeight' defaultValue = {shipping.productWeight} type="number" placeholder="Weight" class="
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
"
onClick = {()=>saveDetails3()}
>
Save Details
</a>
<div class = 'relative left-8 top-[18px]'>

{
   shipping.beingEdited?
   shipping.isSaved?
   <TiTick class = 'text-green-600 text-4xl inline bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full'/>:
   <ImCross class = 'text-red-600 text-4xl inline bg-gradient-to-br p-1 from-blue-100 to-indigo-100 rounded-full'/>:
   ''
}
</div>
</div>
           
         </div>
      </div>
      <div class="w-full md:w-1/2 pb-14  px-4">
         <div
            class="
            p-10
            xl:pb-7
            pb-[20px]
            md:px-7
            xl:px-10
            rounded-[20px]
            bg-white
            h-full 
          
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
             - Use a plain background <br/>- Use several angles <span class = 'xl:inline hidden'>& suitable lighting </span><br/>- Show your product <span class = 'lg:inline hidden'>in use</span> in <span class = 'lg:inline hidden'>atleast one</span><span class = 'lg:hidden inline'>an</span> image
            </p>
<hr class = 'mt-6'/>
            <div class="flex flex-wrap -mx-4 mt-6">
<div class="w-full lg:w-full px-4">
   <div class="mb-[35px]">
      <label for="" class="font-medium text-base text-black block mb-3">
      {images&&images.collection[0]&&images.collection[0].title?'Change Image':'Upload Image'}
      </label>
      <input type="file" ref={inputRef} onChange = {fileUploadHandler} class="
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
         mt-0.5
         "/>
   </div>
</div>
</div>
<a href="javascript:void(0)" class="
py-2
px-5
-mt-16

lg:px-8 
-mb-12
mr-0
relative
xl:px-6
inline-flex
items-center
justify-center
text-center text-white text-lg
bg-blue-700
hover:bg-opacity-90
rounded-md
" onClick = {()=> {
   saveDetails4()
}}>
Save Details
</a>

<div class = 'relative inline top-[1.5px] left-6'>

{
   images.beingEdited?
   images.isSaved?
   <TiTick class = 'text-green-600 text-4xl inline bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full'/>:
   <ImCross class = 'text-red-600 text-4xl p-1 inline bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full'/>:
   ''
}
</div>
         </div>
        
      </div>
     
     </div>
     </div>
</section>,

<section class="pt-[30px] lg:pt-[30px] lg:mb-0 md:-mb-6 sm:-mb-8 -mb-4 -mt-2 block pb-12 lg:pb-[12px]  px-10 mx-auto relative">
<div class="lg:container">
   <div class="flex flex-wrap -mx-4">
      <div class="w-full px-4">
         <div class="text-center mx-auto mb-14 lg:mb-14 lg:max-w-[650px] max-w-[550px] ">
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

         <div class = 'grid bottom-2 md:w-[80%] sm:w-[95%] w-[100%] mx-auto relative mb-8  sm:grid-cols-2 grid-cols-1 gap-x-7'>
            <div onClick={()=> {

               window.scrollTo(0,0)
               let id = sessionStorage.getItem('token')
               localStorage.setItem('tempToken', id)
               if(isMobile){
                  history('/optimiseListings')
               }else {
                  window.open(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/optimiseListings':'http://localhost:3000/optimiseListings', '_blank')
               }

            }} class = 'bg-white sm:mb-0 mb-8 hover:cursor-pointer hover:bg-gray-200 h-[250px] rounded-sm shadow-md'>
            <GiSellCard class = 'text-[120px] rounded-lg text-white bg-blue-700 p-5 px-8 text-center mx-auto block top-4 mt-2 mb-4.5 relative'/>
            <h2 class = 'text-xl mt-[35px]  text-center font-semibold'>Analyze Top Products <br/><hr class = 'w-2/3 mx-auto text-center block mt-1.5 my-[2px]'/> <span class = 'text-lg font-medium text-gray-600'>Listings & Keywords</span></h2>
            </div>
            <div onClick={()=> {
               sessionStorage.setItem('redirect','toMarket')
               window.scrollTo(0,0)
               let id = sessionStorage.getItem('token')
               localStorage.setItem('tempToken', id)
  if(isMobile){
                  history('/optimiseListings')
               }else {
                  window.open(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/optimiseListings':'http://localhost:3000/optimiseListings', '_blank')
               }            }}  class = 'bg-white h-[250px] hover:cursor-pointer hover:bg-gray-200 rounded-sm shadow-md'>
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
         <input type="text" onChange={keyWordChange} defaultValue = {keyWords.one} name = 'one' placeholder="Enter Keyword" class="
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
         <input type="text" onChange={keyWordChange} name = 'two' defaultValue = {keyWords.two} placeholder="Enter Keyword" class="
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
         <input type="text" onChange={keyWordChange} name = 'three' defaultValue = {keyWords.three} placeholder="Enter Keyword" class="
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
         <label for=""   class="font-medium text-base text-black block mb-3">
         Key Word 4
         </label>
         <input type="text" name = 'four' onChange={keyWordChange} placeholder="Enter Keyword" defaultValue = {keyWords.four} class="
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
         <input type="text" onChange={keyWordChange} name = 'five' defaultValue = {keyWords.five} placeholder="Enter Keyword" disabled="" class="
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
<a href="javascript:void(0)" onClick={()=> {
   subKeyWords()
}}

class="
py-2
px-5
-top-6
md:w-1/3 sm:w-1/2 w-[83%]
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
<div class = 'relative block mx-auto sm:top-[2px] top-[14px] mb-3.5'>

{
   keyWords.beingEdited?
   keyWords.isSaved?
   <TiTick class = 'text-green-600 text-5xl bg-gradient-to-br text-center block mx-auto from-blue-50 to-indigo-50 rounded-full'/>:
   <><ImCross class = 'text-red-600 text-center mx-auto relative mb-2 text-4xl p-1 bg-gradient-to-br block from-blue-100 to-indigo-100 rounded-full'/> <h1 class = 'text-center uppercase mb-3 font-semibold underline'>Being Edited...</h1></>:
   ''
}
</div>
      </div>
     
</div>
</div>
</section>,

<div class="flex flex-wrap mt-7 mx-auto lg:w-[960px]">
<div class="w-full block mx-auto relative  px-4">
   <div
      class="
      single-faq
      lg:w-[700px]
      sm:w-[90%]
      w-[96%]
      bg-white
      mx-auto block relative
      border border-[#F3F4FE]
      rounded-lg
      p-4
      px-6
      shadow-md
   
      sm:p-8
      lg:px-6
      xl:px-8
      mb-8
      "
      >
      <button
         class="faq-btn  flex w-full text-left"
         // @click="openFaq1 = !openFaq1"
         onClick ={()=>setIsOpen(!isOpen)}
         >
         <div
            class="
            w-full
            sm:max-w-[40px]
            max-w-[10px]
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
         Whether you're using Amazon, this usually involves nothing more than logging in,
         navigating to your product collection, then clicking "New Listing" (or the equivalent).
         </p>
      </div>
   </div>

   <div class="sm:w-[80%] w-[90%] sm:left-[10%] left-[5%] mb-9  px-2   relative">
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
lg:w-[50%]
w-[100%]
lg:mb-0mb-4
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
onMouseOver={() => setShowToolTip(true)}
onMouseLeave={() => setShowToolTip(false)}
class={`
py-[10px]
sm:py-3
lg:w-[50%]
w-[100%]
lg:mb-0mb-4
text-gray-500
bg-gray-300 
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

cursor-default
 hover:border-primary
`}>
<FiShoppingCart class = 'mr-2 text-xl top-[0.5px] font-bold relative'/> Al Anees (Qatar)
</a>
<Tooltip show={showToolTip} position = 'right' fontSize = '16px' padding = '3px 5px'>
  <span class = 'font-semibold text-center font-sans bottom-0.5'>Currently unavailable for this region.</span>
</Tooltip>

<hr class = 'border-t-2 border-blue-700 border-dotted w-[80%] mt-12 mb-8 mx-auto block text-center'/>

<p class = 'font-medium top-2.5 block mx-auto text-center relative mb-1'>  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline relative bottom-[1.3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> This feature is currently <strong>unavailable</strong>....<br/> <p class = 'relative mt-2 lg:w-[75%] md:w-[90%] w-[105%] md:right-0 right-[2.5%] text-center mx-auto block'>Just by entering your Seller Central LWA token, you'll be able to  <strong class = 'text-center'>set-up, manage, refine & analyse all your product listings on Spire</strong>, soon.</p></p>
<div class="flex flex-wrap flex-col mt-14 -mb-6 relative left-[20px] mx-auto">
{/* <div class="w-full md:w-1/2 lg:w-1/3 px-4 -right-[70px] relative mx-auto">
      <div class="mb-12">
         <label for="" class="font-medium text-base text-black block mb-3">
         Enter Seller LWA Token
         </label>
         <input type="text" disabled placeholder="Disabled" class="
            w-full
            border-[1.5px] border-primary
            rounded-lg
            py-[10px]
            px-5
            font-medium
            text-body-color
            placeholder-body-color
            outline-none
            focus:border-primary
            active:border-primary
            transition
            disabled:bg-[#d8dae0] disabled:cursor-default
            "/>
      </div>
   </div>
   <div class="w-full md:w-1/2 -left-[65px] lg:w-1/3 relative px-4 mx-auto">
      <div class="mb-2 relative top-[38px]">
         <button class = 'bg-blue-400 text-white px-5 py-[11px] bottom-[1px] relative rounded-md shadow-sm cursor-default'>Submit LWA Token</button>
   </div>
   </div> */}

   <img class = 'mx-auto block h-fit w-[130px]  sm:right-[12px] right-[20px] -mt-[25px] mb-7 relative top-[12px]' src = {image}></img>


   </div>

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
    {
    props.segment-1===2?
    <>
    <a onClick={()=> {
       if(userCon.user && userCon.user.pipeline && userCon.user.pipeline.current !== 'seo'){
         saveAllDetailsKeyWords()
         props.changeSeg(4)
      }
    }} class={`
    lg:py-2 py-2.5
    px-5
    lg:w-1/4 md:w-[40%] sm:w-1/2 w-[85%]
    lg:px-8 
    -mb-5
    mt-9
    mx-auto
    block
    relative
    xl:px-6
    items-center
    justify-center
    text-center text-white text-lg
    ${
       userCon.user && userCon.user.pipeline && userCon.user.pipeline.current !== 'seo'?
      'bg-blue-700 hover:bg-opacity-90 hover:shadow-md cursor-pointer mt-2':
      'bg-blue-300 cursor-default text-gray-100'
    }
    rounded-md
    `}>
    Save All Details & Continue
    </a>
    {
      userCon.user && userCon.user.pipeline && userCon.user.pipeline.current !== 'seo'?
      <div class = 'block mx-auto top-[30px] ml-1 mt-[7px] mb-7 relative'>{
      !userCon.user.pipeline.keyWordsBeingEdited?
      <TiTick class = 'text-green-600 text-center mx-auto relative mb-3 mt-1 text-4xl bg-gradient-to-br block from-blue-100 to-indigo-100 rounded-full'/>:
      <><ImCross class = 'text-red-600 text-center mx-auto relative mb-2 mt-1 text-4xl p-1 bg-gradient-to-br block from-blue-100 to-indigo-100 rounded-full'/> <h1 class = 'text-center uppercase mb-3 font-semibold underline'>Being Edited...</h1></>
   }</div>:''}
   </>
    
    :''}




     <div className="mx-auto xl:w-[90%] w-full   bg-gradient-to-tr from-blue-100 to-indigo-200 xl:px-4 px-1 xl:py-1 py-1 rounded-md shadow-lg border-2 border-dotted border-blue-700 mt-[56px] mb-[60px]">
     {contentList[props.segment-1]}
     </div> 


    </>)
}

export default ContentSetup