import { 
         APPLY_COLOR_SUCCESS, 
         APPLY_COLOR_FAIL, 
         
         INCREASE_DECREASE_SCALE_SUCCESS,
         INCREASE_DECREASE_SCALE_FAIL,

         ENTER_AND_LEAVE_SCALE_SUCCESS,
         ENTER_AND_LEAVE_SCALE_FAIL,
         
         CLEAR_ERRORS,

} from "../constants/applyColorConstants";



export const applyColorActions = (event) => (dispatch) => {
  
    try {
    
           dispatch({
            type:APPLY_COLOR_SUCCESS,
            payload: event
           })
        
    } catch (error) {
            dispatch({
                type: APPLY_COLOR_FAIL,
                payload: error
            })
    }

}

export const increaseDescreaseScaleActions = (event) => (dispatch) => {
  
        try {

                 let windowEvent =  event;
                 console.log(event.object)
                    dispatch({
                        type:INCREASE_DECREASE_SCALE_SUCCESS,
                        payload: windowEvent
                    })
                 
            } catch (error) {
                   console.log(error)
                    dispatch({
                        type: INCREASE_DECREASE_SCALE_FAIL,
                        payload: error
                    })
            }

}

// export const enterAndLeaveScaleActions = (event) => (dispatch) => {
  
//     try {

//          let windowEvent =  event
//         //  console.log(windowEvent)

//             dispatch({
//                 type: ENTER_AND_LEAVE_SCALE_SUCCESS,
//                 payload: windowEvent
//             })
//     } catch (error) {
//            console.log(error)
//             dispatch({
//                 type: ENTER_AND_LEAVE_SCALE_FAIL,
//                 payload: error
//             })
//     }

// }


export const clearErrors = () => async(dispatch) => {

       dispatch({
        type:CLEAR_ERRORS,
       })

}

