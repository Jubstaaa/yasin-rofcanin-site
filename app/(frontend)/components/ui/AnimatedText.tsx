"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div
      className={`${className} flex justify-between uppercase w-fit mx-auto`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.2,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`inline-block ${char === " " ? "w-4" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
