import React from 'react';
import { connect } from 'react-redux';
import './tools.scss';

import { selectDoneLength} from './../../selectors/todo-selectors';
import {ActionTypeTodo} from './../../entities/ActionType';
import { bindActionCreators, Dispatch } from 'redux';
import {toggleAll,deleteCompleted} from '../../actions/actionTodo';
import {RootState} from '../../reducers';


type ToolsProps=ReturnType<typeof mapDispatchToProps>&{
    doneCount:number;
};

const Tools: React.FC<ToolsProps>=({doneCount, toggleAll, deleteCompleted})=>{


  //Возможно название первой кнопки нужно вынести в свойства
  //Т,к, по сути меняется только оно
    return(
        <div className="tools btn-group">
          <button className="tools-button-left"
                  onClick={()=>toggleAll(doneCount===0)}>
                  {
                    (doneCount===0)?
                    'Select All':'Unselect All'
                  }
          </button>
          <button className="tools-button-right"
                  onClick={deleteCompleted}>
                  Delete completed
          </button>
        </div>
      );
};



//Количество выполненных дел
const mapStateToProps=(state:RootState) => ({doneCount: selectDoneLength(state)})


const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTodo>) =>
bindActionCreators(
  {
      toggleAll,
      deleteCompleted
  },
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Tools));