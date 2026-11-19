"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Text uzunluğu ve font size'a göre scale hesapla
  const textLength = text.length;

  //ClassName'den en büyük font size'ı çıkar (xl: breakpoint için)
  const getLargestFontSize = () => {
    if (!className) return 100;
    const xlMatch = className.match(/xl:text-\[(\d+)px\]/);
    if (xlMatch) return parseInt(xlMatch[1]);
    const lgMatch = className.match(/lg:text-\[(\d+)px\]/);
    if (lgMatch) return parseInt(lgMatch[1]);
    const mdMatch = className.match(/md:text-\[(\d+)px\]/);
    if (mdMatch) return parseInt(mdMatch[1]);
    const baseMatch = className.match(/text-\[(\d+)px\]/);
    if (baseMatch) return parseInt(baseMatch[1]);
    return 100;
  };

  const largestFontSize = getLargestFontSize();

  const getScale = () => {
    // Çok büyük font (180px+) için özel scale
    if (largestFontSize >= 180) {
      return "scale-[0.5] md:scale-[0.6] lg:scale-75 xl:scale-85";
    }
    // Büyük font (140px+) için
    if (largestFontSize >= 140) {
      if (textLength > 18) return "scale-[0.45] md:scale-[0.55] lg:scale-70 xl:scale-80";
      if (textLength > 15) return "scale-[0.5] md:scale-[0.6] lg:scale-75 xl:scale-85";
      return "scale-[0.6] md:scale-70 lg:scale-80 xl:scale-90";
    }
    // Normal scale (text uzunluğuna göre)
    if (textLength > 18) return "scale-[0.5] md:scale-[0.65] lg:scale-80 xl:scale-90";
    if (textLength > 15) return "scale-[0.6] md:scale-75 lg:scale-85 xl:scale-95";
    if (textLength > 12) return "scale-75 md:scale-85 lg:scale-90 xl:scale-95";
    return "scale-90 md:scale-95 lg:scale-100";
  };

  return (
    <div className="w-full flex justify-center overflow-hidden px-2" ref={ref}>
      <div
        className={`${className} flex justify-center uppercase gap-1 md:gap-2 lg:gap-3 xl:gap-4 ${getScale()} origin-center transition-transform`}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block flex-shrink-0 ${char === " " ? "w-2 md:w-3 lg:w-4" : ""}`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
