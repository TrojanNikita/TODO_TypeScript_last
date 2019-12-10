import { createSelector } from 'reselect';




import {GlobalState} from '../types';

import {mySort,myFilterByMode,myFilterByStatus} from './../utils/utils'



export const getTodos = (state:GlobalState) => state.TodoReduce.todos;



export const getMode = (state:GlobalState) => state.ModeStatusReducer.mode;
export const getFilterMode = (state:GlobalState) => state.ModeStatusReducer.filter_mode;
export const getStatus = (state:GlobalState) => state.ModeStatusReducer.status;





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



