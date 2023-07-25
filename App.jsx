import { useState, useEffect } from 'react'
import './App.css'
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';

function App() {
  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [display, setDisplay] = useState(0);
  const computeTotal = () => {
    if (operation === '+') {
      setTotal((oldTotal) => setTotal(oldTotal + parseFloat(number)));
    } else if (operation === '-') {
      setTotal((oldTotal) => setTotal(oldTotal - parseFloat(number)));
    } else if (operation === '*') {
      setTotal((oldTotal) => setTotal(oldTotal * parseFloat(number)));
    } else if (operation === '/') {
      setTotal((oldTotal) => setTotal(oldTotal / parseFloat(number)));
    } else {
      if (number) {
        setTotal(parseFloat(number));
      }
    }
  }
  const handleNum = (num) => {
    setNumber(number + `${num}`);
  }
  const handlePlusMinus = () => {
    if (number[0] === '-') {
      setNumber((oldNumber) => setNumber(oldNumber.slice(1)))
    } else {
      setNumber((oldNumber) => setNumber(`-${oldNumber}`))
    }
  }
  const handleOperation = (operator) => {
    computeTotal();
    setOperation(operator);
    setNumber('');
  }
  const handleEquals = () => {
    if (number) {
      computeTotal();
    }
    setOperation('');
    setNumber('');
  }
  const handleAC = () => {
    setTotal(0);
    setOperation('');
    setNumber('');
  }
  useEffect(() => {
    if (number) {
      setDisplay(number)
    } else {
      setDisplay(total)
    }
  }, [total, number])
  return (
    <>
      <div className='calcButtons'>
        <div className='row' id='display'>
          <h1>{display}</h1>
        </div>
        <div className='row'>
          <OperationButton operation={'C'} onClick={handleAC} twoSpots={true} />
          <NumberButton num={'±'} onClick={handlePlusMinus} />
          <OperationButton operation={'/'} onClick={() => handleOperation('/')} />
        </div>
        <div className='row'>
          <NumberButton num={7} onClick={() => handleNum(7)} />
          <NumberButton num={8} onClick={() => handleNum(8)} />
          <NumberButton num={9} onClick={() => handleNum(9)} />
          <OperationButton operation={'+'} onClick={() => handleOperation('+')} />
        </div>
        <div className='row'>
          <NumberButton num={4} onClick={() => handleNum(4)} />
          <NumberButton num={5} onClick={() => handleNum(5)} />
          <NumberButton num={6} onClick={() => handleNum(6)} />
          <OperationButton operation={'-'} onClick={() => handleOperation('-')} />
        </div>
        <div className='row'>
          <NumberButton num={1} onClick={() => handleNum(1)} />
          <NumberButton num={2} onClick={() => handleNum(2)} />
          <NumberButton num={3} onClick={() => handleNum(3)} />
          <OperationButton operation={'*'} onClick={() => handleOperation('*')} />
        </div>
        <div className='row'>
          <NumberButton num={0} onClick={() => handleNum(0)} twoSpots={true} />
          <NumberButton num={'.'} onClick={() => handleNum('.')} />
          <OperationButton operation={'='} onClick={handleEquals} />
        </div>
      </div>
    </>
  )
}

export default App
