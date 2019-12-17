import {useEffect} from 'react'
import {getAllTodos} from '../../selectors/todo-selectors';

import TodoList from '../todo-list'

import {fetchTodos} from './../../actions/actionTodo'

import { compose } from 'redux';
import {connect} from 'react-redux';

import {GlobalState} from '../../types';

const mapDispatchToProps = {  
    fetchTodos
};
const withEffect=useEffect(() => {
    fetchTodos
}, [fetchTodos])
const withConnect = connect((state:GlobalState) => ({data:getAllTodos(state)}), 
                            mapDispatchToProps
);



export const TodoListWithData = compose(withConnect,withEffect)(TodoList);

