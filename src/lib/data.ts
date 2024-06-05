import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineComputer } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";

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
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern, Zentific investment Management",
    location: "Tokyo, JP",
    description:
      "Automated the regulatory compliance verification process by using LLaMa, web-scraping (Scapy/Selenium), and the OpenFIGI API to reduce regulatory compliance checking time by 60%, significantly streamlining our ability to maintain regulatory adherence.",
    icon: React.createElement(MdOutlineComputer),
    date: "June 2023 - July 2023",
  },
  {
    title: "Software Engineer Intern, Lava",
    location: "Remote",
    description:
      "Integrated infura’s and Etherscan’s APIs to systemically track wBTC transactions, enabling the extraction of detailed insights into user behavior, including wallet composition, trading patterns, and on-chain interaction with wBTC. Also, conducted on-chain analysis on Ethereum to track token transfers and access network activity for strategic insights.",
    icon: React.createElement(MdOutlineCurrencyBitcoin),
    date: "Sep 2023 - Jan 2024",
  },
  {
    title: "Graduate Course Teaching Assistant",
    location: "Durham, NC",
    description:
      "Teaching assistant for a graduate course in Fuqua called Innovation and Cryptoventures (FUQINTRD 697) focusing on Defi and Blockchain applications.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jan 2024 - Present",
  },
  {
    title: "Software Engineer Intern, Duke Athletic Performace Center",
    location: "Remote",
    description:
      "Created the entire patient managment system, using Clerk for user authentication/managment, Langchain to autogenerate reports, and neontech/prisma/next.js 14 for the backend.",
    icon: React.createElement(MdSportsMartialArts),
    date: "May 2024 - Aug 2024",
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
    title: "Manus-AI",
    description:
      "Manus.AI is an web app that translates ASL into text. Got 3rd place on the wellness track out of 100+ people!",
    tags: ["Python", "Tensorflow", "react", "javascript"],
    imageUrl: "/manus.png",
    link: "https://devpost.com/software/manus-ai",
  },
  {
    title: "Colormotion",
    description:
      "Colormotion is a mobile app and chrome extension that highlights youtube captions based on the emotion expressed for autistic individuals. Won 1st place overall, out of 200+ people!",
    tags: ["React naitive", "Node.js", "Javascript", "HTML", "CSS"],
    imageUrl: "/colormotion.png",
    link: "https://devpost.com/software/emote-8olims",
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
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Zustand",
  "Clerk"
] as const;