

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
        case ASC:
            return arr.sort((n1:T,n2:T)=>{
                if (n1[param] > n2[param]) {
                    return 1;
                }
            
                if (n1[param] < n2[param]) {
                    return -1;
                }            
                return 0;
            })
        case DESC:
            return arr.sort((n1:T,n2:T)=>{
                if (n1[param] < n2[param]) {
                    return 1;
                }
            
                if (n1[param] > n2[param]) {
                    return -1;
                }
            
                return 0;
            })  
        case NONE:
            return arr;          
        default:
            return arr;          
        }
}

//T - тип фильтруемого массива
//K - свойство по которому идет сортировка

function myFilter<T,K extends keyof T>(arr:T[],param:K,value?:T[K]):T[]{
    if (value)
        return arr.filter((el)=>el[param]=value)
    else return arr;    
}

export {mySort, myFilter};





// export const myFilterByStatus:(arr:Todo[],status:string)=>Todo[]=(arr:Todo[],status:string)=>{
//     switch (status) {
//         case ACTIVE:
//             return arr.filter((el)=>!el.done)
//         case DONE:
//             return arr.filter((el)=>el.done) 
//         case ALL:
//             return arr.filter((el)=>el.done||!el.done) ; 
//         default:
//             return arr;          
//         }
// }


// //TODO: не знаю как исправить - в фильтре по статусу в статусе "Все" надо
// // прям прописывать, что все - это и выполненные и не выполненные, просто вернуть массив 
// //не получается, в таком случае TodoList не перерисовывает список


// export const myFilterByMode:(arr:Todo[],filter_mode:string)=>Todo[]=(arr:Todo[],filter_mode:string)=>{

//     switch (filter_mode) {
//         case mode_NONE:
//             return arr.filter((el)=>el.priority===0) 
//         case mode_SMALL:
//             return arr.filter((el)=>el.priority===1) 
//         case mode_MIDLE:
//             return arr.filter((el)=>el.priority===2)    
//         case mode_HIGH:
//             return arr.filter((el)=>el.priority===3) 
//         case mode_ALL:
//             return arr
//         default:
//             return arr;          
//         }
// }

