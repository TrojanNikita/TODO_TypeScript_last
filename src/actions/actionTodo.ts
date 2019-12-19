import {ADD_TODO,DELETE_COMPLETED_TODOS,
        DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO, 
        SET_PRIORITY,TODOS_LOADED} from './../constants/actions';
import {Todo} from './../types/Todo'

import { ActionTypeTodo, GetActionThunk,PostActionThunk} from '../types';

//import {getTodos} from '../services/todo-service' 

export const todosLoaded = (todos:Todo[]):ActionTypeTodo => ({    
        type: TODOS_LOADED,
        todos    
});

export const addTodo= (label:string):PostActionThunk=>async dispatch => {
        return fetch('/todos/new', {
                method: 'POST',
                body: JSON.stringify({name:label})
        })
        .then(res=>res.json())
        .then((data:IGet)=>dispatch({
                type: ADD_TODO,
                todo:_transformTodo(data)
        }));
}


export const toggleTodo = (id:number, done:Boolean):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/change`, {
                method: 'POST',
                body: JSON.stringify({done})
        })
        .then(res=>res.json())
        .then((data:any)=>dispatch({
                type: TOGGLE_TODO,
                id:data
        }));
}

export const editTodo = (id:number,label:string):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}`, {
                method: 'POST',
                body: JSON.stringify({name:label})
        })
        .then(res=>res.json())
        .then((data:number)=>dispatch({
                type: EDIT_TODO,
                id:data,
                label:label
        }));
}

export const deleteTodo = (id:number):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/del`)
        .then(res=>res.json())
        .then((id:number)=>dispatch({
                type: DELETE_TODO,
                id
        }));
}

export const setPriority = (id:number,priority:number):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/priority`, {
                method: 'POST',
                body: JSON.stringify({priority})
        })
        .then(res=>res.json())
        .then((priority:number)=>dispatch({
                        type: SET_PRIORITY,
                        id,
                        priority
        }));
}

export const toggleAll = (flag:boolean):PostActionThunk=>async dispatch => {
        return fetch(`/todos/update  `, {
                method: 'POST',
                body: JSON.stringify({done:flag})
        })
        .then(res=>res.json())
        .then((done:boolean)=>dispatch({
                type: TOGGLE_ALL,
                flag:done
        }));
}
export const deleteCompleted = ():PostActionThunk=>async dispatch => {
        return fetch(`/todos/delete  `, {
                method: 'POST',
                body: JSON.stringify({done:true})
        })
        .then(res=>res.json())
        .then((done:boolean)=>dispatch({
                type: DELETE_COMPLETED_TODOS
        }));
}



export const fetchTodos=():GetActionThunk=>async dispatch => {
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

//Здесь todo - то что с API пришло
    function _transformTodo(todo:IGet):Todo {
      return {
        id:todo.id,
        label:todo.name,
        done:todo.done,
        priority:todo.priority
      }
    }
 