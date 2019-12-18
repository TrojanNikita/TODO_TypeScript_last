import React,{useEffect} from 'react';
import TodoListItem from '../todo-list-item';

import  {Todo}  from "../../types";
import './todo-list.scss';
import {fetchTodos} from './../../actions/actionTodo'
import {Dispatch,AnyAction} from 'redux'
import {todosLoaded,} from './../../actions/actionTodo'
import {ThunkDispatch} from 'redux-thunk'

// import { compose } from 'redux';
import {connect} from 'react-redux';


export interface ITodoList{
  data:Array<Todo>;
  fetchTodos:() => Promise<ReturnType<typeof todosLoaded>>;
}

const TodoList= ({data,fetchTodos}:ITodoList) => {

  // console.log(props.data);
  useEffect(() => {
      fetchTodos()
    }, [fetchTodos])


  const elements = data.map((item: Todo) => {
    return (
      
      <li key={item.id} className="todos__li list-group-item">
        <TodoListItem
            item={item}
        />
      </li>
    );
  });

  return (
    <ul className="todos list-group">
      { elements }
    </ul>
  );
};


// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
//   return {
//     fetchTodos: () => dispatch(fetchTodos())
//   };
// };
//Непонятно каким образом, но код выше работает и как ниже
const mapDispatchToProps = {
    fetchTodos
};




export default connect(null, mapDispatchToProps )(TodoList);
