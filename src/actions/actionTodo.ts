import {ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO, SET_PRIORITY,TODOS_LOADED,TODOS_LOADING} from './../constants/actions';
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
        .then((data:number)=>dispatch({
                type: DELETE_TODO,
                id:data
        }));
}

export const setPriority = (id:number,priority:number):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/priority`, {
                method: 'POST',
                body: JSON.stringify({priority:priority})
        })
        .then(res=>res.json())
        .then((data:number)=>dispatch({
                        type: SET_PRIORITY,
                        id,
                        priority:data
        }));
}

// export const setPriority = (id:number,priority:number):ActionTypeTodo => ({
//         type: SET_PRIORITY,
//         id,
//         priority    
// })

export const toggleAll = (flag:boolean):ActionTypeTodo => ({
        type: TOGGLE_ALL,
        flag
    })

// export const editTodo = (id:number,label:string):ActionTypeTodo => ({
//         type: EDIT_TODO,
//         id,
//         label
//     })


export const deleteCompleted = ():ActionTypeTodo => ({
        type: DELETE_COMPLETED_TODOS
    })


// export const deleteTodo = (id:number):ActionTypeTodo => ({
//         type: DELETE_TODO,
//         id    
// })




// export const todosLoading = () => ({
//         type: TODOS_LOADING
//     } as const)                            


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

//Здесь todo- та что с API пришла
    function _transformTodo(todo:IGet):Todo {
      return {
        id:todo.id,
        label:todo.name,
        done:todo.done,
        priority:todo.priority
      }
    }
 