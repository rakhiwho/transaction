import React, { useContext } from 'react'
import { GlobelContext } from '../Context/GlobelState'
//import transaction from './Transaction'

export default function TransactionList() {
    const {transaction } = useContext(GlobelContext);
   const {deleteTransaction} = useContext(GlobelContext);

  return (
    <div>
      <h3>History</h3>
    <ul className='list' id='list' >
        {transaction.map(transaction=>(
            
        
       <li className="minusli" id='minusLi' key={transaction.id}> {transaction.text}
       <span className={transaction.amount >0? "plus-amt": "minus-amt"}>{transaction.amount >0? "+":"-"}${Math.abs(transaction.amount)} rs</span>
       <button onClick={()=>deleteTransaction(transaction.id)}  className='delete' id='delete'>X</button>
       </li>
        ))}
       
    </ul>
    </div>
  )
}
