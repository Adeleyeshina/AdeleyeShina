import Nadii from "../assets/images/nadii.png"
import Castle from "../assets/images/castle.png"
import Castledbs from "../assets/images/castle-dbs.png"
// import Barbing from "../assets/images/barbing.png"
// import RedStore from "../assets/images/redstore.png"
// import Gym from "../assets/images/gym.png"
import Earnbnb from "../assets/images/earnbnb.png"
import Health from "../assets/images/healthnest.png"
import Truehealth from "../assets/images/truehealth.png"
import MicoSupply from "../assets/images/micosupply.png"
import FitLife from "../assets/images/fitlife.png"
import Amfh from "../assets/images/amfh.png"
import CentralPulse from "../assets/images/centralpulse.png"
import Lightwaves from "../assets/images/lightwaves.png"
import Shiltech from "../assets/images/shiltech.png"
import TbanjApartment from "../assets/images/tbanjapartment.png"
import TbanjMarket from "../assets/images/tbanj-market-place.png"

export const navLink = [
  {
    key: 1,
    title: 'Home',
    path: "/"
  },
  {
    key: 2,
    title: 'About',
    path: "/about"
  },
  {
    key: 3,
    title: 'Projects',
    path: "/projects"
  },
  {
    key: 4,
    title: 'Skills',
    path: "/skills"
  },
  {
    key: 5,
    title: 'Contact',
    path: "/contact"
  },
]

