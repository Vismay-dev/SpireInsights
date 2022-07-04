import {createContext} from 'react'

const userContext = createContext({
    user: {
        repFirstName : '',
    repLastName: '',
    businessName: '',
    email: '',
    password: '',
    country: '',
    city: '',
    id:'',
    pipeline:{
        current:'preparation',
        data: {
            
        }
    }
    },
    setUser:   () => {

    }
  
});

export default userContext