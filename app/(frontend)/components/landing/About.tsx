"use client";

import React from "react";
import Image from "next/image";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

const PROFILE_IMAGE_URL =
  "https://fppnyxariyb6rpz5.public.blob.vercel-storage.com/c59b99fc-0a56-4ee2-8c59-272057a79f7e.webp";

function About({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-10 items-center">
      <AnimatedText
        text={name}
        className="text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-40 container mx-auto w-full"
      />
      {/* Main content */}
      <div className="relative z-10 w-full container mx-auto grid grid-cols-2 gap-12 justify-between">
        {/* Left: Profile Image with animated shadow */}
        <div className="relative flex justify-start items-center w-[400px] h-[400px]">
          {/* Animated shadow square */}
          <motion.div
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 50, x: 50 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              type: "spring",
              stiffness: 60,
            }}
            className="absolute right-0 bottom-0 w-[220px] h-[320px] bg-neutral-100"
            style={{ zIndex: 1 }}
          />
          {/* Animated image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 60,
            }}
            className="relative z-10"
          >
            <Image
              src={PROFILE_IMAGE_URL}
              alt="Yasin Rofcanin"
              width={400}
              height={400}
              priority
            />
          </motion.div>
        </div>
        {/* Right: Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center gap-8 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Best Designers &amp; <br />
            Architectures <span className="text-hover">for You</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl">
            Design affects human. It changes the view of life and the
            self-image. According to the opinion specialists, a good design is a
            space that matches with the lifestyle, habits and nature of the
            person.
          </p>
          <div className="flex gap-24 mt-4 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-light text-hover">
                200+
              </span>
              <span className="text-gray-700 text-xl font-medium mt-1">
                Projects Finished
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-light text-hover">
                180+
              </span>
              <span className="text-gray-700 text-xl font-medium mt-1">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
