import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Zap,
  GitBranch,
  Star,
  Sparkles,
  Layers,
  Terminal,
  Palette,
  Settings,
  FileCode,
  Cpu,
  Network,
  Rocket,
  Brain,
  Eye,
  Command,
  Waves,
  WorkflowIcon,
  NotebookIcon,
  Code2,
} from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaC, FaJava, FaPython } from "react-icons/fa6";

const TechStackPage = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  interface FloatingElement {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>(
    []
  );

  useEffect(() => {
    setMounted(true);

    // Generate floating elements for background animation
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setFloatingElements(elements);

    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-400 to-purple-400",
      bgColor: "bg-yellow-500/10",
      technologies: [
        {
          name: "C",
          expertise: "Advanced",
          icon: <FaC className="w-6 h-6" />,
          color: "bg-blue-900",
        },
        {
          name: "Python",
          expertise: "Expert",
          icon: <FaPython className="w-10 h-10 " />,
          color:
            "bg-gradient-to-r from-blue-500 to-yellow-400 text-white rounded p-1",
        },
        {
          name: "C++",
          expertise: "Advanced",
          icon: <Code2 className="w-6 h-6" />,
          color: "bg-blue-500",
        },
        {
          name: "Data Structures & Algorithms",
          expertise: "Expert",
          icon: <Brain className="w-6 h-6" />,
          color: "bg-emerald-600",
        },
        {
          name: "Java",
          expertise: "Advanced",
          icon: <FaJava className="w-10 h-10 text-red-500" />,
          color: "bg-white",
        },
        {
          name: "TypeScript",
          expertise: "Expert",
          icon: <FileCode className="w-6 h-6" />,
          color: "bg-blue-600",
        },
        {
          name: "JavaScript",
          expertise: "Expert",
          icon: <IoLogoJavascript className="w-10 h-10" />,
          color: "bg-yellow-400",
        },
      ],
    },
    {
      title: "Frontend Mastery",
      icon: <Globe className="w-6 h-6" />,
      color: "from-violet-400 to-purple-400",
      bgColor: "bg-violet-500/10",
      technologies: [
        {
          name: "HTML5/CSS3",
          expertise: "Expert",
          icon: <Code className="w-6 h-6" />,
          color: "bg-blue-700",
        },
        {
          name: "JavaScript",
          expertise: "Expert",
          icon: <IoLogoJavascript className="w-10 h-10" />,
          color: "bg-yellow-400",
        },
        {
          name: "Tailwind CSS",
          expertise: "Expert",
          icon: <Waves className="w-6 h-6" />,
          color: "bg-violet-600",
        },
        {
          name: "React",
          expertise: "Expert",
          icon: <Zap className="w-6 h-6" />,
          color: "bg-blue-500",
        },
        {
          name: "Next.js",
          expertise: "Advanced",
          icon: <Layers className="w-6 h-6" />,
          color: "bg-violet-700",
        },
        {
          name: "TypeScript",
          expertise: "Expert",
          icon: <FileCode className="w-6 h-6" />,
          color: "bg-blue-600",
        },
      ],
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-400 to-purple-400",
      bgColor: "bg-blue-500/5",
      technologies: [
        {
          name: "Node.js",
          expertise: "Advanced",
          icon: <Terminal className="w-6 h-6" />,
          color: "bg-violet-600",
        },
        {
          name: "Express.js",
          expertise: "Advanced",
          icon: <Rocket className="w-6 h-6" />,
          color: "bg-blue-800",
        },
        {
          name: "Python",
          expertise: "Intermediate",
          icon: <Command className="w-6 h-6" />,
          color: "bg-violet-700",
        },
        {
          name: "REST APIs",
          expertise: "Expert",
          icon: <Network className="w-6 h-6" />,
          color: "bg-blue-600",
        },
      ],
    },
    {
      title: "Database Solutions",
      icon: <Database className="w-6 h-6" />,
      color: "from-violet-400 to-purple-400",
      bgColor: "bg-violet-500/10",
      technologies: [
        {
          name: "PostgreSQL",
          expertise: "Advanced",
          icon: <Database className="w-6 h-6" />,
          color: "bg-blue-700",
        },
        {
          name: "MySQL Workbench",
          expertise: "Advanced",
          icon: <WorkflowIcon className="w-6 h-6" />,
          color: "bg-blue-700",
        },
        {
          name: "MongoDB",
          expertise: "Intermediate",
          icon: <Layers className="w-6 h-6" />,
          color: "bg-violet-600",
        },
        {
          name: "Supabase",
          expertise: "Advanced",
          icon: <Zap className="w-6 h-6" />,
          color: "bg-blue-600",
        },
      ],
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-400",
      bgColor: "bg-indigo-500/5",
      technologies: [
        {
          name: "AWS",
          expertise: "Intermediate",
          icon: <Cloud className="w-6 h-6" />,
          color: "bg-indigo-600",
        },
        {
          name: "Vercel",
          expertise: "Expert",
          icon: <Rocket className="w-6 h-6" />,
          color: "bg-violet-700",
        },
        {
          name: "GitHub Actions",
          expertise: "Intermediate",
          icon: <Settings className="w-6 h-6" />,
          color: "bg-indigo-700",
        },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-400 to-purple-400",
      bgColor: "bg-blue-500/5",
      technologies: [
        {
          name: "React Native",
          expertise: "Advanced",
          icon: <Smartphone className="w-6 h-6" />,
          color: "bg-blue-600",
        },
        {
          name: "Java",
          expertise: "Advanced",
          icon: <FaJava className="w-10 h-10 text-red-500" />,
          color: "bg-white",
        },
      ],
    },
    {
      title: "Development Tools",
      icon: <Zap className="w-6 h-6" />,
      color: "from-violet-500 to-purple-400",
      bgColor: "bg-violet-500/10",
      technologies: [
        {
          name: "Git",
          expertise: "Expert",
          icon: <GitBranch className="w-6 h-6" />,
          color: "bg-indigo-700",
        },
        {
          name: "VS Code",
          expertise: "Expert",
          icon: <Terminal className="w-6 h-6" />,
          color: "bg-blue-700",
        },

        {
          name: "Jupyter Notebook",
          expertise: "Expert",
          icon: <NotebookIcon className="w-6 h-6" />,
          color: "bg-indigo-600",
        },
        {
          name: "Figma",
          expertise: "Intermediate",
          icon: <Palette className="w-6 h-6" />,
          color: "bg-violet-600",
        },
      ],
    },
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return "text-green-400";
      case "Advanced":
        return "text-blue-400";
      case "Intermediate":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  const getExpertiseStars = (expertise: string) => {
    const count = expertise === "Expert" ? 5 : expertise === "Advanced" ? 4 : 3;
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3 fill-current animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ));
  };

  return (
    <div className="min-h-screen w-full text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-sm"></div>
          </div>
        ))}

        {/* Interactive mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 mb-10">
        {/* Header Section with enhanced animations */}
        <div className="text-center mb-20 space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <p className="flex gap-2 items-center border text-md font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <Sparkles className="w-6 h-6 text-purple-400 animate-spin-slow" />
              <span>Tech Arsenal</span>
              <Brain className="w-6 h-6" />
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient">
            My <span className="text-purple">TechStack</span>
          </h1>

          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            Cutting-edge technologies and frameworks I use to craft exceptional
            digital experiences and build scalable, performant applications.
          </p>

          {/* Animated tech icons showcase */}
          <div
            className="flex justify-center space-x-4 mt-8 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            {[Code, Database, Cloud, Smartphone, Server, Zap].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-800/30 rounded-full border border-gray-700 animate-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25 animate-pulse-slow`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
              }`}
            >
              <div className="group-hover:rotate-12 transition-transform duration-300">
                {category.icon}
              </div>
              <span>{category.title}</span>
              {activeCategory === index && (
                <Eye className="w-4 h-4 animate-blink" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Active Category Display */}
        <div
          className={
            "rounded-3xl p-8 mb-16 border border-gray-800 backdrop-blur-sm shadow-2xl animate-slide-in"
          }
        >
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${techCategories[activeCategory].color} mb-6 shadow-xl animate-float hover:animate-spin-slow transition-all duration-300`}
            >
              {React.cloneElement(techCategories[activeCategory].icon, {
                className: "w-10 h-10 text-white",
              })}
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {techCategories[activeCategory].title}
            </h2>
          </div>

          {/* Enhanced Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[activeCategory].technologies.map(
              (tech, techIndex) => (
                <div
                  key={techIndex}
                  className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer animate-card-entrance ${
                    hoveredTech === `${activeCategory}-${techIndex}`
                      ? "shadow-2xl shadow-purple-500/20"
                      : ""
                  }`}
                  style={{ animationDelay: `${techIndex * 100}ms` }}
                  onMouseEnter={() =>
                    setHoveredTech(`${activeCategory}-${techIndex}`)
                  }
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {/* Enhanced Hover Gradient Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${techCategories[activeCategory].color} p-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  >
                    <div className="w-full h-full bg-gray-800 rounded-2xl"></div>
                  </div>

                  {/* Animated background particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    <div
                      className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    {/* Enhanced Tech Icon */}
                    <div
                      className={`w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <div className="group-hover:animate-pulse">
                        {tech.icon}
                      </div>
                    </div>

                    {/* Tech Name with animation */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {tech.name}
                    </h3>

                    {/* Enhanced Expertise Level */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-sm font-medium ${getExpertiseColor(
                          tech.expertise
                        )} group-hover:animate-pulse`}
                      >
                        {tech.expertise}
                      </span>
                      <div
                        className={`flex space-x-1 ${getExpertiseColor(
                          tech.expertise
                        )}`}
                      >
                        {getExpertiseStars(tech.expertise)}
                      </div>
                    </div>

                    {/* Enhanced animated decoration */}
                    <div
                      className={`h-1 bg-gradient-to-r ${techCategories[activeCategory].color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg`}
                    ></div>

                    {/* Progress indicator */}
                    <div className="mt-3 flex space-x-1">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:${techCategories[activeCategory].color} transition-all duration-500`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Enhanced Stats Dashboard */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <p className="flex gap-2 items-center border text-md font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                <Sparkles className="w-6 h-6 text-purple-400 animate-spin-slow" />
                <span>My Journey</span>
                <Rocket className="w-5 h-5" />
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </p>
            </div>
            <h2 className="text-3xl font-bold mb-4 ">
              My <span className="text-purple">Development</span> Journey
            </h2>
            <p className="text-gray-400">
              Key milestones in my technical evolution
            </p>
            <div className="flex justify-center mt-4">
              <Cpu className="w-8 h-8 text-purple-400 animate-spin-slow" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: "Technologies",
                value: "25+",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                description: "Languages & Frameworks",
              },
              {
                label: "Projects Built",
                value: "50+",
                icon: <GitBranch className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                description:
                  "Includes multiple mini projects & one major production app",
              },

              {
                label: "Experience",
                value: "Internship",
                icon: <Globe className="w-8 h-8" />,
                color: "from-purple-500 to-violet-500",
                description: "Hands-on internship & project experience",
              },

              {
                label: "Lines of Code",
                value: "100K+",
                icon: <Zap className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                description: "Written & Reviewed",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-stat-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                >
                  <div className="group-hover:animate-pulse">
                    {React.cloneElement(stat.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes card-entrance {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes stat-card {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.6);
          }
        }

        @keyframes cta-glow {
          0%,
          100% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.4);
          }
          50% {
            box-shadow: 0 0 50px rgba(147, 51, 234, 0.8);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        .animate-card-entrance {
          animation: card-entrance 0.6s ease-out forwards;
        }
        .animate-stat-card {
          animation: stat-card 0.8s ease-out forwards;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-gradient-text {
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 400% 400%;
          animation: gradient-x 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-cta-glow {
          animation: cta-glow 3s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 2s linear infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default TechStackPage;
