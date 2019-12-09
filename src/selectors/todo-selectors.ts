import { createSelector } from 'reselect';


import {GlobalState} from '../types';



export const getTodos = (state:GlobalState) => state.TodoReduce.todos;

export const selectAllTodos = createSelector(
    getTodos,
    (allTodos) => allTodos
);

export const selectActiveTodos = createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done)
);

export const selectDoneTodos = createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done)
);


export const selectDoneLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done).length
);

export const selectActiveLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);