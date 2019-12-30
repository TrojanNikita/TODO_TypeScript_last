import React from 'react';
//import { connect } from 'react-redux';
// import {getActiveLength} from './../../selectors/todo-selectors'
// import {GlobalState} from '../../types';

import AuthButton from './../../authentication/auth_button';


import './app-header.scss';


import FilterMode from '../filter-mode/filter-mode';


// interface AppProps{
//     activeCount: number;
// }


const AppHeader: React.FC=()=>{
  return(
    <div className="header">
        <h1 className="header__title">
          todos
        </h1>
        {/* <h2 className="header__subtitle d-flex">
          {activeCount} more to do
        </h2> */}
        <div className='header__subtitle'>
           <FilterMode/>
        </div>
        {/* <div className='header__right'><SortMenu/></div> */}
         <div className='header__login'><AuthButton/></div>


    </div>
  );
};

//Передаем в пропс количество активных, оборачиваем в мемо,
//т,е, перерисовываем , когда меняется кол-во активных
// export default connect((state:GlobalState) => ({
//     activeCount:getActiveLength(state)
// }))(AppHeader);
export default React.memo(AppHeader);