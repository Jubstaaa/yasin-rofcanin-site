import React from "react";
import { VisitingService } from "@/lib/services";
import { Accordion, AccordionItem } from "../ui/Accordion";
import Link from "next/link";

async function Visiting() {
  const visitingPositions = await VisitingService.findMany();

  return (
    <div className="p-16">
      <h3 className="text-4xl font-bold mb-10">
        Visiting Positions and Professorships
      </h3>
      <Accordion>
        {visitingPositions.map((visiting) => (
          <AccordionItem
            key={visiting.id}
            title={
              <p>
                <Link
                  className="font-bold"
                  href={visiting.link}
                  target="_blank"
                >
                  {visiting.name}
                </Link>{" "}
                ({visiting.location})
              </p>
            }
          >
            <p className="text-gray-600 mb-2">{visiting.description}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Visiting;
