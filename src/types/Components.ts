

import {ActionTypeTodo} from './../types/Action'

import  {Todo}  from "../types";

export interface ITodoList{
    data:Array<Todo>;
}
  
  
export type IItemContainer =  {
    deleteTodoThunk: (id: number) => Promise<ActionTypeTodo>;
    toggleTodoThunk: (id: number, done:Boolean) => Promise<ActionTypeTodo>;
    editTodoThunk: (id: number, label:string) => Promise<ActionTypeTodo>;
    item: Todo;
};

//Интерфейс тудушки
export interface ITodoListItem{
    idItem:number;
    priority:number;
    //Для зачеркивания Тудушки
    classNames:string;
    //функция зачеркивания
    onInputClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    //Вкл/Выкл режима редактирования
    onSubmitItem: (event: React.FormEvent<HTMLFormElement>) => void;
    //для передачи адреса инпута, чтоб менять режим редактирования
    inputEl:React.RefObject<HTMLInputElement>;
    //Текст, который находится в инпуте
    inputValue:string|undefined;
    //Функция изменения текста в инпуте
    onLabelChange: (e:React.FormEvent<HTMLInputElement>)=>void;
    //readonly?
    isRead:boolean;
    //Клик по кнопке удаления
    onDeleteClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    //Клик по кнопке редактирования    
    onEditClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    //Класс кнопки редактирования для изменения активности
    editClassName:string;
}