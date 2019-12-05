
import {selectAllTodos,selectActiveTodos,selectDoneTodos} from '../../selectors/todo-selectors';

import TodoList from '../todo-list'

import {connect} from 'react-redux';

import {RootState} from '../../reducers/index';

export const All = connect((state:RootState) => ({data:selectAllTodos(state)}))(TodoList);

export const Active = connect((state:RootState) => ({data:selectActiveTodos(state)}))(TodoList);

export const Done = connect((state:RootState) => ({data:selectDoneTodos(state)}))(TodoList);

