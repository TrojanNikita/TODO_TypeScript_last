export const NONE = 'NONE';
export const SMALL = 'SMALL';
export const HIGH = 'HIGH';
export const MIDLE = 'MIDLE';
export const ALL = 'ALL';




function predPriority(el:number, str:string):boolean{
    switch(str){
        case NONE:
            return el===0;
        case SMALL:
            return el===1;
        case MIDLE:
            return el===2;
        case HIGH:
            return el===3;
        default:
            return true;
    }
}

export {predPriority};