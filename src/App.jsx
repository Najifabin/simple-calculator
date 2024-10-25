
import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const getValue =(e)=>{
    console.log(e.target.value);
    setInput(input.concat(e.target.value))
    
  }
  const handleCalculate = () => {
    try {
      setResult(eval(input).toString())
    }
    catch {
      setInput('Error')
    }
  }
  const handleClear = ()=>{
    setInput('')
    setResult('')
    
  }
  const handleDelete = ()=>{
    setInput((val)=>val.slice(0,-1))
  }


  return (
    <>
      <div className="calculator">
        <div className="output">
          {/* <input className='previous form-control' placeholder='0' /> */}
          <div className='inputvalue'>{input}</div>
          <div className='resultvalue'>{result}</div>
        </div>
        <button onClick={handleClear} className="span-two AC">AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button value={'/'} onClick={getValue}>&#247;</button>
        <button value={'1'} onClick={getValue}>1</button>
        <button value={'2'} onClick={getValue}>2</button>
        <button value={'3'} onClick={getValue}>3</button>
        <button value={'*'} onClick={getValue}>&#215;</button>
        <button value={'4'} onClick={getValue}>4</button>
        <button value={'5'} onClick={getValue}>5</button>
        <button value={'6'} onClick={getValue}>6</button>
        <button value={'+'} onClick={getValue}>&#43;</button>
        <button value={'7'} onClick={getValue}>7</button>
        <button value={'8'} onClick={getValue}>8</button>
        <button value={'9'} onClick={getValue}>9</button>
        <button value={'-'} onClick={getValue}>&#8722;</button>
        <button value={'.'} onClick={getValue}>.</button>
        <button value={'0'} onClick={getValue}>0</button>
        <button onClick={handleCalculate} className="span-two equals">&#61;</button>
      </div>

    </>
  )
}

export default App
