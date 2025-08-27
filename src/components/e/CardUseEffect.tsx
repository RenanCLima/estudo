import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `"use client";

import { useEffect } from "react";

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
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}`;

export default function CardUseState() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Example of useState</CardTitle>
      </CardHeader>
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
