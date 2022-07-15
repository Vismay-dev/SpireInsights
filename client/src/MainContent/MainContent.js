import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import OptimiseListings from './Components/optimiseListings/optimiseListings'
import Profile from './Components/profile'
import SetupListings from './Components/setupListings/setupListings'
import Home from './Components/home/home'
import Manage from './Components/Manage/Manage'
import {useEffect, useState} from 'react'
import Team from './Components/team/team'
import LiveDetails from './Components/liveDetails/liveDetails'

const MainContent = () => {

    const location = useLocation()
    const [prevLoc, setPrevLoc] = useState()

    useEffect(()=> {
        if(prevLoc==='marketAnalysis'){
            sessionStorage.removeItem('redirect')
            setPrevLoc('')
        }
        if(location.pathname==='/optimiseListings'&&sessionStorage.getItem('redirect')==='toMarket'){
            setPrevLoc('marketAnalysis')
        }
    },[location.pathname])
   
    return (
        <>
            <Routes>
            <Route path="/:url*(/+)" element = {<Navigate to = {location.pathname.slice(0, -1)} replace={true}/>} />
<Route  path = '/optimiseListings' element={sessionStorage.getItem('token')!==null?<OptimiseListings/>:<Navigate to = '/home'/>}>
</Route>

<Route  path = '/liveDetails' element={sessionStorage.getItem('token')!==null?<LiveDetails/>:<Navigate to = '/home'/>}>
</Route>

<Route  path = '/setupListings' element={sessionStorage.getItem('token')!==null?<SetupListings/>:<Navigate to = '/home'/>}>
</Route>

<Route  path = '/profile' element={sessionStorage.getItem('token')!==null?<Profile/>:<Navigate to = '/home'/>}>
</Route>

<Route  path = '/manageListings' element={sessionStorage.getItem('token')!==null?<Manage/>:<Navigate to = '/home'/>}>
</Route>

<Route  path = '/home' element={sessionStorage.getItem('token')!==null?<Navigate to = '/profile'/>:<Home/>}>
</Route>

<Route  path = '/team' element={<Team/>}>
</Route>

<Route path = '/' element = {sessionStorage.getItem('token')!==null?<Navigate to = '/profile'/>:<Navigate to = '/home'/>}>
</Route>

        </Routes>
        </>
    )

}

export default MainContent