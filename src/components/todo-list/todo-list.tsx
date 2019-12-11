import React from 'react';
import TodoListItem from '../todo-list-item';

import  {Todo}  from "../../types";
import './todo-list.scss';


export interface ITodoList{
  data:Todo[];
}

const TodoList= (props:ITodoList) => {

  // console.log(props.data);

  const elements = props.data.map((item: Todo) => {
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


export default TodoList;
