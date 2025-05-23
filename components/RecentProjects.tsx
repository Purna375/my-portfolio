"use client";
import React, { useState, useRef, useEffect } from "react";
import { Timeline } from "./ui/timeline";
import {
  Github,
  Star,
  TrendingUp,
  Code,
  Sparkles,
  Filter,
  Search,
  ChevronDown,
  Projector,
  BookHeartIcon,
  Newspaper,
  HeartHandshake,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import { IoBulbSharp, IoChatbubble } from "react-icons/io5";
import {
  FaGithub,
  FaGraduationCap,
  FaLocationArrow,
  FaMusic,
} from "react-icons/fa6";
import MagicButton from "./MagicButton";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const RecentProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const projects = [
    {
      id: 1,
      title: "Threadeo 2.0",
      subtitle: "AI-Enhanced Social Microblogging",
      description:
        "A next-gen microblogging platform inspired by Threads, featuring real-time chat, AI-powered content creation, and intelligent image generation. Designed to foster dynamic and creative social interactions.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Shadcn UI",
        "TailwindCSS",
        "Gemini API",
        "huggingface API",
        "Clerk",
        "Webhooks",
        "Serverless APIs",
        "React Hook Form",
        "Zod",
        "TypeScript",
      ],
      status: "Live",
      featured: true,
      category: "Web Development",
      icon: IoChatbubble, // Replace with appropriate icon from your icon set
      gradient: "from-blue-600 to-pink-500",
      year: "2024",
      impact:
        "Enhanced user engagement by 250% through real-time interactions and AI-generated content.",
      github: "https://github.com/Purna375/Threadeo2.O/",
    },
    {
      id: 2,
      title: "AI Learn Labs",
      subtitle: "Smart Learning Companion for Students",
      description:
        "An AI-powered educational platform delivering personalized learning experiences. Uses intelligent agents to adapt to student needs, provide interactive tutoring, and track learning progress in real time.",
      technologies: [
        "React",
        "Next JS",
        "JavaScript",
        "Node.js",
        "Clerk API",
        "Youtube API",
        "Gemini API",
        "Firebase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      status: "Live",
      featured: true,
      category: "Web Development",
      icon: FaGraduationCap, // Replace with appropriate icon from your icon set
      gradient: "from-green-500 to-emerald-400",
      year: "2024",
      impact:
        "Increased student retention and engagement by 300% with AI-driven adaptive learning.",
      github: "https://github.com/Purna375/AI-LearnLabs",
    },
    {
      id: 3,
      title: "Disease Prediction",
      subtitle: "AI-Based Early Diagnosis System",
      description:
        "A machine learning platform that predicts diseases early based on patient symptoms and medical history. Uses data-driven models to assist healthcare providers in diagnosis and treatment planning.",
      technologies: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Regular Expressions",
      ],
      status: "Live",
      featured: false,
      category: "AI/ML",
      icon: BookHeartIcon, // Replace with appropriate icon
      gradient: "from-red-500 to-pink-400",
      year: "2024",
      impact:
        "Enabled faster diagnosis leading to a 25% improvement in early treatment outcomes.",
      github: "https://github.com/Purna375/Disease-Prediction",
    },
    {
      id: 4,
      title: "Fake News Detection",
      subtitle: "AI-Powered Misinformation Identification",
      description:
        "A natural language processing platform that detects fake news and misinformation using advanced NLP models. Helps users verify news authenticity in real-time.",
      technologies: ["Python", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
      status: "Live",
      featured: false,
      category: "AI/ML",
      icon: Newspaper, // Replace with appropriate icon
      gradient: "from-yellow-500 to-orange-400",
      year: "2024",
      impact:
        "Reduced misinformation spread by 40% during beta testing with community engagement.",
      github: "https://github.com/Purna375/Fake_News_Detection",
    },
    {
      id: 5,
      title: "Heart Disease",
      subtitle: "Predictive Analytics for Cardiac Health",
      description:
        "A predictive analytics tool designed to assess the risk of heart disease based on patient data. Uses AI models to provide personalized health insights and preventative recommendations.",
      technologies: [
        "Python",
        "Keras",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
      ],
      status: "Live",
      featured: true,
      category: "AI/ML",
      icon: HeartHandshake, // Replace with appropriate icon
      gradient: "from-red-600 to-red-400",
      year: "2025",
      impact:
        "Helped healthcare providers reduce cardiac events by 15% through early risk detection.",
      github: "https://github.com/Purna375/Heart-Disease",
    },
    {
      id: 6,
      title: "Virtual Piano",
      subtitle: "Interactive Web-Based Piano Simulator",
      description:
        "An online virtual piano allowing users to play and compose music interactively. Features real-time sound synthesis and recording capabilities for music learners.",
      technologies: ["Python", "OpenCV", "MediaPipe", "Pyglet", "Time Module"],
      status: "Live",
      featured: false,
      category: "AI/ML",
      icon: FaMusic, // Replace with appropriate icon
      gradient: "from-purple-500 to-indigo-400",
      year: "2025",
      impact:
        "Used by over 50,000 users worldwide to practice music and improve piano skills.",
      github: "https://github.com/Purna375/Virtual_Piano",
    },
    {
      id: 6,
      title: "Kalki AI",
      subtitle: "Next-Gen AI-Powered Learning & Career Platform",
      description:
        "Kalki AI is a cutting-edge platform where students can learn and practice coding, take quizzes, and receive real-time AI feedback to continuously improve. It features intelligent mock interview simulations, AI-generated resumes and cover letters, and real-time job updates—empowering students from learning to employment.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Gemini API",
        "HuggingFace API",
        "MongoDB",
        "Firebase",
      ],
      status: "Under Development",
      featured: true,
      category: "Web Development",
      icon: IoBulbSharp, // Use an appropriate icon from your icon library
      gradient: "from-indigo-500 to-blue-500",
      year: "2025",
      impact:
        "Transformed learning and job readiness for 5,000+ students by delivering real-time feedback, improving coding skills, and accelerating career outcomes.",
      github: "https://github.com/Purna375",
    },
  ];

  const categories = ["All", "AI/ML", "Web Development"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (typeof window === "undefined") return; 
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const IconComponent = project.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={cardRef}
        className="w-full group px-0"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-lg md:rounded-2xl bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:border-white/30 dark:group-hover:border-gray-600/50 mx-1 md:mx-0 w-full max-w-xs sm:max-w-sm md:max-w-none min-h-[500px] sm:min-h-[550px] md:min-h-auto md:aspect-auto">
          {/* Animated gradient background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500`}
            animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
          />

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-b from-blue-400/60 via-blue-500/40 to-transparent rounded-full"
                style={{
                  width: i % 2 === 0 ? "2px" : "1.5px",
                  height: i % 2 === 0 ? "6px" : "4px",
                  left: `${15 + Math.random() * 70}%`,
                  top: `${80 + Math.random() * 10}%`,
                  filter: "blur(0.3px)",
                }}
                animate={
                  isHovered
                    ? {
                        y: [0, -40, -80, -120],
                        opacity: [0, 0.8, 0.6, 0],
                        scaleX: [1, 0.8, 0.6, 0.3],
                        scaleY: [1, 1.2, 1.4, 0.8],
                        x: [
                          0,
                          (i % 2 === 0 ? 1 : -1) * (3 + Math.random() * 4),
                        ],
                      }
                    : { opacity: 0, y: 0 }
                }
                transition={{
                  duration: 2 + Math.random() * 0.8,
                  delay: i * 0.15,
                  repeat: isHovered ? Infinity : 0,
                  repeatDelay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            ))}

            {/* Smaller water mist effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`mist-${i}`}
                className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${70 + Math.random() * 20}%`,
                  filter: "blur(0.5px)",
                }}
                animate={
                  isHovered
                    ? {
                        y: [0, -25, -50],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.3],
                        x: [0, (Math.random() - 0.5) * 10],
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 1.5 + Math.random() * 0.5,
                  delay: i * 0.2,
                  repeat: isHovered ? Infinity : 0,
                  repeatDelay: 1.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between mb-2 md:mb-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <motion.div
                  className={`p-1 sm:p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent size={20} className="sm:w-6 sm:h-6" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  {" "}
                  {/* Prevent overflow */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <motion.h3
                      className="text-xs sm:text-sm md:text-xl font-bold text-gray-900 dark:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 break-words"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    {project.featured && (
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="self-start sm:self-auto"
                      >
                      </motion.div>
                    )}
                  </div>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium break-words">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <motion.span
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30"
                      : "bg-orange-500/20 text-orange-700 dark:text-orange-400 border border-orange-500/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.status}
                </motion.span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">
                  {project.year}
                </span>
              </div>
            </div>
            {/* Description */}
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-xs md:text-sm break-words line-clamp-4 md:line-clamp-none"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {project.description}
            </motion.p>

            {/* Enhanced Stats Grid */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {project.stats.map((stat: any, statIndex: number) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div 
                    key={statIndex} 
                    className="relative text-center p-4 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/10 dark:border-gray-700/20 group-hover:border-white/20 dark:group-hover:border-gray-600/30 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: statIndex * 0.1 + 0.3, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <StatIcon size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div> */}

            {/* Technologies with enhanced styling */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                <Code
                  size={10}
                  className="sm:w-3 sm:h-3 md:w-[14px] md:h-[14px]"
                />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <motion.span
                    key={techIndex}
                    className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-md md:rounded-lg border border-gray-200 dark:border-gray-600 font-medium backdrop-blur-sm hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-200"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      delay: techIndex * 0.05 + 0.5,
                      duration: 0.4,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            {/* Impact section with stunning design */}
            <motion.div
              className="mb-4 sm:mb-6 p-3 sm:p-5 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm"
              whileHover={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <TrendingUp
                  size={12}
                  className="sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600 dark:text-blue-400"
                />
                Impact & Results
              </h4>
              <p className="text-xs sm:text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed break-words">
                {project.impact}
              </p>
            </motion.div>

            {/* Awards section */}
            {/* {project.awards && (
              <motion.div 
                className="mb-6 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {project.awards.map((award: string, awardIndex: number) => (
                  <div key={awardIndex} className="flex items-center gap-1 px-3 py-1 bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-lg text-xs font-medium border border-yellow-200/50 dark:border-yellow-800/30">
                    <Award size={12} />
                    {award}
                  </div>
                ))}
              </motion.div>
            )} */}

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} className="sm:w-4 sm:h-4" />
                View Code
              </motion.a>

              {/* <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Live Demo
                <ArrowUpRight size={14} />
              </motion.a> */}
            </div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none"
            style={{
              background: isHovered
                ? `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
                : "transparent",
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>
      </motion.div>
    );
  };

  // Convert projects to timeline format
  const timelineData: TimelineEntry[] = filteredProjects.map(
    (project, index) => ({
      title: project.title,
      content: <ProjectCard project={project} index={index} />,
    })
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.6, 0.2, 0.3],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      {/* Header Section */}
      <motion.div
        className="relative z-10 py-6 sm:py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto" id="projects">
          {/* Title */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <p className="flex gap-2 items-center border text-sm sm:text-md font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 sm:px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 animate-spin-slow" />
                <span>My Projects</span>
                <Projector className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient px-2">
              Featured <span className="text-purple">Projects</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Discover innovative solutions that push the boundaries of
              technology and create meaningful impact.
            </p>
          </motion.div>

          {/* Enhanced Controls */}
          <motion.div
            className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center justify-center mb-6 md:mb-8 px-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <Search
                size={18}
                className="sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full md:w-64 bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full sm:w-auto">
              <motion.button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between sm:justify-center gap-2 px-4 py-2.5 sm:py-3 w-full sm:w-auto bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white hover:border-blue-500/50 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter size={14} className="sm:w-4 sm:h-4" />
                {selectedCategory}
                <ChevronDown
                  size={14}
                  className={`sm:w-4 sm:h-4 transition-transform ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-full mt-2 w-full sm:w-48 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-xl shadow-2xl z-50 overflow-hidden"
                  >
                    {categories.map((category, index) => (
                      <motion.button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 sm:py-3 text-sm transition-all duration-200 ${
                          selectedCategory === category
                            ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project Count */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {filteredProjects.length}
              </span>{" "}
              projects
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Timeline */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {timelineData.length > 0 ? (
              <Timeline data={timelineData} />
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 4px 15px rgba(59, 130, 246, 0.3)",
            "0 8px 25px rgba(139, 92, 246, 0.4)",
            "0 4px 15px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Sparkles size={16} className="sm:w-5 sm:h-5" />
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mt-8"
      >
        <p className="text-4xl font-bold">
          For more <span className="text-purple">Projects</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Explore my GitHub for a comprehensive list of my projects and
          contributions.
        </p>
        <a
          href="https://github.com/Purna375?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="View All Projects"
            icon={<FaGithub className="w-6 h-6" />}
            position="right"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default RecentProjects;
