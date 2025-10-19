import bgfullstack from "../assets/servicebg/fullstack.jpg";
import bgwevdev from "../assets/servicebg/web_dev.jpg";
import bgwebdsign from "../assets/servicebg/web_design.jpg";
import bgdigiart from "../assets/servicebg/digi_art.jpg";
import bggraphic from "../assets/servicebg/graphic_dsign.jpg";

export const services = [
  {
    images: [bgwevdev],
    title: "Web Development",
    description: "Create immersive web-based games with modern technologies, tailored to your unique creative vision.",
    icon: "fluent:developer-board-16-regular" // Web Development Icon
  },
  {
    images: [bgfullstack],
    title: "Full-Stack Web Development",
    description: "Building responsive and dynamic websites from front-end to back-end, ensuring scalability and smooth performance.",
    icon: "mdi:web" // Full-Stack Web Development Icon
  },
  {
    images: [bgwebdsign],
    title: "Custom Website Design",
    description: "Design beautiful, user-friendly websites with a focus on intuitive UI/UX, enhancing both functionality and aesthetics.",
    icon: "mdi:format-paint" // Website Design Icon
  },
  {
    images: [bgdigiart],
    title: "Digital Art & Portrait Drawing",
    description: "Offering professional portrait drawings and paintings.",
    icon: "mdi:palette" // Art & Drawing Icon
  },
  {
    images: [bggraphic],
    title: "Graphic Design for Branding ",
    description: "Providing graphic design services for logos, branding, social media graphics, and promotional materials.",
    icon: "mdi:design" // Branding & Graphic Design Icon
  },
];
