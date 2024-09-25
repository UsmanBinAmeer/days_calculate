import { useState } from "react";
import './App.css'




function App() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
  function minus() {
    (setStep(step > 1 ? step - 1 : 1))
  }
  function plus() {
    setStep(step + 1)
  }
  function minusForCount() {
    setCount(count - 1)
  }
  function plusForCount() {
    setCount(step + count)
  }


  const baseDate = new Date('2024-09-24');

  // Calculate the new date based on the count
  const newDate = new Date(baseDate.getTime() + count * 24 * 60 * 60 * 1000);

  const day = newDate.getDate();
  const month = newDate.toLocaleString('default', { month: 'long' });
  const year = newDate.getFullYear();

  // Determine the description
  const isFuture = count >= 0;
  const descriptor = isFuture ? 'after' : 'before';
  const absoluteCount = Math.abs(count);
  // console.log(month);





  return (
    <div className="main">
      <div className="step">
        <button onClick={minus}>-</button>
        <h1>Step : {step}</h1>
        <button onClick={plus}>+</button>
      </div>

      <div className="count">
        <button onClick={minusForCount}>-</button>
        <h1>Count : {count}</h1>
        <button onClick={plusForCount}>+</button>
      </div>
      <h2 className="discription">
        It was <span className='spans'>{day}</span> <span className='spans'>{month}</span> <span className='spans'>{year}</span> exactly <span className='spans'>{absoluteCount}</span> days {descriptor}.
      </h2>
    </div>


  );
}

export default App;



