import {addTodo,toggleTodo,
        handleError,todosLoaded,
        editTodo,deleteCompleted,deleteTodo,
        setPriority, requestToServer, toggleAll
} from './actions'
import {Todo} from './../types/Todo'

import {  GetActionThunk,PostActionThunk} from '../types';

import {fetchData} from '../services/todo-service';

//ThunkActions
export const addTodoThunk= (label:string):PostActionThunk=>async dispatch => {
        try {
                
                const data= await fetchData('/todos/new','POST',{name:label});
                return dispatch(addTodo(_transformTodo(data)));
        } catch (data) {
                console.log(data.message)
                return dispatch(handleError())               
        }
}

export const toggleTodoThunk = (id:number, done:Boolean):PostActionThunk=>async dispatch => {
        try {
                const data:number= await fetchData(`/todos/${id}/status/${done}`,'PUT',{done})
                return dispatch(toggleTodo(data));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const editTodoThunk = (id:number,label:string):PostActionThunk=>async dispatch => {
        try {
                const data:number= await fetchData(`/todos/${id}/name/${label}`,'PUT')
                return dispatch(editTodo(data,label));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const deleteTodoThunk = (id:number):PostActionThunk=>async dispatch => {
        try {
                const data:number= await fetchData(`/todos/${id}`,'DELETE')
                return dispatch(deleteTodo(data));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const setPriorityThunk = (id:number,priority:number):PostActionThunk=>async dispatch => {
        try {
                const data= await fetchData(`/todos/${id}/priority/${priority}`,'PUT',{priority})                
                return dispatch(setPriority(id,data));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const toggleAllThunk = (flag:boolean):PostActionThunk=>async dispatch => {
        try {
                const data:boolean= await fetchData(`/todos/update/${!flag}`,'PUT');
                return dispatch(toggleAll(!data));
        } catch (response) {
                return   dispatch(handleError())               
        }
}
export const deleteCompletedThunk = ():PostActionThunk=>async dispatch => {
        try {
                await fetchData(`/todos/status/true`,'DELETE')
                return dispatch(deleteCompleted());
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const fetchTodos=():GetActionThunk=>async dispatch => {
        dispatch(requestToServer())
        try {
                const data:IGet[]= await fetchData("/todos");
                return dispatch(todosLoaded(data.map(g=>_transformTodo(g))));
        } catch (error) {
                return   dispatch(handleError())               
        }
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
 