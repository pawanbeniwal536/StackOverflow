const authReducer =(state={data:null,error:null},action)=>{
switch (action.type) {
    case 'AUTH':
        localStorage.setItem('Profile',JSON.stringify({...action?.data}))
        return {...state , data: action?.data}

    case 'AUTH_ERROR':
        return { ...state , error :action?.error }

    case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null }
            
    default:
        return state;
}
}

export default authReducer;