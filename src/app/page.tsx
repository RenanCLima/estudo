import AccordionFirstPageIntroduction from "@/components/e/AccordionFirstPageIntroduction";
import CardChildrenReactNode from "@/components/e/CardChildrenReactNode";
import CardTemplate from "@/components/e/CardTemplate";
import CardUseStateUseEffect from "@/components/e/CardUseStateUseEffect";

export default function Home() {
  return (
    <div className="flex flex-col px-2">
      <div className="flex flex-col gap-2">
        <h1>Do you know what is React?</h1>
        <p>Let’s Start!</p>
      </div>
      <div>
        <AccordionFirstPageIntroduction />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <CardChildrenReactNode />
        <CardUseStateUseEffect />
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
      </div>
    </div>
  );
}
