import { hero1, hero2, hero3 } from "../assets/images/hero";

//header section data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

//hero section data
export const data = [
  {
    id: 1,
    colorDeep: "#304e70",
    colorLite: "#d3dce0",
    mainText: "Skill Development",
    subText:
      "A structured, project-based learning path that focuses on industry-relevant skills like web development, data science, or cybersecurity. It often includes hands-on exercises, real-world projects, and up-to-date technologies to ensure learners are job-ready.",
    shadow: "0px 10px 20px rgba(78, 112, 149, 0.8)",
    mobileShadow: "0px 5px 20px rgba(78, 112, 149, 0.8)",
    img: hero1,
  },
  {
    id: 2,
    colorDeep: "#35553f",
    colorLite: "#dcdfc0",
    mainText: "Mentorship & Support",
    subText:
      "Access to experienced instructors, mentors, or community support helps students overcome roadblocks, get personalized feedback, and stay motivated. This can be through live sessions, forums, or 1-on-1 check-ins.",
    shadow: "0px 10px 20px rgba(130, 134, 99, 0.8)",
    mobileShadow: "0px 5px 20px rgba(130, 134, 99, 0.8)",
    img: hero2,
  },
  {
    id: 3,
    colorDeep: "#431e1e",
    colorLite: "#e3d2c2",
    mainText: "Career Preparation",
    subText:
      "Guidance on building a portfolio, writing a tech resume, preparing for interviews, and job placement assistance. Many programs offer mock interviews, career coaching, and connections with hiring partners.",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: hero3,
  },
];
