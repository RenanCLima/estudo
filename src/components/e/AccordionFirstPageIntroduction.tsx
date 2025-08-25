"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionFirstPageIntroduction() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            React is a JavaScript library for building user interfaces. It
            allows developers to create reusable UI components and efficiently
            update the interface when the data changes.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>What is Next.js?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Next.js is a framework built on top of React. It provides features
            like server-side rendering, static site generation, and automatic
            route handling, which make building web applications faster and more
            efficient.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>What is TypeScript?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            TypeScript is a superset of JavaScript that adds static types. It
            helps developers catch errors early, maintain large codebases more
            easily, and improve code readability and collaboration.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
