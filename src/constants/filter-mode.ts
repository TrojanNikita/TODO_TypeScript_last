export const NONE = 'NONE';
export const SMALL = 'SMALL';
export const HIGH = 'HIGH';
export const MIDLE = 'MIDLE';
export const ALL = 'ALL';


function priority(str:string){
    switch(str){
        case NONE:
            return 0;
        case SMALL:
            return 1;
        case MIDLE:
            return 2;
        case HIGH:
            return 3;
        case ALL:
            return;
        default:
            return ;
    }
}

export {priority};