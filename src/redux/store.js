import { createStore, applyMiddleware} from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
           applyColorReducers, increaseDescreaseScaleReducers
 } from './reducers/applyColorReducers';
     
 const middlware = [thunk];


const rootReducer = combineReducers({
       colorPallet: applyColorReducers,
       scaleEvent: increaseDescreaseScaleReducers,

});


const store = createStore(
   rootReducer,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   composeWithDevTools(applyMiddleware(...middlware))
 );

export default store;
