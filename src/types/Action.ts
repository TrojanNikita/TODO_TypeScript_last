import {Todo} from './../types/Todo'

import {ThunkAction} from 'redux-thunk'
import {GlobalState} from '../types';

// Action Definition
interface IToggleTodo{
    type: "TOGGLE_TODO";
    id:number;
}
interface IToggleAll{
    type: "TOGGLE_ALL";
    flag:boolean;
}
interface ITodosLoaded{
    type: "TODOS_LOADED";
    todos:Todo[];
}
interface IAddTodo{
    type: "ADD_TODO";
    todo:Todo
}
interface IEditTodo{
    type: "EDIT_TODO";
    id:number;
    label:string;
}
interface IDeleteCompleted{
    type: "DELETE_COMPLETED_TODOS";
}
interface IDeleteTodo{
    type: "DELETE_TODO";
    id:number;
}
interface ISetPriority{
    type: "SET_PRIORITY";
    id:number;
    priority:number;
}
interface IError{
    type: "ERROR";
}
interface ILoad{
    type: "LOAD";
}


//Union action for todos
export type ActionTypeTodo= IAddTodo|
IDeleteCompleted|IDeleteTodo|
IEditTodo|ISetPriority|
ITodosLoaded|IToggleAll|
IToggleTodo|IError|ILoad;


//T- тип параметра вложенной функции
export type PostActionThunk=ThunkAction<Promise<ActionTypeTodo>, GlobalState, null, ActionTypeTodo>


export type GetActionThunk=ThunkAction<Promise<ActionTypeTodo>, GlobalState, null, ActionTypeTodo>