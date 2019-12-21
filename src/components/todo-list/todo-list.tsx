import React from 'react';
import TodoListItem from '../todo-list-item';

//fetchTodos, data
import {ITodoList} from '../../types/Components'

import Tools from '../tools/tools';
import './todo-list.scss';






const TodoList= ({data}:ITodoList) => {


  const elements = data.map((item) => {
    return (
      
      <li key={item.id} className="todos__li list-group-item">
        <TodoListItem  item={item}/>
      </li>
    );
  });

  return (
    <div>
      <ul className="todos list-group">
        { elements }
      </ul>

      <Tools />
    </div>
  );
};

export default TodoList;
