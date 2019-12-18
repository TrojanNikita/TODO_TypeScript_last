import {getAllTodos} from '../selectors/todo-selectors';

import TodoList from '../components/todo-list'
import {connect} from 'react-redux';
import {GlobalState} from '../types';




const mapStateToProps=(state:GlobalState) => ({data:getAllTodos(state)});

export const TodoListWithData = connect(mapStateToProps)(TodoList);