import AlertCounterItem from "@/components/e/AlertCounterItem";
import CardCleanupItem from "@/components/e/CardCleanupItem";
import CardDeepUseEffect from "@/components/e/CardDeepUseEffect";
import CardDeepUseState from "@/components/e/CardDeepUseState";
import CardExampleUseEffect from "@/components/e/CardExampleUseEffect";
import CardFinalUseState from "@/components/e/CardFinalUseState";
import CardUseEffect from "@/components/e/CardUseEffect";
import CardUseState from "@/components/e/CardUseState";
import CleanupItem from "@/components/e/CleanupItem";
import CounterItem from "@/components/e/CounterItem";

export default function UsesPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5">
      <section className="flex flex-col px-5 w-full lg:w-1/2">
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
        <div className="flex flex-wrap gap-3">
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
      </section>
      {/* Start useEffect*/}
      <section className="flex flex-col px-5 w-full lg:w-1/2">
        <h2 className="flex justify-center text-2xl font-semibold">
          useEffect()
        </h2>
        <p className="leading-7 mt-2">
          The useEffect hook in React is used to handle{" "}
          <span className="italic">side effect </span>
          in functional components. A side effect is anything that happens
          outside the normal rendering flow (Ex: data fetching, DOM
          manipulation, timers, event listeners, etc.)
        </p>
        <h3 className="text-xl mt-4">How it Works:</h3>
        <p className="leading-7 mt-3">
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            useEffect
          </span>{" "}
          is a function that needs two parameters. The first parameter is the{" "}
          <span className="italic">effect function</span>, which contains the
          code you want to run. The second parameter is the{" "}
          <span className="italic">dependency array</span>, which defines when
          the effect should re-run.{" "}
        </p>
        <CardExampleUseEffect />
        <p className="leading-7 mt-3">
          useEffect behaves differently depending on its dependency array.
        </p>
        <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
          <li>
            Without dependencies:{" "}
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {`useEffect(() => { ... })`}
            </span>
            runs every time the component renders
          </li>
          <li>
            With empty dependencies:
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {`useEffect(() => { ... }, [])`}
            </span>
            runs only once (when the component mounts)
          </li>
          <li>
            With dependencies:
            <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {`useEffect(() => { ... }, [variable])`}
            </span>
            runs whenever the variable changes
          </li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <CardUseEffect />
          <AlertCounterItem />
        </div>
        <h3 className="text-xl mt-4">Deep dive: the function signature</h3>
        <p className="leading-7 mt-2">
          Basically,{" "}
          <span className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            useEffect
          </span>{" "}
          is a function (a React Hook) that receives an effect based on a
          dependency
        </p>
        <CardDeepUseEffect />
        <p className="leading-7 mt-2">
          <span className="font-semibold">Cleanup Function</span>: The effect
          function can optionally return a cleanup function. This function runs
          before the effect re-runs (if dependencies change) and when the
          component unmounts. It&apos;s crucial for releasing resources like
          clearing timers, unsubscribing from events, or canceling network
          requests to prevent memory leaks.
        </p>
        <div className="flex flex-wrap gap-3 mb-3">
          <CardCleanupItem />
          <CleanupItem />
        </div>
      </section>
    </div>
  );
}
