import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/index';//(actions, typeof State)

function App() {

  const dispatch = useDispatch();

  //Actions
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);


  //Access to state => bank state
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw 500</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
