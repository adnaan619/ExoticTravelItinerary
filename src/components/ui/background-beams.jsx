"use client";
import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null);

  useEffect(() => {
    const moveBeams = (e) => {
      if (!beamsRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX - beamsRef.current.offsetLeft;
      const y = clientY - beamsRef.current.offsetTop;
      beamsRef.current.style.setProperty("--x", `${x}px`);
      beamsRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", moveBeams);
    return () => window.removeEventListener("mousemove", moveBeams);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-gray-50",
        className
      )}
    >
      <div className="absolute left-[--x] top-[--y] h-56 w-56 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 blur-[100px]" />
    </div>
  );
}; 