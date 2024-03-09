import React, { useContext } from 'react'
import { GlobelContext } from '../Context/GlobelState'
import '../App.css'
export default function Balance() {
  const {transaction } = useContext(GlobelContext);

  const amounts=transaction.map(transaction=>transaction.amount);
  const total = amounts.reduce((acc , item) =>(acc +=item) ,0).toFixed(2);
  return (
    <>
      <h3 className='cost'> Balance</h3>
      <h2 className='cost' id='balance'>Rs {total}</h2>
    </>
  )
}
