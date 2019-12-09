import React from 'react'

import './buttons.scss'

interface IButtons {
    //Клик по кнопке удаления
    onDeleteClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    //Клик по кнопке редактирования    
    onEditClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    //Класс кнопки редактирования для изменения активности
    editClassName:string;
}

export const Buttons: React.FC<IButtons> = (props) => {


    



    return (
        <div className='buttons'>
            <button type="button"
                className={props.editClassName}
                onClick={props.onEditClick}>
                <i className="buttons__left__my-icon fa fa-pencil" />
            </button>
            <button type="button"
                className="buttons__right btn btn-outline-danger"
                onClick={props.onDeleteClick}>
                <i className="buttons__right__my-icon fa fa-trash-o" />
            </button>
        </div>
    )
}


