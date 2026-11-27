export const site = {
  name: "Hassan Ali",
  initials: "HA",
  title: "Sr. Software Engineer",
  email: "hali8629@gmail.com",
  phone: "+92 322 4767647",
  whatsapp: "https://wa.me/923224767647",
  linkedin: "https://linkedin.com/in/iamhassanali",
  location: "Lahore, Pakistan",
  resumeUrl: "/Hassan_Resume.pdf",
  heroLead:
    "I build scalable cross-platform mobile apps — from architecture and API integration to polished iOS and Android releases.",
  roles: [
    "Sr. Software Engineer",
    "Sr. React Native Developer",
    "Mobile Architect",
  ],
};

export const nav = [
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work" },
  { id: "process", label: "Process", href: "#process" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    code: "MOB-DEV",
    title: "Mobile Development",
    subtitle: "React Native apps for iOS and Android",
    body: "Cross-platform mobile applications with Expo and React Native CLI — reusable components, navigation, performance tuning, and production releases on both stores.",
    tools: [
      "React Native CLI",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Android",
      "iOS",
      "Java",
      "Kotlin",
    ],
  },
  {
    code: "FE-DEV",
    title: "Frontend Development",
    subtitle: "Typed React interfaces that ship",
    body: "Modern React front ends with TypeScript and JavaScript (ES6+), built around component-based architecture and maintainable UI systems.",
    tools: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Component Architecture",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    code: "INT-AI",
    title: "Integrations & AI",
    subtitle: "APIs, realtime, and voice experiences",
    body: "REST, GraphQL, and WebSocket integrations plus AI-powered realtime voice — audio streaming, synced playback, auth, and third-party SDKs end to end.",
    tools: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Authentication",
      "AI Integration",
      "Realtime Audio",
      "Firebase",
      "Firestore",
    ],
  },
] as const;

export const experience = [
  {
    rev: "04",
    date: "Now",
    range: "Nov 2025 – Present",
    role: "Sr. React Native Developer",
    company: "ZAPTA Technologies",
    location: "Lahore, Pakistan",
    notes:
      "Deliver cross-platform apps with React Native, Expo, and TypeScript. Own feature development, REST and third-party integrations, state management, and production releases. Contributed to Trudi’s AI-powered realtime voice chat with audio streaming and synced text playback.",
  },
  {
    rev: "03",
    date: "2023–25",
    range: "Dec 2023 – Oct 2025",
    role: "Sr. React Native Developer",
    company: "TxLabz",
    location: "Lahore, Pakistan",
    notes:
      "Led mobile development across blockchain, booking, and business apps. Acted as client contact, guided the team, and kept multi-project delivery on timeline while shipping complex React Native features and integrations.",
  },
  {
    rev: "02",
    date: "2022–23",
    range: "Dec 2022 – Dec 2023",
    role: "React Native Developer",
    company: "Viral Square",
    location: "Lahore, Pakistan",
    notes:
      "Worked with international clients across regions, balancing multiple projects and translating requirements into shipped mobile features with designers and backend teams.",
  },
  {
    rev: "01",
    date: "2021–22",
    range: "Jan 2021 – Nov 2022",
    role: "Android / React Native Developer",
    company: "Argon Tech Inc",
    location: "Lahore, Pakistan",
    notes:
      "Built native Android (Java, Kotlin) and React Native apps across projects — features, testing, and delivery through the full development lifecycle.",
  },
] as const;

export const education = {
  degree: "Bachelor's in Computer Science",
  school: "University of Gujrat",
  location: "Lahore, Pakistan",
  range: "Sep 2016 – Oct 2020",
};

