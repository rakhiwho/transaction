import React from 'react'
import '../App.css'
export default function ChangeTheme() {
    const theme =(e)=>{
        e.addClass="dark";
    }
  return (
    <div>
      <button className=' btn' >Change theme</button>
    </div>
  )
}
