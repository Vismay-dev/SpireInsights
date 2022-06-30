import {useState} from 'react'
import axios from 'axios'
import NavBar from './Nav/NavBar';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';
import userContext from './context/userContext'

function App() {

  const [user, setUser] = useState({
    repFirstName : '',
    repLastName: '',
    businessName: '',
    email: '',
    password: '',
    country: '',
    city: '',
    id:''
  })

  // const [currentPlatform, setCurrentPlatform] = useState('') 
  // const submitHandler = ()=> {
  //   axios.post('http://localhost:4000/api/user/topProductAnalysis',{platform:currentPlatform,sentence:document.getElementById('platform').value}).then(res=> {
  //     console.log('Works..')
  //   }).catch(err=> {
  //     console.log(err.response)
  //   })
  // }
  
  return (
    <div className="App">
    <userContext.Provider value = {{user:user, setUser:setUser}}>

          <NavBar/>
          <div class = 'relative block overflow-hidden -mb-[18px]'>
          <MainContent/>
          </div>
<Footer/>
</userContext.Provider>


        {/* <div class = ' relative mx-auto text-center  space-x-4'>
          <div class = 'mx-auto relative font-bold mt-8 text-4xl'>Analyze Best-Selling Products</div>
        <button onClick={()=>setCurrentPlatform('Amazon.ae')} class = 'bg-gray-300  mt-11 w-[170px] mx-auto shadow-md hover:shadow-lg'>AMAZON.AE</button>
        <button onClick={()=>setCurrentPlatform('Noon.com')} class = 'bg-gray-300 w-[170px] mx-auto shadow-md hover:shadow-lg '>NOON.COM</button>
    
        </div>
        <div class = 'mx-auto relative text-center'>
        <h1 class = 'mt-7 font-semibold relative text-center'>{currentPlatform==''?'No Platform Selected':'Platform Selected: ' + currentPlatform}</h1>
        <input id = 'platform' placeholder = 'Enter Product Keywords....' class = 'w-[210px] p-2 px-2 mt-7 mr-3 ml-2 items-center mx-auto relative  bg-white border-2 border-gray-300  rounded-md'></input><button onClick={()=> {
          submitHandler()
        }} class = 'bg-gradient-to-br from-blue-700 to-blue-400 p-2 px-2 rounded-md shadow-sm hover:shadow-md text-white font-semibold'>Submit and Gain Insights</button>
        </div>
       */}
    </div>
  );
}

export default App;
