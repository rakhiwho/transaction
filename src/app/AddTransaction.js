
import React , {useState ,useContext} from 'react'
import '../App.css'
import { GlobelContext } from '../Context/GlobelState';
export default function AddTransaction() {
 

  const [text,  setText] =useState("");
  const [amount,  setAmount] =useState();
  const {transaction ,addText}=useContext(GlobelContext);
  const onsubmit =(e)=>{
    e.preventDefault();

    const newTransaction = {
      id:Math.floor( Math.random()*1000000),
      text,
      amount:parseFloat(amount)
    };
addText(newTransaction);
   //  newTransaction={};
setAmount("");
setText("");
  }
  
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form onSubmit={onsubmit}>
      <div  className='container_1'>
            <label htmlFor='amount'>Text
            </label>
            <input type='text' id='text' 
            placeholder='Enter text...'
             name='amount' value={text}
             onChange={(e)=>setText(e.target.value)}
            >
            </input>
         
        </div>
        <div  className='container_1'>
            <label htmlFor='amount'>Amount <br/>
            negative= expence__positive= income
            </label>
            <input type='number' id='amount'
             placeholder='Enter value'
              name='amount' value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              >
            </input>
            <button type='submit' 
             className='btn'>AddTransaction</button>
        </div>
      </form>
    </div>
  )
}
