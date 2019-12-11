

import {Todo} from './../types'

import {ASC,DESC, NONE} from './../constants/priority-mode'
import {ALL,DONE,ACTIVE} from './../constants/status'
import {NONE as mode_NONE, ALL as mode_ALL,SMALL as mode_SMALL,MIDLE as mode_MIDLE,HIGH as mode_HIGH} from './../constants/filter-mode'



//T - тип сортируемого массива
//K - свойство по которому идет сортировка
//Наверное можно оставить и в таком виде, тк режимы ASC. DESC. NONE 
//могут использоватьс и для других сортировок
//Функция которая сортирует по параметру 
function mySort<T>(arr:T[],param:keyof T,mode:string):T[]{
    switch (mode) {
        case 'Asc':
            return [...arr].sort((n1:T,n2:T)=>{
                if ((mode === ASC && n1[param] > n2[param])) {
                    return 1;
                }
            
                if (n1[param] < n2[param]) {
                    return -1;
                }            
                return 0;
            })
        case 'Desc':
            return [...arr].sort((n1:T,n2:T)=>{
                if (n1[param] < n2[param]) {
                    return 1;
                }            
                if (n1[param] > n2[param]) {
                    return -1;
                }            
                return 0;
            })           
        default:
            return arr;          
        }
}





 export {mySort};




//TODO: не знаю как исправить - в фильтре по статусу в статусе "Все" надо
// прям прописывать, что все - это и выполненные и не выполненные, просто вернуть массив 
//не получается, в таком случае TodoList не перерисовывает список

//Хорошо б сделать один фильтр для разных режимов, 
//но из-за этой проблемы он некорректно работает 
export const myFilterByStatus:(arr:Todo[],status:string)=>Todo[]=(arr:Todo[],status:string)=>{
    switch (status) {
        case ACTIVE:
            return arr.filter((el)=>!el.done)
        case DONE:
            return arr.filter((el)=>el.done) 
        case ALL:
            return arr
        default:
            return arr;          
        }
}

export const myFilterByMode:(arr:Todo[],filter_mode:string)=>Todo[]=(arr:Todo[],filter_mode:string)=>{
// console.log(arr, arr.filter((el)=>true));
    switch (filter_mode) {
        case mode_NONE:
            return arr.filter((el)=>el.priority===0) 
        case mode_SMALL:
            return arr.filter((el)=>el.priority===1) 
        case mode_MIDLE:
            return arr.filter((el)=>el.priority===2)    
        case mode_HIGH:
            return arr.filter((el)=>el.priority===3) 
        case mode_ALL:
            return arr;
        default:
            return arr;          
        }
}

