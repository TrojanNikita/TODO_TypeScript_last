import {ADD_TODO,DELETE_COMPLETED_TODOS,
        DELETE_TODO,EDIT_TODO,
        TOGGLE_ALL,TOGGLE_TODO, 
        SET_PRIORITY,TODOS_LOADED,ERROR,LOAD} from './../constants/actions';
import {Todo} from './../types/Todo'

import { ActionTypeTodo, GetActionThunk,PostActionThunk} from '../types';

import {fetchData} from '../services/todo-service';


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


//ThunkActions
export const addTodoThunk= (label:string):PostActionThunk=>async dispatch => {
        try {
                return await fetchData('/todos/new','POST',{name:label})
               .then((data:IGet)=> dispatch(addTodo(_transformTodo(data))));
        } catch (response) {
                return   dispatch(handleError())               
        }

}
export const toggleTodoThunk = (id:number, done:Boolean):PostActionThunk=>async dispatch => {
        try {
                return await fetchData(`/todos/${id}/change`,'PUT',{done})
                .then((id:number)=>dispatch(toggleTodo(id)));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const editTodoThunk = (id:number,label:string):PostActionThunk=>async dispatch => {
        try {
                return await fetchData(`/todos/${id}`,'PUT',{name:label})
                .then((id:number)=>dispatch(editTodo(id,label)));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const deleteTodoThunk = (id:number):PostActionThunk=>async dispatch => {
        try {
                return await fetchData(`/todos/${id}`,'DELETE')
                .then(()=>dispatch(deleteTodo(id)));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const setPriorityThunk = (id:number,priority:number):PostActionThunk=>async dispatch => {
        try {
                return await fetchData(`/todos/${id}/priority`,'PUT',{priority})                
                .then((priority:number)=>dispatch(setPriority(id,priority)));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const toggleAllThunk = (flag:boolean):PostActionThunk=>async dispatch => {
        try {
                return await fetchData(`/todos/update`,'PUT',{done:!flag})
                .then((done:boolean)=>dispatch(toggleAll(!done)));
        } catch (response) {
                return   dispatch(handleError())               
        }
}
export const deleteCompletedThunk = ():PostActionThunk=>async dispatch => {
        try {
                return await fetchData(`/todos`,'DELETE',{done:true})
                .then(()=>dispatch(deleteCompleted()));
        } catch (response) {
                return   dispatch(handleError())               
        }
        
}
export const fetchTodos=():GetActionThunk=>async dispatch => {
        dispatch(requestToServer())
        try {
                return await fetchData("/todos")
               .then((data:IGet[])=> dispatch(todosLoaded(data.map(g=>_transformTodo(g)))));
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
 