export const projects = [
  {
    id: "01",
    name: "Driver Book",
    domain: "Internet of Things / Connected Devices",
    tags: ["Mobile", "IoT", "BLE"],
    blurb:
      "IoT mobile app connecting to external hardware over Bluetooth Low Energy with realtime device sync and background services.",
    problem:
      "Hardware devices need a reliable mobile bridge for BLE connectivity, realtime data, and backend sync.",
    role: "Developed end-to-end mobile functionality: device connectivity, data handling, API integration, and user-facing workflows.",
    architecture:
      "BLE device communication with realtime fetching, background services for ongoing data handling, and REST APIs for device-related backend exchange.",
    stack: ["React Native", "BLE", "REST APIs", "Background Services"],
    play: "Driver Book",
    diagram: {
      hub: "Mobile App",
      nodes: ["BLE Device", "Background Svc", "REST API", "Device Data"],
      caption: "DRIVER BOOK · IOT / BLE",
    },
  },
  {
    id: "02",
    name: "Zest Wallet",
    domain: "Blockchain / Web3 / DeFi / NFT",
    tags: ["Mobile", "Blockchain", "Web3"],
    blurb:
      "Full mobile crypto wallet — creation, send/receive, swaps, WalletConnect, and NFT marketplace with biometric security.",
    problem:
      "Users need a complete mobile wallet for multi-address transfers, dApp connections, swaps, and NFT trading.",
    role: "Independently designed and developed complete wallet functionality from UI through blockchain integration.",
    architecture:
      "Wallet create/export, multi-address send/receive, smart-contract interactions, WalletConnect, token swaps, NFT listing/buy/sell, and biometric auth.",
    stack: [
      "React Native",
      "Smart Contracts",
      "WalletConnect",
      "Biometrics",
    ],
    play: "Zest Wallet",
    diagram: {
      hub: "Wallet Core",
      nodes: ["Blockchain", "WalletConnect", "NFT Market", "Biometrics"],
      caption: "ZEST WALLET · WEB3",
    },
  },
  {
    id: "03",
    name: "Palmz",
    domain: "Food Delivery / Travel / Booking",
    tags: ["Mobile", "Firebase", "GraphQL"],
    blurb:
      "Food ordering and activity booking app with GraphQL boat booking, Firestore sync, Cloud Functions, and FCM notifications.",
    problem:
      "Users need restaurant discovery, orders, activity booking, and travel services in one cross-platform experience.",
    role: "Built discovery, ordering, booking flows, GraphQL integrations, Firebase backend pieces, and UI/UX improvements.",
    architecture:
      "Restaurant and activity booking, third-party fast-boat booking via GraphQL, Firestore for web/mobile sync, Cloud Functions, and FCM notifications.",
    stack: [
      "React Native",
      "GraphQL",
      "Firestore",
      "Cloud Functions",
      "FCM",
    ],
    play: "Palmz",
    diagram: {
      hub: "Palmz App",
      nodes: ["Firestore", "GraphQL", "Cloud Fn", "FCM"],
      caption: "PALMZ · BOOKING",
    },
  },
  {
    id: "04",
    name: "Rivalog",
    domain: "Logistics / Fleet Management",
    tags: ["Mobile", "Tracking", "Logistics"],
    blurb:
      "Logistics and dispatch tracking with truck location sync, multi-merchant fleet management, and payment/invoice modules.",
    problem:
      "Merchants need continuous truck visibility, fleet organization, and payment tooling in one mobile product.",
    role: "Developed tracking, background location sync, fleet modules, payment/invoice features, and API integration.",
    architecture:
      "Background location synchronization, merchant-specific truck management, payment and invoice workflows, and backend API sync for vehicle and payment data.",
    stack: ["React Native", "Location Sync", "REST APIs", "Fleet Modules"],
    play: "Rivalog",
    diagram: {
      hub: "Rivalog App",
      nodes: ["GPS Sync", "Fleet Mgmt", "Payments", "Backend API"],
      caption: "RIVALOG · LOGISTICS",
    },
  },
  {
    id: "05",
    name: "SGC Wallet",
    domain: "Blockchain / Digital Assets",
    tags: ["Mobile", "Ethereum", "Web3"],
    blurb:
      "Ethereum wallet for create/import, transfers, balances, and transaction history with backend-supported workflows.",
    problem:
      "Users need an intuitive mobile experience for Ethereum wallets and digital asset transfers.",
    role: "Built wallet create/import, transfers, balance management, transaction history, and API-backed workflows.",
    architecture:
      "Ethereum connectivity for wallet info and transactions, balance display, history review, and backend APIs for wallet workflows.",
    stack: ["React Native", "Ethereum", "REST APIs"],
    play: "SGC Wallet",
    diagram: {
      hub: "SGC Wallet",
      nodes: ["Ethereum", "Transfers", "Balances", "Backend API"],
      caption: "SGC WALLET · ETHEREUM",
    },
  },
  {
    id: "06",
    name: "Acqua Bottle",
    domain: "IoT / Health & Fitness",
    tags: ["Mobile", "IoT", "BLE"],
    blurb:
      "Smart water bottle companion with BLE data, hydration reports, streaks, and intake reminder notifications.",
    problem:
      "Users need realtime hydration tracking tied to a physical smart bottle.",
    role: "Integrated BLE bottle connectivity, realtime consumption data, reports/streaks, and reminder notifications.",
    architecture:
      "BLE integration with the smart bottle, realtime retrieval of water intake, hydration reports and streaks, plus mobile reminder notifications.",
    stack: ["React Native", "BLE", "Notifications"],
    play: null,
    diagram: {
      hub: "Acqua App",
      nodes: ["Smart Bottle", "BLE Link", "Reports", "Reminders"],
      caption: "ACQUA BOTTLE · HEALTH IOT",
    },
  },
  {
    id: "07",
    name: "Maweidi",
    domain: "Healthcare / Medical Services",
    tags: ["Mobile", "Healthcare", "Payments"],
    blurb:
      "Healthcare booking app covering doctors, medicine orders, lab tests, family medical tree, history, and uPayments.",
    problem:
      "Patients need a single app for discovery, booking, medicine orders, lab tests, and family health records.",
    role: "Independently developed major modules across the full healthcare service workflow, including payments.",
    architecture:
      "Doctor discovery and appointments, medicine ordering, lab booking, family medical tree, medical history management, and uPayments integration.",
    stack: ["React Native", "uPayments", "Healthcare Modules"],
    play: null,
    diagram: {
      hub: "Maweidi App",
      nodes: ["Doctors", "Pharmacy", "Lab Tests", "uPayments"],
      caption: "MAWEIDI · HEALTHCARE",
    },
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "Clarify business requirements, UI/UX intent, and constraints with clients and cross-functional teams before implementation starts.",
    items: ["Requirements & priorities", "Scope clarity", "Technical risks"],
  },
  {
    n: "02",
    title: "Architect & Integrate",
    body: "Shape modular architecture, reusable components, navigation, and the API or third-party integrations the product depends on.",
    items: ["Component architecture", "API & SDK plans", "State & data flow"],
  },
  {
    n: "03",
    title: "Build & Ship",
    body: "Implement features, optimize performance across iOS and Android, troubleshoot issues, and own production releases.",
    items: ["Production app", "Performance & QA", "Store / release handoff"],
  },
] as const;

