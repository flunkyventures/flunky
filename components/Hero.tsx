"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);

  return (
    <div
      className="h-[200vh] bg-white dark:bg-neutral-950 w-full relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
export default Hero