import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CardUseStateUseEffect() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>What is useState and useEffect?</CardTitle>
        <CardDescription>
          useState is a hook that allows a component to “remember” values and
          update them later. useEffect runs code when something changes, like
          when data loads or a value updates.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="">
        <Link href={"/uses"}>
          <Button variant={"link"} size={"sm"}>
            Read more...
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
