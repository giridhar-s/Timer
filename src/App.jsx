import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
 const [count, setCount] = useState(0);
 const [inputValue, setInputValue] = useState("");
 const [isActive, setIsActive] = useState(false);

 useEffect(() => {
  let timer = null;
  if (isActive && count > 0) {
   timer = setInterval(() => {
    setCount((prevCount) => prevCount - 1);
   }, 1000);
  }
  return () => clearInterval(timer);
 }, [isActive, count]);

 const handleStart = () => {
  if (count === 0) {
   setCount(inputValue);
  }
  setIsActive(true);
 };

 const handleStop = () => {
  setIsActive(false);
 };

 const handleReset = () => {
  setIsActive(false);
  setCount(0);
  setInputValue("");
 };

 return (
  <>
   <div className="timer-container">
    <div className="timer">
     <h1>Timer: </h1>
     <h1 className="count">{count}</h1>
    </div>
    <input
     type="number"
     value={inputValue}
     onChange={(e) => setInputValue(Number(e.target.value))}
    />
    <div className="buttons">
     <button className="btn start" onClick={handleStart}>
      Start
     </button>
     <button className="btn stop" onClick={handleStop}>
      Stop
     </button>
     <button className="btn reset" onClick={handleReset}>
      Reset
     </button>
    </div>
   </div>
  </>
 );
};

export default App;
