"use client";
import { useState, useEffect } from "react";

export default function CleanupItem() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds === 0) return;
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const startTimer = () => setSeconds(5);

  return (
    <div>
      <h1 className="text-xl">Timer: {seconds}s</h1>
      <button onClick={startTimer} className="hover:text-green-600">
        Start
      </button>
    </div>
  );
}
