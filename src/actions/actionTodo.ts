import {ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO, SET_PRIORITY,TODOS_LOADED,TODOS_LOADING} from './../constants/actions';
import {Todo} from './../types/Todo'
import { Dispatch,ActionCreator } from 'redux'
 import {ThunkAction} from 'redux-thunk'
import { StoreStructure } from '../types';

import {GlobalState} from '../types';

//import {getTodos} from '../services/todo-service'        


export const addTodo = (label:string) => ({
    
        type: ADD_TODO,
        label
    
} as const);

export const todosLoaded = (todos:Todo[]) => ({
    
        type: TODOS_LOADED,
        todos
    
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


export const todosLoading = () => ({
        type: TODOS_LOADING
    } as const)



export type ActionTypeTodo= ReturnType<typeof addTodo>|
                            ReturnType<typeof toggleTodo>|
                            ReturnType<typeof toggleAll>|
                            ReturnType<typeof editTodo>|
                            ReturnType<typeof deleteCompleted>|
                            ReturnType<typeof deleteTodo>|
                            ReturnType<typeof todosLoaded>|
                            ReturnType<typeof todosLoading>|
                            ReturnType<typeof setPriority>;

//ActionCreator<
                //             ThunkAction<
                //             Promise<typeof todosLoaded>,  // The type of the last action to be dispatched - will always be promise<T> for async actions
                //             Todo[],                  // The type for the data within the last action
                //             null,                       // The type of the parameter for the nested function 
                //             ReturnType<typeof todosLoaded>            // The type of the last action to be dispatched
                //     >
 export type AppThunk=ThunkAction<Promise<ReturnType<typeof todosLoaded>>, GlobalState, null, ReturnType<typeof todosLoaded>>

export const fetchTodos=():AppThunk=>async dispatch => {
                //dispatch(requestPosts(subreddit))
                return fetch(`/todos`)
                .then(response => response.json())
                .then(json=>dispatch(todosLoaded(json.map(_transformTodo))));
        };

//Потом убрать отсюда
interface IGet{
    id:number;
    name:string;
    done:boolean;
    priority:number;
}

//Здесь todo- та что с API пришла
    function _transformTodo(todo:IGet):Todo {
      return {
        id:todo.id,
        label:todo.name,
        done:todo.done,
        priority:todo.priority
      }
    }
 