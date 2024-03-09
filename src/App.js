import React from 'react'
import Header from './app/Header'
import Balance from './app/Balance'
import IncomeExpances from './app/IncomeExpances'
import TransactionList from './app/transactionList'
import AddTransaction from './app/AddTransaction'

import { GlobelProvider } from './Context/GlobelState'

export default function App() {
  return (
    <GlobelProvider>
      <Header/>
      <Balance className="container"/>
      <IncomeExpances/>
      <TransactionList/>
      <AddTransaction/>

    </GlobelProvider>
   
  )
}
