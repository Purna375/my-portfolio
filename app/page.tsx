"use client";

import dynamic from 'next/dynamic';
import { navItems } from "@/data";

// Dynamic imports for all components
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
});

const Grid = dynamic(() => import('@/components/Grid'), { 
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: false,
});

const Clients = dynamic(() => import('@/components/Clients'), { 
  ssr: false,
});

const Approach = dynamic(() => import('@/components/Approach'), { 
  ssr: false,
});

const Experience = dynamic(() => import('@/components/Experience'), { 
  ssr: false,
});

const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { 
  ssr: false,
});

const FloatingNav = dynamic(() => import('@/components/ui/FloatingNavbar').then(mod => ({ default: mod.FloatingNav })), { 
  ssr: false,
});

const TechStackPage = dynamic(() => import('@/components/TechStack'), { 
  ssr: false,
});

const Home = () => {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechStackPage />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;