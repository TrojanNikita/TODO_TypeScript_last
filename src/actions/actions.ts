import {ADD_TODO,DELETE_COMPLETED_TODOS,
    DELETE_TODO,EDIT_TODO,
    TOGGLE_ALL,TOGGLE_TODO, 
    SET_PRIORITY,TODOS_LOADED,ERROR,LOAD} from './../constants/actions';

import { ActionTypeTodo} from '../types';
import {Todo} from './../types/Todo'

//Actions
export const handleError = ():ActionTypeTodo => ({    
    type: ERROR 
});
export const requestToServer = ():ActionTypeTodo => ({    
    type: LOAD
});
export const todosLoaded = (todos:Todo[]):ActionTypeTodo => ({    
    type: TODOS_LOADED,
    todos    
});
export const addTodo=(todo:Todo):ActionTypeTodo=>({
    type: ADD_TODO,
    todo
})
export const toggleTodo=(id:number):ActionTypeTodo=>({
    type: TOGGLE_TODO,
    id
})
export const editTodo=(id:number,label:string):ActionTypeTodo=>({
    type: EDIT_TODO,
    id,
    label
})
export const deleteTodo=(id:number):ActionTypeTodo=>({
    type: DELETE_TODO,
    id
})
export const setPriority=(id:number,priority:number):ActionTypeTodo=>({
    type: SET_PRIORITY,
    id,
    priority
})
export const toggleAll=(flag:boolean):ActionTypeTodo=>({
    type: TOGGLE_ALL,
    flag
})
export const deleteCompleted=():ActionTypeTodo=>({
    type: DELETE_COMPLETED_TODOS
})

