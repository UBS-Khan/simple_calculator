import { useState } from "react";

const CalculatorBody = () => {
  const [input, setInput] = useState('');

  const setValue = (event) => {
    setInput(input + event.target.value)
  }

  const clearState = () => {
    setInput('')
  }

  const backSpace = () => {
    setInput(input.slice(0,-1))
  }

  const mathOperations = () => {
    try{
      const answer = eval(input);
      setInput(answer.toString());
    } catch (error){
      setInput("Error!")
    }

  }

    return (
        <>
        <div className='calcBody'>
          <div className='btnBody'>
            <button className="btnClear" onClick={clearState}>C</button>
            <button className="btnBack" onClick={backSpace}>←</button>
            <button className="btnPercent" onClick={setValue} value={" % "}>%</button>
            <button className="btnDivide" onClick={setValue} value={" / "}>/</button>
            <button className="btnNum" onClick={setValue} value={7}>7</button>
            <button className="btnNum" onClick={setValue} value={8}>8</button>
            <button className="btnNum" onClick={setValue} value={9}>9</button>
            <button className="btnOpr" onClick={setValue} value={" * "}>x</button>
            <button className="btnNum" onClick={setValue} value={4}>4</button>
            <button className="btnNum" onClick={setValue} value={5}>5</button>
            <button className="btnNum" onClick={setValue} value={6}>6</button>
            <button className="btnOpr" onClick={setValue} value={" - "}>-</button>
            <button className="btnNum" onClick={setValue} value={1}>1</button>
            <button className="btnNum" onClick={setValue} value={2}>2</button>
            <button className="btnNum" onClick={setValue} value={3}>3</button>
            <button className="btnOpr" onClick={setValue} value={" + "}>+</button>
            <button className="btnNum" onClick={setValue} value={0}>0</button>
            <button className="btnDec" onClick={setValue} value={"."}>.</button>
            <button className="btnEqls" onClick={mathOperations}>=</button>  
          </div>
        </div>
            <div className='screen'>
              <input type="text" value={input} />
            </div>
        </>
    )
}

export default CalculatorBody;

