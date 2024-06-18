"use client";

import React from "react";
import EarthCanvas from "./Earth";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import Card from "./Card";

const Interests = () => {
  const { ref } = useSectionInView("Interests");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-0 max-w-[80rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto"
      id="interests"
    >
      <SectionHeading>Interests</SectionHeading>
      <p>This page is currently under construction...</p>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-1 border border-gray-300 p-4 w-full">
        <div className="relative w-full h-96 md:h-auto md:flex-1"> {/* Adjust the height of the container */}
          <EarthCanvas />
        </div>
        <Card />
      </div>
    </motion.section>
  );
};

export default Interests;
