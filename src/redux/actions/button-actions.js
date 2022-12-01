import { ActionConstants } from "../constants/actions-constants";

export const incrementValue = (value) =>{
    return {
        type:ActionConstants.INCREMENT,
        payload: value
    }
}

export const decrementValue = (value) =>{
    return {
        type:ActionConstants.DECREMENT,
        payload: value
    }
}
