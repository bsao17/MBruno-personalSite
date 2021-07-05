import axios from 'axios'

export const DARK_MODE = "DARK_MODE"


export const darkMode = ()=>{
    return(dispatch)=>{
        return axios.get("http://localhost:3000/users")
        .then(resp =>{
            dispatch({
                type: DARK_MODE, 
                payload: resp.data
            })
        })
        .catch((err)=>{console.log(err)})
    }
}
