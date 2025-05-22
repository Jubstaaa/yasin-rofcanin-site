import React from "react";
import { SocialService, UserService } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

async function Hero() {
  const user = await UserService.findUnique({
    where: {
      email: "y.rofcanin@bath.ac.uk",
    },
    include: {
      media: true,
    },
  });

  const socials = await SocialService.findMany();
  return (
    <div className="grid grid-cols-2 gap-20 p-32 pb-0 relative">
      {user?.media?.url && user?.media?.alt && (
        <Image
          src={user?.media?.url}
          alt={user?.media?.alt}
          width={1000}
          height={1000}
        />
      )}
      <div className="prose prose-a:text-hover">
        <h3 className="text-6xl font-normal leading-tight">
          <span className="block">{user?.firstName}</span>
          <span className="block text-hover">{user?.lastName}</span>
        </h3>
        <p className="text-xl">
          Chair in Organisational Psychology and Human Resource Management
        </p>
        <p className="text-secondary">
          I am a Professor of Organisational Psychology and Human Resource
          Management at the University of Bath, School of Management. Born and
          educated in Istanbul (Bogazici University), I completed my Ph.D. study
          at Warwick Business School, University of Warwick. Over the last
          decade, I explored how employees feel motivated and productive at
          work. In particular, my research and teaching focus on how employees
          obtain personalized human resource practices and engage in proactive
          job crafting to enhance their well-being. Placing employees in a
          position of self-starters and change-initiator, my research explores
          how new ways of working impact on employee engagement and
          productivity. My ideas have reached a wide range of audience through
          my peer-reviewed publications, book and articles targeted at managers.
        </p>
        <h3 className="text-2xl">Contact Me</h3>
        <p className="font-semibold">
          Email: <Link href={`mailto:${user?.email}`}>{user?.email}</Link>
        </p>
        <div className="flex gap-3">
          {socials.map((social) => (
            <Link
              href={social.link}
              key={social.id}
              target="_blank"
              className="!text-primary hover:!text-hover"
            >
              <Icon className="w-7 h-7" icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
      <Image
        className="absolute top-0 left-0 w-1/6 h-full object-cover -z-1"
        src="/images/bg-media.jpg"
        alt="bg-media"
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default Hero;
