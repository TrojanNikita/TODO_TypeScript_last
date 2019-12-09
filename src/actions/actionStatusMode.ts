import {SET_MODE, SET_STATUS} from './../constants/actions';
import {ActionTypeStatusMode} from '../types/ActionType';



export const setMode = (mode:string): ActionTypeStatusMode => {
return {
    type:SET_MODE,
    mode
}
}
export const setStatus = (status:string): ActionTypeStatusMode => {
    return {
        type:SET_STATUS,
        status
    }
    }



