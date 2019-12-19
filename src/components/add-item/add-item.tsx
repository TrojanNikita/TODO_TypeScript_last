import React,{useState, useCallback} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

//Типы
import {ActionTypeTodo} from '../../types/Action';

import {addTodoThunk} from '../../actions/actionTodo';

//Стили
import './add-item.scss';


type AddProp = ReturnType<typeof mapDispatchToProps> ;


const AddItem:React.FC<AddProp>=({addTodoThunk})=> {

  const [label, setLabel]=useState('');

  const onLabelChange=useCallback((e:React.FormEvent<HTMLInputElement>)=>{
    setLabel(e.currentTarget.value);
  },[])

  //если label не пустой добавляем тудушку
  const onSubmit=(e:React.FormEvent)=>{
    e.preventDefault(); //Браузер не будет перезагружать страницу
    if(label){
      addTodoThunk(label);
      setLabel('');
    }
  };

    return(
        <form className='add-item'
              onSubmit={onSubmit}>
              <input  type='text'
                      className='add-item__text form-control'
                      onChange={onLabelChange}
                      placeholder='What needs to be done?'
                      value={label}/>
        </form>
    );
};


const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTodo>) =>
    bindActionCreators(
      {
        addTodoThunk
      },
      dispatch
);


export default connect(null,mapDispatchToProps)(AddItem);
