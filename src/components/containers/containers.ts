
import {selectAllTodos,selectActiveTodos,selectDoneTodos} from '../../selectors/todo-selectors';

import TodoList from '../todo-list'

import {connect} from 'react-redux';

import {GlobalState} from '../../types';

export const All = connect((state:GlobalState) => ({data:selectAllTodos(state)}))(TodoList);

export const Active = connect((state:GlobalState) => ({data:selectActiveTodos(state)}))(TodoList);

export const Done = connect((state:GlobalState) => ({data:selectDoneTodos(state)}))(TodoList);

