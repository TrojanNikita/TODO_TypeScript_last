
import {selectAllTodos,selectActiveTodos,selectDoneTodos} from '../../selectors/todo-selectors';

import {StoreStructure} from '../../entities/StoreStructure';

import TodoList from '../todo-list'

import {connect} from 'react-redux';

// //передаем списку все

export const All = connect((state:any) => ({data:selectAllTodos}))(TodoList);

export const Active = connect((state:any) => ({data:selectDoneTodos}))(TodoList);

export const Done = connect((state:any) => ({data:selectActiveTodos}))(TodoList);


