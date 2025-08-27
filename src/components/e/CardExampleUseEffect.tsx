import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `useEffect(() => {
  // code that will be executed
}, [dependencies]);
`;

export default function CardExampleUseEffect() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
