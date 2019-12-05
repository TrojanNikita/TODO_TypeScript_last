import { createSelector } from 'reselect';


import {RootState} from '../reducers/index';



export const getTodos = (state:RootState) => state.TodoReduce.todos;

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
