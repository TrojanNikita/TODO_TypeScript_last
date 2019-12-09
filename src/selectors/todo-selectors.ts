import { createSelector } from 'reselect';

import {Todo} from './../types'


import {GlobalState} from '../types';
import { array } from 'prop-types';

const mySort:(arr:Todo[],mode:string)=>Todo[]=(arr:Todo[],mode:string)=>{
    switch (mode) {
        case 'ASC':
            return arr.sort((n1:Todo,n2:Todo)=>{
                if (n1.priority > n2.priority) {
                    return 1;
                }
            
                if (n1.priority < n2.priority) {
                    return -1;
                }
            
                return 0;
            })
        case 'DESC':
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

export const getTodos = (state:GlobalState) => state.TodoReduce.todos;


export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;


export const getAllTodos = createSelector(
    [getTodos,getMode],
    (allTodos,mode) => mySort(allTodos,mode)
);



export const getTodo=(state:GlobalState, id:number)=>state.TodoReduce.todos[id];


export const getActiveTodos = createSelector(
    [getAllTodos,getMode],
    (allTodos,mode) => mySort(allTodos.filter((el)=>!el.done),mode)
);

export const getDoneTodos = createSelector(
    [getAllTodos,getMode],
    (allTodos,mode) => mySort(allTodos.filter((el)=>el.done),mode)
);


export const getDoneLength=createSelector(
    getAllTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const getActiveLength=createSelector(
    getAllTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);

export const getAscTodos = createSelector(
    getAllTodos,
    allTodos => allTodos.sort((n1,n2)=>{
        if (n1.priority > n2.priority) {
            return 1;
        }
    
        if (n1.priority < n2.priority) {
            return -1;
        }
    
        return 0;
    })
);

export const getDescTodos = createSelector(
    getAllTodos,
    allTodos => allTodos.sort((n1,n2)=>{
        if (n1.priority < n2.priority) {
            return 1;
        }    
        if (n1.priority > n2.priority) {
            return -1;
        }    
        return 0;
    })
);
