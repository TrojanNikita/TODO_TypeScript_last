import React,{ useCallback} from 'react';


import { getFilterMode} from './../../selectors/todo-selectors';
import {setFilterMode} from './../../actions/actionStatusMode'


import {GlobalState} from './../../types' 

import {ActionTypeStatusMode} from './../../actions/actionStatusMode' 

import './filter_mode.scss';
import { connect } from 'react-redux';
import { NONE,ALL,HIGH,MIDLE,SMALL } from '../../constants/filter-mode';
import SortMenu from '../sort-menu/sort-menu';


type AppProps=ReturnType<typeof mapStateToProps>&{
    setFilterMode:(filter_mode: string) => ActionTypeStatusMode;
}


const FilterMode: React.FC<AppProps>=({setFilterMode, filter_mode})=>{


    const onBtnLeft=useCallback(
        ()=>{
            switch(filter_mode){
                case ALL:
                return setFilterMode(HIGH)
                case HIGH:
                return setFilterMode(MIDLE)
                case MIDLE:
                return setFilterMode(SMALL)
                case SMALL:
                return setFilterMode(NONE) 
                case NONE:
                return setFilterMode(ALL)    
            }
        },
        [filter_mode,setFilterMode],
    )
    const onBtnRight=useCallback(
        ()=> {
            switch(filter_mode){
                case ALL:
                return setFilterMode(NONE)
                case NONE:
                return setFilterMode(SMALL)
                case HIGH:
                return setFilterMode(ALL)
                case MIDLE:
                return setFilterMode(HIGH)
                case SMALL:
                return setFilterMode(MIDLE)    
            }
        },
        [filter_mode,setFilterMode],
    )


  return(
        <div className="filter_mode">
            <button className='filter-mode__btn fa fa-arrow-left'
                    onClick={onBtnLeft}></button>
            <div className='filter-mode__content '>
                {
                    filter_mode===ALL?  
                    <SortMenu/>:
                    filter_mode}
            </div>
            <button className='filter-mode__btn fa fa-arrow-right'
                    onClick={onBtnRight}></button>
            
        </div>
  );
};

const mapDispatchToProps={
    setFilterMode
};

//Передаем режим
const mapStateToProps=(state:GlobalState) => ({filter_mode: getFilterMode(state)})


export default connect(mapStateToProps, mapDispatchToProps)(FilterMode);