export const ALL = 'All';
export const DONE = 'Done';
export const ACTIVE = 'Active';


function done(str:string){
        switch(str){
            case ACTIVE:
                return false
            case DONE:
                return true
            case ALL:
                return true&&false
            default:
                return false   
        }
}


export {done};

