import React, {  useState,useRef, FormEvent, useCallback } from "react";
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';

import {toggleTodo,deleteTodo, editTodo} from '../../actions/actionTodo';

import  {ActionTypeTodo,Todo,ITodoListItem}  from "../../types";
import './todo-list-item.scss';





const TodoListItem:React.FC<ITodoListItem>=
({classNames,onInputClick,onSubmitItem, onEditClick, inputEl,inputValue,onLabelChange, isRead,editClassName, onDeleteClick})=>{
    return(
        <form   className='item'
                onSubmit={onSubmitItem}>
                <div
                    className='item__left'
                    onClick={onInputClick}>
                    <input
                        ref={inputEl} 
                        type='text'
                        className={classNames}
                        value={inputValue}
                        onChange={onLabelChange}
                        readOnly={isRead}
                    />
                </div>

                <div className="item__right">    
                    <button type="button"
                        className="item__right__btn btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleteClick}>
                        <i className="my-icon fa fa-trash-o" />
                    </button>
                    <button type="button"
                        className={editClassName}
                        onClick={onEditClick}>
                        <i className="my-icon fa fa-pencil" />
                    </button>
                </div>
                
        </form>
    )
}






//Контейнеру поступает только тудушка: id, label, done
type IItemContainer = ReturnType<typeof mapDispatchToProps> & {
    item: Todo;
  };


const TodoListItemContainer:React.FC<IItemContainer>=({item,deleteTodo,toggleTodo,editTodo})=>{

    //Включение режима редактирования
    //По-умолчанию выкл
    const [editMode,setEditMode]=useState(false);
    //будем изменять newLabel только при переходе в edit mode
    const [newLabel, setNewLabel]=useState('');
    //Будем использовать для получения ссылки 
    //на редактируемый инпут
    const inputEl = useRef<HTMLInputElement>(null);



    //САМОЕ ВАЖНОЕ!!!!
    //Смена режима редактирования,
    //Если первый раз, то переходим в edit mode, предварительно положив в новый заголовок старый
    //В случае повторного нажатия, если строка не стала пустой изменяем
    //в глобальном хранилище todo, иначе вообще удаляем пустую строку
    const classNameEdit=editMode?
    "item__right__btn btn btn-outline-dark btn-sm float-right active":
    "item__right__btn btn btn-outline-dark btn-sm float-right"

    const onLabelChange=useCallback((e:React.FormEvent<HTMLInputElement>)=>{
        setNewLabel(e.currentTarget.value);
      },[]);



    const editChange=(()=>{
   //     e.preventDefault(); 
        if(editMode){
            console.log(newLabel);
            //если после изменения пустая тудушка, удаляем ее
            newLabel===''?
                  deleteTodo(item.id):editTodo(item.id,newLabel);
            //меняем режим по нажатию кнопки редактирования 
            setEditMode(false);
        }else{ 
            //Относится к СПРОСИТЬ, хотелось бы убрать
            if(item.label)                    
                    setNewLabel(item.label);
            //меняем режим по нажатию кнопки редактирования             
            setEditMode(true);
            //выводим курсор по нажатию кнопки редактирования
            //console.log(inputEl.current)

            //без этой проверки ts ругается, что current=null
            if(inputEl && inputEl.current) {
                inputEl.current.focus();
            } 
        }
    })


    const onInputClick=useCallback(()=>{
        toggleTodo(item.id)
    },[toggleTodo,item.id])

    const onSubmitItem=useCallback(((event:FormEvent)=>{
        if(event)
            event.preventDefault();
        editChange()
    }),[editChange])

    const onEditClick=useCallback(()=>{
        editChange()
    },[editChange])

    const onDeleteClick=useCallback(()=>{
        deleteTodo(item.id)
    },[deleteTodo,item.id])







    //Для cross out: зачеркиваем, если выполнена 
    //и не включен edit mode
    let classNames='item__left__edit';
    if (item.done&&!editMode) classNames+='--done';

//classNames,onInputClick,onSubmitItem, onEditClick, inputEl,inputValue,onLabelChange, isRead,editClassName, onDeleteClick

    return(
        <TodoListItem
                        classNames={classNames}
                        onSubmitItem={onSubmitItem}
                        onLabelChange={onLabelChange}
                        onEditClick={onEditClick}
                        inputValue={!editMode?item.label:newLabel}
                        onInputClick={onInputClick}
                        inputEl={inputEl}
                        isRead={!editMode}
                        onDeleteClick={onDeleteClick}
                        editClassName={classNameEdit}
        />
    )
};




const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTodo>) =>
bindActionCreators(
  {
      toggleTodo,
      deleteTodo,
      editTodo
  },
  dispatch
);


export default connect(null,mapDispatchToProps)(TodoListItemContainer);

