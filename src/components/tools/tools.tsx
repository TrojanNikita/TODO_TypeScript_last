import React from 'react';
import { connect } from 'react-redux';
import './tools.scss';

import { getDoneLength} from './../../selectors/todo-selectors';
import {GlobalState} from '../../types';

import {ActionTypeTodo} from '../../types/Action';
import {toggleAllThunk,deleteCompletedThunk} from '../../actions/actionTodo';


type ToolsProps={
    toggleAllThunk:(flag:boolean)=>Promise<ActionTypeTodo>;
    deleteCompletedThunk:()=>Promise<ActionTypeTodo>;
    doneCount:number;
};

const Tools: React.FC<ToolsProps>=({doneCount, toggleAllThunk, deleteCompletedThunk})=>{


  //Возможно название первой кнопки нужно вынести в свойства
  //Т,к, по сути меняется только оно
    return(
        <div className="tools btn-group">
          <button className="tools__leftbtn"
                  onClick={()=>toggleAllThunk(doneCount===0)}>
                  {
                    (doneCount===0)?
                    'Select All':'Unselect All'
                  }
          </button>
          <button className="tools__rightbtn"
                  onClick={deleteCompletedThunk}>
                  Delete completed
          </button>
        </div>
      );
};



//Количество выполненных дел
const mapStateToProps=(state:GlobalState) => ({doneCount: getDoneLength(state)})


const mapDispatchToProps ={
      toggleAllThunk,
      deleteCompletedThunk
  };


export default connect(mapStateToProps, mapDispatchToProps)(Tools);