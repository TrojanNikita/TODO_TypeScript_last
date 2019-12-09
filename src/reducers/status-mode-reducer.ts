import {SET_STATUS,SET_MODE} from '../constants/actions';
import  {ModeStatus,ActionTypeStatusMode}  from '../types';

import {ALL} from './../constants/status'

import {NONE} from './../constants/priority-mode'




const initState: ModeStatus = {
    mode:NONE
};


export function ModeStatusReducer (
  state=initState, 
  action: ActionTypeStatusMode): ModeStatus {
    switch (action.type) {
        case SET_MODE:
            return {
                ...state, mode:action.mode          
            }    
        default:
             return state
      }
}

export default ModeStatusReducer;