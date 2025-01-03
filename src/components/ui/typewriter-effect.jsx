"use client";
import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView]);

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span
        key={`${word.text}-${idx}`}
        className={cn("opacity-0", word.className)}
      >
        {word.text}
        {idx < words.length - 1 ? " " : ""}
      </motion.span>
    );
  });

  return (
    <div
      ref={scope}
      className={cn("text-center font-bold", className)}
    >
      {renderWords}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-gray-900", cursorClassName)}
      />
    </div>
  );
}; 