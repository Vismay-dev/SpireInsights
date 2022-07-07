import {MdOutlineStarRate} from 'react-icons/md'
import {GiPriceTag} from 'react-icons/gi'
import GaugeChart from 'react-gauge-chart'
import {FcRatings, FcMoneyTransfer} from 'react-icons/fc'
import {SiMarketo} from 'react-icons/si'
import {IoPricetags} from 'react-icons/io5'
import ClipLoader from "react-spinners/ClipLoader";
import logo from '../../../logo.png'
import ReactSvgPieChart from "react-svg-piechart"
import { Chart } from 'react-charts'

import Reviews from '../../../Modals/Reviews'

import {useEffect, useState, useMemo} from 'react'

const TopProdResult = (props) => {

   
   let avgDemand = 0;
   let avgSupply = 0;
   let curr = 1;

   const [avgDemandState, setAvgDemandState] = useState(0)
   const [avgSupplyState, setAvgSupplyState] = useState(0)
   const [keyWordsNum, setKeyWordsNum] = useState(0)
   console.log(props.analysis)
      const data = useMemo(
         
         () =>
         
         props.operation === 'marketplace-overview' && props.analysis && props.analysis.searchVolumeData && props.analysis.relatedKeyWordData && props.analysis.relatedKeyWordData.length!==0 ?

         [ 
            {
            label: `Demand to Supply - ${props.keyword}`,
            data: [[0, avgDemandState], [1, avgSupplyState]]
          }
          
          ,...props.analysis.relatedKeyWordData.map(elem=> {
            return (
               {
                  label: `Demand to Supply - ${elem.keyWordSentence}`,
                  data: [[0, elem.searchVolume], [1, elem.searchResults]]
               }
            )
         })]

         :
         
         [

        {
          label: `Demand to Supply - ${props.keyword}`,
          data: [[0, avgDemandState], [1, avgSupplyState]]
        },
      ],
      [props.analysis, props.operation, avgDemandState, avgSupplyState]
    )

   
    const axes = useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )

   useEffect(()=> {
      if(props.operation === 'marketplace-overview' && props.analysis && props.analysis.searchVolumeData && props.analysis.searchVolumeData[0] && props.analysis.relatedKeyWordData){

         let h = props.analysis.searchVolumeData[0].searchResults
         for(let i = 0;i< props.analysis.searchVolumeData.length; i++){
        avgDemand += props.analysis.searchVolumeData[i].searchVolume
        avgSupply += props.analysis.searchVolumeData[i].searchResults
        if(props.analysis.searchVolumeData[i].searchResults>h){
           h= props.analysis.searchVolumeData[i].searchResults;
        }
        }
        
        
        for(let i = 0;i<
         props.analysis.searchVolumeData.length; i++){
          if(props.analysis.searchVolumeData[i].searchResults!==h){
           curr += props.analysis.searchVolumeData[i].searchResults/parseFloat(h)
          }
        } 
          
        if(props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchVolume === null){
         setAvgSupplyState(50)
         setAvgDemandState(50)
        }

        avgSupply = avgSupply/curr
        avgDemand = avgDemand/parseFloat(props.analysis.searchVolumeData.length)

        setAvgSupplyState(avgSupply);
        setAvgDemandState(avgDemand)

      }

   },[props.analysis, props.operation])

   const [reviewsShow, setReviewsShow] = useState(false)
   const [reviewData, setReviewData] = useState([])
