import { SET_STATUS, SET_MODE } from "../constants/actions";

export interface ActionTypeBase {
    type: string;
}


interface ActionLabel  {
    label:string;
}
interface ActionLabel  {
    id:number;
}
interface ActionPriority  {
    id:number;
    priority:number;
}
interface ActionToggle  {
    id:number;
    priority:number;
}
interface ActionEdit  {
    id:number;
    label:string;
}
interface ActionForAll {
    flag:boolean;
}


export type ActionTypeTodo= (ActionPriority|ActionLabel|ActionToggle|ActionEdit|ActionForAll)&ActionTypeBase;

interface ActionStatus {
    type:typeof SET_STATUS;
    status:string;
}
interface ActionMode {
    type:typeof SET_MODE;
    mode:string;
}

export type ActionTypeStatusMode= ActionMode|ActionStatus;