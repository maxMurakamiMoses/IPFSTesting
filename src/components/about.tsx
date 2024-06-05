"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-0 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m an undergraduate student at Duke studying Philosophy and Computer Science. 
        I find philosophy compelling because it trains me to think from a structured, 
        first-principles perspective, which is becoming increasingly useful in navigating 
        our intricate and opinionated world. Computer science appeals to me because it offers 
        the opportunity to create products that meet people&apos;s needs. I am particularly 
        interested in blockchain technology as I&apos;m excited by its potential to 
        restructure various industries and combat centralized systems.
      </p>

      <p>
        When I’m not coding, I enjoy playing basketball, surfing, and late-night runs.
      </p>
    </motion.section>
  );
}
