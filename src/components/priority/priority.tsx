
import React,{useCallback} from 'react'

import {connect} from 'react-redux';


import {setPriorityThunk} from '../../actions/actionTodo';

import {ActionTypeTodo} from '../../types/Action';



import './priority.scss';

interface IPriority {
    priority:number;
    idItem:number;
    setPriorityThunk: (id: number, priority:number) => Promise<ActionTypeTodo>;
}

const Priority: React.FC<IPriority> = ({priority=0, idItem=0, setPriorityThunk}) => {

    const numbers:number[]=[1,2,3];

    let btnClass='priority__li__btn';


    const onClickPriority=useCallback(
        (count:number) =>()=> {
            if(priority!==count){
                // btnClass+=`__${count}`; 
                console.log(count);
                setPriorityThunk(idItem,count);
            }
            else{
                setPriorityThunk(idItem,0);
            }
        },
        [setPriorityThunk,idItem,priority],
    )

    const stars = numbers.map((count: number) => {
        return (
          <li key={count} className="priority__li">
            <button type="button"
                        className={count<=priority?`${btnClass}__active`:btnClass}
                        onClick={onClickPriority(count)}>                        
            </button>
          </li>
        );
      });



    return (
        <div className='priority'>
            {stars}            
        </div>
    )
}


const mapDispatchToProps = {  
    setPriorityThunk 
};


export default connect(null,mapDispatchToProps)(Priority);

