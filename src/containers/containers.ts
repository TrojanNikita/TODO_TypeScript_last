import {getAllTodos} from '../selectors/todo-selectors';

import TodoList from '../components/todo-list'
import {connect} from 'react-redux';
import {GlobalState} from '../types';
import {fetchTodos} from './../actions/actionTodo'




const mapStateToProps=(state:GlobalState) => ({data:getAllTodos(state)});
const mapDispatchToProps = {fetchTodos};
export const TodoListWithData = connect(mapStateToProps,mapDispatchToProps)(TodoList);