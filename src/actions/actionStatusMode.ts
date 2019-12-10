import {SET_MODE, SET_STATUS,SET_FILTERMODE} from './../constants/actions';




export const setMode = (mode:string) => ({
    type:SET_MODE,
    mode
} as const)
export const setStatus = (status:string) => ({
        type:SET_STATUS,
        status
} as const)
export const setFilterMode = (filter_mode:string) => ({
    type:SET_FILTERMODE,
    filter_mode
} as const)



export type ActionTypeStatusMode= ReturnType<typeof setMode>|ReturnType<typeof setFilterMode>|
                                  ReturnType<typeof setStatus>;