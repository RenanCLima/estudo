import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `setCount(5);                    // direct value
setCount(prev => prev + 1);    // function form
`;

export default function CardFinalUseState() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Example</CardTitle>
      </CardHeader>
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
