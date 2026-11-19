"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "./nav-links";
import Image from "next/image";


function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={cn("relative")}>
      <div
        className={cn(
          "flex items-center justify-center h-[70px] md:h-[80px] lg:h-[90px] relative shadow bg-white z-20 transition-all gap-2 px-4 md:px-6 lg:px-8",
          { "rounded-b-none": isOpen }
        )}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-row flex-nowrap items-center justify-between">
          <Link href="/">
            <Image
              className="w-auto h-8 md:h-10 lg:h-12"
              src="/images/logo.png"
              width={500}
              height={500}
              alt="Yasin Rofcanin Site Logo"
            />
          </Link>
          <nav
            aria-label="Main"
            className="hidden lg:flex items-center justify-center flex-1 gap-3 text-primary font-medium"
          >
            {NAV_LINKS.map((menu) => (
              <Link
                key={menu.href}
                className="p-4 transition-all duration-300 hover:text-hover text-base whitespace-nowrap font-medium"
                href={menu.href}
                target={menu.external ? "_blank" : undefined}
                rel={menu.external ? "noopener noreferrer" : undefined}
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((state) => !state)}
          className="lg:hidden mr-2 cursor-pointer"
        >
          <Menu aria-hidden className="w-7 h-7 md:w-8 md:h-8" />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full top-full left-0 flex flex-col items-center p-0 border border-divider bg-white rounded-t-none backdrop-blur-[10px] z-20"
          >
            {NAV_LINKS.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                className="w-full text-center py-3 text-base md:text-lg font-medium transition-all duration-300 hover:text-[#475569] active:opacity-50"
                onClick={() => setIsOpen(false)}
                target={menu.external ? "_blank" : undefined}
                rel={menu.external ? "noopener noreferrer" : undefined}
              >
                {menu.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
