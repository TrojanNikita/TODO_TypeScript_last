import React,{useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {ActionTypeTodo} from './../../entities/ActionType';
import {addTodo} from '../../actions/actionTodo';
import './add-item.scss';


type AddProp = ReturnType<typeof mapDispatchToProps> ;


const AddItem:React.FC<AddProp>=({addTodo})=> {

  const [label, setLabel]=useState('');

  const onLabelChange=(e:React.FormEvent<HTMLInputElement>)=>{
    setLabel(e.currentTarget.value);
  };

  //если label не пустой добавляем тудушку
  const onSubmit=(e:React.FormEvent)=>{
    e.preventDefault(); //Браузер не будет перезагружать страницу
    if(label){
      addTodo(label);
      setLabel('');
    }
  };

    return(
        <form className='add-item'
              onSubmit={onSubmit}>
              <input  type='text'
                      className='add-item-text form-control'
                      onChange={onLabelChange}
                      placeholder='What needs to be done?'
                      value={label}/>
        </form>
    );
};


const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTodo>) =>
    bindActionCreators(
      {
        addTodo: addTodo,
      },
      dispatch
);


export default connect(null,mapDispatchToProps)(AddItem);
