"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Card from "./card"; // Import the Card component

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]); 

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <Card item={item} theme={theme} visible={hasAnimated ? true : inView} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
