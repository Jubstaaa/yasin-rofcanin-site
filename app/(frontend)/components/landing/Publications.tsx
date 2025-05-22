import { PublicationService } from "@/lib/services";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Button from "../ui/Button";
import AnimatedText from "../ui/AnimatedText";

async function Publications() {
  const publications = await PublicationService.findMany({
    take: 3,
    select: {
      id: true,
      name: true,
      link: true,
      publicationCategory: true,
    },
  });

  return (
    <div className="flex flex-col gap-10 items-center">
      <AnimatedText
        text="PUBLICATIONS"
        className="text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-20"
      />
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {publications.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            target="_blank"
            className="flex flex-col gap-5 bg-[#f7f7f7] p-10 group relative"
          >
            <h3 className="text-2xl font-medium">
              {item.publicationCategory.name}
            </h3>
            <p className="text-sm text-secondary">{item.name}</p>
            <div className="flex gap-1 text-hover text-sm font-bold items-center -left-2 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 relative">
              READ MORE
              <Icon icon="mdi:arrow-right" className="w-4 h-4" />
            </div>
            <hr className="absolute left-0 bottom-12 w-32 h-[1px] text-hover group-hover:w-0 transition-all duration-300" />
          </Link>
        ))}
      </div>
      <Button href="/publications">SEE ALL</Button>
    </div>
  );
}

export default Publications;
