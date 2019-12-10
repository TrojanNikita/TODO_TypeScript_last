import {SET_STATUS,SET_MODE,SET_FILTERMODE} from '../constants/actions';
import  {ModeStatus}  from '../types';
import {ActionTypeStatusMode} from './../actions/actionStatusMode'

import {ALL} from './../constants/status'

import {NONE} from './../constants/priority-mode'


import {ALL as filter_ALL} from './../constants/filter-mode'




const initState: ModeStatus = {
    mode:NONE,
    status:ALL,
    filter_mode:filter_ALL
};


export function ModeStatusReducer (
  state=initState, 
  action: ActionTypeStatusMode): ModeStatus {
    switch (action.type) {
        case SET_MODE:
            return {
                ...state, mode:action.mode          
            }   
        case SET_FILTERMODE:
                return {
                    ...state, filter_mode:action.filter_mode          
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