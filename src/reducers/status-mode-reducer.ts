import {SET_STATUS,SET_MODE} from '../constants/actions';
import  {ModeStatus}  from '../types';
import {ActionTypeStatusMode} from './../actions/actionStatusMode'

import {ALL} from './../constants/status'

import {NONE} from './../constants/priority-mode'




const initState: ModeStatus = {
    mode:NONE,
    status:ALL
};


export function ModeStatusReducer (
  state=initState, 
  action: ActionTypeStatusMode): ModeStatus {
    switch (action.type) {
        case SET_MODE:
            return {
                ...state, mode:action.mode          
            }   
        case SET_STATUS:
            return {
                 ...state, status:action.status          
        }    
        default:
             return state
      }
}

export default ModeStatusReducer;