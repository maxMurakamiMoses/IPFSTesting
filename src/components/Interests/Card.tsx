"use client"

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="my-20 flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto">
        <Card
          title="People I Find Interesting"
          icon={<AceternityIcon order="People" />}
          des=" Justin Mares,
            Paul Graham,
            Balaji Srinivasan,
            Bryan Johnson"
          links={[
            "https://justinmares.com/",
            "https://paulgraham.com/",
            "https://balajis.com/",
            "https://bryanjohnson.co/"
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Projects I find Exciting"
          icon={<AceternityIcon order="Projects" />}
          des="  Vita.dao,
            Helium Networks,
            Lens Protocol,
            Fleek.xyz"
          links={[
            "https://vita.dao/",
            "https://www.helium.com/",
            "https://www.lens.xyz/",
            "https://fleek.xyz/"
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Content I love following"
          icon={<AceternityIcon order="Content" />}
          des="  All-in Pod,
            MFM Pod,
            Lex Fridman,
            Fitt Insider"
          links={[
            "https://www.allinpod.com/",
            "https://www.mfmpod.com/",
            "https://lexfridman.com/",
            "https://www.fittinsider.com/"
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  links,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  links: string[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [cardWidth, setCardWidth] = React.useState("470px");

  React.useEffect(() => {
    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        return "950px"; // large screens
      } else if (width >= 768) {
        return "700px"; // medium screens
      } else {
        return "470px"; // small screens
      }
    };

    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    setCardWidth(getCardWidth()); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desWithLinks = des.split(",").map((item, index, array) => (
    <span key={index}>
      {item.trim()}
      <LinkIcon url={links[index]} />
      {index < array.length - 1 && ",  "}
    </span>
  ));
  

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] px-4 py-2 relative h-70 rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        width: cardWidth,
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-4">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-left
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {desWithLinks}
        </p>
      </div>
    </div>
  );
};

const LinkIcon = ({ url }: { url: string }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick} className="inline-flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 ml-1 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 015.656 0l1.414 1.414a4 4 0 010 5.656l-4.95 4.95a4 4 0 01-5.656 0l-1.414-1.414a4 4 0 010-5.656"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.172 13.828a4 4 0 01-5.656 0l-1.414-1.414a4 4 0 010-5.656l4.95-4.95a4 4 0 015.656 0l1.414 1.414a4 4 0 010 5.656"
        />
      </svg>
    </button>
  );
};


const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl font-bold text-2xl" // changed text color to white
        >
          {order}
        </span>
      </button>
    </div>
  );
};


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
