import CardDeepUseState from "@/components/e/CardDeepUseState";
import CardFinalUseState from "@/components/e/CardFinalUseState";
import CardUseState from "@/components/e/CardUseState";
import CounterItem from "@/components/e/CounterItem";

export default function UsesPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      <div className="flex flex-col px-5 w-full lg:w-1/2">
        <h2 className="flex justify-center text-2xl font-semibold">
          useState()
        </h2>
        <p className="leading-7 mt-2">
          The useState hook in React is a fundamental tool that allows
          functional components to manage and update{" "}
          <span className="italic">local</span> state. It provides a way for
          components to &quot;remember&quot; information across renders and
          trigger re-renders when that information changes.
        </p>
        <h3 className="text-xl mt-4">How it works:</h3>
        <p className="leading-7 mt-2">
          <span className="font-semibold">Import:</span> You import useState
          from the react library: JavaScript
          <br />
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {`import{ useState } from "react"`};
          </span>
          <br />
          <span className="font-semibold">Declaration:</span> Inside a
          functional component, you declare a state variable and its setter
          function using array destructuring:
          <br />
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {
              "const [stateVariable, setStateVariable] = useState(initialValue);"
            }
          </span>
        </p>
        <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              stateVariable
            </span>
            : The current value of the state.
          </li>
          <li>
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              setStateVariable
            </span>
            : The function used to update it. Calling this function schedules a
            re-render with the new state.
          </li>
          <li>
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              initialValue
            </span>
            : The initial state when the component first renders. It can be any
            JavaScript type, such as a number, string, boolean, object, or
            array.
          </li>
        </ul>
        <div className="flex gap-3">
          <CardUseState />
          <CounterItem />
        </div>
        <p className="italic text-muted-foreground">
          Note: {`"use client"`} is required in Next.js for components that run
          on the client side (e.g. those using hooks like useState)
        </p>

        <h3 className="text-xl mt-4">Deep dive: the function signature</h3>
        <p className="leading-7 mt-2">
          Basically,{" "}
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            useState
          </span>{" "}
          is a function (a React Hook) that receives an initial value (or a
          function that returns it) and returns a tuple: the current state value
          and an updater function.
        </p>
        <CardDeepUseState />
        <p className="leading-7 mt-2">
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            SetStateAction
          </span>{" "}
          : defines what you can pass to the updater function. It can be either:
        </p>
        <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
          <li>
            A new value of type{" "}
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              S
            </span>
          </li>
          <li>
            A function that receives the previous state{" "}
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              S
            </span>{" "}
            and returns the next state{" "}
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              S
            </span>
            .
          </li>
        </ul>
        <p className="leading-7 mt-2">
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Dispatch
          </span>{" "}
          is just a type for a function that triggers an update. <br />
          For
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            useState
          </span>
          , it is the setter function returned in the tuple. Its type is:
        </p>
        <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {`Dispatch<SetStateAction<S>>
          // expands to:
          (value: S | ((prev: S) => S)) => void`}
        </span>
        <p className="leading-7 mt-2">
          <span className="font-semibold">In plain words</span>: the updater
          function accepts either a new value or a function that derives the
          next state from the previous one.
        </p>
        <CardFinalUseState />
      </div>
      {/* Start useEffect*/}
      <div className="flex flex-col px-5 w-full lg:w-1/2">
        <h2 className="flex justify-center text-2xl font-semibold">
          useEffect()
        </h2>
        <p className="leading-7 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
          sunt asperiores itaque rerum, eius vero, omnis in pariatur, earum
          minus aliquam ipsa nisi suscipit molestiae soluta. Ipsam, cum id!
        </p>
        <h3 className="text-xl mt-4">Lorem, ipsum dolor.</h3>
        <p className="leading-7 mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum
          dolor ipsam nobis fugit, doloremque sit praesentium. Iure, quis? Earum
          fuga asperiores aliquam odit, harum excepturi ipsum temporibus rem
          quos.
        </p>
      </div>
    </div>
  );
}
