import React from 'react';
import { connect } from 'react-redux';
import './tools.scss';

import { getDoneLength} from './../../selectors/todo-selectors';
import {GlobalState} from '../../types';

import {ActionTypeTodo} from '../../types/Action';
import { bindActionCreators, Dispatch } from 'redux';
import {toggleAll,deleteCompleted} from '../../actions/actionTodo';


type ToolsProps=ReturnType<typeof mapDispatchToProps>&{
    doneCount:number;
};

const Tools: React.FC<ToolsProps>=({doneCount, toggleAll, deleteCompleted})=>{


  //Возможно название первой кнопки нужно вынести в свойства
  //Т,к, по сути меняется только оно
    return(
        <div className="tools btn-group">
          <button className="tools__leftbtn"
                  onClick={()=>toggleAll(doneCount===0)}>
                  {
                    (doneCount===0)?
                    'Select All':'Unselect All'
                  }
          </button>
          <button className="tools__rightbtn"
                  onClick={deleteCompleted}>
                  Delete completed
          </button>
        </div>
      );
};



//Количество выполненных дел
const mapStateToProps=(state:GlobalState) => ({doneCount: getDoneLength(state)})


const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTodo>) =>
bindActionCreators(
  {
      toggleAll,
      deleteCompleted
  },
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Tools));