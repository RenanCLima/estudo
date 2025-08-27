import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `declare function useEffect(
  effect: () => void | (() => void),
  deps?: ReadonlyArray<any>
): void;
`;

export default function CardDeepUseEffect() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>The function useEffect</CardTitle>
      </CardHeader>
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
