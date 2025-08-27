"use client";

import { useState, useEffect } from "react";

export default function AlertCounterItem() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const alertPoints = [-10, -5, 5, 10];

    if (alertPoints.includes(count)) {
      alert(`The counter arrived in: ${count}`);
    }
    if (count == 42) {
      alert(`You are a galaxy hitchhiker!`);
    }
  }, [count]);

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
