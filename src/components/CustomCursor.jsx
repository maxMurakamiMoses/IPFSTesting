"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from "@/context/theme-context";

const CustomCursor = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        borderColor: theme === 'dark' ? 'white' : '#888',
      }}
    />
  );
};

export default CustomCursor;
