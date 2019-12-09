import React,{useState, useCallback} from 'react';

//Для щелчка вне формы
import { ClickAwayListener } from '@material-ui/core';


import { getMode} from './../../selectors/todo-selectors';
import {setMode} from './../../actions/actionStatusMode'

import {NONE, ASC, DESC} from '../../constants/priority-mode'

import {ActionTypeStatusMode,GlobalState} from './../../types' 

import './sort-menu.scss';
import { connect } from 'react-redux';


type AppProps=ReturnType<typeof mapStateToProps>&{
    setMode:(mode: string) => ActionTypeStatusMode;
}


const SortMenu: React.FC<AppProps>=({setMode, mode})=>{

    //видно менюшку или нет
    const [vis,setVis]=useState(false);
    const [ActiveMode,setActiveMode]=useState(mode);

    const clickOnMenu=useCallback(
        () => {
            setVis(!vis);
        },
        [],
    )


    const handleClickAway=useCallback(
        () => {
            setVis(false);
        },
        [],
    )

    const clickOnSortMode=useCallback(
        (mode:string) =>()=> {
            setActiveMode(mode);
            setMode(mode);
        },
        [setMode],
    )

        const classNames="sort-menu__modes__btn";


  return(
    <ClickAwayListener onClickAway={handleClickAway}>
        <div className="sort-menu ">
            <button className='sort-menu__btn 	fa fa-sort-down'
                    onClick={clickOnMenu}></button>

                    {
                        vis?
                    <div className="sort-menu__modes">
                            <button className={ActiveMode===NONE?classNames+'--active':classNames}
                                    onClick={clickOnSortMode(NONE)}>{NONE}</button>
                            <button className={ActiveMode===ASC?classNames+'--active':classNames}
                                    onClick={clickOnSortMode(ASC)}>{ASC}</button>
                            <button className={ActiveMode===DESC?classNames+'--active':classNames}
                                    onClick={clickOnSortMode(DESC)}>{DESC}</button>
                    </div>:null}
        </div>
    </ClickAwayListener>
  );
};

const mapDispatchToProps={
    setMode
};


//Передаем режим
const mapStateToProps=(state:GlobalState) => ({mode: getMode(state)})


//Передаем в пропс количество активных, оборачиваем в мемо,
//т,е, перерисовываем , когда меняется кол-во активных
export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);