export const techStack = [
  "React Native",
  "Expo",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Zustand",
  "TanStack Query",
  "Expo Router",
  "REST APIs",
  "GraphQL",
  "WebSockets",
  "Firebase",
  "Firestore",
  "SQLite",
  "Java",
  "Kotlin",
  "Blockchain",
  "Smart Contracts",
  "IoT",
  "BLE",
] as const;

export const about = {
  sectionLabel: "SERVICES",
  heading: "What I do",
  body: `Senior Software Engineer specializing in cross-platform mobile development with 5+ years building scalable, high-performance apps using React Native, React, TypeScript, and JavaScript. Experienced designing architectures, integrating REST APIs, shipping complex features, and delivering end-to-end iOS and Android solutions — including Expo, AI-powered integrations, and realtime voice experiences.`,
};

export const heroDiagrams = [
  {
    fig: "01",
    title: "TRUDI · AI VOICE CHAT",
    hub: "Mobile App",
    nodes: [
      { id: "a", label: "Audio Stream", sub: "realtime voice" },
      { id: "b", label: "Backend", sub: "AI responses" },
      { id: "c", label: "Text Sync", sub: "live captions" },
      { id: "d", label: "Playback", sub: "synced audio" },
    ],
  },
  {
    fig: "02",
    title: "DRIVER BOOK · BLE IOT",
    hub: "RN App",
    nodes: [
      { id: "a", label: "BLE Device", sub: "hardware link" },
      { id: "b", label: "Background", sub: "data services" },
      { id: "c", label: "REST API", sub: "device sync" },
      { id: "d", label: "UI Flows", sub: "workflows" },
    ],
  },
  {
    fig: "03",
    title: "ZEST WALLET · WEB3",
    hub: "Wallet Core",
    nodes: [
      { id: "a", label: "Blockchain", sub: "contracts" },
      { id: "b", label: "WalletConnect", sub: "dApps" },
      { id: "c", label: "NFT Market", sub: "list / buy" },
      { id: "d", label: "Biometrics", sub: "secure access" },
    ],
  },
] as const;
