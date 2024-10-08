import * as api from '../api'
import { setCurrentUser } from './currentUser'


export const signup=(authData,navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.signUp(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } 
    catch (error) {
        const errorMessage = error.response?.data?.message || 'An unknown error occurred';

        // Use a formatted message for the alert
        alert("Error :"+errorMessage);
        dispatch({type:'AUTH_ERROR',error})
    }
}


export const login=(authData,navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.logIn(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        console.log(JSON.parse(localStorage.getItem('Profile')))
        navigate('/')
    } 
    catch (error) {
        const errorMessage = error.response?.data?.message || 'An unknown error occurred';

        // Use a formatted message for the alert
        alert("Error : "+ errorMessage);
        dispatch({ type: 'AUTH_ERROR', error });
    }
}
