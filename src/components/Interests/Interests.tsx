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
      id="interests"
      className="w-full px-4"
    >
      <div className='mb-20'>
        <SectionHeading>Interests</SectionHeading>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center py-0 -mt-60 pl-10 pr-10">
        <div className="hidden md:block md:w-1/2 py-0">
          <EarthCanvas />
        </div>
        <div className="w-full md:w-1/2 py-0">
          <Card />
        </div>
      </div>
    </motion.section>
  );
};

export default Interests;