export const projects = [
  {
    title: "NadiiTech Engineering",
    description:
      "Nadii Technology is an engineering website built with the MERN stack that allows users to book engineering services and shop through a mini e-commerce system with features like product listings, cart, and checkout.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Paystack", "TailwindCSS", "Redis", "Paystack", "Nodemailer"],
    link: "https://nadiitechengineering.com/",
    image: Nadii,
  },
  {
    title: "Aktiiv Mind Fashion",
    description:
      "Aktiiv Mind is a full-stack e-commerce fashion store built with the MERN stack that allows users to browse and shop fashion products, add items to cart, and complete secure payments through Paystack integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Paystack", "TailwindCSS", "Zustand", "Paystack", "Cloudinary"],
    link: "https://amfh.shop/",
    image: Amfh
  },
  {
    title: "CentralPulse News",
    description:
      "CentralPulse is a news website built with WordPress and TagDiv Composer that delivers the latest news, articles, and updates across various categories such as politics, business, entertainment, and technology with a clean, modern layout, categorized content sections, and fully responsive design for all devices.",
    tech: ["Php", "Wordpress", "TagDiv Composer"],
    link: "https://centralpulse.ng/",
    image: CentralPulse
  },
  {
    title: "Tbanj MarktetPlace",
    description:
      "Tbanj MarketPlace is a real estate platform built with Next.js and MongoDB that allows users to list, search, and explore properties including lands, houses, and commercial spaces with detailed information, high-quality images, pricing, location data, agent profiles, saved favorites, and advanced filter options.",
    tech: ["Next Js", "MongoDB", "Typescript", "TailwindCSS", "Paystack", "Cloudinary"],
    link: "https://tbanj-ap.vercel.app/",
    image: TbanjMarket
  },
  {
    title: "Mico Supply",
    description: "Mico Supply is a construction materials e-commerce platform built with Next.js, featuring a user-facing storefront for browsing and purchasing building supplies, as well as an admin panel for managing products, categories, orders, and inventory, with support for delivery and contractor-focused services.",
    tech: ["Next Js", "MongoDB", "Paystack", "TailwindCSS", "Shadcn ui", "Paystack", "Nodemailer", "Zustand", "TypeScript"],
    link: "https://micosupply.com/",
    image: MicoSupply,
  },
  {
    title: "Tbanj Apartment",
    description:
      "Tbanj Apartment is a shortlet rental platform built with React and TypeScript that showcases available properties including apartments, studios, and shared spaces with detailed information, high-quality images, pricing, availability status, amenities list, nearby attractions, guest reviews, saved favorites, and easy booking options.",
    tech: ["React", "TailwindCSS", "Typescript", "Recharts", "React Router Dom"],
    link: "https://tbanjapartment.com/",
    image : TbanjApartment
  },
  {
    title: "FitLife",
    description: "FitLife Silk is a fitness and wellness web application built with Next.js that provides users with personalized workout plans, health tracking, and fitness resources to help them achieve their goals, featuring smooth navigation and responsive design for an engaging user experience.",
    tech: ["React", "TailwindCSS", "Typescript", "Recharts", "React Router Dom"],
    link: "https://fitlife-silk.vercel.app/",
    image: FitLife,
  },
  {
    title : "Shiltech Engineering",
    description:
      "Shiltech is a company website built with HTML, CSS, and JavaScript that showcases their engineering services, project portfolio, team information, and company values with a working contact form for client inquiries and service requests.",
    tech: ["Html", "Css", "Javascript", "Nodemailer"],
    link: "https://www.shiltech.org/",
    image : Shiltech
  },
  {
    title : "The Lightwaves Construction",
    description:
      "The Lightwaves Construction is a company website built with HTML, CSS, and JavaScript that showcases their construction services, project portfolio, team information, and company values with a working contact form for client inquiries and service requests.",
    tech: ["Html", "Css", "Javascript", "Nodemailer"],
    link: "https://lightwavesconstruction.netlify.app/",
    image : Lightwaves
  },
  {
    title: "CastleLuxury Shortlet",
    description:
      "CastleLuxury Shortlet is a WordPress website built with Elementor that allows users to browse and search different shortlet apartments, view details, and make bookings seamlessly.",
    tech: ["Wordpress", "Elementor"],
    link: "https://castleluxuryshortlet.ng/",
    image: Castle,
  },
  // {
  //   title: "Red Ecom Store",
  //   description:
  //     "A responsive portfolio website showcasing projects and skills, with smooth animations and dark mode support.",
  //   tech: ["React", "TailwindCSS", "GSAP"],
  //   link: "https://red-ecom-store.netlify.app/",
  //   image: RedStore,
  // },
  {
    title: "Truehealthpro",
    description: "TrueHealthPro is a WordPress website designed to provide a professional online presence for a telemedicine brand, featuring a clean layout, responsive design, and easy content management.",
    tech: ["Wordpress", "Elementor"],
    link: "https://truehealthpro.wasmer.app/",
    image: Truehealth,
  },
  {
    title: "Health Nest",
    description: "Health Nest is a WordPress website designed to showcase health-related services and resources, featuring a responsive layout, user-friendly navigation, and modern design",
    tech: ["Wordpress", "Elementor"],
    link: "https://healthnesty.wasmer.app/",
    image: Health,
  },
  //   {
  //   title: "Gym Website",
  //   description:
  //     "A responsive portfolio website showcasing projects and skills, with smooth animations and dark mode support.",
  //   tech: ["React", "TailwindCSS", "GSAP"],
  //   link: "https://gym-web-fawn-five.vercel.app/",
  //   image: Gym,
  // },
  {
    title: "Castle ",
    description: "Agent DBMS – A simple database management system built with the MERN stack to store and manage agent data, featuring agent registration, data validation, and CRUD operations with a secure backend.",
    tech: ["React", "TailwindCSS", "Express Js", "MongoDB", "TypeScript", "Node.js"],
    link: "https://castle-luxury.vercel.app/",
    image: Castledbs,
  },
  {
    title: "EarnBnB",
    description: "EarnBnB is a platform for listing shortlet apartments that connects agents, hosts, and guests, enabling listings, search, bookings, and easy communication.",
    tech: ["Wordpress", "Elementor"],
    link: "https://earnbnb.ng/",
    image: Earnbnb,
  },
  // {
  //   title: "Barbing Website",
  //   description:
  //     "A responsive portfolio website showcasing projects and skills, with smooth animations and dark mode support.",
  //   tech: ["React", "TailwindCSS", "GSAP"],
  //   link: "https://barbing-web.netlify.app/",
  //   image: Barbing,
  // },
];

export const experiences = [
  {
    title: "Frontend Developer - Our Property NG",
    desc: "Built responsive and user-friendly frontend interfaces for a real estate platform, focusing on property listings, search functionality, and seamless user experience.",
  },
  {
    title: "WordPress Developer - Regia Digital Agency",
    desc: "Developed and customized WordPress websites for clients, creating responsive designs, integrating plugins, and optimizing site performance.",
  },
  {
    title: "Developer - Castle Cluster Limited",
    desc: "Developed and maintained client websites, optimizing functionality, ensuring responsiveness, and implementing new features to enhance user experience.",
  },
  {
    title: "Freelance Developer",
    desc: "Built websites, mobile apps, and Shopify stores for clients worldwide, delivering responsive and modern solutions.",
  },
  {
    title: "Intern - Mode3 Tech",
    desc: "Gained hands-on experience in web and mobile application development, contributing to real-world projects and learning professional development workflows.",
  },
];




