import React, {  useState,useRef, FormEvent, useCallback } from "react"

import {connect} from 'react-redux'

import {toggleTodo,deleteTodo,editTodo} from '../../actions/actionTodo'

//типы контейнера и view
import  {IItemContainer,ITodoListItem}  from "../../types/Components"

//Правый тулбокс
import Priority from './../priority/priority'
import {Buttons} from './../buttons/buttons'

import './todo-list-item.scss'



const TodoListItem:React.FC<ITodoListItem>=
({idItem,priority, classNames,onInputClick,onSubmitItem, onEditClick, inputEl,inputValue,onLabelChange, isRead,editClassName, onDeleteClick})=>{
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
                    <Buttons  onEditClick={onEditClick}
                              onDeleteClick={onDeleteClick}
                              editClassName={editClassName}  />                        
                    <Priority
                              idItem={idItem} 
                              priority={priority} />
                </div>
                
        </form>
    )
}






//Контейнеру поступает только тудушка: id, label, done
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
    "buttons__right btn btn-outline-dark active":
    "buttons__right btn btn-outline-dark"

    const onLabelChange=useCallback((e:React.FormEvent<HTMLInputElement>)=>{
        setNewLabel(e.currentTarget.value);
      },[]);

    //todo: warning editChange
    //нужно обернуть в useCallback, но не получается  
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

//Callbacks
    const onInputClick=useCallback(()=>{
        toggleTodo(item.id, item.done)
    },[toggleTodo,item.id,item.done])

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
                        idItem={item.id}
                        priority={item.priority}
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



//Контейнер получает тужушку из родительского компонента
//Но передает различные действия
const mapDispatchToProps = {  
      toggleTodo,
      deleteTodo,
      editTodo 
};


export default connect(null,mapDispatchToProps)(TodoListItemContainer);

