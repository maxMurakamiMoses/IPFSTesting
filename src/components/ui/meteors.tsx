import { cn } from "@/utils/cn";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  const getRandomNegativePercentage = () => {
    const percentages = ["-3%", "-4%", "-5%", "-6%"];
    return percentages[Math.floor(Math.random() * percentages.length)];
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((el, idx) => {
        const startFromLeft = Math.random() > 0.5;
        const baseDelay = idx * 0.2; 
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              top: startFromLeft ? Math.floor(Math.random() * 95) + "%" : getRandomNegativePercentage(),
              left: startFromLeft ? getRandomNegativePercentage() : Math.floor(Math.random() * 95) + "%",
              animationDelay: `${baseDelay + Math.random() * (2.5 - 1) + 1}s`,
              animationDuration: `${Math.floor(Math.random() * (50 - 30) + 30)}s`,
            }}
          ></span>
        );
      })}
    </div>
  );
};
