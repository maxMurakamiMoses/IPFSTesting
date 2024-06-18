"use client"

import React from 'react'
import Earth from './Earth'
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import Card from './Card';

const Interests = () => {
    const { ref } = useSectionInView("Interests");
  return (
    <motion.section
    ref={ref}
    className="mb-28 sm:mb-0 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    id="interests"
    >
        <SectionHeading>interests</SectionHeading>
        <p>This page is currently under construction...</p>

        <Earth />
        <Card />
    </motion.section>
  )
}

export default Interests