export const ALL = 'All';
export const DONE = 'Done';
export const ACTIVE = 'Active';


//функция выводит по статусу (строка), соответствующее значение
//Active:done=false, DONE: done=true, ALL: return


function predDone(el:boolean, str:string):boolean{
    switch(str){
        case ACTIVE:
            return el===false
        case DONE:
            return el===true
        case ALL:
            return true   
        default:
            return true 
    }
}




export {predDone};
