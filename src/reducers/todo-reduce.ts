import {SET_PRIORITY,ADD_TODO,DELETE_COMPLETED_TODOS,DELETE_TODO,EDIT_TODO,TOGGLE_ALL,TOGGLE_TODO} from '../constants/actions';
import  {StoreStructure,ActionTypeTodo}  from '../types';



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
            ...state
          }
          case SET_PRIORITY:
          return {
          
            todos: state.todos.map(el =>
                  (el.id === action.id)
                    ? {...el, priority: action.priority}
                    : el
              ),
            maxId:state.maxId
      }    
        case TOGGLE_TODO:
          return {
          
              todos: state.todos.map(el =>
                    (el.id === action.id)
                      ? {...el, done: !el.done}
                      : el
                ),
                ...state
        }    
        case EDIT_TODO:
          return {
          
            todos: state.todos.map(todo =>
                  (todo.id === action.id)
                    ? {...todo, label:action.label}
                    : todo
            ),
            ...state
        }
        case TOGGLE_ALL:
            return {
          
              todos: state.todos.map(todo => {
                return { ...todo, done: action.flag};
              }),
              ...state
          }         
        case DELETE_COMPLETED_TODOS:
            return {      
              todos: state.todos.filter((el)=>!el.done),
              ...state
          }         
        case DELETE_TODO:
            return {      
              todos: state.todos.filter((el)=>el.id!==action.id),
              ...state
          }
        default:
          return state
      }
}

export default TodoReduce;