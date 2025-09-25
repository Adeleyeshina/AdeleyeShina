import { FaCode, FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { SiWordpress, SiShopify, SiWix } from "react-icons/si"; // add SiWix
import type { ReactNode } from "react";

export interface Service {
  key: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

export const services: Service[] = [
  {
    key: "web-dev",
    title: "Web Development",
    desc: "Building modern, responsive websites with React, TypeScript, and TailwindCSS.",
    icon: <FaCode className="text-brand text-5xl" />,
  },
  {
    key: "mobile-dev",
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with React Native and Expo.",
    icon: <FaMobileAlt className="text-brand text-5xl" />,
  },
  {
    key: "ecommerce",
    title: "E-commerce Solutions",
    desc: "Custom online stores with Shopify or full-stack solutions with secure payments like Paystack.",
    icon: <FaShoppingCart className="text-brand text-5xl" />,
  },
  {
    key: "wordpress",
    title: "WordPress Development",
    desc: "Professional WordPress websites tailored for businesses and blogs.",
    icon: <SiWordpress className="text-blue-600 text-5xl" />,
  },
  {
    key: "shopify",
    title: "Shopify Stores",
    desc: "High-converting Shopify stores with custom themes and seamless product management.",
    icon: <SiShopify className="text-green-600 text-5xl" />,
  },
  {
    key: "wix",
    title: "Wix Development",
    desc: "Custom Wix websites for businesses and personal projects with easy management.",
    icon: <SiWix className="text-purple-600 text-5xl" />, // Wix icon
  },
];
