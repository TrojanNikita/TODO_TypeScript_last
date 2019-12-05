import { createSelector } from 'reselect';

import {StoreStructure} from './../entities/StoreStructure';




export const getTodos = (state:any) => state.todos.todos;

export const selectAllTodos = createSelector(
    getTodos,
    allTodos => allTodos
);

export const selectActiveTodos = createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done)
);

export const selectDoneTodos = createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done)
);
