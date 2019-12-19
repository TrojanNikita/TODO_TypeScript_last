import {ADD_TODO,DELETE_COMPLETED_TODOS,
        DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO, 
        SET_PRIORITY,TODOS_LOADED,ERROR} from './../constants/actions';
import {Todo} from './../types/Todo'

import { ActionTypeTodo, GetActionThunk,PostActionThunk} from '../types';



//Actions
export const handleError = (er:string):ActionTypeTodo => ({    
        type: ERROR,  
        er
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


//ThunkActions
export const addTodoThunk= (label:string):PostActionThunk=>async dispatch => {
        return fetch('/todos/new', {
                method: 'POST',
                body: JSON.stringify({name:label})
        })
        .then(res=>res.json())
        .then((data:IGet)=>dispatch(addTodo(_transformTodo(data))));
}
export const toggleTodoThunk = (id:number, done:Boolean):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/change`, {
                method: 'POST',
                body: JSON.stringify({done})
        })
        .then(res=>res.json())
        .then((id:number)=>dispatch(toggleTodo(id)));
}
export const editTodoThunk = (id:number,label:string):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}`, {
                method: 'POST',
                body: JSON.stringify({name:label})
        })
        .then(res=>res.json())
        .then((id:number)=>dispatch(editTodo(id,label)));
}
export const deleteTodoThunk = (id:number):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/del`)
        .then(res=>res.json())
        .then((id:number)=>dispatch(deleteTodo(id)));
}
export const setPriorityThunk = (id:number,priority:number):PostActionThunk=>async dispatch => {
        return fetch(`/todo/${id}/priority`, {
                method: 'POST',
                body: JSON.stringify({priority})
        })
        .then(res=>res.json())
        .then((priority:number)=>dispatch(setPriority(id,priority)));
}
export const toggleAllThunk = (flag:boolean):PostActionThunk=>async dispatch => {
        return fetch(`/todos/update  `, {
                method: 'POST',
                body: JSON.stringify({done:flag})
        })
        .then(res=>res.json())
        .then((done:boolean)=>dispatch(toggleAll(done)));
}
export const deleteCompletedThunk = ():PostActionThunk=>async dispatch => {
        return fetch(`/todos/delete  `, {
                method: 'POST',
                body: JSON.stringify({done:true})
        })
        .then(res=>res.json())
        .then((done:boolean)=>dispatch(deleteCompleted()));
}
export const fetchTodos=():GetActionThunk=>async dispatch => {
                //dispatch(requestPosts(subreddit))
                return fetch(`/todos`)
                .then(response => response.json())
                .then(json=>dispatch(todosLoaded(json.map(_transformTodo))))
                .catch((er)=>handleError(er));
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
 