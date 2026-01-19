import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { TeachingService } from "@/lib/services";
import { Icon } from "@iconify/react";
import Image from "next/image";

async function Teachings() {
  const teachings = await TeachingService.findMany();

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center px-4">
      <AnimatedText
        text="TEACHINGS"
        className="text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-10 md:-mb-14 lg:-mb-20"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-4 md:gap-6">
        {teachings.map((teaching) => (
          <div
            key={teaching.id}
            className="group flex flex-col gap-3 md:gap-4 items-start p-6 md:p-8 border border-transparent hover:border-primary relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image
                src="/images/service-bg_1.jpg"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>
            <Icon icon={teaching.icon} className="w-10 h-10 md:w-12 md:h-12 relative" />
            <h3 className="text-lg md:text-xl font-medium relative">{teaching.name}</h3>
            <span className="text-secondary text-sm md:text-base relative">{teaching.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachings;
