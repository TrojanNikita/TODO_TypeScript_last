import  Todo  from "./Todo";

export default interface StoreStructure {
    todos: Todo[];
    maxId: number;
}