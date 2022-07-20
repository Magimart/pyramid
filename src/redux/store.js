import {   createStore, 
   applyMiddleware 
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux';



const reducer = combineReducers({
          //add combined reducers
                                      
})


let  initialState = {              
}

       

const middlware = [thunk];
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(...middlware)))

//_______________reconfigured
export default store;
