export const projects = [
  {
    id: "mosaic",
    title: "Mosaic",
    summary: "Block based document editor with realtime collaboration",
    tech: ["nextjs", "typescript", "appwrite", "openrouter", "realtime api", "yjs"],
    status: "ACTIVE",
    image: "",
    links: {
      live: "https://mosaic-two-xi.vercel.app/",
      repo: "https://github.com/raghavvvgaba/Mosaic"
    },
    description: "Mosaic is a real-time, block-based document editor built for seamless multi-user collaboration. Powered by Yjs CRDTs and Appwrite, it enables conflict-free editing with live cursors, instant synchronization, secure storage, rich content creation via BlockNote, and AI-assisted writing through OpenRouter."
  },
  {
    id: "healsync",
    title: "HealSync",
    summary: "A comprehensive digital health platform enabling patients to create, manage, and securely share complete health profiles with healthcare providers",
    tech: ["React", "tailwind", "firebase", "Gemini api"],
    status: "ACTIVE",
    image: "",
    links: {
      live: "https://heal-sync-psi.vercel.app/",
      repo: "https://github.com/raghavvvgaba/HealSync"
    },
    description: "HealSync is a full-stack Electronic Health Record (EHR) system designed with healthcare data security and access control at its core. It implements strict role-based permissions for patients and doctors, secure health data sharing, and protected AI-assisted medical guidance powered by Google Gemini. Built with React and Firebase, the platform ensures real-time data consistency, secure transmission, and a scalable architecture suitable for compliant healthcare workflows."
  },
  {
    id: "taskly",
    title: "Taskly",
    summary: "A modern task management application built with React Native and Expo, featuring real-time sync, user authentication, and beautiful UI",
    tech: ["react native", "expo", "typescript", "appwrite"],
    status: "IN_PROGRESS",
    image: "",
    links: {
      repo: "https://github.com/raghavvvgaba/taskly"
    },
    description: "Taskly is a mobile task management app built with React Native and Expo to help users stay organized and productive. It features secure authentication and real-time task syncing powered by Appwrite, along with progress-based insights, task statistics, and polished micro-interactions like haptics and smooth animations."
  }
];
