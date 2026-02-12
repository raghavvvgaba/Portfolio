export const projects = [
  {
    id: "mosaic",
    title: "Mosaic",
    summary: "Block based document editor with realtime collaboration",
    tech: ["nextjs", "typescript", "appwrite", "openrouter", "realtime api", "yjs"],
    status: "ACTIVE",
    image: "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BquaQfzwAyeZ4YP1CjKkQnIDplaxWVREF7O9d",
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
    image: "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BF1eLpcl6OMlxLPwF2tqAy7eJnTbCr3Bo9gI0",
    links: {
      live: "https://heal-sync-psi.vercel.app/",
      repo: "https://github.com/raghavvvgaba/HealSync"
    },
    description: "HealSync is a full-stack Electronic Health Record (EHR) system designed with healthcare data security and access control at its core. It implements strict role-based permissions for patients and doctors, secure health data sharing, and protected AI-assisted medical guidance powered by Google Gemini. Built with React and Firebase, the platform ensures real-time data consistency, secure transmission, and a scalable architecture suitable for compliant healthcare workflows."
  },
  {
    id: "diffscribe",
    title: "Diffscribe",
    summary: "AI-powered CLI that turns staged Git diffs into Conventional Commit messages with resilient model fallback.",
    tech: ["node.js", "typescript", "openrouter", "commander", "inquirer", "execa", "chalk", "clipboardy"],
    status: "ACTIVE",
    image: "",
    links: {
      repo: "https://github.com/raghavvvgaba/diffscribe",
      live: "https://www.npmjs.com/package/diffscribe"
    },
    description: "Diffscribe is a production-ready Node.js CLI tool that parses staged Git diffs and generates Conventional Commit-compliant messages using LLMs. It supports concise and structured output modes, primary and backup model fallback, robust Git process handling with large diff support, and a modular configuration system with validated API inputs and environment variable controls."
  }
];
