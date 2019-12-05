import {ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO} from './../constants/actions';
import {ActionTypeTodo} from './../entities/ActionType';

export const addTodo = (label:string): ActionTypeTodo => {
    return {
        type: ADD_TODO,
        label
    }
}

export const toggleTodo = (id:number): ActionTypeTodo => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const toggleAll = (flag:boolean): ActionTypeTodo => {
    return {
        type: TOGGLE_ALL,
        flag
    }
}

export const editTodo = (id:number,label:string): ActionTypeTodo => {
    return {
        type: EDIT_TODO,
        id,
        label
    }
}


export const deleteCompleted = (): ActionTypeTodo => {
    return {
        type: DELETE_COMPLETED_TODOS
    }
}

export const deleteTodo = (id:number): ActionTypeTodo => {
    return {
        type: DELETE_TODO,
        id
    }
}






