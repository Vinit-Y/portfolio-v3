"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo }  from "./GridGlobe";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false
});

import { useState } from "react";
import animationData from "../../data/confetti.json"
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  spareImg,
  imgClassName,
  titleClassName,

}: {
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [animationKey, setAnimationKey] = useState('static-key');

  const handleCopy = () => {
    navigator.clipboard.writeText('yadav.vini@northeastern.edu')
      .then(() => {
        setCopied(true);
        setAnimationKey(Date.now().toString());
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(55,55,189,1) 56%, rgba(0,212,255,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName, "object-cover, object-center")}
            />  
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}   
            />
          )}
        </div>
        {id ===6 && (
          <BackgroundGradientAnimation>
            {/* <div className={'absolute z-50 flex items-center justify-center text-white font-bold'}/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

        { id === 2 && <GlobeDemo />}

        { id === 3 && (
          <div className="flex flex-wrap gap-3">
            {[
              { text: "2+ years of experience", emoji: "💼" },
              { text: "20+ projects built", emoji: "🚀" },
              { text: "3+ Volunteering", emoji: "🚀" },
              { text: "Candid Street Photographer", emoji: "📷" },
              { text: "Culinary Explorer", emoji: "🍽️" },
            ].map((item) => (
              <span 
                key={item.text} 
                className="py-2 px-4 text-xs lg:text-base font-semibold bg-[#10132E] rounded-lg text-center text-white opacity-80 flex items-center gap-2"
              >
                <span>{item.emoji}</span> {item.text}
              </span>
            ))}
          </div>
        )}

        { id === 1 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['JavaScript', 'TypeScript', 'Java', 'Python', 'REST API', 'GraphQL'].map((item) => (
                <span 
                  key={item} 
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]/70"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]/70"></span>             
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]/70"></span>
              {['React.js', 'Next.js', 'TailwindCSS', 'Node.js', 'Express.js', 'Spring Boot'].map((item) => (
                <span 
                  key={item} 
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]/70"
                >
                  {item}
                </span>
              ))}             
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              {['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'GCP', 'Azure'].map((item) => (
                <span 
                  key={item} 
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]/70"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]/70"></span>             
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]/70"></span>
              {['GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Figma'].map((item) => (
                <span 
                  key={item} 
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]/70"
                >
                  {item}
                </span>
              ))}             
            </div>
          </div>
        )}
        { id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`} style={{ zIndex: -1 }}>
              <Lottie 
                key={animationKey}
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
              />
            </div>
            <MagicButton 
              title={copied ? 'Email Copied' : 'Copy my Email'}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