return (<>
    {
      reviewsShow?
      <Reviews data = {reviewData} close = {()=> {setReviewsShow(false)}}/>
      :''
    }
    {
      props.loading?
      <div class = 'h-[450px] -mb-4 bg-gradient-to-br mt-6 from-blue-100 to-indigo-100'>
<div class = 'top-[144px] left-[2.5px] relative mx-auto block text-center'>
<ClipLoader color={'#0A74FE'} loading={props.loading} size={110} />
</div>

</div>

      :
        props.analysis?
        props.operation === 'track-product'?
        <section class="pt-[86px] lg:pt-[77px] -mb-5 pb-10 lg:pb-20 bg-[#F3F4F6]">
           <h1 class = 'text-4xl text-center bottom-12 font-bold relative underline'>Overview</h1>
                <h3 class = 'text-xl text-center bottom-10 lg:mb-4 mb-2 font-semibold relative '>Entered ID = {props.keyword&&props.keyword.toUpperCase()}</h3>



{
   Object.keys(props.analysis.productAnalysis).length===0? 
<h1 class = 'text-2xl text-center block pb-[70px] mx-auto font-semibold left-2 mt-[50px]'><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mb-6 mx-auto block text-center text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg> Unable to Fetch Results..</h1>
   :''
}
            <div class = {`${Object.keys(props.analysis.productAnalysis).length===0?'hidden':'lg:flex block'} lg:mb-1 mb-5 xl:container mx-auto xl:right-[39px] xl:px-0 px-7 xl:gap-x-0 gap-x-7  relative -top-2`}>
               <div class = 'lg:w-1/2 md:w-[80%] sm:w-[90%] w-[96%] block mx-auto mt-[30px] xl:top-0 lg:top-[20px] relative'>
    <div class="flex flex-col items-center justify-center h-fit xl:max-w-[500px] max-w-[700px] left-2 mx-auto">
        <div class="w-full h-72 bg-gray-800 border-2 border-blue-700 bg-no-repeat bg-center  ring-2 ring-blue-700 ring-offset-2 ring-offset-indigo-200 bg-contain rounded-lg shadow-md" style={{'background-image': `url(${props.analysis.productAnalysis.image})`}}></div>

        <div class=" -mt-10 overflow-hidden  rounded-lg shadow-lg sm:w-[293px] w-[260px] top-[3px] relative bg-gray-800">
            <h3 class="py-2 pb-1 font-bold truncate px-3 tracking-wide text-center  uppercase text-white">{props.analysis.productAnalysis.title}</h3>
            
            <div class="flex items-center text-center justify-between px-3 py-2 pt-1.5 border-t-2 border-dotted border-blue-500  bg-gray-800">
                <span class="font-bold text-center relative bottom-[1px] mx-auto block text-gray-200">{props.analysis.productAnalysis.price? 'AED ' +  props.analysis.productAnalysis.price: props.analysis.productAnalysis.ASIN}</span>
            </div>
        </div>
    </div>

    <a 
   onClick = {()=> {
      setReviewData({reviews:props.analysis.productAnalysis.reviews,
      title:props.analysis.productAnalysis.title,
      asin:props.keyword.toUpperCase(),
      link:props.analysis.productAnalysis.link
      })
      setReviewsShow(true)
   }}
    class="
   py-4
   px-10
   lg:px-8
   xl:px-10 w-[300px]
   items-center
   justify-center
   right-[0.5px] relative
   rounded-xl shadow-md hover:shadow-lg
   border-2 border-indigo-200 hover:ring-2 
   ring-indigo-500 ring-offset-2
   text-lg
   cursor-pointer
   text-center text-white
   block mx-auto mt-10
   bg-blue-700
   hover:bg-opacity-90

   font-medium uppercase
   ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] w-[22px] mr-[8px] bottom-[1.5px] inline relative text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
Read Reviews
</a>

</div>
   

               <div class = 'lg:w-1/2 md:w-[80%] sm:w-[90%] w-[96%] lg:mt-0 mt-10 block mx-auto bg-gradient-to-tr from-blue-100 rounded-sm pb-6 shadow-md to-indigo-200'>
                        <h1 class = 'font-semibold text-[20px] pt-2 pb-2.5  bg-white text-center truncate md:px-16 sm:px-10 px-4 border-b-2 border-blue-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800 relative inline bottom-[2.5px] mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
                           {props.analysis.productAnalysis.title}</h1>
                           
                        <h1 class = 'font-normal sm:px-7 px-3 underline text-[16px] pt-2.5 pb-1.5  text-center'><svg xmlns="http://www.w3.org/2000/svg" class="h-[17px] w-[17px] inline relative bottom-[1.4px] right-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> Search Result Pages (SERPS) = Product List Results for Search Entries</h1>


<hr class = 'border-t-2 border-blue-700 border-dotted w-[60%] my-4 mt-1.5 mx-auto block'/>
      <h1 class = 'text-center font-semibold sm:px-10 px-6 text-lg my-1 mb-1.5 relative block'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 relative inline w-6 mr-1 right-[1px] bottom-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
         Appeared in  <strong class = 'text-blue-700 text-[26px] mx-1'>{props.analysis.productAnalysis.count}</strong> {props.analysis.productAnalysis.count===1?'':'Total'} Search Result Page{props.analysis.productAnalysis.count===1?'':'s'} (SERPS)</h1>

         <h1 class = 'text-center font-semibold sm:px-10 px-6 text-lg mb-3 relative block'>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 relative inline w-6 mr-1 right-[1px] bottom-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
         Searches made for this Product:  <strong class = 'text-blue-700 text-[26px] mx-1'>{props.analysis.productAnalysis.totalSearchVolume}</strong> </h1>


         <hr class = 'border-t-2 border-blue-700 border-dotted w-[60%] my-5 mx-auto block'/>

                        <h1 class = 'font-normal sm:px-10 px-6 text-[16px] pt-1 pb-1.5 mt-1 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Rank #1</strong> in <strong>{props.analysis.productAnalysis.pos_1}</strong> Search Result Page{props.analysis.productAnalysis.pos_1===1?'':'s'} (SERPS).</h1>
                        <h1 class = 'font-normal text-[16px] sm:px-10 px-6 pb-1.5 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Ranks #2-3</strong> in <strong>{props.analysis.productAnalysis.pos_2_3}</strong> Search Result Page{props.analysis.productAnalysis.pos_2_3===1?'':'s'} (SERPS).</h1>
                        <h1 class = 'font-normal text-[16px] sm:px-10 px-6 pb-1.5 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Ranks #4-10</strong> in <strong>{props.analysis.productAnalysis.pos_4_10}</strong> Search Result Page{props.analysis.productAnalysis.pos_4_10===1?'':'s'} (SERPS).</h1>
                        <h1 class = 'font-normal text-[16px] sm:px-10 px-6 pb-1.5 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Ranks #11-100</strong> in <strong>{props.analysis.productAnalysis.pos_11_100}</strong> Search Result Page{props.analysis.productAnalysis.pos_11_100===1?'':'s'} (SERPS).</h1>

                           <hr class = 'border-t-2 border-blue-700 border-dotted w-[60%] my-4 mx-auto block'/>

                        <button class = 'bg-white hover:bg-gray-100 shadow-md p-2 px-5 py-2 rounded-lg border-2 border-blue-700 hover:shadow-lg mt-7  block mx-auto relative text-lg font-semibold' onClick={()=> {
                           window.open(props.analysis.productAnalysis.link, '_blank')
                        }}>View Product</button>
               </div>


            </div>


<hr class = 'border-b-2 border-dotted border-blue-700 w-[80%] mx-auto block my-14 mb-[92px] mt-14'/>

<h1 class = 'text-4xl text-center bottom-12 font-bold relative underline'>Direct Competition</h1>
                <h3 class = 'text-xl text-center bottom-10 mb-7 font-semibold relative '>View Immediate Alternatives/Substitutes for Entered ASIN ID</h3>




                {
   props.analysis.competitorData.length==0? 
<h1 class = 'text-2xl text-center block pb-[90px] mb-[100px] mx-auto font-semibold left-2 mt-[50px]'><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mb-6 mx-auto block text-center text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg> Unable to Fetch Results..</h1>
   :''
}


<div class = 'mt-3 relative block -mb-24'>
{
   props.analysis.competitorData.map((elem,i)=> {
      return (
         <>
         <div class = ' bottom-10 -top-9 relative mb-4'>
         <h3 class = 'text-3xl text-center font-bold relative '>Competitive <strong class = 'text-blue-700'>Product</strong> <strong class = 'text-4xl'>#{i+1}</strong></h3>
         <h2 class = 'text-xl mt-1 font-semibold underline text-center'>ASIN ID: {elem.ASIN}</h2>
         
         <div class = 'lg:flex block lg:mb-1 xl:container mx-auto xl:right-[39px] xl:px-0 px-7 xl:gap-x-0 gap-x-7 lg:mt-14 mt-16 mb-[10px] pb-[58px]  relative -top-2'>
             
             
             
         <div class = 'lg:w-1/2 md:w-[80%] sm:w-[90%] w-[96%] block mx-auto mt-[30px] xl:top-0 lg:top-[20px] relative'>
    <div class="flex flex-col items-center justify-center h-fit xl:max-w-[500px] max-w-[700px] left-2 mx-auto">
        <div class="w-full h-72 bg-gray-800 border-2 border-blue-700 bg-no-repeat bg-center  ring-2 ring-blue-700 ring-offset-2 ring-offset-indigo-200 bg-contain rounded-lg shadow-md" style={{'background-image': `url(${elem.image})`}}></div>

        <div class=" -mt-10 overflow-hidden  rounded-lg shadow-lg sm:w-[293px] w-[260px] top-[3px] relative bg-gray-800">
            <h3 class="py-2 pb-1 font-bold truncate px-3 tracking-wide text-center  uppercase text-white">{elem.title}</h3>
            
            <div class="flex items-center text-center justify-between px-3 py-2 pt-1.5 border-t-2 border-dotted border-blue-500  bg-gray-800">
                <span class="font-bold text-center relative bottom-[1px] mx-auto block text-gray-200">{elem.price? 'AED ' +  elem.price: elem.ASIN}</span>
            </div>
        </div>
    </div>

    <a 
    onClick = {()=> {
      setReviewData({reviews:elem.reviews,
      title:elem.title,
      asin:elem.ASIN.toUpperCase(),
      link:elem.link
      })
      setReviewsShow(true)
   }}
    class="
   py-4
   px-10
   lg:px-8
   xl:px-10 w-[300px]
   items-center
   justify-center
   right-[0.5px] relative
   rounded-xl shadow-md hover:shadow-lg
   border-2 border-indigo-200 hover:ring-2 
   ring-indigo-500 ring-offset-2
   text-lg
   cursor-pointer
   text-center text-white
   block mx-auto mt-10
   bg-blue-700
   hover:bg-opacity-90

   font-medium uppercase
   ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-[22px] w-[22px] mr-[8px] bottom-[1.5px] inline relative text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
Read Reviews
</a>

</div>
             
                         <div class = 'lg:w-1/2 md:w-[80%] sm:w-[90%] w-[96%] lg:mt-0 mt-10 block mx-auto bg-gradient-to-tr from-blue-100 rounded-sm pb-6 shadow-md to-indigo-200'>
                        <h1 class = 'font-semibold text-[20px] pt-2 pb-2.5  bg-white text-center truncate md:px-16 sm:px-10 px-4 border-b-2 border-blue-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800 relative inline bottom-[2.5px] mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
                           {elem.title}</h1>
                           
                        <h1 class = 'font-normal sm:px-7 px-3 underline text-[16px] pt-2.5 pb-1.5  text-center'><svg xmlns="http://www.w3.org/2000/svg" class="h-[17px] w-[17px] inline relative bottom-[1.4px] right-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> Search Result Pages (SERPS) = Product List Results for Search Entries</h1>


<hr class = 'border-t-2 border-blue-700 border-dotted w-[60%] my-4 mt-1.5 mx-auto block'/>
      <h1 class = 'text-center font-semibold sm:px-10 px-6 text-lg my-1 mb-1.5 relative block'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 relative inline w-6 mr-1 right-[1px] bottom-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
         Appeared in  <strong class = 'text-blue-700 text-[26px] mx-1'>{elem.count}</strong> {elem.count===1?'':'Total'} Search Result Page{elem.count===1?'':'s'} (SERPS)</h1>

         <h1 class = 'text-center font-semibold sm:px-10 px-6 text-lg mb-3 relative block'>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 relative inline w-6 mr-1 right-[1px] bottom-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
         Searches made for this Product:  <strong class = 'text-blue-700 text-[26px] mx-1'>{elem.totalSearchVolume}</strong> </h1>


         <hr class = 'border-t-2 border-blue-700 border-dotted w-[60%] my-5 mx-auto block'/>

                        <h1 class = 'font-normal sm:px-10 px-6 text-[16px] pt-1 pb-1.5 mt-1 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Rank #1</strong> in <strong>{elem.pos_1}</strong> Search Result Page{elem.pos_1===1?'':'s'} (SERPS).</h1>
                        <h1 class = 'font-normal text-[16px] sm:px-10 px-6 pb-1.5 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Ranks #2-3</strong> in <strong>{elem.pos_2_3}</strong> Search Result Page{elem.pos_2_3===1?'':'s'} (SERPS).</h1>
                        <h1 class = 'font-normal text-[16px] sm:px-10 px-6 pb-1.5 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Ranks #4-10</strong> in <strong>{elem.pos_4_10}</strong> Search Result Page{elem.pos_4_10===1?'':'s'} (SERPS).</h1>
                        <h1 class = 'font-normal text-[16px] sm:px-10 px-6 pb-1.5 xl:pl-16  xl:text-left text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative mr-1 inline bottom-[1px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                           Appeared in <strong>Ranks #11-100</strong> in <strong>{elem.pos_11_100}</strong> Search Result Page{elem.pos_11_100===1?'':'s'} (SERPS).</h1>




                           <hr class = 'border-t-2 border-blue-700 border-dotted w-[60%] my-4 mx-auto block'/>

                        <button class = 'bg-white hover:bg-gray-100 shadow-md p-2 px-5 py-2 rounded-lg border-2 border-blue-700 hover:shadow-lg mt-7  block mx-auto relative text-lg font-semibold' onClick={()=> {
                           window.open(elem.link, '_blank')
                        }}>View Product</button>
               </div>







               


            </div>

{
   i===props.analysis.competitorData.length-1?'':
   <hr class = 'border-b-2 w-[600px] relative bottom-8 mt-2 mb-4 border-dashed block mx-auto border-blue-700'/>
}

         </div>
         </>

      )
   })
}
</div>

         </section>
        :
        props.operation === 'top-prod'?
        <section class="pt-16 lg:pt-[80px] -mb-5 pb-10 lg:pb-20 bg-[#F3F4F6]">
            
             <div class="container mx-auto px-3">
                <h1 class = 'sm:text-4xl text-3xl px-2 mt-3 lg:mt-0 text-center bottom-12 font-bold relative underline'>Overview - {props.keyword&&props.keyword.split(' ').map(str=>{return (str.charAt(0).toUpperCase() + str.slice(1))}).join(' ')}</h1>
                <h3 class = 'text-xl text-center bottom-10 -mb-2 font-semibold relative '>Understand the Competition</h3>

             <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 sm:p-5 px-1 xl:pt-6 pt-3 xl:pb-5 pb-2 mb-16 shadow-lg mx-auto">             
                <div class = 'w-full py-4   md:w-full xl:w-1/2 px-4'>
                <div class="bg-white shadow-sm   p-3 h-full flex rounded-lg overflow-hidden mb-1">
                <div class = 'w-[200px] md:right-0 right-3.5 xl:block lg:hidden sm:block hidden top-1 relative '><GaugeChart id="gauge-chart2" 
  nrOfLevels={5} 
  percent={(props.analysis.avgCompetitiveRating/5.0)} 
  arcWidth={0.2}
/></div>
<div class = 'xl:ml-2.5 xl:mr-5 mx-auto xl:top-[5px] top-[4px] xl:mb-0 mb-6 mt-1 relative xl:text-left lg:text-center sm:text-left text-center font-semibold md:right-0 sm:right-3.5'> <h1 class = ' relative inline underline '><FcRatings class = 'mr-[6px] inline text-2xl bottom-[1px] relative'/>Average Competitive Rating:</h1> <span class = 'text-2xl top-[2px] left-[6px] relative inline font-bold mr-2.5 text-blue-700'>{props.analysis.avgCompetitiveRating}</span>/5<br/>
<h1 class = 'mt-4 top-[9px] relative inline xl:text-left lg:text-center sm:text-left text-center underline '><SiMarketo class = 'mr-[6px] inline text-2xl bottom-[1px] relative'/>Evaluation:</h1> <span class = {`${props.analysis.avgCompetitiveRating>=4.5||props.analysis.avgCompetitiveRating<2?'text-lg left-[1px] mr-0.5 top-[10px]':'text-xl left-[6px] top-[10px] mr-1.5 relative'}   relative inline font-bold  text-blue-700`}>{props.analysis.avgCompetitiveRating>=4.5?'Very Strong':props.analysis.avgCompetitiveRating>3.5?'Strong':props.analysis.avgCompetitiveRating>3?'Moderate':props.analysis.avgCompetitiveRating>2?'Poor':'Very Poor'}</span><span class = 'relative top-[9px]'> {props.analysis.avgCompetitiveRating>4.5||props.analysis.avgCompetitiveRating<2?'C':'c'}ompetition</span>
</div>

                </div>
                </div>
                
                <div class = 'w-full py-4  md:w-full  xl:w-1/2 px-4'>
                    <div class="bg-white flex shadow-sm xl:pb-0 lg:pb-[53px] sm:pb-9 pb-12 xl:mx-0 mx-auto h-full xl:text-left lg:text-center sm:text-left text-center rounded-lg overflow-hidden mb-1">
                    <IoPricetags class = 'text-blue-700 xl:block lg:hidden sm:block hidden  relative text-7xl top-6 left-14'/>
                    <div class = 'xl:ml-[104px] xl:mr-7 md:left-0 sm:left-3 mx-auto md:top-[24px] top-[22px] relative font-semibold'> <h1 class = ' relative inline underline text-xl'><FcMoneyTransfer class = 'mr-[8px] inline text-2xl bottom-[0px] relative sm:uppercase'/>Average Pricing Range:</h1> <br/>
 <span class = {` relative text-center sm:text-2xl text-xl top-[8px] left-5 mx-auto inline font-bold mr-2.5 text-blue-700`}>AED {props.analysis&&props.analysis.averagePricingRange.low} - {props.analysis&&props.analysis.averagePricingRange.high}</span>
</div>
                </div>
                </div>
            </div>
            </div>


            <hr class = 'w-[95%] left-[2.5%] border-b-blue-700 border-b-2 bottom-8 relative border-dotted'/>
<h1 class = 'xl:text-4xl text-3xl px-2 text-center bottom-6 mt-9 font-bold relative underline'>High-Performing Keywords</h1>
                <h3 class = 'text-xl text-center bottom-4 mb-6 font-semibold relative '>Increase Consumer Exposure</h3>

            <div class="container mx-auto -mt-1">
             <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 mb-16 shadow-lg mx-auto">             
        


                <div class = 'w-full py-4 xl:px-20 lg:px-0  px-4'>
                    <div class="bg-white sm:flex block mx-auto shadow-sm h-full p-4 px-10 pt-6 rounded-lg overflow-hidden mb-1">
                    
                    
                    <div class={`sm:flex block mx-auto sm:mb-1 mb-3 sm:mt-0 mt-1 ${keyWordsNum === 1 || keyWordsNum === 2 ? 'sm:ml-2 sm:flex sm:mx-0 mx-auto block':''} items-center text-center sm:hidden sm:bottom-[3px] bottom-[-4px] relative rounded-lg`}>
   <a onClick={()=> {
      setKeyWordsNum(1)
   }} class={`
   py-[10px]
   sm:py-3
   px-[12px]
   cursor-pointer
   sm:px-6
   inline-flex
   items-center
   justify-center
   font-semibold
   border-blue-700
   border border-light
   text-center 
   hover:bg-blue-700 hover:text-white
   rounded-l-lg
 
   transition-all
   ${keyWordsNum===1?"border-blue-700 text-center text-white text-base bg-blue-700":'text-black bg-white'}
   hover:bg-blue-700 hover:text-white hover:border-gray-300
   `}>
   # 1-4
   </a>
  
   <a onClick={()=> {
      setKeyWordsNum(2)
   }} class={`
      py-[10px]
      sm:py-3
      px-[12px]
      sm:px-6
      inline-flex
      items-center
      justify-center
      font-semibold
      border-blue-700
      border border-light
      text-center text-base
      cursor-pointer
      hover:bg-blue-700 hover:text-white 
       
      transition-all
      ${keyWordsNum===2?"border-blue-700 text-center text-white text-base bg-blue-700":'text-black bg-white'}
      hover:bg-blue-700 hover:text-white hover:border-gray-300
   
      rounded-r-lg
      `}>
   # 5-8
   </a>
</div>
                    
                    <ol class = {` sm:w-1/2  w-[85%]  ${keyWordsNum===1?'block sm:top-5 top-7 relative sm:right-3 sm:mx-0 mx-auto':'hidden sm:block sm:bottom-3 relative'} lg:top-2 xl:top-0 lg:-mb-4 block text-center`}>
                        {
                            props.analysis.topKeyWords.words.map((word,i)=> {
                                if(i<4){
                                return (
                                    <li class="flex text-base text-center text-body-color md:mb-8 mb-12 relative  xl:mb-4">
      <span class="
         bg-blue-700
         text-white
         rounded
         mr-2
         text-base
         flex
         relative top-1.5
         items-center
         xl:mb-0 mb-2
         justify-center
         h-6
         sm:w-[24px] w-[29px]
         ">
      {i+1}
      </span>
      <p><span class = 'font-semibold ml-2 xl:text-xl text-lg underline xl:uppercase'>{word&&word.replace('.','').replace(',','')}</span> - Appeared in <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.count[i]}</span> out of <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.totalNum}</span> products. </p>
   </li>

                                )}else {
                                    return (<></>)
                                }
                            })
                        }
   
   
