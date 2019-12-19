import { createSelector } from 'reselect';


import {GlobalState} from '../types';

import {predPriority} from './../constants/filter-mode'
import {predDone} from './../constants/status'
export const getTodos = (state:GlobalState) => state.TodoReduce.todos;



export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;
export const getFilterMode = (state:GlobalState) => state.ModeStatusReducer.filter_mode;
export const getStatus = (state:GlobalState) => state.ModeStatusReducer.status;



// const sortByPriority=(a:number ,b:number, mode:string)=>{
// if(mode='Asc') 
//         return a-b;
// else if(mode='Desc')
//         return b-a;    
// else return 0;            
// }

export const getTodo=(state:GlobalState, id:number)=>state.TodoReduce.todos[id];

export const getAllTodos = createSelector(
    [getTodos,getMode,getStatus, getFilterMode],
    (allTodos,mode,status,filter_mode) => {
        let newArray=allTodos;
        if(mode==='Asc')
            newArray=[...newArray].sort((a,b)=>{            
                return a.priority-b.priority;
        })
        else if(mode==='Desc')
            newArray=[...newArray].sort((a,b)=>{            
                return b.priority-a.priority;
        })
        return   newArray.filter(({done})=>predDone(done,status)).filter(({priority})=>predPriority(priority,filter_mode))
    }
);



export const getDoneLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const getActiveLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);



