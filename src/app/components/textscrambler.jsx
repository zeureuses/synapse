"use client";

import { useEffect, useRef } from "react";

export default function TextScrambler({
  children,
  className = "",
  as: Tag = "div", // wrapper container
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = "!<>-_\\/[]{}—=+*^?#";
    const duration = 1.5;       // fixed
    const scrambleSpeed = 0.05; // fixed
    const repeatDelay = 20000;  // 20 seconds

    // Collect all text nodes inside children
    const textNodes = Array.from(
      containerRef.current.querySelectorAll("*")
    ).filter((el) => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3);

    // Save original text content
    const originals = textNodes.map((el) => el.textContent);

    const runScramble = () => {
      textNodes.forEach((el, index) => {
        const targetText = originals[index];
        let frame = 0;
        const iterations = Math.floor(duration / scrambleSpeed);

        const interval = setInterval(() => {
          const scrambled = targetText
            .split("")
            .map((char) => {
              if (Math.random() < frame / iterations) {
                return char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          el.textContent = scrambled;

          if (frame >= iterations) {
            clearInterval(interval);
            el.textContent = targetText;
          }
          frame++;
        }, scrambleSpeed * 1000);
      });
    };

    // Run once on mount
    runScramble();

    // Repeat every 20s
    const loop = setInterval(runScramble, repeatDelay);

    return () => clearInterval(loop);
  }, []);

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
}
