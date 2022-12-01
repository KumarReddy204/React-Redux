
import { ActionConstants } from "../constants/actions-constants";

const intialState = {
    value : 0
}

export const incDecReducer = (state = intialState,{type,payload}) =>{
    switch(type){
        case ActionConstants.INCREMENT:
          return {...state, value : payload}
        case ActionConstants.DECREMENT:
        return {...state, value : payload}
        default:
            return state
    }
}
