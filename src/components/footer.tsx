import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Max. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Fleek hosting.
      </p>
      <p className="text-xs text-center">
        You can visit it at
        <a href="https://max.on-fleek.app" className="text-blue-500"> https://max.on-fleek.app </a> or
        <a href="https://maxmurakami.eth.limo" className="text-blue-500"> https://maxmurakami.eth.limo</a>.
      </p>
    </footer>
  );
}
