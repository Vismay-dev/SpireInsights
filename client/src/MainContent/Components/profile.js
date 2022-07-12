import { useContext, useRef, useState, useEffect } from "react"
import userContext from '../../context/userContext';
import EditModal from "../../Modals/EditModal";
import Tooltip from 'react-power-tooltip'
import ClipLoader from "react-spinners/ClipLoader"
import axios from 'axios'
import logo from '../../logo.png'
import free from '.././free.png'
const Profile = () => {

    const currentUser = useContext(userContext)
    const [userInfo,setUserInfo] = useState(currentUser.user)

    useEffect(()=> {
      setUserInfo(currentUser.user)
    },[currentUser])


    const [hours, setHours] = useState()
    const [days, setDays] = useState()

    useEffect(()=> {
      setHours(Math.abs((new Date()) - new Date(userInfo.createdAt)) / (36*Math.pow(10,5)))
      setDays(Math.abs((new Date()) - new Date(userInfo.createdAt)) / (36*Math.pow(10,5)*24))

    })

    const inputRef = useRef(null)
    const dummyRef = useRef(null)

    const [editModalShow, setEditModalShow] = useState(false)
    const [modalType, setModalType] = useState('')
    const [showToolTip, setShowToolTip] = useState(false)
    const [showToolTip2, setShowToolTip2] = useState(false)
    const [picLoading, setPicLoading] = useState(false)
    const [image, setImage] = useState(currentUser.user.profilePic?currentUser.user.profilePic:null)
    const [user, setUser] = useState(currentUser?currentUser.user:false)

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    const profPicUpload =(e)=> {
        e.preventDefault()
        setPicLoading(true)
        const data = new FormData();
        data.append('image',e.target.files[0]);
        data.append('token',sessionStorage.getItem('token') )
        axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/uploadProfPic':'http://localhost:4000/api/user/uploadProfPic',data).then(res=> {
            currentUser.setUser({...currentUser.user,profilePic:res.data})
            setImage(res.data)
            setPicLoading(false)
        }).catch(err=> {
          setPicLoading(false)
            console.log(err.response)
        })
      }

      const removeProfPic = (e) => {
        setPicLoading(true)
        const removedProfPic = {...user, profilePic:''}
        console.log(removedProfPic)
        axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/updateUser':'http://localhost:4000/api/user/updateUser',{user:removedProfPic, token:sessionStorage.getItem('token')}).then(res=> {
          currentUser.setUser(res.data)
          setPicLoading(false)
        }).catch(err=> {
          console.log(err.response?err.response.data:null)
        })
      }


    return (


        <div class="xl:pt-28  pt-28 -mb-16 pb-7 relative block  overflow-hidden bg-gradient-to-r from-gray-200 to-blue-200">
            <div ref = {dummyRef}></div>
            {
                editModalShow?
                <EditModal setUser = {(userData)=> {
                  setUserInfo(userData)
                  console.log(userData)
                }} type = {modalType} close = {()=> {setEditModalShow(false)}}/>
                 :''
            }

            <h1 class = 'relative mx-auto -mt-[75px] px-4 text-center md:text-[53px] text-[49px] font-semibold'><span class = 'text-blue-600'>Your</span> Profile</h1>
            <div class="relative xl:-mt-[52px] lg:-mt-[20px] md:mt-[0px] sm:mt-[15px] mt-[75px] -mb-60  max-h-80">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
        </g>
      </svg>
    </div>
                <section className="relative block mt-32 mb-12 ">
          <div
            className="absolute top-0 z-20 w-full h-full bg-center bg-cover"
            style={{
                backgroundImage:'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section  className="relative py-16 bg-blueGray-200">
          <div  className="container mx-auto px-4">
            <div className="relative flex flex-col  min-w-0 pb-4  break-words bg-gradient-to-br from-white to-gray-100 w-full xl:-mb-36 lg:-mb-[120px] md:-mb-10  md:mt-6 lg:mt-4 sm:-mb-5 sm:mt-7  shadow-xl rounded-xl">
              <div  className="px-7">
                <div data-aos={"zoom-in-up"} data-aos-once='true'  className="flex flex-wrap justify-center">
                  <div   className="lg:w-4/12 w-[270px] xl:w-3/12 xl:ml-10   px-4  lg:order-2 order-1 flex justify-center">
                    <div className="relative scale-90 block  object-contain rounded-full  p-3">
                    <input ref={inputRef} onChange = {profPicUpload} type="file" name="article_picture" style={{'display': 'none'}}/>
                    {
                      picLoading?

                    
                      <div class = 'relative top-3 my-3 mb-7 block'>
                      <ClipLoader color={'#0b0bbf'} loading={picLoading}  size={70} />
                     </div>
                      :

                      <img class={`rounded-full -mt-16 -mb-2  md:w-48 w-40 h-40 md:h-48 object-cover bg-white  shadow-lg block ${currentUser.user.profilePic?'':'p-2'} relative`}
                    src={currentUser.user.profilePic?currentUser.user.profilePic:"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="} /> }




                 {currentUser.user.profilePic?

                
                 <i data-tip="Remove Picture" onMouseOver={() => setShowToolTip2(true)} 
                 onMouseLeave={() => setShowToolTip2(false)} onClick = {()=> {
                  setShowToolTip2(false);
                 removeProfPic()}} className={`fas hover:cursor-pointer hover:text-orange-700  fa-trash font-semibold text-2xl absolute right-0 ${picLoading?'bottom-5 hidden -right-2':'lg:bottom-12 bottom-1 -right-1 '} text-red-600`}>
<Tooltip show={showToolTip2} position = 'right' fontSize = '16px' padding = '3px 5px'>
  <span class = 'font-semibold text-center font-sans bottom-0.5'>Remove Picture</span>
</Tooltip>

                 </i>
:''}



                  <i     onMouseOver={() => setShowToolTip(true)} 
        onMouseLeave={() => setShowToolTip(false)}
          onClick={()=>{setShowToolTip(false); inputRef.current.click()}}  className={`fas hover:cursor-pointer hover:text-indigo-700 text-2xl fa-camera font-semibold  ${currentUser.user.profilePic?'lg:bottom-5 -bottom-7 lg:right-9 right-7 absolute':'lg:right-1 -right-1 absolute lg:bottom-9 bottom-0'} ${picLoading?'mt-4 -mr-8':''} text-gray-800`}>
            <Tooltip position = 'bottom' fontSize = '16px' padding = '3px 5px' show={showToolTip} className = 'p-1'>
  <span class = 'font-semibold text-center font-sans bottom-0.5'>{currentUser.user.profilePic?'Change Picture':'Upload Picture'}</span>
</Tooltip></i>                    </div>

                  </div>
                  <div className="w-full lg:w-4/12  px-4 lg:order-3 order-2 mx-auto text-center lg:mt-0 mt-7 lg:left-0 sm:left-2.5 left-1 relative lg:text-right lg:self-center">
                    <div className="py-6 px-3 lg:mt-4 mt-1 sm:mt-0">
                      <button
                      onClick={() => {setModalType('profile'); setEditModalShow(true)}}
                        className="bg-gradient-to-r from-blue-300 to-blue-500 hover:from-indigo-300 hover:to-indigo-500 active:bg-blue-400 uppercase text-white font-bold hover:shadow-lg shadow-sm text-md px-3 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-24 lg:top-0 top-2 relative ease-linear transition-all duration-150"
                        type="button"
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 xl:ml-3 px-4 xl:top-1.5 lg:mt-0 -mt-[105px] lg:left-0 left-[10px] relative lg:order-1 order-2">
                    <div className="flex  justify-center lg:py-4 py-7 xl:right-7 lg:right-3 right-0 relative lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-lg text-blue-700 underline font-bold block uppercase tracking-wide text-blueGray-600">
                          Free Trial
                          {/* Paid  */}
                        </span>
                        <span className="text-sm top-1 relative text-blueGray-400">
                          Plan
                          {/* Subscription */}
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {days?Math.round(days):''}
                        </span>
                        <span className="text-sm top-1 relative text-blueGray-400">
                          Days Spent Using Spire
                        </span>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div  className="text-center lg:mt-0 mt-3 mb-8">
                  <h3 className="sm:text-4xl text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {currentUser?userInfo.repFirstName+ ' ' + userInfo.repLastName:' '}
                  </h3>
                  <div className="text-sm leading-normal mt-0 lg:mb-10 mb-12 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 top-0.5 relative text-lg text-gray-400"></i>{" "}
                    {currentUser?userInfo.city+', ':' '} {currentUser?userInfo.country:' '}
                  </div>
                 
                  <div className="mb-2 font-semibold text-lg px-4">
                    <i className="fas fa-sitemap mr-2.5 top-[1px] relative text-lg sm:text-gray-400 text-gray-500"></i>
                    <span class = 'underline'>Organization/Business:</span> {currentUser?userInfo.businessName:' '}
                  </div>
                  <div className="sm:mb-5 mb-8 text-blueGray-600 px-4">
                    <i className="fas fa-envelope mr-2 top-[1px] relative text-lg sm:text-gray-400 text-gray-500"></i>
                    <span class = 'font-semibold'>Contact:</span> {currentUser?userInfo.email:' '}
                  </div>
                  
               
                
                  
                <hr class = 'mt-10 relative block'/>
                <img class = 'w-16 block top-[104px] mt-1 mx-auto relative' src = {logo}></img><br/>
    <div class = 'h-[243px] relative '>
    <h1 class = 'text-3xl font-bold text-center top-[104px] left-[4px] relative text-gray-500'>No Listings Created <span class = 'text-blue-700'>Yet</span></h1>
</div>

    <hr class = 'mt-6 relative block'/>
                
                <h1 class = 'md:text-3xl text-[28px] font-bold text-center top-11 relative'>
                <img class = 'md:w-10 w-8  mr-1.5 -top-[3px] inline mx-auto relative' src = {logo}></img>
                  Your Subscription Plan</h1>
                
    <div class = 'h-[300px] relative top-[26px] md:left-1.5 '>
    <h1 class = 'text-2xl font-bold text-center top-[60px] left-[4px] relative text-gray-500 underline'>Free Trial - <span class = 'text-blue-700'>{hours?48-Math.floor(hours):''} hours left!</span></h1>
                  <img src = {free} class = 'mx-auto block mt-[86px] pb-14 left-[8px] mb-6 relative w-48'></img>
    </div>

    </div>
                  </div>
                </div>
                
              </div>
          
        </section>

        <div class="relative -mt-6 max-h-96  lg:mt-5">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
        </g>
      </svg>
    </div>
   
        </div>





    )
}

export default Profile