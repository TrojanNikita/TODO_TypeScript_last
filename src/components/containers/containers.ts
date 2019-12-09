
import {getAllTodos,getActiveTodos,getDoneTodos} from '../../selectors/todo-selectors';

import TodoList from '../todo-list'

import {connect} from 'react-redux';

import {GlobalState} from '../../types';

export const All = connect((state:GlobalState) => ({data:getAllTodos(state)}))(TodoList);

export const Active = connect((state:GlobalState) => ({data:getActiveTodos(state)}))(TodoList);

export const Done = connect((state:GlobalState) => ({data:getDoneTodos(state)}))(TodoList);

