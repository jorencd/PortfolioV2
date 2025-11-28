import sanhs1 from "../assets/images/projectphoto/login.webp";
import sanhs2 from "../assets/images/projectphoto/dashboard.webp";
import sanhs3 from "../assets/images/projectphoto/table.webp";

import interlux1 from "../assets/images/projectphoto/interlogin.webp";
import interlux2 from "../assets/images/projectphoto/landing.webp";
import interlux3 from "../assets/images/projectphoto/product.webp";

import portfolio1 from "../assets/images/projectphoto/portfolio1.webp";
import portfolio2 from "../assets/images/projectphoto/portfolio2.webp";

import hotel1 from "../assets/images/projectphoto/hotel1.png";
import hotel2 from "../assets/images/projectphoto/hotel2.png";

export const projects = [
  {
    images: [sanhs1, sanhs2, sanhs3],
    title: "Sanhs - Quality Control System",
    url: "https://qc-system.vercel.app/",
    description:
      "Sanhs is a comprehensive quality control system designed for manufacturing processes. It allows real-time monitoring of production lines, with detailed analytics and automated reports to optimize decision-making. The system helps businesses ensure product quality through rigorous checks and continuous improvement. The dashboard provides intuitive insights into production data, making it easier to identify bottlenecks and inefficiencies. Designed to integrate with various production systems, it ensures smoother workflow and better overall quality control.",
    technologies: ["React", "styled-components", "GraphQL"],
    tools: ["HygraphCMS", "Figma", "Vercel"],
    icon: ["material-icon-theme:react", "skill-icons:graphql-light"],
  },
  {
    images: [interlux3, interlux1, interlux2],
    title: "E-Commerce Website",
    url: "https://interllux.vercel.app/",
    description:
      "This e-commerce platform is built to provide a modern and user-friendly online shopping experience. The website features a robust product catalog, a secure shopping cart, and an easy-to-use checkout process. It allows users to browse and purchase products while providing store owners with the tools to manage their inventory and orders. The platform integrates secure payment gateways for smooth transactions and customer data protection. It is designed with scalability in mind, able to handle large volumes of traffic and data as the business grows.",
    technologies: ["PHP", "Bootstrap", "MySQL"],
    tools: ["Supabase", "Vercel", "Figma"],
    icon: ["material-icon-theme:react", "skill-icons:css"],
  },
  {
    images: [portfolio1, portfolio2],
    title: "Portfolio Website",
    url: "https://jorence-owms.vercel.app/",
    description:
      "This personal portfolio website highlights various projects, skills, and accomplishments. It was designed with a modern aesthetic, ensuring it looks great on both mobile and desktop devices. The site includes sections that showcase individual projects with interactive elements, providing a detailed view of each. It serves as a comprehensive representation of my technical expertise and creative abilities. Built with React and TailwindCSS, the site offers a smooth and responsive user experience, making it easy for visitors to navigate and explore my work.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    tools: ["Figma", "Vercel", "Git", "daisyUI"],
    icon: ["material-icon-theme:react", "logos:tailwindcss-icon"],
  },
  {
    images: [hotel1, hotel2],
    title: "Hotel Booking Website",
    url: "https://example.com/hotel",
    description:
      "The hotel booking system is designed to offer a seamless reservation experience for users. Customers can search for available rooms, select their preferred accommodations, and make secure bookings. The platform integrates with payment gateways for smooth transactions and sends confirmation details to users via email. Additionally, hotel management can easily track room availability, bookings, and customer details. The system is built to scale, ensuring it can handle high traffic during peak times while maintaining an efficient and secure user experience.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    tools: ["Git", "Supabase", "Figma"],
    icon: [
      "material-icon-theme:php-elephant",
      "material-icon-theme:javascript",
    ],
  },
];
