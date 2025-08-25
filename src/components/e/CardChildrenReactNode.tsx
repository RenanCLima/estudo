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

export default function CardChildrenReactNode() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>What is children and ReactNode?</CardTitle>
        <CardDescription>
          In React, children is a special prop that lets you pass content
          between a component’s opening and closing tags. The type
          React.ReactNode accepts almost anything: HTML, text, or even other
          components.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="">
        <Link href={"/children"}>
          <Button variant={"link"} size={"sm"}>
            Read more...
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
