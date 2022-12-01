import { combineReducers } from "redux";
import { incDecReducer } from "./valueReducer";
const reducers = combineReducers({
    incDecReducers : incDecReducer 
});
export default reducers;
