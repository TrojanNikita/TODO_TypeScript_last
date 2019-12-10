

import {Todo} from './../types'

import {ASC,DESC, NONE} from './../constants/priority-mode'

import {ALL,DONE,ACTIVE} from './../constants/status'
import {NONE as mode_NONE, ALL as mode_ALL,SMALL as mode_SMALL,MIDLE as mode_MIDLE,HIGH as mode_HIGH} from './../constants/filter-mode'






export const mySort:(arr:Todo[],mode:string)=>Todo[]=(arr:Todo[],mode:string)=>{
    switch (mode) {
        case ASC:
            return arr.sort((n1:Todo,n2:Todo)=>{
                if (n1.priority > n2.priority) {
                    return 1;
                }
            
                if (n1.priority < n2.priority) {
                    return -1;
                }            
                return 0;
            })
        case DESC:
            return arr.sort((n1:Todo,n2:Todo)=>{
                if (n1.priority < n2.priority) {
                    return 1;
                }
            
                if (n1.priority > n2.priority) {
                    return -1;
                }
            
                return 0;
            })  
        case NONE:
            return arr;          
        default:
            return arr;          
        }
}


export const myFilterByStatus:(arr:Todo[],status:string)=>Todo[]=(arr:Todo[],status:string)=>{
    switch (status) {
        case ACTIVE:
            return arr.filter((el)=>!el.done)
        case DONE:
            return arr.filter((el)=>el.done) 
        case ALL:
            return arr; 
        default:
            return arr;          
        }
}
export const myFilterByMode:(arr:Todo[],filter_mode:string)=>Todo[]=(arr:Todo[],filter_mode:string)=>{
    console.log(filter_mode);
    switch (filter_mode) {
        case mode_ALL:
            return arr
        case mode_NONE:
            return arr.filter((el)=>el.priority===0) 
        case mode_SMALL:
            return arr.filter((el)=>el.priority===1) 
        case mode_MIDLE:
            return arr.filter((el)=>el.priority===2)    
        case mode_HIGH:
            return arr.filter((el)=>el.priority===3) 
        default:
            return arr;          
        }
}

