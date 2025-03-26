"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    university: string;
    degree: string;
    date: string;
    courses: string;
    extracurriculars: string;
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-12",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[90vw] max-w-full rounded-2xl border border-b-0 border-slate-800 p-5 md:p-12 md:w-[60vw]"
            style={{
              background: 'rgb(2,0,36)',
              backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(55,55,189,1) 56%, rgba(0,212,255,1) 100%)',
            }}
            key={item.id}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <img
                src={item.img}
                alt={`${item.university} logo`}
                className="mb-4 w-full h-auto max-h-40 object-contain rounded-md"
              /> {/* Display image at the top */}
              <div className="text-center"> {/* Center the university name */}
                <span className="relative z-20 text-lg font-semibold leading-[1.6]">
                  {item.university} {/* Display university */}
                </span>
              </div>
              <div className="relative z-20 mt-4 flex flex-col gap-2">
                <span className="text-sm leading-[1.6] font-medium ">
                  <strong>Degree:</strong> {item.degree} {/* Display degree */}
                </span>
                <span className="text-sm leading-[1.6] font-medium ">
                  <strong>Date:</strong> {item.date} {/* Display date */}
                </span>
                <span className="text-sm leading-[1.6] font-medium">
                  <strong>Courses:</strong> {item.courses} {/* Display courses */}
                </span>
                <span className="text-sm leading-[1.6] font-medium">
                  <strong>Extracurricular Activities:</strong> {item.extracurriculars} {/* Display extracurriculars */}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
