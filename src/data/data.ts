import { hero1, hero2, hero3 } from "../assets/images/hero";
import { coding1, coding2, coding3 } from "../assets/images/about";
import { FaCheck } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

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

//about section list
export const listItems = [
  {
    id: 1,
    checkColor: "#304e70",
    linkColor: "#d3dce0",
    icon: FaCheck,
    iconLink: LiaLongArrowAltRightSolid,
    linkText: "Learn More",
    mainText: "We are providing the best digital online courses",
    subText: [
      "🎯 Industry-Relevant Curriculum – Courses focus on real-world skills that employers actually look for.",

      "🛠️ Hands-On Projects – Learn by building, not just watching — apply your skills immediately.",

      "💡 Expert-Led Instruction – Learn from professionals with real experience in tech, design, and business.",

      "📱 Flexible Online Access – Study anytime, anywhere — perfect for busy schedules.",

      "🚀 Career-Ready Skills – From beginner to advanced, each course moves you closer to your goals.",

      "🧠 Engaging, Bite-Sized Content – Learn faster with well-structured lessons and interactive exercises.",

      "🔁 Self-Paced or Guided Paths – Choose the learning style that suits you best.",

      "🧑‍💻 Built for Modern Learners – Learn using tools and platforms used by today’s top professionals.",
    ],
    img: coding1,
  },
  {
    id: 2,
    checkColor: "#35553f",
    linkColor: "#dcdfc0",
    icon: FaCheck,
    iconLink: LiaLongArrowAltRightSolid,
    linkText: "Register Now",
    mainText: "Popular categories for learning",
    subText: [
      "💻 Code from Day One – Start writing real code with hands-on practice using JavaScript and Python.",

      "🌐 Master Web Development – Build stunning websites and interactive apps using modern tools and frameworks.",

      "📱 Create Real Apps – Learn how to design, develop, and deploy mobile and web applications.",

      "☁️ Explore the Cloud – Get foundational skills in cloud platforms like AWS, Azure, or Google Cloud.",

      "🧠 Foundations That Stick – Understand core IT concepts like networking, databases, and security.",

      "🔧 Tools of the Trade – Work with real developer tools like Git, VS Code, and APIs.",

      "🚀 From Beginner to Builder – Whether you’re starting fresh or leveling up, there’s a path for you.",

      "🎓 Project-Based Learning – Build a portfolio of real-world projects that showcase your skills.",
    ],
    img: coding2,
  },
  {
    id: 3,
    checkColor: "#431e1e",
    linkColor: "#e3d2c2",
    icon: FaCheck,
    iconLink: LiaLongArrowAltRightSolid,
    linkText: "Contact Us",
    mainText: "Learn with an expert",
    subText: [
      "🎓 Learn from the Pros – Get insights and techniques that only come from real-world experience.",

      "💬 Ask, Learn, Repeat – Get your questions answered directly by someone who’s been there and done it.",

      "🧠 Beyond the Textbook – Learn practical tips, tools, and shortcuts they don’t teach in traditional courses.",

      "🧭 Guided Learning – Avoid common mistakes with mentorship from someone who knows the path.",

      "🔍 Real-World Relevance – Understand how concepts apply in actual projects, teams, and job roles.",

      "🚀 Accelerate Your Growth – Move faster and more confidently with expert feedback and direction.",

      "🤝 Mentorship That Matters – Build confidence through personal guidance, not just prerecorded lessons.",

      "📈 Learn What Works – Tap into proven strategies that professionals use every day in their careers.",
    ],
    img: coding3,
  },
];
