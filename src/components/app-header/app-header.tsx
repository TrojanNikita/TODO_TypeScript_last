import React from 'react';
import { connect } from 'react-redux';

import {selectActiveLength} from './../../selectors/todo-selectors'
import {GlobalState} from '../../types';


import './app-header.scss';


interface AppProps{
    activeCount: number;
}


const AppHeader: React.FC<AppProps>=({activeCount=0})=>{
  return(
    <div className="header d-flex">
        <h1 className="header__title d-flex">
          todos
        </h1>
        <h2 className="header__subtitle d-flex">
          {activeCount} more to do
        </h2>
    </div>
  );
};

//Передаем в пропс количество активных, оборачиваем в мемо,
//т,е, перерисовываем , когда меняется кол-во активных
export default connect((state:GlobalState) => ({
    activeCount:selectActiveLength(state)
}))(AppHeader);