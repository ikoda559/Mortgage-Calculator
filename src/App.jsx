import './App.css'
import { useState } from 'react'

function App() {

  const [balance, setBalance] = useState(0);
  const [rate, setRate] = useState(0);
  const [term, setTerm] = useState(15);
  const [output, setOutput] = useState(' ');

  const calculate = (balance, rate, term) => {
    //converts annual rate to montly rate, first divides by 100 for percentage then 12 for months
    const monthlyRate = (rate / 100) / 12

    //convert years to months
    const numberOfPayments = term * 12

    const monthlyPayment = balance *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setOutput(`$${monthlyPayment.toFixed(2)} is your payment`);
  }

  return (
    <>
      <h1>Mortgage Calculator</h1>
      <label>
        Balance
      <input 
        data-testid='balance' 
        type='number' 
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      </label>
      <label>
        Rate
      <input 
        data-testid='rate' 
        type='number' 
        step='0.01' 
        value={rate}
          onChange={(e) => setRate(e.target.value)}
      />
      </label>
      <select data-testid='term' value={term} onChange={e => setTerm(e.target.value)}>
        <option 
          type = 'number' 
          value='15'
        >15</option>
        <option 
          type = 'number' 
          value='30'
        >30</option>
      </select>
      <button 
      data-testid='submit'
      onClick={() => calculate(balance, rate, term)}
      >
        Submit
      </button>
      <div 
      id='output' 
      data-testid='output' 
      >{output}</div>
    </>
  )
}

export default App