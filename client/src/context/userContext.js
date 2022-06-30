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
    id:''
    },
    setUser:   () => {

    }
  
});

export default userContext