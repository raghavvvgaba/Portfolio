export const projects = [
  {
    id: "mosaic",
    title: "Mosaic",
    summary: "Block-based note editor with AI-assisted writing",
    tech: ["nextjs", "typescript", "zustand", "swr", "appwrite", "openrouter"],
    status: "ACTIVE",
    image: "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BquaQfzwAyeZ4YP1CjKkQnIDplaxWVREF7O9d",
    links: {
      live: "https://mosaic-two-xi.vercel.app/",
      repo: "https://github.com/raghavvvgaba/Mosaic"
    },
    description: "Mosaic is a real-time, block-based document editor built for seamless multi-user collaboration. Powered by Yjs CRDTs and Appwrite, it enables conflict-free editing with live cursors, instant synchronization, secure storage, rich content creation via BlockNote, and AI-assisted writing through OpenRouter."
  },
  {
    id: "chess",
    title: "Chess",
    summary: "Real-time multiplayer chess platform with server-authoritative architecture and matchmaking",
    tech: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "Redis", "PostgreSQL", "Better Auth"],
    status: "ACTIVE",
    image: "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4B2tpte4USUlZdy5JicOAWoHG73bVCwurEm8IY",
    links: {
      repo: "https://github.com/raghavvvgaba/chess",
      live: "https://chess.raghavgaba.me/"
    },
    description: "A production-ready real-time chess platform using server-authoritative architecture for validated moves and consistent game state. Features Redis for in-memory gameplay, PostgreSQL for durability, async flusher with retry-backoff pipeline, robust matchmaking with queue orchestration, private room codes, TTL-based lifecycle management, race-condition-safe validation, authentication, REST APIs, analytics dashboard, social/friend systems, and bot integration."
  },
  {
    id: "healsync",
    title: "HealSync",
    summary: "A comprehensive digital health platform enabling patients to create, manage, and securely share complete health profiles with healthcare providers",
    tech: ["React", "tailwind", "firebase", "Gemini api"],
    status: "ACTIVE",
    image: "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BjSmL0cuy1qRHxFCPGtoarn52fVINs8EKhzuS",
    imageZoom: 1.05,
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
