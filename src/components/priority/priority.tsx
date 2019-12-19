
import React,{useCallback} from 'react'

import {connect} from 'react-redux';


import {setPriority} from '../../actions/actionTodo';

import {ActionTypeTodo} from '../../types/Action';



import './priority.scss';

interface IPriority {
    priority:number;
    idItem:number;
    setPriority: (id: number, priority:number) => Promise<ActionTypeTodo>;
}

const Priority: React.FC<IPriority> = ({priority=0, idItem=0, setPriority}) => {

    const numbers:number[]=[1,2,3];

//<i className={`${btnClass}__${count} fa fa-star-o`} />

    let btnClass='priority__li__btn';

    // const onClickPriority=(count:number) =>()=> {
    //         // btnClass+=`__${count}`; 
    //         console.log(count);
    //         setPriority(idItem,count)
    //     }


    const onClickPriority=useCallback(
        (count:number) =>()=> {
            if(priority!==count){
                // btnClass+=`__${count}`; 
                console.log(count);
                setPriority(idItem,count);
            }
            else{
                setPriority(idItem,0);
            }
        },
        [setPriority,idItem,priority],
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
    setPriority 
};


export default connect(null,mapDispatchToProps)(Priority);

