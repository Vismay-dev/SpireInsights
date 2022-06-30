import {MdOutlineStarRate} from 'react-icons/md'
import {GiPriceTag} from 'react-icons/gi'
import GaugeChart from 'react-gauge-chart'
import {FcRatings, FcMoneyTransfer} from 'react-icons/fc'
import {SiMarketo} from 'react-icons/si'
import {IoPricetags} from 'react-icons/io5'
import ClipLoader from "react-spinners/ClipLoader";
import logo from '../../../logo.png'

const TopProdResult = (props) => {

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


        <div class = 'h-[447px] -mb-4 bg-gradient-to-br mt-6 from-blue-100 to-indigo-200'>
                <img class = 'w-16 block top-[122px] mt-1 mx-auto relative' src = {logo}></img><br/>

                 <h1 class = 'text-3xl font-bold text-center top-[122px] relative text-gray-500'>E-Commerce Optimization<br/> with <span class = 'text-blue-700'>Spire Insights</span></h1>

        </div>
    }
    </>)
}

export default TopProdResult