"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="text-xl">Count: {count}</h1>
      <div className="flex gap-5">
        <button onClick={increment} className="hover:text-green-600">
          Increment + 1
        </button>
        <button onClick={decrement} className="hover:text-red-600">
          Decrement - 1
        </button>
      </div>
    </div>
  );
}
