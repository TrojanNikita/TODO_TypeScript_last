import {ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,TOGGLE_ALL,TOGGLE_TODO} from '../constants/actions';
import { StoreStructure } from '../entities/StoreStructure';

import { ActionTypeTodo } from '../entities/ActionType';


const initState: StoreStructure = {
    todos: [],
    maxId:100
};

export function TodoReduce (
  state=initState, 
  action: ActionTypeTodo): StoreStructure {
    switch (action.type) {
        case ADD_TODO:
          return {
            todos:[
            ...state.todos,
            {
              id: state.maxId+1,
              label: action.label,
              done: false
            }],
            maxId:state.maxId+1
          }
        case TOGGLE_TODO:
          return {
          
              todos: state.todos.map(el =>
                    (el.id === action.id)
                      ? {...el, done: !el.done}
                      : el
                ),
              maxId:state.maxId
        }    
        case EDIT_TODO:
          return {
          
            todos: state.todos.map(todo =>
                  (todo.id === action.id)
                    ? {...todo, label:action.label}
                    : todo
            ),
            maxId:state.maxId
        }
        case TOGGLE_ALL:
            return {
          
              todos: state.todos.map(todo => {
                return { ...todo, done: action.flag};
              }),
              maxId:state.maxId
          }         
        case DELETE_COMPLETED_TODOS:
            return {      
              todos: state.todos.filter((el)=>!el.done),
              maxId:state.maxId
          }         
        case DELETE_TODO:
            return {      
              todos: state.todos.filter((el)=>el.id!==action.id),
              maxId:state.maxId
          }
        default:
          return state
      }
}

export default TodoReduce;