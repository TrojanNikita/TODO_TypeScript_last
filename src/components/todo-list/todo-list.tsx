import React,{useEffect} from 'react';
import TodoListItem from '../todo-list-item';

//fetchTodos, data
import {ITodoList} from '../../types/Components'

import './todo-list.scss';






const TodoList= ({data,fetchTodos}:ITodoList) => {

  useEffect(() => {
      fetchTodos()
    }, [fetchTodos])


  const elements = data.map((item) => {
    return (
      
      <li key={item.id} className="todos__li list-group-item">
        <TodoListItem  item={item}/>
      </li>
    );
  });

  return (
    <ul className="todos list-group">
      { elements }
    </ul>
  );
};

export default TodoList;
