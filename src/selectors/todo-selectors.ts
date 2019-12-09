import { createSelector } from 'reselect';

import {Todo} from './../types'


import {GlobalState} from '../types';
import {ASC,DESC,NONE} from './../constants/priority-mode'

import {ALL,DONE,ACTIVE} from './../constants/status'

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
        default:
            return arr;          
        }
}

export const getTodos = (state:GlobalState) => state.TodoReduce.todos;


export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;

export const getStatus = (state:GlobalState) => state.ModeStatusReducer.status;


// export const getTodoByMode= createSelector(
//     [getTodos,getMode],
//     (allTodos,mode) => {
//         console.log(mode)
//         return myFilter(mySort(allTodos,mode),status)}
// );



export const getAllTodos = createSelector(
    [getTodos,getMode,getStatus],
    (allTodos,mode,status) => {
        console.log(mode)
        return mySort(myFilter(allTodos,status),mode)}
);



export const getTodo=(state:GlobalState, id:number)=>state.TodoReduce.todos[id];


// export const getActiveTodos = createSelector(
//     [getAllTodos,getMode],
//     (allTodos,mode) => mySort(allTodos.filter((el)=>!el.done),mode)
// );

// export const getDoneTodos = createSelector(
//     [getAllTodos,getMode],
//     (allTodos,mode) => mySort(allTodos.filter((el)=>el.done),mode)
// );


export const getDoneLength=createSelector(
    getAllTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const getActiveLength=createSelector(
    getAllTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);



