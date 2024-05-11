import { useState } from "react";
import { increment, decrement, incrementByAmount } from "./counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export function CounterApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2)

  return (
  <>
  <div id='container'>
  <h1 style={{color: 'white'}}>Current count : {count}</h1>
    <div style={{color: 'gray'}}>Enter a value to increment with:
      <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}></input>
    <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increment by {Number(incrementAmount)|| 0}</button>
    </div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  </>
  )
}

export default CounterApp;
