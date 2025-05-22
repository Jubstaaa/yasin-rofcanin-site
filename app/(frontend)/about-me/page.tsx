import React from "react";
import Hero from "../components/about-us/Hero";
import Teachings from "../components/about-us/Teachings";
import Visitings from "../components/about-us/Visitings";

async function page() {
  return (
    <>
      <Hero />
      <Teachings />
      <Visitings />
    </>
  );
}

export default page;
