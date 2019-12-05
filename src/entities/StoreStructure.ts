import { Todo } from "./Todo";

export interface StoreStructure {
    todos: Todo[];
    maxId: number;
}