</ol>

<ol class = {`relative sm:w-1/2 w-[85%] ${keyWordsNum===2?'block sm:-top-4 -top-2 sm:-left-[17px] sm:mx-0 mx-auto relative':'hidden sm:block'} block text-center `}>
                        {
                            props.analysis.topKeyWords.words.map((word,i)=> {
                                if(i>=4){
                                return (
                                    <li class="flex text-base text-center text-body-color md:mb-8 mb-14 lg:top-2 xl:top-0 top-10 relative xl:mb-4">
      <span class="
         bg-blue-700
         text-white
         rounded
         mr-1.5
         text-base
         flex
         xl:mb-0 mb-2
         top-2 relative
         items-center
         justify-center
         h-6
         sm:w-[24px] w-[29px]
         ">
      {i+1}
      </span>
      <p><span class = 'font-semibold ml-2 xl:text-xl text-lg underline xl:uppercase'>{word&&word.replace('.','').replace(',','')}</span> - Appeared in <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.count[i]}</span> out of <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.totalNum}</span> products. </p>
   </li>

                                )}else {
                                    return (<></>)
                                }
                            })
                        }
   
   
</ol>

                </div>
                </div>
            </div>
            </div>

            <hr class = 'w-[95%] left-[2.5%] border-b-blue-700 border-b-2 bottom-8 relative border-dotted'/>
