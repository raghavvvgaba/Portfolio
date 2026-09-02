import {
  DiReact,
  DiNodejs,
  DiPython,
  DiMongodb,
  DiGit
} from 'react-icons/di';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiFramer,
  SiExpress,
  SiFirebase,
  SiAppwrite,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiGithub,
  SiVercel,
  SiCplusplus,
  SiC
} from 'react-icons/si';
import {
  FaJava
} from 'react-icons/fa';
import zustandIconUrl from '../assets/zustand.svg';

const Zustand = () => <img src={zustandIconUrl} alt="Zustand" className="w-10 h-10" />;

const openRouterIcon = (
  <svg width="40" height="40" viewBox="0 0 401.4 293.7" role="img" aria-label="OpenRouter" fill="#C8FF00">
    <path d="M303.9475,17.19926c42.79734,0,77.48933,34.69327,77.48933,77.48933s-34.69199,77.48933-77.48933,77.48933l76.86166,76.86244c9.76367,9.76313,2.84903,26.45667-10.95697,26.45667h-220.88335c-71.32686,0-129.14889-57.82202-129.14889-129.14889S77.64197,17.19926,148.96884,17.19926h154.97866ZM148.96884,68.85881c-42.79607,0-77.48933,34.69327-77.48933,77.48933s34.69327,77.48933,77.48933,77.48933,77.48933-34.69327,77.48933-77.48933-34.69327-77.48933-77.48933-77.48933Z" />
  </svg>
);

export const skills = {
  frontend: [
    {
      name: "Next.js",
      icon: <SiNextdotjs color="#FFFFFF" />
    },
    {
      name: "React",
      icon: <DiReact color="#61DAFB" />
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178C6" />
    },
    {
      name: "JavaScript",
      icon: <SiJavascript color="#F7DF1E" />
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss color="#38BDF8" />
    },
    {
      name: "Framer Motion",
      icon: <SiFramer color="#0055FF" />
    },
    {
      name: "Zustand",
      icon: <Zustand />
    }
  ],
  backend: [
    {
      name: "Node.js",
      icon: <DiNodejs color="#339933" />
    },
    {
      name: "Express.js",
      icon: <SiExpress color="#FFFFFF" />
    },
    {
      name: "MongoDB",
      icon: <DiMongodb color="#47A248" />
    },
    {
      name: "Firebase",
      icon: <SiFirebase color="#FFCA28" />
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite color="#FD366E" />
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql color="#4169E1" />
    },
    {
      name: "Docker",
      icon: <SiDocker color="#2496ED" />
    },
    {
      name: "OpenRouter",
      icon: openRouterIcon
    },
    {
      name: "Redis",
      icon: <SiRedis color="#FF4438" />
    }
  ],
  programming: [
    {
      name: "Git",
      icon: <DiGit color="#F05032" />
    },
    {
      name: "GitHub",
      icon: <SiGithub color="#FFFFFF" />
    },
    {
      name: "Vercel",
      icon: <SiVercel color="#FFFFFF" />
    },
    {
      name: "C++",
      icon: <SiCplusplus color="#00599C" />
    },
    {
      name: "C",
      icon: <SiC color="#A8B9CC" />
    },
    {
      name: "Java",
      icon: <FaJava color="#007396" />
    },
    {
      name: "Python",
      icon: <DiPython color="#3776AB" />
    }
  ]
};
