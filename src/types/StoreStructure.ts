import  {Todo}  from "./";

export interface StoreStructure {
    todos: Todo[];
    error:boolean;
    loading:boolean;
}