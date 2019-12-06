export default interface Todo {
    id: number;
    label: string|undefined;
    done: boolean|undefined;
}

//СПРОСИТЬ: undefined надо убрать, но редюсер не позволяет