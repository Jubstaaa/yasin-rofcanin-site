"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import Image from "next/image";

export interface MenuItem {
  name: string;
  href: string;
}

export const menus: MenuItem[] = [
  { name: "Homepage", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Publications", href: "/publications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={cn("relative")}>
      <div
        className={cn(
          "flex items-center justify-center h-[90px] relative shadow bg-white z-20 transition-all gap-2",
          { "rounded-b-none": isOpen }
        )}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-row flex-nowrap items-center justify-between">
          <div className="border-l border-divider w-full">
            <Link href="/">
              <Image
                className="w-auto h-12 pl-5"
                src="/images/logo.png"
                width={500}
                height={500}
                alt="Yasin Rofcanin Site Logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1 gap-6 text-primary font-medium">
            {menus.map((menu, i) => (
              <Link
                key={i}
                className="p-4 transition-all duration-300 hover:text-hover text-lg whitespace-nowrap font-medium"
                href={menu.href}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="w-full" />
        </div>

        <Icon
          onClick={() => setIsOpen((state) => !state)}
          icon="mdi:menu"
          className="lg:hidden w-8 h-8 cursor-pointer"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full top-full left-0 flex flex-col items-center p-0 border border-divider bg-white rounded-t-none backdrop-blur-[10px] z-20"
          >
            {menus.map((menu, i) => (
              <Link
                key={i}
                href={menu.href}
                className="w-full text-center py-3 text-lg font-medium transition-all duration-300 hover:text-[#475569] active:opacity-50"
                onClick={() => setIsOpen(false)}
              >
                {menu.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
