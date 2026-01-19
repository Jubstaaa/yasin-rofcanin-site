"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

interface InviteProps {
  images: {
    src: string;
    alt: string;
  }[];
  href: string;
}

function Invite({ images, href }: InviteProps) {
  return (
    <div className="bg-gray-50 pb-12 md:pb-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 container mx-auto pt-12 md:pt-16 lg:pt-24 mt-12 md:mt-16 lg:mt-24 items-center px-4">
        <div className="prose">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium">Let&apos;s Exchange Ideas</h3>

          <p className="text-sm md:text-base">
            One of the world&apos;s most prolific and influential psychologists. He
            has published well over 500 scientific articles and more than 30
            books.
          </p>

          <Button href={href}>FIND OUT MORE</Button>
        </div>

        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          {images && images.length >= 2 && (
            <>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute top-0 left-0 w-full md:w-[85%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[400px]"
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute bottom-0 right-0 w-full md:w-[85%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[400px]"
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Invite;
