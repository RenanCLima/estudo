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

export default function CardTemplate() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          accusamus, expedita nulla praesentium ea ex error soluta, harum iste
          vel nobis ratione voluptas optio perferendis quod nostrum molestiae
          velit.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="">
        <Link href={"/"}>
          <Button variant={"link"} size={"sm"}>
            Read more...
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
