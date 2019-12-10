import { createSelector } from 'reselect';

import {Todo} from './../types'



import {GlobalState} from '../types';
import {ASC,DESC, NONE} from './../constants/priority-mode'

import {ALL,DONE,ACTIVE} from './../constants/status'
import {NONE as mode_NONE, ALL as mode_ALL,SMALL as mode_SMALL,MIDLE as mode_MIDLE,HIGH as mode_HIGH} from './../constants/filter-mode'




export const getTodos = (state:GlobalState) => state.TodoReduce.todos;



export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;
export const getFilterMode = (state:GlobalState) => state.ModeStatusReducer.filter_mode;
export const getStatus = (state:GlobalState) => state.ModeStatusReducer.status;


const mySort:(arr:Todo[],mode:string)=>Todo[]=(arr:Todo[],mode:string)=>{
    console.log(mode);
    switch (mode) {
        case ASC:{
            console.log(arr)
            return arr.sort((n1:Todo,n2:Todo)=>{
                if (n1.priority > n2.priority) {
                    return 1;
                }
            
                if (n1.priority < n2.priority) {
                    return -1;
                }            
                return 0;
            })}
        case DESC:

            {
                console.log(arr)
                return arr.sort((n1:Todo,n2:Todo)=>{
                if (n1.priority < n2.priority) {
                    return 1;
                }
            
                if (n1.priority > n2.priority) {
                    return -1;
                }
            
                return 0;
            })  }
        case NONE:
                return arr;              
        default:
            return arr;          
        }
}

const myFilterByStatus:(arr:Todo[],status:string)=>Todo[]=(arr:Todo[],status:string)=>{
    console.log(status);
    switch (status) {
        case ACTIVE:
            return arr.filter((el)=>!el.done)
        case DONE:
            return arr.filter((el)=>el.done) 
        case ALL:{
            console.log(arr)
            return arr; } 
        default:
            return arr;          
        }
}
const myFilterByMode:(arr:Todo[],filter_mode:string)=>Todo[]=(arr:Todo[],filter_mode:string)=>{
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




export const getTodo=(state:GlobalState, id:number)=>state.TodoReduce.todos[id];

export const getAllTodos = createSelector(
    [getMode,getStatus, getFilterMode,getTodos],
    (mode,status,filter_mode,allTodos) => {
        return mySort(myFilterByMode(myFilterByStatus(allTodos,status),filter_mode),mode)}
);

// export const getTodosByMode = createSelector(
//     [getTodos,getMode],
//     (allTodos,mode) => {
//         return mySort(allTodos,mode)}
// );


// export const getTodosByMode = createSelector(
//     [getTodos,getMode],
//     (allTodos,mode) => {
//         return mySort(allTodos,mode)}
// );


export const getDoneLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const getActiveLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);



