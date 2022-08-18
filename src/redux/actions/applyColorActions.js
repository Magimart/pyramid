import { 
         APPLY_COLOR_SUCCESS, 
         APPLY_COLOR_FAIL,    
         
         CLEAR_ERRORS
} from "../constants/applyColorConstants";



export const applyColorActions = (event) => (dispatch) => {
  
    try {
    
           dispatch({
            type:APPLY_COLOR_SUCCESS,
            payload: event
           })
        
    } catch (error) {
        console.log(error)
            dispatch({
                type: APPLY_COLOR_FAIL,
                payload: error
            })
    }

}


export const clearErrors = () => async(dispatch) => {

       dispatch({
        type:CLEAR_ERRORS,
       })

}

