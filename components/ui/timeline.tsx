"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
  AnimatePresence,
  useInView,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visibleDots, setVisibleDots] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, height]),
    { stiffness: 200, damping: 50, mass: 0.5 }
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Enhanced dot visibility tracking with smoother transitions
  useMotionValueEvent(heightTransform, "change", (latest: number) => {
    const newVisibleDots = new Set<number>();
    let newActiveIndex = -1;

    data.forEach((_, index) => {
      const dotPosition = (index + 1) * (height / (data.length + 1));
      if (latest >= dotPosition - 200) {
        newVisibleDots.add(index);
        newActiveIndex = index;
      }
    });

    setVisibleDots(newVisibleDots);
    setActiveIndex(newActiveIndex);
  });

  return (
    <div
      className="w-full font-sans md:px-10 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-20 pt-10 px-4 md:px-0"
      >
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeIndex >= index;
          const isVisible = visibleDots.has(index);

          return (
            <motion.div
              key={index}
              className="relative pt-16 md:pt-28 lg:pt-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Enhanced Timeline dot with spectacular animations */}
              <motion.div
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-50"
                style={{
                  top: "0rem",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6, // Reduced duration for smoother animation
                  delay: 0.1, // Reduced delay
                  type: "spring",
                  stiffness: 300, // Increased stiffness for snappier animation
                  damping: 25,
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Simplified ripple effects - only essential animations */}
                <AnimatePresence>
                  {isVisible && (
                    <>
                      {/* Single optimized ripple ring */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400/60"
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 2.5],
                          opacity: [0.8, 0],
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />

                      {/* Water flowing droplets */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bg-gradient-to-b from-blue-400/80 via-blue-500/60 to-transparent rounded-full"
                          style={{
                            width: "3px",
                            height: "8px",
                            top: "50%",
                            left: "50%",
                            transformOrigin: "center top",
                            filter: "blur(0.5px)",
                          }}
                          initial={{ scale: 0, opacity: 0, y: 0 }}
                          animate={{
                            scale: [0, 1, 0.8, 0],
                            opacity: [0, 0.9, 0.7, 0],
                            y: [0, -15, -35, -60],
                            x: [
                              0,
                              (i % 2 === 0 ? 1 : -1) * (5 + Math.random() * 8),
                            ],
                            scaleX: [1, 0.8, 0.6, 0.3],
                            rotate: [
                              (i % 2 === 0 ? 1 : -1) * (5 + Math.random() * 10),
                            ],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 0.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: [0.25, 0.46, 0.45, 0.94], // Smooth water-like easing
                          }}
                        />
                      ))}

                      {/* Additional smaller water droplets */}
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={`small-${i}`}
                          className="absolute w-1.5 h-1.5 bg-blue-300/60 rounded-full"
                          style={{
                            top: "50%",
                            left: "50%",
                            filter: "blur(0.3px)",
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0.5, 0],
                            opacity: [0, 0.8, 0.4, 0],
                            y: [0, -20, -40],
                            x: [
                              0,
                              (i % 2 === 0 ? 1 : -1) * (8 + Math.random() * 6),
                            ],
                          }}
                          transition={{
                            duration: 1.8,
                            delay: 0.5 + i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>

                {/* Simplified main dot */}
                <motion.div
                  className="relative h-4 w-4 rounded-full bg-white/90 dark:bg-gray-900/90 mt-24 flex items-center justify-center shadow-lg"
                  style={{
                    border: "2px solid",
                    borderColor: isActive ? "#3b82f6" : "#d1d5db",
                    boxShadow: isActive
                      ? "0 0 20px rgba(59, 130, 246, 0.5)"
                      : "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  animate={
                    isVisible
                      ? {
                          scale: [1, 1.2, 1.1],
                          borderColor: ["#d1d5db", "#3b82f6", "#8b5cf6"],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.3,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className={`h-2 w-2 rounded-full transition-all duration-500 ${
                      isVisible
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-gray-400 dark:bg-gray-600"
                    }`}
                    animate={
                      isVisible
                        ? {
                            scale: [0.5, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                    }}
                  />

                  {/* Single orbiting ring - simplified */}
                  {isVisible && (
                    <motion.div
                      className="absolute inset-1 rounded-full border border-blue-300/40"
                      animate={{
                        rotate: [0, 360],
                        scale: [0.8, 1.1, 0.8],
                      }}
                      transition={{
                        rotate: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Enhanced content container with 3D transformations */}
              <div
                className={`flex ${
                  isLeft
                    ? "justify-start pl-8 pr-4 md:justify-end md:pr-[calc(50%+2rem)] md:pl-0" // Added pl-8 for mobile
                    : "justify-start pl-8 pr-4 md:justify-start md:pl-[calc(50%+2rem)] md:pr-0" // Added pl-8 for mobile
                } justify-center`}
              >
                <div
                  className={`w-full max-w-[calc(100%-2rem)] md:max-w-lg lg:max-w-xl`} // Updated max-width for mobile
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -80 : 80,
                      y: 30,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 400,
                      },
                    }}
                  >
                    <div className="relative">
                      {/* Simplified backdrop */}
                      <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10" />

                      {/* Content */}
                      <div className="relative z-10">{item.content}</div>

                      {/* Simplified glow effect */}
                      <motion.div
                        className="absolute -inset-px bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur-sm opacity-0"
                        animate={
                          isVisible
                            ? {
                                opacity: [0, 0.3, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Enhanced Timeline line with quantum flow effects */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 md:translate-x-0 top-0 overflow-hidden w-1 md:w-2 rounded-full"
        >
          {/* Fade-in/fade-out background track */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/50 to-transparent dark:from-transparent dark:via-gray-700/50 dark:to-transparent rounded-full"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          />
          {/* Main animated line with fade effects */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
            className="absolute inset-x-0 top-0 w-2 bg-gradient-to-b from-transparent via-blue-500 via-purple-500 to-blue-600 rounded-full"
            animate={{
              boxShadow: [
                "0 0 5px rgba(59, 130, 246, 0.3)",
                "0 0 15px rgba(139, 92, 246, 0.5)",
                "0 0 10px rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Enhanced fade overlay at both ends */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom,  transparent 15%, transparent 85%, rgba(148, 148, 148, 0.8) 95%, rgba(148, 148, 148, 0.8) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none dark:block hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 15%, transparent 85%, rgba(0,0,0,0.8) 95%, rgba(0,0,0,1) 100%)",
            }}
          />

          {/* Simplified traveling orb with fade */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              top: heightTransform,
              opacity: 0.8,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Water droplet particles flowing along timeline */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-400/80 via-blue-500/60 to-transparent rounded-full"
              style={{
                width: "2px",
                height: "5px",
                top: heightTransform,
                filter: "blur(0.3px)",
              }}
              animate={{
                y: [0, -30 - i * 12, -80 - i * 20],
                opacity: [0, 0.9, 0.6, 0],
                scaleX: [1, 0.8, 0.5],
                scaleY: [1, 1.3, 0.8],
                x: [(i % 2 === 0 ? 1 : -1) * (1 + Math.random() * 2)],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: [0.25, 0.46, 0.45, 0.94], // Water-like easing
              }}
            />
          ))}

          {/* Water mist effect */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`timeline-mist-${i}`}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300/50 rounded-full"
              style={{
                top: heightTransform,
                filter: "blur(0.4px)",
              }}
              animate={{
                y: [0, -20, -45],
                opacity: [0, 0.7, 0],
                scale: [0.3, 1, 0.2],
                x: [(i % 2 === 0 ? 1 : -1) * (2 + Math.random() * 3)],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.8 + i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
