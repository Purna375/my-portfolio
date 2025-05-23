import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { IoSparkles } from "react-icons/io5";
import { FlipWords } from "./ui/FlipWords";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const roles = [
    "Full Stack Web Developer",
    "Data Analyst", 
    "AIML Engineer",
    "FreeLancer"
  ];

  return (
    <div id="hero" className="min-h-screen relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="pt-16 md:pt-24 lg:pt-32 flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="flex gap-2 justify-center items-center border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full mb-6">
            <span>Dynamic Web designer</span> <Sparkles className="w-5 h-5" />
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </p>

          <TextGenerateEffect
            words="Transforming Data, Code, and AI into Intuitive Digital Experiences."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <span className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Purna Chandrashekar, an <FlipWords words={roles} className="text-purple dark:text-purple font-bold" />
          </span>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Hero;