import { createSelector } from 'reselect';

import {Todo} from './../types'



import {GlobalState} from '../types';
import {ASC,DESC, NONE} from './../constants/priority-mode'

import {ALL,DONE,ACTIVE} from './../constants/status'




export const getTodos = (state:GlobalState) => state.TodoReduce.todos;


export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;

export const getStatus = (state:GlobalState) => state.ModeStatusReducer.status;


const mySort:(arr:Todo[],mode:string)=>Todo[]=(arr:Todo[],mode:string)=>{
    console.log(mode);
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

const myFilter:(arr:Todo[],status:string)=>Todo[]=(arr:Todo[],status:string)=>{
    console.log(status);
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


export const getAllTodos = createSelector(
    [getTodos,getMode,getStatus],
    (allTodos,mode,status) => {
        console.log(mode)
        return mySort(myFilter(allTodos,status),mode)}
);


export const getTodo=(state:GlobalState, id:number)=>state.TodoReduce.todos[id];




export const getDoneLength=createSelector(
    getAllTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const getActiveLength=createSelector(
    getAllTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);



