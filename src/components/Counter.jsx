import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [value, setIncrement] = useState(1);
  function handleClickIncrement() {
    setCount(count + value);
  }
  function handleClickDecrement() {
    setCount(count - value);
  }
  function handleClickIncrementByValue(){
        setIncrement(value +1);
  }
  return (
    <div>
      <h1>Counter Value is: {count}</h1>

      <button
        className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        onClick={handleClickIncrement}>
        Increment
      </button>

      <button
        className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        onClick={handleClickDecrement}>
        Decrement
      </button>

      <div>
        <h1>Increment By Value: {value}</h1>
        <button
          className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={handleClickIncrementByValue} >
          Increment
        </button>
      </div>
    </div>
  );
}
