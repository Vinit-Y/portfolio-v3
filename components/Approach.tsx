"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { MagicButton } from './ui/MagicButton'

const Approach = () => {
  return (
    <section className="w-full py-20" id="approach">
      <h1 className="heading">
        My <span className="text-blue-500">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-10">
        <Card 
          title="Plan & Design"
          description="Understand business goals, gather requirements, and design accessible, user-focused solutions."
          icon={<MagicButton title="Phase 1" icon />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            colors={[[34, 197, 94], [16, 185, 129]]}
            dotSize={3}
          />
        </Card>
        <Card 
          title="Architect & Build"
          description="Develop full-stack applications with scalable architecture, clean code, and best practices."
          icon={<MagicButton title="Phase 2" icon />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-indigo-800"
            colors={[[79, 70, 229], [99, 102, 241]]}
            dotSize={4}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
          title="Test & Deploy"
          description="Ensure reliability with testing, then deploy via CI/CD pipelines across cloud platforms."
          icon={<MagicButton title="Phase 3" icon />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[56, 189, 248], [125, 211, 252]]}
            dotSize={2}
          />
        </Card>
        <Card 
          title="Monitor & Improve"
          description="Track performance, gather feedback, and iterate for continuous enhancement."
          icon={<MagicButton title="Phase 4" icon />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-600"
            colors={[[168, 85, 247], [192, 132, 252]]}
            dotSize={5}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

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

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <p className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 group-hover/canvas-card:text-white transition duration-200 text-center">
          {description}
        </p>
      </div>
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

export default Approach;
