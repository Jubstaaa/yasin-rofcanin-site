import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { TeachingService } from "@/lib/services";
import { Icon } from "@iconify/react";
import Image from "next/image";

async function Teachings() {
  const teachings = await TeachingService.findMany();

  return (
    <div className="flex flex-col gap-10 items-center">
      <AnimatedText
        text="TEACHINGS"
        className="text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-20"
      />
      <div className="grid grid-cols-4">
        {teachings.map((teaching) => (
          <div
            key={teaching.id}
            className="group flex flex-col gap-4 items-start p-16 border border-transparent hover:border-primary relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image
                src="/images/service-bg_1.jpg"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>
            <Icon icon={teaching.icon} className="w-16 h-16 relative" />
            <h3 className="text-2xl font-medium relative">{teaching.name}</h3>
            <span className="text-secondary relative">{teaching.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachings;
