import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import OptimiseListings from './Components/optimiseListings/optimiseListings'
import Profile from './Components/profile'
import SetupListings from './Components/setupListings/setupListings'
import Home from './Components/home/home'

const MainContent = () => {

    const location = useLocation()
   
    return (
        <>
            <Routes>
{/* <Navigate from="/:url*(/+)" to={location.pathname.slice(0, -1)} /> */}

<Route  path = '/optimiseListings' element={<OptimiseListings/>}>
</Route>

<Route  path = '/setupListings' element={<SetupListings/>}>
</Route>

<Route  path = '/profile' element={<Profile/>}>
</Route>

<Route  path = '/home' element={<Home/>}>
</Route>

<Route path = '/' element = {sessionStorage.getItem('token')!==null?<Navigate to = '/profile'/>:<Navigate to = '/home'/>}>
</Route>

        </Routes>
        </>
    )

}

export default MainContent