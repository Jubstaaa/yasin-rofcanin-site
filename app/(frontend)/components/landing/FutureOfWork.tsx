"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

interface FutureOfWorkProps {
  images: {
    src: string;
    alt: string;
  }[];
}

function FutureOfWork({ images }: FutureOfWorkProps) {
  return (
    <div className="grid grid-cols-2 gap-20 container mx-auto pt-24">
      <div className="prose">
        <h3 className="text-5xl font-medium">Future of Work</h3>
        <span className="font-bold text-secondary">
          Future of Work Research Centre Leadership
        </span>
        <p>
          {" "}
          I am a Co-Director of the{" "}
          <b className="text-secondary">
            <i>Future of Work</i>
          </b>{" "}
          Research at University of Bath, School of Management.
        </p>
        <ul className="list-disc list-inside text-secondary [&>li::marker]:text-hover">
          <li className="leading-loose">
            We organise workshops on improving the quality of research output at
            the School level (Sessions of Deep Reading, Writing Retreats and
            Publishing in the USA Journals) and developing sessions to the
            career development of postgraduate students and early career
            researchers (Sessions of Meet the Editors, Afternoon Tea Talks).
          </li>
          <li className="leading-loose">
            Furthermore, we carry out activities includingseries of
            mini-conferences that key external stakeholders (companies and
            practitioners). Please get in touch with us if you are interested.
          </li>
          <li className="leading-loose">
            Finally, our research centre regularly hosts Visiting Researcher.
          </li>
        </ul>
        <Button
          href="https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/"
          target="_blank"
        >
          CLICK THE SEE OUR WEBSITE
        </Button>
      </div>

      <div className="relative h-[600px]">
        {images && images.length >= 2 && (
          <>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-0 left-0 w-[80%] h-[400px]"
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
              className="absolute bottom-0 right-0 w-[80%] h-[400px]"
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
  );
}

export default FutureOfWork;
