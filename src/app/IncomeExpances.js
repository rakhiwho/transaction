import React, { useContext } from 'react'
import { GlobelContext } from '../Context/GlobelState'
import '../App.css'
export default function IncomeExpances() {
  const {transaction} = useContext(GlobelContext);
  const amounts=transaction.map(transaction=>transaction.amount);

  const exp = amounts.filter(item => item<0)
  .reduce((acc , item)=> acc+=item , 0).toFixed(2);

  const income = amounts.filter(item => item>0)
  .reduce((acc , item)=> acc+=item , 0).toFixed(2);

  return (
    <div className='container'>
      <div>
        <h4 id='minus' className='minus'> Rs {Math.abs(exp)}</h4>
      </div>
      <div>
        <h4 id='plus' className='plus'>Rs {income}</h4>
      </div>
    </div>
  )
}
