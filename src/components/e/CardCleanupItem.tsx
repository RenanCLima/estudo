import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `"use client";
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
      <h1>Timer: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}`;

export default function CardCleanupItem() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Example Cleanup</CardTitle>
      </CardHeader>
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
