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
  SiGithub,
  SiVercel,
  SiCplusplus,
  SiC
} from 'react-icons/si';
import {
  FaJava
} from 'react-icons/fa';

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
      icon: "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BH6FazN8sizyboElxDVRUrNOI4cWwq9aZfGjd"
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