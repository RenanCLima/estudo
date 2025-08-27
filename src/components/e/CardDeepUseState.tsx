import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeString = `type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

declare function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];

declare function useState<S = undefined>(
  initialState?: S | (() => S)
): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
`;

export default function CardDeepUseState() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>The function useState</CardTitle>
      </CardHeader>
      <CardContent className="bg-muted relative rounded px-4 py-2 font-mono text-sm overflow-x-auto">
        <pre>
          <code>{codeString}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
