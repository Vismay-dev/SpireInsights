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

import {useEffect, useState, useMemo} from 'react'

const TopProdResult = (props) => {

   
   let avgDemand = 0;
   let avgSupply = 0;
   let curr = 1;

   const [avgDemandState, setAvgDemandState] = useState(0)
   const [avgSupplyState, setAvgSupplyState] = useState(0)
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
      if(props.operation === 'marketplace-overview' && props.analysis && props.analysis.searchVolumeData && props.analysis.relatedKeyWordData){

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


return (<>
    
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
        <section class="pt-16 lg:pt-[77px] -mb-5 pb-10 lg:pb-20 bg-[#F3F4F6]">
           <h1 class = 'text-4xl text-center bottom-12 font-bold relative underline'>Overview</h1>
                <h3 class = 'text-xl text-center bottom-10 mb-6 font-semibold relative '>Entered ID = {props.keyword&&props.keyword.toUpperCase()}</h3>

            <div class = 'flex'>
               <div class = 'w-1/2'>
    <div class="flex flex-col items-center justify-center max-w-md relative top-2 left-2 mx-auto">
        <div class="w-full h-64 bg-gray-800 border-2 border-blue-700 bg-no-repeat p-2 bg-center  ring-2 ring-blue-700 ring-offset-2 bg-contain rounded-lg shadow-md" style={{'background-image': `url(${props.analysis.productAnalysis.image})`}}></div>

        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold truncate px-3 tracking-wide text-center text-gray-800 uppercase dark:text-white">{props.analysis.productAnalysis.title}</h3>
            
            <div class="flex items-center text-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-center relative bottom-[1px] mx-auto block text-gray-800 dark:text-gray-200">{props.analysis.productAnalysis.price? 'AED ' +  props.analysis.productAnalysis.price: props.analysis.productAnalysis.ASIN}</span>
            </div>
        </div>
    </div>
               </div>


            </div>
         </section>
        :
        props.operation === 'top-prod'?
        <section class="pt-16 lg:pt-[80px] -mb-5 pb-10 lg:pb-20 bg-[#F3F4F6]">
            
             <div class="container mx-auto">
                <h1 class = 'text-4xl text-center bottom-12 font-bold relative underline'>Overview - {props.keyword&&props.keyword.split(' ').map(str=>{return (str.charAt(0).toUpperCase() + str.slice(1))}).join(' ')}</h1>
                <h3 class = 'text-xl text-center bottom-10 -mb-2 font-semibold relative '>Understand the Competition</h3>

             <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 mb-16 shadow-lg mx-auto">             
                <div class = 'w-full py-4   md:w-1/2 xl:w-1/2 px-4'>
                <div class="bg-white shadow-sm  p-3 h-full flex rounded-lg overflow-hidden mb-1">
                <div class = 'w-[200px] top-1 relative '><GaugeChart id="gauge-chart2" 
  nrOfLevels={5} 
  percent={(props.analysis.avgCompetitiveRating/5.0)} 
  arcWidth={0.2}
/></div>
<div class = 'ml-3 mr-7 top-[8px] relative font-semibold'> <h1 class = ' relative inline underline '><FcRatings class = 'mr-[6px] inline text-2xl bottom-[1px] relative'/>Average Competitive Rating:</h1> <span class = 'text-2xl top-[2px] left-[6px] relative inline font-bold mr-2.5 text-blue-700'>{props.analysis.avgCompetitiveRating}</span>/5<br/>
<h1 class = 'mt-4 top-[9px] relative inline underline '><SiMarketo class = 'mr-[6px] inline text-2xl bottom-[1px] relative'/>Evaluation:</h1> <span class = {`${props.analysis.avgCompetitiveRating>=4.5||props.analysis.avgCompetitiveRating<2?'text-lg left-[1px] mr-0.5 top-[10px]':'text-xl left-[6px] top-[10px] mr-1.5 relative'}   relative inline font-bold  text-blue-700`}>{props.analysis.avgCompetitiveRating>=4.5?'Very Strong':props.analysis.avgCompetitiveRating>3.5?'Strong':props.analysis.avgCompetitiveRating>3?'Moderate':props.analysis.avgCompetitiveRating>2?'Poor':'Very Poor'}</span><span class = 'relative top-[9px]'> {props.analysis.avgCompetitiveRating>4.5||props.analysis.avgCompetitiveRating<2?'C':'c'}ompetition</span>
</div>

                </div>
                </div>
                <div class = 'w-full py-4  md:w-1/2 xl:w-1/2 px-4'>
                    <div class="bg-white flex shadow-sm h-full rounded-lg overflow-hidden mb-1">
                    <IoPricetags class = 'text-blue-700 relative text-7xl top-6 left-14'/>
                    <div class = 'ml-[104px] mr-7 top-[24px] relative font-semibold'> <h1 class = ' relative inline underline text-xl'><FcMoneyTransfer class = 'mr-[8px] inline text-2xl bottom-[0px] relative uppercase'/>AVERAGE PRICING RANGE:</h1> <br/>
 <span class = {` relative text-center text-2xl top-[8px] left-5 mx-auto inline font-bold mr-2.5 text-blue-700`}>AED {props.analysis&&props.analysis.averagePricingRange.low} - {props.analysis&&props.analysis.averagePricingRange.high}</span>
</div>
                </div>
                </div>
            </div>
            </div>


            <hr class = 'w-[95%] left-[2.5%] border-b-blue-700 border-b-2 bottom-8 relative border-dotted'/>
<h1 class = 'text-4xl text-center bottom-6 mt-9 font-bold relative underline'>High-Performing Keywords</h1>
                <h3 class = 'text-xl text-center bottom-4 mb-6 font-semibold relative '>Increase Consumer Exposure</h3>

            <div class="container mx-auto -mt-1">
             <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 mb-16 shadow-lg mx-auto">             
        
                <div class = 'w-full py-4 px-20'>
                    <div class="bg-white flex shadow-sm h-full p-4 px-10 pt-6 rounded-lg overflow-hidden mb-1">
                    <ol class = 'w-1/2 top-2 text-center'>
                        {
                            props.analysis.topKeyWords.words.map((word,i)=> {
                                if(i<4){
                                return (
                                    <li class="flex text-base text-center text-body-color mb-4">
      <span class="
         bg-blue-700
         text-white
         rounded
         mr-2
         text-base
         flex
         relative top-1.5
         items-center
         justify-center
         h-6
         w-[24px]
         ">
      {i+1}
      </span>
      <p><span class = 'font-semibold ml-2 text-xl underline uppercase'>{word&&word.replace('.','').replace(',','')}</span> - Appeared in <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.count[i]}</span> out of <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.totalNum}</span> products. </p>
   </li>

                                )}else {
                                    return (<></>)
                                }
                            })
                        }
   
   
</ol>

<ol class = 'relative text-center w-1/2'>
                        {
                            props.analysis.topKeyWords.words.map((word,i)=> {
                                if(i>=4){
                                return (
                                    <li class="flex text-base text-center text-body-color mb-4">
      <span class="
         bg-blue-700
         text-white
         rounded
         mr-2
         text-base
         flex
         top-1.5 relative
         items-center
         justify-center
         h-6
         w-[24px]
         ">
      {i+1}
      </span>
      <p><span class = 'font-semibold ml-2 text-xl underline uppercase'>{word&&word.replace('.','').replace(',','')}</span> - Appeared in <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.count[i]}</span> out of <span class = 'text-blue-700 text-2xl font-semibold'>{props.analysis.topKeyWords.totalNum}</span> products. </p>
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
<h1 class = 'text-4xl text-center bottom-6 mt-9 font-bold relative underline'>Best-Selling Products</h1>
                <h3 class = 'text-xl text-center bottom-4 mb-5 font-semibold relative '>Insights - Highest Ranking Listings </h3>




           <div class="container mx-auto">
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


<section class="pt-16 lg:pt-[80px] -mb-5 pb-10 lg:pb-20 bg-[#F3F4F6]">
            
<h1 class = 'text-4xl text-center bottom-12 font-bold relative underline'>Overview - {props.keyword&&props.keyword.split(' ').map(str=>{return (str.charAt(0).toUpperCase() + str.slice(1))}).join(' ')}</h1>
                <h3 class = 'text-xl text-center bottom-10 -mb-2 font-semibold relative '>Understand the Market</h3>
                <h1 class = 'text-xl font-semibold text-center left-[3.5px] top-[8px] relative underline uppercase mb-6'><span class = 'no-underline'>1. </span><span class = 'text-blue-900'>Demand</span>-<span class = 'text-indigo-700'>Supply</span> Balance</h1>
                 
                <div class="container mx-auto bg-white px-12 py-2 pb-5 rounded-sm shadow-md  w-[650px] pl-14 z-[5] mb-[46px] left-[4px] relative">

<div class = 'h-fit z-[400] mt-3  block relative'>

<div class = 'w-[18px] h-[18px] bg-blue-800 inline-block  mt-2 mb-2'></div> <p class = 'inline  mb-2 mt-1 relative bottom-3 left-1 '> - <strong>Demand</strong> (Search Volume) - <span class = 'font-semibold'>{props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchVolume === null? 'Error' : `${String(Math.round(avgDemandState/parseFloat(avgSupplyState+avgDemandState)*100)).substring(0,2)}%`}</span></p><br/>
   <div class = 'w-[18px] h-[18px] bg-indigo-500 inline-block'></div> <p class = 'inline left-1 bottom-1  relative '>- <strong>Supply</strong> (Available Products Options) - <span class = 'font-semibold'>{props.analysis.searchVolumeData.length === 1 && props.analysis.searchVolumeData[0].searchResults === null? 'Error' : `${String(Math.round(avgSupplyState/parseFloat(avgSupplyState+avgDemandState)*100)).substring(0,2)}%`}</span></p>
   
    <div class = 'w-[200px] mt-3.5 block mx-auto'>
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
      <h1 class = 'text-xl font-semibold text-center left-[3.5px]  relative underline -mt-2 uppercase mb-[22px]'><span class = 'no-underline'>2. </span><span class = 'text-blue-700'>Alternative Key Words</span> - Analysis</h1>
      <div class="container mx-auto -mt-1">
            <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 mt-1 relative mb-16 shadow-lg mx-auto">             
       
       <div class = {`w-[48%] ${props.analysis.relatedKeyWordData.length===0?'h-[310px]':'h-[430px]'}   left-[1%] rounded-md shadow-md relative bg-white`}>
            <div
      class = {`w-[90%] ${props.analysis.relatedKeyWordData.length===0?'h-[290px]':'h-[410px]'} top-[10px] z-[400] relative block mx-auto right-1`}

    >
      <Chart data={data} axes={axes} tooltip />
    </div>
    </div>
    <div
      class = 'w-[48%] left-[3%] relative rounded-md shadow-md bg-white px-1 pt-2 overflow-hidden'>
      <h1 class = 'text-center text-lg -mb-[3px] underline font-semibold relative top-[7px] uppercase right-[1px]'>Alternative/Related Keywords</h1>

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

<div class="relative overflow-x-auto  text-center w-full mt-7 top-[9px] shadow-md sm:rounded-lg mx-auto block ">
    <table class=" text-sm text-center block mx-auto  relative text-gray-500">
        <thead class="text-sm mx-auto w-full text-center text-gray-700 uppercase bg-gray-200  ">
            <tr class = 'w-full'>
                <th scope="col" class="px-6 w-full  py-1.5">
                   Metric
                </th>
                <th scope="col" class="px-6 w-full  py-1.5">
                   Demand
                </th>
                <th scope="col" class="px-6 w-full  py-1.5">
                   Supply
                </th>
            </tr>
        </thead>
        <tbody>
         {
            props.analysis.relatedKeyWordData.map((keyWord,i)=> {

               return (
                  <tr class="bg-white border-b text-sm border-t-2 border-black">
                  <th scope="row" class={`px-8 py-1 border-r-[1px] border-gray-600 font-semibold ${i===0?'text-red-600':i===1?'text-yellow-600':i===2?'text-green-600':''}  whitespace-nowrap`}>
                      {keyWord.keyWordSentence}
                  </th>
                  <td class={`px-8 py-1  border-r-[1px] border-gray-600 ${keyWord.searchVolume===null?'text-red-700 font-semibold':'text-gray-900'}`}>
                    {keyWord.searchVolume}
                  </td>
                  <td class="px-8 py-1  border-r-[1px] border-gray-600 text-gray-900">
                  {keyWord.searchResults}
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
           
    

           <hr class = 'w-[95%] left-[2.5%] border-b-blue-700 border-b-2 bottom-[23px] relative border-dotted'/>
<h1 class = 'text-4xl text-center bottom-6 mt-[45px] font-bold relative underline'>Key Word - Demand Analysis</h1>
               <h3 class = 'text-xl text-center bottom-4 mb-6 font-semibold relative '>Gauge Market Demand</h3>

           <div class="container mx-auto -mt-1">
            <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 to-indigo-200 p-5 pt-6 pb-5 -mb-1.5 shadow-lg mx-auto">             
       
                 
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto block right-[4px]">
    <table class="w-full text-sm text-center block mx-auto relative text-gray-500">
        <thead class="text-base text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="px-7 py-3">
                   Keyword 
                </th>
                <th scope="col" class="px-6 py-3">
                    Search Volume
                </th>
                <th scope="col" class="px-6 py-3">
                    Approximate no. of Products
                </th>
                <th scope="col" class="px-6 py-3">
                    Demand Index
                </th>
            </tr>
        </thead>
        <tbody>
         {
            props.analysis.searchVolumeData.map(keyWord=> {

               return (
                  <tr class="bg-white border-b text-base border-t-2 border-black">
                  <th scope="row" class="px-7 py-6 uppercase border-r-[1px] border-gray-600 font-medium text-gray-900  whitespace-nowrap">
                      {keyWord.keyWord}
                  </th>
                  <td class={`px-6 py-6  border-r-[1px] border-gray-600 ${keyWord.searchVolume===null?'text-red-700 font-semibold':'text-gray-900'}`}>
                    {keyWord.searchVolume===null?'Unable to Fetch':keyWord.searchVolume}
                  </td>
                  <td class="px-6 py-6  border-r-[1px] border-gray-600 text-gray-900">
                  {keyWord.searchResults}
                  </td>
                  <td class="px-6 py-6 text-gray-900">
                      {
            Math.round(keyWord.searchVolume/parseFloat(keyWord.searchResults) * 100) / 100
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

                 <h1 class = 'text-3xl font-bold text-center top-[122px] relative text-gray-500'>E-Commerce Optimization<br/> with <span class = 'text-blue-700'>Spire Insights</span></h1>

        </div>
    }
    </>)
}

export default TopProdResult