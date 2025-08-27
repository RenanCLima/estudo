import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `"use client";

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
      alert(\`The counter arrived in: \${count}\`);
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}`;

export default function CardUseEffect() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Example of useEffect</CardTitle>
      </CardHeader>
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
