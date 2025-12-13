import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { SocialService, UserService } from "@/lib/services";
import { MenuItem } from "./Header";

export const menus: MenuItem[] = [
  { name: "Homepage", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Keynote Talks", href: "/keynote-talks" },
  {
    name: "Future of Work",
    href: "https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/",
    target: "_blank",
  },
  { name: "Publications", href: "/publications" },
  { name: "Yasin's Team", href: "/yasin-s-team" },
  { name: "Opinions", href: "/opinions" },
  { name: "Contact", href: "/contact" },
];

async function Footer() {
  const user = await UserService.findUnique({
    where: {
      email: "y.rofcanin@bath.ac.uk",
    },
  });

  const socials = await SocialService.findMany();

  return (
    <>
      <footer className="w-full flex items-center justify-center shadow-sm bg-gray-50 p-12 mt-12 relative pt-24">
        <div className="container mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-primary mb-6">
            {user?.firstName} {user?.lastName}
          </h2>
          <div className="flex flex-row gap-12">
            {menus.map((menu, i) => (
              <Link
                key={i}
                href={menu.href}
                className="text-lg font-medium text-primary hover:text-hover transition-all duration-300"
                target={menu.target}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-6 mt-4">
            {socials.map((s) => (
              <Link
                href={s.link}
                key={s.id}
                className="hover:text-hover"
                target="_blank"
                aria-label={s.name}
                rel="noopener noreferrer"
              >
                <Icon icon={s.icon} className="w-8 h-8" />
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <div className="w-full flex flex-col items-center bg-[#282828]">
        <div className="w-full flex justify-center items-center py-4">
          <span className="text-white text-sm font-medium text-center flex items-center gap-2">
            © {new Date().getFullYear()} Yasin Rofcanin. All rights reserved.
            <span className="mx-2 text-[#AAAAAA] font-normal select-none">
              |
            </span>
            <span className="text-xs text-[#AAAAAA] text-center flex items-center gap-1">
              Designed and developed by
              <a
                href="https://ilkerbalcilar.com/"
                target="_blank"
                rel="noopener noreferrer me"
                referrerPolicy="origin"
                className="underline hover:text-hover transition-all px-0.5"
                aria-label="İlker Balcilar's Website"
              >
                İlker Balcilar
              </a>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
