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
      <div className="text-center">
        <h1 style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}>More about Me</h1>
        <p>This part of the site is under construction</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:block md:w-1/2">
          <EarthCanvas />
        </div>
        <div className="w-full md:w-1/2">
          <Card />
        </div>
      </div>
    </motion.section>
  );
};

export default Interests;
