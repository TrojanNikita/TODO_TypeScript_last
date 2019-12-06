import React, {  useState,useRef, FormEvent } from "react";
import {connect} from 'react-redux';
import {ActionTypeTodo} from './../../entities/ActionType';
import {toggleTodo,deleteTodo, editTodo} from '../../actions/actionTodo';
import { bindActionCreators, Dispatch } from 'redux';
import { Todo } from "../../entities/Todo";
import './todo-list-item.scss';









//Тип Пропса
type IItem = ReturnType<typeof mapDispatchToProps> & {
    item: Todo;
  };


const TodoListItem:React.FC<IItem>=({item,deleteTodo,toggleTodo,editTodo})=>{

    //Включение режима редактирования
    //По-умолчанию выкл
    const [editMode,setEditMode]=useState(false);

    //Будем использовать для получения ссылки 
    //на редактируемый инпут
    const inputEl = useRef<HTMLInputElement>(null);


    //будем изменять newLabel только при переходе в edit mode
    const [newLabel, setNewLabel]=useState('');
    const onLabelChange=(e:React.FormEvent<HTMLInputElement>)=>{
      setNewLabel(e.currentTarget.value);
    };



    //САМОЕ ВАЖНОЕ!!!!
    //Нажатие кнопки редактирования,
    //Если первый раз, то переходим в edit mode, предварительно положив в новый заголовок старый
    //В случае повторного нажатия, если строка не стала пустой изменяем
    //в глобальном хранилище todo, иначе вообще удаляем пустую строку
    const classNameEdit=editMode?
    "right-btn btn btn-outline-dark btn-sm float-right active":
    "right-btn btn btn-outline-dark btn-sm float-right"

    const onEditClick=(e:FormEvent)=>{
        e.preventDefault(); 
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
    };




    //Для cross out: зачеркиваем, если выполнена 
    //и не включен edit mode
    let classNames='todo-list-item';
    if (item.done&&!editMode) classNames+=' done';



    return(
        <form   className={classNames}
                onSubmit={onEditClick}>
                <div
                    className="left"
                    onClick={ ()=>toggleTodo(item.id)}>
                    <input
                        ref={inputEl} 
                        type='text'
                        className='left-edit'
                        value={!editMode?item.label:newLabel}
                        onChange={onLabelChange}
                        onSubmit={onEditClick}
                        readOnly={!editMode}
                    />
                </div>

                <div className="right">    
                    <button type="button"
                        className="right-btn btn btn-outline-danger btn-sm float-right"
                        onClick={()=>deleteTodo(item.id)}>
                        <i className="my-icon fa fa-trash-o" />
                    </button>
                    <button type="button"
                        className={classNameEdit}
                        onClick={onEditClick}>
                        <i className="my-icon fa fa-pencil" />
                    </button>
                </div>
                
        </form>
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


export default connect(null,mapDispatchToProps)(TodoListItem);

