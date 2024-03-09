
import { GlobelContext } from "./GlobelState";

export default (state , action)=>{
    
switch(action.type){
    case 'DELETE':
        return{
     ...state,
     transaction: state.transaction.filter(trans=>trans.id !== action.payload)
        };
    case 'ADD_TRANSACTION': 
    return{
        ...state,
        transaction:[action.payload ,...state.transaction]
    }

default :return state;
}
}
