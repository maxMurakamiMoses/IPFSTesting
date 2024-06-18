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
        I spent my childhood growing up in Tokyo, and moved to the United States to attend Duke University in the fall of 2022 (I&rsquo;m a US-Japan dual citizen). My passions lie in entrepreneurship in the general tech field, with a focus on blockchain technologies and the health/wellness space. At Duke, I&apos;m a Philosophy & Computer Science double major, and spend my time outside of class serving as a TA, running the Blockchain Club, & playing basketball with the club team.
      </p>
      <p>
        You can find out more about me personally in the <a href="#interests" style={{ textDecoration: 'underline' }}>interests section</a>, or professionally by downloading my PDF available above.
      </p>
    </motion.section>
  );
}
