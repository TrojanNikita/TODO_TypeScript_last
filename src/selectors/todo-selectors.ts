import { createSelector } from 'reselect';




import {GlobalState} from '../types';

import {mySort,myFilterByStatus,myFilterByMode} from './../utils/utils'

export const getTodos = (state:GlobalState) => state.TodoReduce.todos;



export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;
export const getFilterMode = (state:GlobalState) => state.ModeStatusReducer.filter_mode;
export const getStatus = (state:GlobalState) => state.ModeStatusReducer.status;





export const getTodo=(state:GlobalState, id:number)=>state.TodoReduce.todos[id];

export const getAllTodos = createSelector(
    [getTodos,getMode,getStatus, getFilterMode],
    (allTodos,mode,status,filter_mode) => {
        const newArr=mySort(myFilterByMode(myFilterByStatus(allTodos,status),filter_mode),'priority',mode);
        console.log(newArr, 'selector')
        return newArr}
);



export const getDoneLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const getActiveLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);



