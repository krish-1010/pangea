import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "../../../public/assests/faq.png";

export default function Faq() {
  return (
    <div className=" text-pr">
      <h2 className="">Frequently Asked Questions</h2>
      <h1 className="">Have Queries? We&apos;ve got Answers</h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="border-4">
          <div className="">
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1" className="bg-white mb-4">
                <AccordionTrigger className="pl-5 pr-5">
                  Who can join the Circles?
                </AccordionTrigger>
                <AccordionContent className="pl-5 pr-5">
                  Circles are targeted primarily at School students. Please look
                  at Circle - specific age restrictions before enrolling for
                  individual circles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white mb-4">
                <AccordionTrigger className="pl-5 pr-5">
                  How long will a circle run?
                </AccordionTrigger>
                <AccordionContent className="pl-5 pr-5">
                  The duration of a circle varies according to its structure.
                  Please look at Circle - specific duration before enrolling for
                  individual circles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white mb-4">
                <AccordionTrigger className="pl-5 pr-5">
                  Benefits of participating in a circle?
                </AccordionTrigger>
                <AccordionContent className="pl-5 pr-5">
                  By participating in a circle, students gain a comprehensive
                  knowledge of the specific field. They also get an opportunity
                  to connect with like - minded students and grow together
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white mb-4">
                <AccordionTrigger className="pl-5 pr-5">
                  What will be the outcomes program?
                </AccordionTrigger>
                <AccordionContent className="pl-5 pr-5">
                  We know that it takes a certain budget to mentor you according
                  to your assessment test results, but the more deserving can
                  make its fee free.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="border-4 flex items-center justify-center">
          <div className="w-[200px]">
            <Image
              src={faq}
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="image"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
