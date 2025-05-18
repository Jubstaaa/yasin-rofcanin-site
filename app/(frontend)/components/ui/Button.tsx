"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  icon?: string;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "none";
  fullWidth?: boolean;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
  classNames?: {
    body?: string;
  };
}

function Button({
  type = "button",
  icon,
  children,
  size = "md",
  href,
  target,
  fullWidth = false,
  onClick,
  disabled = false,
  classNames = {},
}: ButtonProps) {
  const className = cn(
    "flex flex-row flex-nowrap items-center justify-center w-min gap-2.5 relative overflow-visible shadow-none whitespace-nowrap font-medium tracking-normal transition-all duration-500 duration-200 border border-black font-bold",
    classNames.body,
    {
      "cursor-pointer transition-all duration-500 hover:bg-black hover:text-white transition-all duration-500 ":
        !disabled,
      "w-full": fullWidth,
      "px-2 h-8 text-xs transition-all duration-500 hover:shadow-[0px_0px_0px_3px]":
        size === "xs" && !disabled,
      "px-1.5 lg:px-2 h-6 lg:h-9": size === "sm",
      "px-10 h-[57px] text-sm": size === "md",
    }
  );

  const content = (
    <>
      {children}
      {icon && <Icon icon={icon} className="w-3.5 lg:w-5 h-3.5 lg:h-5" />}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={className}
        onClick={handleClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
