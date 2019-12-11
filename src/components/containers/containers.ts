
import {getAllTodos} from '../../selectors/todo-selectors';

import TodoList from '../todo-list'

import {connect} from 'react-redux';

import {GlobalState} from '../../types';

export const TodoListWithData = connect((state:GlobalState) => ({data:getAllTodos(state)}))(TodoList);
