import {SET_MODE} from './../constants/actions';
import {ActionTypeStatusMode} from '../types/ActionType';



export const setMode = (mode:string): ActionTypeStatusMode => {
return {
    type:SET_MODE,
    mode
}
}



