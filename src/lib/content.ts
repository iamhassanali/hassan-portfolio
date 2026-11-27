export const site = {
  name: "Hassan Ali",
  initials: "HA",
  title: "Senior Software Engineer",
  email: "hali8629@gmail.com",
  phone: "+92 322 4767647",
  whatsapp: "https://wa.me/923224767647",
  linkedin: "https://linkedin.com/in/iamhassanali",
  location: "Lahore, Pakistan",
  resumeUrl: "/Hassan_Resume.pdf",
  heroLead:
    "I work inside your business, find the real problem, and ship the system that solves it — from architecture to production.",
  roles: [
    "Senior Software Engineer",
    "Forward Deployed Engineer",
    "System Architect",
  ],
};

export const nav = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const about = {
  heading: "About",
  body: `Senior Software Engineer with 6+ years building scalable, high-performance cross-platform apps. I specialize in React Native, Expo, TypeScript, and React — owning architecture, API integrations, complex features, and production releases on iOS and Android, including AI-powered realtime voice experiences.`,
};

export const experience = [
  {
    range: "Nov 2025 – Present",
    role: "Senior React Native Developer",
    company: "ZAPTA Technologies",
    location: "Lahore, Pakistan",
    bullets: [
      "Ship cross-platform apps with React Native, Expo, and TypeScript.",
      "Own feature development, REST and third-party integrations, state management, and production releases.",
      "Contributed to Trudi’s AI-powered realtime voice chat with audio streaming and synced text playback.",
    ],
  },
  {
    range: "Dec 2023 – Oct 2025",
    role: "Lead React Native Developer",
    company: "TxLabz",
    location: "Lahore, Pakistan",
    bullets: [
      "Led mobile development across blockchain, booking, and business apps.",
      "Acted as client contact and guided the team while keeping multi-project delivery on timeline.",
      "Shipped complex React Native features and third-party integrations end to end.",
    ],
  },
  {
    range: "Dec 2022 – Dec 2023",
    role: "React Native Developer",
    company: "Viral Square",
    location: "Lahore, Pakistan",
    bullets: [
      "Worked with international clients across regions on concurrent mobile projects.",
      "Translated requirements into shipped features with designers and backend teams.",
    ],
  },
  {
    range: "Jan 2021 – Nov 2022",
    role: "Android / React Native Developer",
    company: "Argon Tech Inc",
    location: "Lahore, Pakistan",
    bullets: [
      "Built native Android (Java, Kotlin) and React Native apps across projects.",
      "Owned features, testing, and delivery through the full development lifecycle.",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor's in Computer Science",
  school: "University of Gujrat",
  location: "Lahore, Pakistan",
  range: "Sep 2016 – Oct 2020",
};

export const skillGroups = [
  {
    label: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "Android",
      "iOS",
      "Java",
      "Kotlin",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    label: "Integrations",
    items: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Firebase",
      "Firestore",
      "AI / Realtime Voice",
    ],
  },
  {
    label: "Domains",
    items: ["Blockchain / Web3", "IoT / BLE", "Healthcare", "Logistics"],
  },
] as const;

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
    playStore:
      "https://play.google.com/store/apps/details?id=app.mydriverbook.com",
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
    stack: ["React Native", "Smart Contracts", "WalletConnect", "Biometrics"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.lumen8labs.zest",
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
    stack: ["React Native", "GraphQL", "Firestore", "Cloud Functions", "FCM"],
    playStore: "https://play.google.com/store/search?q=palmz&c=apps",
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
    playStore:
      "https://play.google.com/store/apps/details?id=com.iwa.logistics",
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
    playStore:
      "https://play.google.com/store/apps/details?id=com.securedgoldcoin.wallet.android",
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
    playStore: null,
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
    playStore: null,
  },
] as const;
