import React from 'react';
import TodoListItem from '../todo-list-item';

import  Todo  from "../../types/Todo";
//import './todo-list.css';


export interface ITodoList{
  data:Todo[];
}

const TodoList= (props:ITodoList) => {

  const elements = props.data.map((item: Todo) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
            item={item}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};


export default React.memo(TodoList);
