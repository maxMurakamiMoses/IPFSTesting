import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Card = ({ item, theme, visible }: { item: any; theme: string; visible: boolean }) => {
  const getContentStyle = (): React.CSSProperties => ({
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
    border: "0.2px solid white",
    textAlign: "left" as "left",
    padding: "1.3rem 2rem",
  });

  const getContentArrowStyle = (): React.CSSProperties => ({
    borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
  });

  const getIconStyle = (): React.CSSProperties => ({
    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
    fontSize: "1.5rem",
  });

  return (
    <VerticalTimelineElement
      visible={visible}
      contentStyle={getContentStyle()}
      contentArrowStyle={getContentArrowStyle()}
      date={item.date}
      icon={item.icon}
      iconStyle={getIconStyle()}
    >
      <h3 className="font-semibold capitalize">{item.title}</h3>
      <p className="font-normal !mt-0">{item.location}</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {item.description}
      </p>
    </VerticalTimelineElement>
  );
};

export default Card;
