import { 
         addSelectedColor,
          decreaseScale,
          
        } from "../../utils/applyColor";
import { 
           APPLY_COLOR_FAIL, 
           APPLY_COLOR_SUCCESS, 
           INCREASE_DECREASE_SCALE_SUCCESS,
           INCREASE_DECREASE_SCALE_FAIL,

           ENTER_AND_LEAVE_SCALE_SUCCESS,
           ENTER_AND_LEAVE_SCALE_FAIL,

           CLEAR_ERRORS 
} from "../constants/applyColorConstants";


const applyColorReducers = (state = {selectedColor: ""}, action) => {


    switch(action.type){

        case APPLY_COLOR_SUCCESS:
            try {
                 let selectedColor = action.payload;
                  addSelectedColor(selectedColor)

                return {
                    ...state, 
                    selectedColor : state.selectedColor = selectedColor
                }

            } catch (error) {
                console.log(error)
            }

        case APPLY_COLOR_FAIL:
           return {
            ...state,
            error: null
           }
        case CLEAR_ERRORS:  
            return {
            ...state,
            error: null
           } 

        default : return state   

    }

}


const increaseDescreaseScaleReducers = (state = {
                                                 activeMesh: Boolean,
                                                 windowActiveMeshObject: Object
                                                }, action) => {
    
    
    let clickedMesh ;
    let isWindowAMesh = window && window.activeMesh;

    switch(action.type){

        case INCREASE_DECREASE_SCALE_SUCCESS:
            try {

                action.payload.object.active = true
                clickedMesh = action.payload.object.active;
                let activeWinowObjPayload = action.payload.object;
                let isWindowActiveObj = window.activeMesh;

                if(isWindowAMesh){
                     isWindowAMesh.active = false;
                     decreaseScale(isWindowAMesh)
                    clickedMesh = isWindowAMesh.active;                    
                }

                window.activeMesh = activeWinowObjPayload;
                           
            } catch (error) {
                console.log(error)
            }
           return { 
                  state,
                  activeMesh : state.activeMesh = clickedMesh,
                  windowActiveMeshObject: state.windowActiveMeshObject = isWindowAMesh
            }

        case INCREASE_DECREASE_SCALE_FAIL:
                return {
                 ...state,
                 error: null
                }

        default : return state   

    }

}






export {
    applyColorReducers,
    increaseDescreaseScaleReducers
}