<h1 class = 'sm:text-4xl text-3xl px-2 text-center bottom-6 mt-9 font-bold relative underline'>Best-Selling Products</h1>
                <h3 class = 'text-xl text-center bottom-4 mb-5 font-semibold relative '>Insights - Highest Ranking Listings </h3>




           <div class="lg:container lg:w-full w-[95%] lg:mt-0 mt-2 lg:mb-0 mb-8 mx-auto">
              <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 shadow-lg mx-auto">             
                 {props.analysis.currentCompetition.map((product,i)=> {
                    return (
                        <div key = {i} class="w-full py-4   md:w-1/2 xl:w-1/3 px-4">
                    <div class="bg-white shadow-sm h-full rounded-lg overflow-hidden mb-1">
                       <img
                          src={product.image}
                          alt="image"
                          class="w-full object-contain p-4 h-[270px]"
                          />
                       <div class="p-8 sm:p-9 border-t-2 border-t-blue-700 border-dotted md:p-7 xl:p-9 xl:p-6 text-center">
                          <h3 class = ''>
                             <a
                                href="javascript:void(0)"
                                class="
                                text-ellipsis overflow-hidden
                                font-semibold
                    
                                text-dark text-xl
                                sm:text-[22px]
                                mb-5
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                               truncate
                                block
                                hover:text-primary
                                "
                                >
                             {product.title}
                             </a>
                          </h3>
                          <p class="text-base text-body-color leading-relaxed mb-6">
                             "{product.title}"
                          </p>
                          <p class="text-lg font-semibold text-body-color leading-relaxed mb-3">
                          <GiPriceTag class = ' bottom-[2.75px] mr-[3px] text-blue-700 relative inline text-2xl'/>  AED <span class= 'text-2xl font-bold right-[0px] -ml-1 relative text-blue-700'>{product&&product.price?product.price.split('AED')[1]:''}</span>
                          </p>
                          <p class="text-lg font-semibold text-body-color leading-relaxed mb-7">
                          <MdOutlineStarRate class = ' bottom-[3px] text-yellow-600 left-[1px] relative inline text-2xl'/> Rated <span class= 'text-2xl font-bold  text-yellow-600'>{product&&product.stars?product.stars.substring(0,3):''}</span>/5
                          </p>
                          <a
                            onClick={()=> {
                                window.open(product.reviews)
                            }}
                             class="
                             inline-block
                             py-2
                             px-5
                             border border-[#E5E7EB]
                             rounded-lg
                             text-base text-body-color
                             font-medium
                             hover:border-primary hover:bg-blue-700 hover:text-white
                             transition
                             cursor-pointer
                             mr-2
                             "
                             >
                          View Reviews
                          </a>
                          <a
                            onClick={()=> {
                                window.open(product.link)
                            }}
                             class="
                             inline-block
                             py-2
                             ml-2
                             px-5
                             border border-[#E5E7EB]
                             rounded-lg
                             text-base text-body-color
                             font-medium
                             hover:border-primary hover:bg-blue-700 hover:text-white
                             transition
                             cursor-pointer
                             "
                             >
                          View Product
                          </a>
                       </div>
                    </div>
                 </div>
                    )
                 })}
                 
                 
                 
              </div>
           </div>
        </section>
        :
        props.operation === 'marketplace-overview'?


<section class="pt-[73px] lg:pt-[80px] -mb-5 pb-10 lg:pb-20 bg-[#F3F4F6]">
            
<h1 class = 'sm:text-4xl text-3xl px-3 lg:mt-0 mt-[15px] block text-center bottom-12 font-bold relative underline'>Overview - {props.keyword&&props.keyword.split(' ').map(str=>{return (str.charAt(0).toUpperCase() + str.slice(1))}).join(' ')}</h1>
                <h3 class = 'text-xl text-center bottom-10 -mb-2 font-semibold relative '>Understand the Market</h3>
                <h1 class = 'text-xl px-2 font-semibold text-center left-[3.5px] top-[8px] relative underline uppercase mb-6'><span class = 'no-underline'>1. </span><span class = 'text-blue-900'>Demand</span>-<span class = 'text-indigo-700'>Supply</span> Balance</h1>
                 
                <div class="container mx-auto bg-white px-12 py-2  rounded-sm shadow-md  sm:w-[620px] w-[90%] sm:pt-2 pt-2 sm:pb-5 pb-5 sm:pl-14 pl-4 z-[5] mb-[46px] left-[2px] relative">

<div class = 'h-fit z-[400] mt-3  block relative'>

<div class = 'w-[18px] h-[18px] bg-blue-800 inline-block  mt-2 mb-2'></div> <p class = 'inline  mb-2 mt-1 relative bottom-3 left-1 '> - <strong>Demand</strong> (Search Volume) - <span class = 'font-semibold'>{props.analysis&&props.analysis.searchVolumeData&&props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchVolume === null? 'Error' : `${String(Math.round(avgDemandState/parseFloat(avgSupplyState+avgDemandState)*100)).substring(0,2)}%`}</span></p><br/>
   <div class = 'w-[18px] h-[18px] bg-indigo-500 inline-block'></div> <p class = 'inline left-1 bottom-1  relative '>- <strong>Supply</strong> (Available Products Options) - <span class = 'font-semibold'>{props.analysis&&props.analysis.searchVolumeData&&props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchResults === null? 'Error' : `${String(Math.round(avgSupplyState/parseFloat(avgSupplyState+avgDemandState)*100)).substring(0,2)}%`}</span></p>
   
    <div class = 'sm:w-[200px] w-[150px] sm:left-0 left-[25px] relative sm:mt-3.5 mt-[18px] block mx-auto'>
<ReactSvgPieChart
         label={props => { return props.dataEntry.title}}

    data={[{
   color:'#004999',
   title:`${props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchVolume === null? 'Error' : `Demand ${String(Math.round(avgDemandState/parseFloat(avgSupplyState+avgDemandState)*100)).substring(0,2)}%`}`, value :avgDemandState
},
{
   color:'#6600ff',
title:`${props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchVolume === null? 'Error' : `Supply ${String(Math.round(avgSupplyState/parseFloat(avgSupplyState+avgDemandState)*100)).substring(0,2)}%`}`,  value :  avgSupplyState
}]}
    // If you need expand on hover (or touch) effect
    expandOnHover
    // If you need custom behavior when sector is hovered (or touched)
  /></div>

      </div>
      </div>
      <h1 class = 'text-xl px-2 font-semibold text-center left-[3.5px]  relative underline -mt-2 uppercase mb-[22px]'><span class = 'no-underline'>2. </span><span class = 'text-blue-700'>Alternative Key Words</span> - Analysis</h1>
      <div class="container mx-auto -mt-1 lg:px-0 px-5">
            <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 mt-1 relative mb-16 shadow-lg mx-auto">             
       
       <div class = {`lg:w-[48%] w-[100%] ${props.analysis.relatedKeyWordData.length===0?'h-[310px]':props.analysis.relatedKeyWordData.length===2?'h-[375px]':'h-[430px]'}   lg:left-[1%] rounded-md shadow-md relative bg-white`}>
            <div
      class = {`w-[90%] ${props.analysis.relatedKeyWordData.length===0?'h-[290px]':props.analysis.relatedKeyWordData.length===2?'h-[355px]':'h-[410px]'} top-[10px] z-[400] relative block mx-auto right-1`}

    >
      <Chart data={data} axes={axes} tooltip />
    </div>
    </div>
    <div
      class = 'lg:w-[48%] w-[100%] lg:mt-0 mt-6 lg:left-[3%] relative rounded-md shadow-md bg-white px-1 pt-2 overflow-hidden'>
      <h1 class = 'text-center text-lg -mb-[3px] underline font-semibold relative px-2 top-[7px] uppercase right-[1px]'>Alternative/Related Keywords</h1>

{
props.analysis.relatedKeyWordData.length===0?
<>
<h1 class = 'text-2xl text-center font-semibold mt-[70px]'><svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mb-6 mx-auto block text-center text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg> Oops.. No Valid Alternatives Found</h1>
</>
:
<>
<div class = 'relative mx-auto block text-left top-[30px] left-3'>
<div class = {`w-[15px]  h-[15px] bg-blue-500 inline-block mt-2 `}></div><p class = 'inline text-sm  mb-2 mt-1 relative bottom-[3px] left-1 '> - Original Key Words: <strong>{props.keyword}</strong></p><br/>
{
   props.analysis.relatedKeyWordData.map((elem,i)=> {
      return (
         <>
        <div class = {`w-[15px] h-[15px] ${i===0?'bg-red-500':i===1?'bg-yellow-400':i===2?'bg-green-500':''}  inline-block mt-2`}></div><p class = 'inline  mb-2 mt-1 text-sm  relative bottom-[3px] left-1 '> - Alternative Key Words #{i+1}: <strong>{elem.keyWordSentence}</strong></p><br/>
         </>
      )
   })
}
</div>

<div class = 'mx-auto block text-center mt-10 mb-1 top-[8px] relative   pt-1 pb-2 rounded-md shadow-md text-sm bg-gradient-to-br from-blue-100 w-fit p-3 to-indigo-100'>
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg><p class = 'inline top-[1px] relative'><p class = 'inline mb-2 relative'> Slope shows <strong>Demand:Supply</strong> ratio.</p><br class = 'mb-2 relative block'/><br class = 'mb-2 relative block'/> <p class = 'relative block -mt-4'><strong>Upwards Sloping</strong> = Supply {'>'} Demand<br/> <strong>Downwards Sloping</strong> = Supply {'<'} Demand</p></p>
</div>

<div class="relative overflow-x-auto  text-center w-full mt-7 lg:mb-0 mb-5 top-[9px] sm:pr-0 pr-1 shadow-md sm:rounded-lg mx-auto block ">
    <table class=" text-sm text-center block mx-auto  relative text-gray-500">
        <thead class="text-sm mx-auto w-full text-center text-gray-700 uppercase bg-gray-200  ">
            <tr class = 'w-full'>
                <th scope="col" class="sm:px-6 px-2 w-full  py-1.5">
                   Metric
                </th>
                <th scope="col" class="sm:px-6 px-2 w-full  py-1.5">
                   Demand
                </th>
                <th scope="col" class="sm:px-6 px-2 w-full  py-1.5">
                   Supply
                </th>
            </tr>
        </thead>
        <tbody>
         {
            props.analysis.relatedKeyWordData.map((keyWord,i)=> {

               return (
                  <tr class="bg-white border-b text-sm border-t-2 border-black">
                  <th scope="row" class={`sm:px-8 px-3 py-1 border-r-[1px] border-gray-600 font-semibold ${i===0?'text-red-600':i===1?'text-yellow-600':i===2?'text-green-600':''}  whitespace-nowrap`}>
                      {keyWord.keyWordSentence}
                  </th>
                  <td class={`sm:px-8 px-3 py-1  border-r-[1px] border-gray-600 ${keyWord.searchVolume===null?'text-red-700 font-semibold':'text-gray-900'}`}>
                    {keyWord.searchVolume}
                  </td>
                  <td class="sm:px-8 px-3 py-1  border-r-[1px] border-gray-600 text-gray-900">
                  {keyWord&&keyWord.searchResults}
                  </td>
              </tr>
               )
            })
         }
        </tbody>
    </table>
</div>
</>
}
      
    </div>

       </div></div>
           
    

           <hr class = 'w-[95%] left-[2.5%] border-b-blue-700 border-b-2 sm:bottom-[23px] bottom-[26px] sm:mb-0 -mb-1 relative border-dotted'/>
<h1 class = 'sm:text-4xl text-3xl text-center bottom-6 mt-[45px] font-bold relative underline px-4'>Key Word - Demand Analysis</h1>
               <h3 class = 'text-xl text-center bottom-4 mb-6 font-semibold relative '>Gauge Market Demand</h3>

           <div class="container mx-auto -mt-1 px-2">
            <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 lg:-mb-1.5 mb-7 shadow-lg mx-auto">             
       
                 
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto block right-[4px]">
    <table class="w-full text-sm text-center block mx-auto relative text-gray-500">
        <thead class="text-base text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="sm:px-7 px-3 py-3">
                   Keyword 
                </th>
                <th scope="col" class="sm:px-6 px-3 py-3">
                    Search Volume
                </th>
                <th scope="col" class="sm:px-6 px-3 py-3">
                    Approximate no. of Products
                </th>
                <th scope="col" class="sm:px-6 px-3 py-3">
                    Demand Index
                </th>
            </tr>
        </thead>
        <tbody>
         {
            props.analysis.searchVolumeData.map(keyWord=> {

               return (
                  <tr class="bg-white border-b text-base border-t-2 border-black">
                  <th scope="row" class="sm:px-7 px-3 py-6 uppercase border-r-[1px] border-gray-600 font-medium text-gray-900  whitespace-nowrap">
                      {keyWord&&keyWord.keyWord}
                  </th>
                  <td class={`sm:px-6 px-3 py-6  border-r-[1px] border-gray-600 ${keyWord&&keyWord.searchVolume===null?'text-red-700 font-semibold':'text-gray-900'}`}>
                    {keyWord&&keyWord.searchVolume===null?'Unable to Fetch':keyWord&&keyWord.searchVolume}
                  </td>
                  <td class="sm:px-6 px-3 py-6  border-r-[1px] border-gray-600 text-gray-900">
                  {keyWord&&keyWord.searchResults}
                  </td>
                  <td class="sm:px-6 px-3 py-6 text-gray-900">
                      {
                        keyWord?
            Math.round(keyWord.searchVolume/parseFloat(keyWord.searchResults) * 100) / 100
            :0
                      }
                  </td>
              </tr>
               )
            })
         }
        </tbody>
    </table>
</div>

               
           </div>
           </div>

       </section>


        :
                 ''
        :


        <div class = 'h-[447px] -mb-4 bg-gradient-to-br mt-6 from-blue-100 to-indigo-200'>
                <img class = 'w-16 block top-[122px] mt-1 mx-auto relative' src = {logo}></img><br/>

                 <h1 class = 'text-3xl px-3 font-bold text-center top-[122px] relative text-gray-500'>E-Commerce Optimization<br/> with <span class = 'text-blue-700'>Spire Insights</span></h1>

        </div>
    }
    </>)
}

export default TopProdResult