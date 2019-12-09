import { SET_STATUS, SET_MODE } from "../constants/actions";

export interface ActionTypeBase {
    type: string;
}

export interface ActionTypeTodo extends ActionTypeBase {
    id? : number;
    label?:string;
    done?:boolean;
    flag?: boolean;
    priority?:number;
}
// interface ActionStatus{
//     type: typeof SET_STATUS;
//     status:string;
// }
interface ActionMode{
    type:typeof SET_MODE;
    mode:string;
}

export type ActionTypeStatusMode= ActionMode;