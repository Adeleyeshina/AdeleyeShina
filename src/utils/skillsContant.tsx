
import { SiTailwindcss, SiJavascript, SiTypescript, SiShopify, SiWordpress, SiWix, SiFigma, SiExpress, SiMongodb, SiExpo, SiHtml5, SiJquery, SiBootstrap, SiCss3, SiPostman } from "react-icons/si";
import { FaCode,  FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import type { ReactNode } from "react";
import RedisIcon from '../assets/images/redis-logo-svgrepo-com.svg'
import ZustandIcon from '../assets/images/zustand.jpeg'
import ReactQueryIcon from '../assets/images/react-query.png'
import cloudinaryIcon from '../assets/images/cloudinary.png'
import GsapIcon from '../assets/images/gsap.png'

export interface Skill {
  key: string;
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  icon: ReactNode;
  color: string;
}

export const skills = [
  // Backend
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Express.js", category: "Backend", icon: <SiExpress className="text-gray-700 text-5xl" /> },
  { name: "MongoDB", category: "Backend", icon: <SiMongodb className="text-green-700 text-5xl" /> },
  { name: "Redis", category: "Backend", icon: <img src={RedisIcon} className="text-red-500 w-[3rem]" /> }, 
    { name: "TypeScript", category: "Backend", icon: <SiTypescript className="text-blue-600 text-5xl" /> },

  // Frontend
  { name: "React", category: "Frontend", icon: <FaReact className="text-sky-400 text-5xl" /> },
  { name: "React Native", category: "Frontend", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Expo", category: "Frontend", icon: <SiExpo className="text-primary text-5xl" /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
  { name: "TailwindCSS", category: "Frontend", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { name: "HTML5", category: "Frontend", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", category: "Frontend", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
  { name: "GSAP", category: "Frontend", icon: <img src={GsapIcon} className="h-[3rem]" /> },
  { name: "JavScript", category: "Frontend", icon: <SiJavascript className="text-yellow-400  text-5xl" /> },
  { name: "Bootstrap", category: "Frontend", icon: <SiBootstrap className="text-purple-500 text-5xl" /> },
  { name: "jQuery", category: "Frontend", icon: <SiJquery className="text-blue-600 text-5xl" /> },

  // Tools
  { name: "VS Code", category: "Tools", icon: <FaCode  className="text-blue-500" /> },
  { name: "Figma", category: "Tools", icon: <SiFigma className="text-pink-500" /> },
  { name: "Postman", category: "Tools", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git & GitHub", category: "Tools", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "Zustand State Management", category: "Tools", icon : <img src={ZustandIcon} className="h-[3rem]"/>},
  { name: "Tanstack Query (React Query)", category: "Tools", icon : <img src={ReactQueryIcon} className="h-[3rem]"/> },
  { name: "Cloudinary", category: "Tools", icon: <img src={cloudinaryIcon} className="text-purple-500 text-5xl h-[3rem]" /> },
  // CMS / Platforms
  { name: "WordPress", category: "CMS", icon: <SiWordpress className="text-blue-700 text-5xl" /> },
  { name: "Shopify", category: "CMS", icon: <SiShopify className="text-green-600 text-5xl" /> },
  { name: "Wix", category: "CMS", icon: <SiWix  className="text-[#0C6EFC] "/> },
];

