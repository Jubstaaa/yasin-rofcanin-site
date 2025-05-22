"use client";

import React from "react";

export default function ShapeDivider() {
  return (
    <div className="relative w-full h-[131px] -mt-[131px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2600 131.1"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
      >
        <path className="fill-white" d="M0 0L2600 0 2600 69.1 0 0z" />
        <path
          className="fill-white opacity-50"
          d="M0 0L2600 0 2600 69.1 0 69.1z"
        />
        <path
          className="fill-white opacity-25"
          d="M2600 0L0 0 0 130.1 2600 69.1z"
        />
      </svg>
    </div>
  );
}
