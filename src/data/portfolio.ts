import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiOpenai,
  SiGit,
  SiGithub,
  SiPostman,
  SiApple,
  SiGoogleplay,
  SiGooglemaps,
  SiTelegram,
  SiFacebook,
  SiInstagram
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  platforms: string[];
  stack: string[];
  description: string;
  links: { label: string; url: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  person: {
    name: "Manikanta Kummarapurugu",
    firstName: "Manikanta",
    title: "React Native & Full-Stack Developer",
    subtitle: "Workflow Automation Engineer",
    tagline: "Building production-grade mobile apps and intelligent automation pipelines — shipped, live, and battle-tested.",
    email: "kmanikanta4321@gmail.com",
    phone: "7032797119",
    linkedin: "https://linkedin.com/in/manikanta-kummarapurugu-190aa1101",
    github: "https://github.com",
    portfolio: "https://kmanikanta-dev.netlify.app"
  },
  about: {
    summary: "Self-taught Full-Stack and React Native Developer with 3+ years of hands-on experience building and shipping production-grade iOS and Android applications, web platforms, and automated digital workflows. Sole developer on five live mobile apps — KrimeScene, KrimeWatch, KrimeMonitor, KrimeAction, and EliteCap — covering the full software development lifecycle from architecture to App Store and Play Store deployment. Experienced in REST API design and integration, real-time push notifications, geolocation-based reporting, and AI-powered automation pipelines.",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Live Mobile Apps", value: "5" },
      { label: "App Stores", value: "2" },
      { label: "AI Pipelines in Production", value: "2+" }
    ]
  },
  skills: [
    {
      category: "Mobile Development",
      items: [
        { name: "React Native", icon: SiReact },
        { name: "iOS (App Store)", icon: SiApple },
        { name: "Android (Play Store)", icon: SiGoogleplay }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: SiReact },
        { name: "Angular", icon: SiAngular },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss }
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "PHP", icon: SiPhp },
        { name: "MySQL", icon: SiMysql },
        { name: "REST API Design", icon: SiGit }
      ]
    },
    {
      category: "AI & Automation",
      items: [
        { name: "OpenAI GPT", icon: SiOpenai },
        { name: "Google Gemini Flash", icon: SiGooglemaps },
        { name: "Claude API", icon: SiOpenai },
        { name: "N8N Workflows", icon: SiTelegram },
        { name: "Prompt Engineering", icon: SiOpenai }
      ]
    },
    {
      category: "Social & Marketing APIs",
      items: [
        { name: "Facebook API", icon: SiFacebook },
        { name: "Instagram API", icon: SiInstagram },
        { name: "Telegram Bot API", icon: SiTelegram }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Google Maps API", icon: SiGooglemaps }
      ]
    }
  ] as SkillGroup[],
  experience: [
    {
      id: 1,
      role: "React Native & Full-Stack Developer",
      company: "KrimeWatch Foundation Inc",
      companyNote: "Non-profit",
      period: "July 2024 – Present",
      achievements: [
        "Sole developer on five live React Native applications, handling end-to-end design, development, and deployment to both Google Play Store and Apple App Store",
        "Built KrimeScene — community public safety app with device-based access (no traditional login), incident reporting, local crime data search, neighborhood alerts, and missing persons reporting",
        "Developed KrimeWatch — community video-sharing and safety monitoring platform with neighborhood safety alerts and email notification system",
        "Engineered KrimeMonitor — advanced safety monitoring app with a live volunteer control room feed, Saved Alerts, email-based 2FA, and a 30-day account deletion window",
        "Created KrimeAction — restricted-access volunteer coordination app with GPS navigation, Google Maps integration, in-app media capture, and Google Authenticator 2FA",
        "Designed an N8N automation pipeline that ingests Excel campaign data, generates AI-optimized post copy, and simultaneously publishes to Facebook, Instagram, Threads, Bluesky, and Telegram",
        "Engineered AI-powered incident classification pipelines integrating Google Gemini Flash, OpenAI GPT, and Claude API — live in production",
        "Architected and maintained the full system independently: React Native apps, PHP/MySQL REST APIs, and N8N automation pipelines — zero commercial tooling budget"
      ]
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Abbigale Cloud Services / Jayson & Williams Technologies",
      companyNote: "",
      period: "March 2023 – June 2024",
      achievements: [
        "Developed EliteCap — cross-platform React Native proof-capture app (published on App Store and Play Store) for geotagged video and photo capture with secure cloud storage and share/archive controls",
        "Delivered multiple client projects including dashboards, CRUD modules, and civic data tools using Angular, React, and React Native",
        "Built the VoterSurvey System — full-stack civic tech platform (Angular web, React admin panel, React Native mobile) from requirements through production deployment",
        "Built and maintained N8N automation workflows, reducing manual operational effort across client operations"
      ]
    }
  ] as (ExperienceItem & { companyNote: string })[],
  projects: [
    {
      id: "krimescene",
      name: "KrimeScene",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "PHP", "MySQL", "REST API", "iPage Hosting"],
      description: "Community public safety app for KrimeWatch Foundation Inc. Device-based access via unique mobile device ID — no traditional login required. Features incident reporting (video/photo/text), local crime & safety search, neighborhood monitoring & alerts, emergency call facilitation, and missing persons reports.",
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/krimescene/id6737813493" },
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=acs.com.KrimeScene" }
      ]
    },
    {
      id: "krimewatch",
      name: "KrimeWatch",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "PHP", "MySQL", "iPage Hosting"],
      description: "Community video-sharing and safety monitoring platform. Neighborhood safety alerts, community monitoring, emergency call facilitation, user registration with name and email, and email-based push notification system.",
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=acs.com.krimewatch" }
      ]
    },
    {
      id: "krimemonitor",
      name: "KrimeMonitor",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "PHP", "MySQL", "2FA", "iPage Hosting"],
      description: "Advanced safety monitoring app with a dedicated Monitor Screen streaming curated alert media (video, images, geolocation data) from the KrimeWatch volunteer control room. Saved Alerts bookmarking, email-based 2FA, and full account lifecycle with 30-day deletion window.",
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=kfi.com.KrimeMonitor" }
      ]
    },
    {
      id: "krimeaction",
      name: "KrimeAction",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "Google Maps API", "Google Authenticator", "iPage Hosting"],
      description: "Restricted-access volunteer coordination app for authorized KrimeWatch Action Team members. Incident workflow management, in-app GPS navigation, Google Maps integration, in-app media capture, action documentation, and Google Authenticator 2FA with administrator-provisioned accounts.",
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=acs.com.krimewatchactionteam" }
      ]
    },
    {
      id: "elitecap",
      name: "EliteCap",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "Secure Cloud Storage"],
      description: "Proof-capture mobile app enabling users to record geotagged real-time videos and photos as legal or personal proof of events. Real-time capture with location tagging, secure cloud storage, share/unshare controls, archive management, and 30-second video optimization for fast uploads.",
      links: [
        { label: "elitecap.net", url: "https://elitecap.net" },
        { label: "App Store", url: "#" },
        { label: "Play Store", url: "#" }
      ]
    },
    {
      id: "n8n-marketing",
      name: "Digital Marketing Automation",
      platforms: ["Automation"],
      stack: ["N8N", "Excel/XLSX", "Facebook API", "Instagram API", "Threads", "Bluesky", "Telegram Bot", "AI APIs"],
      description: "End-to-end automated social media publishing pipeline. Ingests campaign and content data from Excel spreadsheets, uses AI APIs to generate platform-optimized post copy, then simultaneously publishes formatted posts to 5 platforms — removing all manual posting effort.",
      links: []
    },
    {
      id: "ai-incident",
      name: "AI Incident Analysis Pipeline",
      platforms: ["Backend"],
      stack: ["N8N", "Gemini Flash 2.5", "OpenAI GPT", "Claude API", "PHP"],
      description: "Automated workflow processing community-submitted crime reports, images, and videos through Google Gemini Flash for classification and public safety alert generation. Live in production for KrimeWatch Foundation Inc.",
      links: []
    },
    {
      id: "votersurvey",
      name: "VoterSurvey System",
      platforms: ["Web", "Admin", "Mobile"],
      stack: ["Angular", "React", "React Native", "PHP", "MySQL"],
      description: "Full-stack civic technology platform enabling organizations to gather and analyze community survey input at scale. Built web (Angular), admin panel (React), and mobile (React Native) versions from requirements to production deployment.",
      links: []
    }
  ] as ProjectItem[],
  education: [
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "BVC Engineering College, Odalarevu",
      period: "2014–2018",
      description: "Self-taught in web development, React Native mobile development, workflow automation, and AI tool integration — fully transitioned to software through hands-on project work across five live production applications."
    }
  ] as EducationItem[]
};
