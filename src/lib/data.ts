import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Patient Managment System",
    description:
      "Built Duke Sport Performance Medical Center's patient managment platform. They are actively using the platform.",
    tags: ["React", "Next.js", "NeonTech", "Tailwind", "Clerk", "Prisma"],
    imageUrl: "/build.png",
    link: "https://duke-medical-platform.com",
  },
  {
    title: "BlueCityDAO website",
    description:
      "Built BlueCityDAO's website, helping bring in over a million dollars in initial funding for the DAO! ",
    tags: ["React", "Material-UI", "Javascript"],
    imageUrl: "/bullcity.png",
    link: "https://bullcitydao.xyz",
  },
  {
    title: "Colormotion",
    description:
      "Colormotion is a mobile app and chrome extension that highlights youtube captions based on the emotion expressed. Won 1st place overall, out of 200+ people!",
    tags: ["React naitive", "Node.js", "Javascript", "HTML", "CSS"],
    imageUrl: "/colormotion.png",
    link: "https://devpost.com/software/emote-8olims",
  },
  {
    title: "Manus-AI",
    description:
      "Manus.AI is an web app that translates ASL into text. Got 3rd place on the wellness track out of 100+ people!",
    tags: ["Python", "Tensorflow", "react", "javascript"],
    imageUrl: "/manus.png",
    link: "https://devpost.com/software/manus-ai",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;