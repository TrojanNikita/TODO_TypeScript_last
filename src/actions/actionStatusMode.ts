import {SET_MODE, SET_STATUS} from './../constants/actions';




export const setMode = (mode:string) => ({
    type:SET_MODE,
    mode
} as const)
export const setStatus = (status:string) => ({
        type:SET_STATUS,
        status
} as const)



export type ActionTypeStatusMode= ReturnType<typeof setMode>|
                                  ReturnType<typeof setStatus>;