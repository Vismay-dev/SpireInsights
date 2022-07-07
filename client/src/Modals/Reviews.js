
import AOS from 'aos';
import "aos/dist/aos.css";
import logo from '../logo.png'
import { useEffect, useState, useRef } from "react";

const ReviewsModal = (props) => {

    const [loading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [loading]);

  const myRef = useRef()


useEffect(
  () => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!myRef.current || myRef.current.contains(event.target)) {
        return;
      }
      props.close();
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
let reviews = props.data.reviews.filter(elem=> {
    return elem !== ''
})
console.log(reviews)
    return (<div class="fixed z-[100] inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay, show/hide based on modal state. */}
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
      {/* This element is to trick the browser into centering the modal contents. */}
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
      
        {/* Modal panel, show/hide based on modal state. */}
  
      <div ref = {myRef} data-aos={"fade-up"} data-aos-once='true' class={`lg:pr-6 px-3 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:mt-5 sm:align-middle lg:w-10/12 ${loading?'sm:w-8/12':'sm:w-11/12'} md:w-11/12 w-[98%]`}>
        <div  class="bg-white px-1 pt-2 pb-2 sm:p-6 sm:pb-4">
        <h1 class ='text-4xl top-1 relative font-bold mx-auto text-center underline'>Reviews</h1>
        <hr class = 'border-t-2 border-blue-700 border-dotted mt-9 mx-auto block w-[70%]'/>
        <h1 class ='text-xl text-gray-700 mt-3 mx-auto text-center'><strong>ASIN ID:</strong> {props.data.asin}</h1>
        <h1 class ='text-xl text-gray-700 truncate xl:px-60 lg:px-28 sm:px-16 px-2 mx-auto text-center'><strong>PRODUCT TITLE:</strong><br class = 'sm:hidden block'/> {props.data.title}</h1>
        <hr class = 'border-t-2 border-blue-700 border-dotted mx-auto mb-2 mt-3 block w-[70%]'/>

          <div class="mx-auto block ">

            <div class="sm:mt-11 mt-8 text-center  w-full  mx-auto block">   

  

                    {


                    reviews.length===0?
                    <section class="py-6 lg:-mb-6 mb-0  lg:py-[40px] w-full  lg:pt-0 mx-auto block text-center">
                       <div class="mx-auto    block text-center">
                          <div
                             class="
                             bg-blue-700
                             text-center
                             relative
                             rounded
                             overflow-hidden
                             py-12
                             md:mt-0
                             -mt-4
                             mx-auto block
                             px-8
                             xl:w-[900px]
                             w-[90%]
                             p-[70px]
                            pt-[80px]
                            lg:pt-[60px]
                             z-10
                             "
                             >
                             <div class="flex flex-wrap items-center -mt-3 -mx-4">
                                <div class="w-full px-4">
                                        <div>
                                            <img class = 'mx-auto block p-1.5 w-14 h-14 mb-6 bg-white rounded-full' src = {logo}></img>
                                        </div>
                                   <span class="text-white text-base relative bottom-1 font-semibold mb-3">
                                    Low Engagement..
                                   </span>
                                   <h2
                                      class="
                                      text-white
                                      font-bold
                                      text-3xl
                                      sm:text-[38px]
                                      leading-tight
                                      mb-6
                                      sm:mb-8
                                      lg:mb-0
                                      "
                                      >
                                      No
                                      Customer Reviews On Amazon
                                   </h2>
                                </div>
                                
                             </div>
                             <div>
                                <span class="absolute top-0 left-0 z-[-1]">
                                   <svg
                                      width="189"
                                      height="162"
                                      viewBox="0 0 189 162"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      >
                                      <ellipse
                                         cx="16"
                                         cy="-16.5"
                                         rx="173"
                                         ry="178.5"
                                         transform="rotate(180 16 -16.5)"
                                         fill="url(#paint0_linear)"
                                         />
                                      <defs>
                                         <linearGradient
                                            id="paint0_linear"
                                            x1="-157"
                                            y1="-107.754"
                                            x2="98.5011"
                                            y2="-106.425"
                                            gradientUnits="userSpaceOnUse"
                                            >
                                            <stop stop-color="white" stop-opacity="0.07" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                         </linearGradient>
                                      </defs>
                                   </svg>
                                </span>
                                <span class="absolute bottom-0 right-0 z-[-1]">
                                   <svg
                                      width="191"
                                      height="208"
                                      viewBox="0 0 191 208"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      >
                                      <ellipse
                                         cx="173"
                                         cy="178.5"
                                         rx="173"
                                         ry="178.5"
                                         fill="url(#paint0_linear)"
                                         />
                                      <defs>
                                         <linearGradient
                                            id="paint0_linear"
                                            x1="-3.27832e-05"
                                            y1="87.2457"
                                            x2="255.501"
                                            y2="88.5747"
                                            gradientUnits="userSpaceOnUse"
                                            >
                                            <stop stop-color="white" stop-opacity="0.07" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                         </linearGradient>
                                      </defs>
                                   </svg>
                                </span>
                             </div>
                          </div>
                       </div>
                    </section>


                    :

                        reviews.filter(elem=> elem !== null || elem !== '' || elem!==undefined).map((review,i)=> {
                        

                           
                            return (

                                review?

    <div class="max-w-4xl px-8 mb-6 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="sm:flex block sm:mb-0 mb-9 items-center justify-between">
        <span class="text-sm sm:text-left sm:right-0 right-[2px] relative text-center  font-light text-gray-600 dark:text-gray-400">AMAZON.AE</span>
    </div>

    <div class="mt-2">
        <a class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline relative bottom-5 -mb-2">Review #{i+1}</a>
        <p class="mt-2 text-gray-600 relative bottom-2.5 dark:text-gray-300">{review}</p>
    </div>
    
    <div class="flex items-center justify-between mt-3 pb-1">
        <a onClick= {
            () => {
                window.open(props.data.link+ '/=#customerReviews','_blank')
            }
        } class="text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">Visit Reviews</a>

        <div class="flex items-center">
            <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="data:image/jpeg;base64,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" alt="avatar"/>
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Undisclosed</a>
        </div>
    </div>
</div>:''
                            )
                        })
                    }
  

            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-3 mt-4 shadow-md border-y-indigo-200 border-2 -mr-6 py-0 sm:px-6 sm:flex sm:flex-row-reverse ">
        
          <button onClick = {props.close} type="button" class="sm:-left-4 relative h-11 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-7 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5 mb-5 sm:w-auto sm:text-md">
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  </div>)
}

export default ReviewsModal