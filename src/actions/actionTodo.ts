import {ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO, SET_PRIORITY} from './../constants/actions';

export const addTodo = (label:string) => ({
    
        type: ADD_TODO,
        label
    
} as const);

export const toggleTodo = (id:number) => ({
        type: TOGGLE_TODO,
        id
    } as const)


export const toggleAll = (flag:boolean) => ({
        type: TOGGLE_ALL,
        flag
    } as const)

export const editTodo = (id:number,label:string) => ({
        type: EDIT_TODO,
        id,
        label
    } as const)


export const deleteCompleted = () => ({
        type: DELETE_COMPLETED_TODOS
    } as const)


export const deleteTodo = (id:number) => ({
    
        type: DELETE_TODO,
        id
    
} as const)

export const setPriority = (id:number,priority:number) => ({
        type: SET_PRIORITY,
        id,
        priority
    
} as const)

export type ActionTypeTodo= ReturnType<typeof addTodo>|
                            ReturnType<typeof toggleTodo>|
                            ReturnType<typeof toggleAll>|
                            ReturnType<typeof editTodo>|
                            ReturnType<typeof deleteCompleted>|
                            ReturnType<typeof deleteTodo>|
                            ReturnType<typeof setPriority>;





