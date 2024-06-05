"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SparkleGrid = ({ rows = 15, columns = 15 }) => {
  const [visibleSparkles, setVisibleSparkles] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newVisibleSparkles: number[] = [];
      for (let i = 0; i < rows * columns; i++) {
        if (Math.random() < 0.08) {
          newVisibleSparkles.push(i);
        }
      }
      setVisibleSparkles(newVisibleSparkles);
    }, 1000);

    return () => clearInterval(interval);
  }, [rows, columns]);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    pointerEvents: "none",
  };

  const sparkleStyle: React.CSSProperties = {
    width: "2px",
    height: "2px",
    background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
    borderRadius: "80%",
  };

  return (
    <div style={gridStyle}>
      {Array.from({ length: rows * columns }).map((_, index) => (
        <div
          key={index}
          style={{
            ...sparkleStyle,
            opacity: visibleSparkles.includes(index) ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technologies I have Used</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="relative bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 overflow-hidden"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.075 }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
            <SparkleGrid />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
