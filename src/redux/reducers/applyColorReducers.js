import { addSelectedColor } from "../../utils/applyColor";
import { 
           APPLY_COLOR_FAIL, 
           APPLY_COLOR_SUCCESS, 

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





export {
    applyColorReducers,
}





