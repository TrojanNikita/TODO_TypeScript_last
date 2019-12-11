

//T - тип сортируемого массива
//K - свойство по которому идет сортировка
//Наверное можно оставить и в таком виде, тк режимы ASC. DESC. NONE 
//могут использоватьс и для других сортировок
//Функция которая сортирует по параметру 


function mySort<T>(arr:T[],param:keyof T,mode:string):T[]{
    switch (mode) {
        case 'Asc':
            return [...arr].sort((n1:T,n2:T)=>{
                if (n1[param] > n2[param]) {
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






//TODO: не знаю как исправить - в фильтре по статусу в статусе "Все" надо
// прям прописывать, что все - это и выполненные и не выполненные, просто вернуть массив 
//не получается, в таком случае TodoList не перерисовывает список

//Хорошо б сделать один фильтр для разных режимов, 
//но из-за этой проблемы он некорректно работает 


//T - тип фильтруемого массива
//K - свойство по которому идет сортировка
function myFilter<T,K extends keyof T>(arr:T[],param:K,value?:T[K]):T[]{
    if (value)
        return arr.filter((el)=>el[param]=value)
    else return arr;    
}




export {mySort,myFilter};



