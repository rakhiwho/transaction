import React,{createContext, useReducer} from "react";
import AppReducer from './AppReducer'
const initialState={
    transaction:
    [
        {id:1, text:'flower' , amount:-22},
        {id:2, text:'salary' , amount:2200},
        {id:3, text:'gift' , amount:-32}

    ]

}
//create context
export const GlobelContext =createContext(initialState);

//provider
export const GlobelProvider =({children})=>{
const [state,dispatch]=useReducer(AppReducer ,initialState);

const deleteTransaction= (id)=>{
  dispatch({
    type: 'DELETE',
    payload:id
  });
}

const addText=(transaction)=>{
    dispatch({
    type: 'ADD_TRANSACTION',
    payload:transaction
  })
}

return (
    <GlobelContext.Provider value={
        {
            transaction:state.transaction
            ,deleteTransaction
            ,addText
        }}>
    {children}
    </GlobelContext.Provider>
);
}