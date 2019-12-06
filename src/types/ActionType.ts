export interface ActionTypeBase {
    type: string;
}

export interface ActionTypeTodo extends ActionTypeBase {
    id? : number;
    label?:string;
    done?:boolean;
    flag?: boolean;
}