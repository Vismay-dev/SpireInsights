import {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from './Nav/NavBar';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';
import userContext from './context/userContext'
import {useLocation} from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader"
import logo from './logo.png'
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-233931477-1"
ReactGA.initialize(TRACKING_ID);

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

  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },3500)
  },[])

  const location = useLocation()

  // const [currentPlatform, setCurrentPlatform] = useState('') 
  // const submitHandler = ()=> {
  //   axios.post('http://localhost:4000/api/user/topProductAnalysis',{platform:currentPlatform,sentence:document.getElementById('platform').value}).then(res=> {
  //     console.log('Works..')
  //   }).catch(err=> {
  //     console.log(err.response)
  //   })
  // }

useEffect(() => {
    if(sessionStorage.getItem('token')!==null){
      axios.post(process.env.NODE_ENV ==='production'?'https://spire-insights.herokuapp.com/api/user/getUser':'http://localhost:4000/api/user/getUser',
      {token: sessionStorage.getItem('token')}).then(res=> {
        setUser(res.data)
      }).catch(err=> {
        console.log(err.response)
      })
  }else {
    if(localStorage.getItem('tempToken')!==null){
      sessionStorage.setItem('token',localStorage.getItem('tempToken'))
    }
  }
},[location.pathname])
  
  return (
    <div className="App">
    <userContext.Provider value = {{user:user, setUser:setUser}}>

          

          {!loading?<>
            <NavBar/>
          <div class = 'relative block overflow-hidden -mb-[18px]'>
          <MainContent/>
          </div>
          <Footer/>
          </>:

          <div class = 'bg-gradient-to-br sm:pl-1 pl-2.5 sm:pt-0 pt-3 from-blue-100 to-indigo-100 h-screen w-screen'>
                <img class = 'block mx-auto sm:w-[140px] w-[80px] top-[20%] right-0.5  relative' src = {logo}></img>
                    <hr class = 'block border-t-2 border-blue-700 my-11 w-[200px] mx-auto top-[24%] relative border-dotted'/>
                    
                      <div 
      class = ' w-[127px]   m-0 relative mx-auto top-[38%]  left-[1.5px]  translate-y-[-50%]  pl-4'>
                      

                      <HashLoader
                      size = {90}
                      loading= {true}
                      color= {'#1034A6'}/>
             
                  </div>
                  </div>
               } 

</userContext.Provider>

    </div>
  );
}

export default App;
