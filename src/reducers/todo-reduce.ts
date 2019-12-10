import {SET_PRIORITY,ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,TOGGLE_ALL,TOGGLE_TODO} from '../constants/actions';
import  {StoreStructure}  from '../types';
import {ActionTypeTodo} from './../actions/actionTodo'



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
              done: false,
              priority: 0
            }],             
            maxId:state.maxId+1           
          }
          case SET_PRIORITY:
          return {
            ...state,
            todos: state.todos.map(el =>
                  (el.id === action.id)
                    ? {...el, priority: action.priority}
                    : el
              )
      }    
        case TOGGLE_TODO:
          return {
            ...state ,
              todos:state.todos.map((todo) => {
              if (todo.id === action.id) {
                return Object.assign({}, todo, {
                  done: !todo.done
                })
              }
              return todo
              }) 
        }
        case EDIT_TODO:
          return {
            ...state,
            todos: state.todos.map(todo =>
                  (todo.id === action.id)?
                     {...todo, label:action.label}
                     : todo)
                    
            
        }
        case TOGGLE_ALL:
            return {
              ...state,
              todos: state.todos.map(todo => {
                return Object.assign({}, todo, {done: action.flag})
              })
          }         
        case DELETE_COMPLETED_TODOS:
            return {  
              ...state,    
              todos: state.todos.filter((el)=>!el.done),
              
          }         
        case DELETE_TODO:
            return {      
              ...state,
              todos: state.todos.filter((el)=>el.id!==action.id)
              
          }
        default:
          return state
      }
}

export default TodoReduce;