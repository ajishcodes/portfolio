import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { Django } from "@/components/ui/svgs/django";
import { Fastapi } from "@/components/ui/svgs/fastapi";
import { Flask } from "@/components/ui/svgs/flask";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Redis } from "@/components/ui/svgs/redis";
import { Aws } from "@/components/ui/svgs/aws";


export const DATA = {
  name: "Ajish S",
  initials: "AS",
  url: "https://github.com/ajishcodes/portfolio/",
  location: "Thiruvananthapuram, Kerala, India",
  locationLink: "https://www.google.com/maps/place/Thiruvananthapuram",
  description:
    "Senior Software Engineer & Full Stack Developer specialising in React, TypeScript and Python. I build secure, scalable healthcare and enterprise web apps.",
  summary:
    "Full Stack Web Developer with a strong focus on frontend development using React JS and JavaScript. I have experience leading teams and delivering scalable, responsive web applications. I'm proficient in backend technologies like Python (Django, FastAPI, Flask) and MySQL, with a track record of building multiple web apps and implementing secure APIs. I'm driven by problem-solving, innovation, and pushing web development boundaries. [Take a look at my work experience](/#work) or [my projects](/#projects).",
  avatarUrl: "/",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "JavaScript", icon: JavaScript },
    { name: "Django", icon: Django },
    { name: "FastAPI", icon: Fastapi },
    { name: "Flask", icon: Flask },
    { name: "MySQL", icon: Mysql },
    { name: "Redis", icon: Redis },
    { name: "AWS", icon: Aws },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ajishs97@gmail.com",
    tel: "+918921600913",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ajish-s/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ajishs97@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Equipo Health Inc.",
      href: "https://www.equipo.health/",
      badges: [],
      location: "Thiruvananthapuram, India",
      title: "Senior Software Engineer",
      logoUrl: "/equipo.png",
      start: "Feb 2022",
      end: "Present",
      description:
        "Led and mentored a team of 5 developers in the architectural design and delivery of responsive healthcare web applications using React and TypeScript, boosting team productivity by 25%. Architected secure RESTful APIs using Python Django and FastAPI with JWT-based authentication to protect sensitive patient records and ensure compliance with data privacy standards. Optimized performance by refining database queries and frontend state management, cutting page load times by 30%. Orchestrated production releases and cloud deployments using Docker and AWS, reducing manual effort and deployment-related errors by 40%. Collaborated with UI/UX designers and stakeholders to turn complex clinical requirements into functional features and led technical demos.",
    },
  ],
  education: [
    {
      school: "Anna University, Chennai",
      href: "https://www.annauniv.edu",
      degree: "Bachelor's Degree (CGPA 8.04)",
      logoUrl: "/anna-university.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "CBSE, New Delhi",
      href: "https://www.cbse.gov.in",
      degree: "Higher Secondary Education (CGPA 7.5)",
      logoUrl: "/cbse.png",
      start: "2012",
      end: "2014",
    },
    {
      school: "CBSE, New Delhi",
      href: "https://www.cbse.gov.in",
      degree: "SSLC (CGPA 9)",
      logoUrl: "/cbse.png",
      start: "2012",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "Serverless Secure Content Portal",
      href: "",
      dates: "",
      active: false,
      description:
        "A database-free content management backend built on AWS Lambda and S3 that indexes and serves secure video and document assets via an automated JSON manifest. Includes an event-driven pipeline (MediaConvert + EventBridge) that transcodes uploads into multi-bitrate HLS streams, plus a view-only security layer using CloudFront Signed Cookies and bearer token gates.",
      technologies: [
        "Python",
        "AWS Lambda",
        "Amazon S3",
        "CloudFront",
        "AWS Elemental MediaConvert",
        "EventBridge",
        "REST APIs",
        "React",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Dynamic Form Builder Platform",
      href: "",
      dates: "",
      active: false,
      description:
        "A configurable drag-and-drop platform for enterprise-level form creation, with a dynamic question rendering engine, complex conditional logic, reusable React components and a robust validation engine optimized for large forms.",
      technologies: ["React", "TypeScript", "Django", "MySQL", "Docker"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "FastAPI Microservices Platform",
      href: "",
      dates: "",
      active: false,
      description:
        "An independent microservices architecture built with FastAPI to support high-concurrency background tasks, with an API Gateway providing centralized JWT authentication while maintaining sub-100ms response times.",
      technologies: ["FastAPI", "Python", "Docker", "REST APIs", "JWT", "Redis", "AWS"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "SecondOpinion",
      href: "",
      dates: "",
      active: false,
      description:
        "A telehealth video consultation app enabling secure consultations between providers and patients, with a seamless communication bridge between web and mobile interfaces.",
      technologies: ["Python Django", "React", "React Native"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Patient 360 App",
      href: "",
      dates: "",
      active: false,
      description:
        "A centralized patient portal giving a 360-degree view of medical history (lab results, treatment plans, immunizations), with a secure appointment scheduling engine based on real-time provider availability.",
      technologies: ["React", "Django", "MySQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "WebSocket & Real-time Communication",
      href: "",
      dates: "",
      active: false,
      description:
        "Real-time data streaming and chat functionality using WebSockets, enabling instant updates for critical healthcare data and live patient-provider communication.",
      technologies: ["WebSockets", "React", "Django Channels"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Scheduled Export API & Admin Panel",
      href: "",
      dates: "",
      active: false,
      description:
        "An automated data management hub with a Flask-based API that handles large datasets (500+ records) through scheduled exports and email notifications.",
      technologies: ["Flask", "Python", "React", "MySQL", "Firebase"],
      links: [],
      image: "",
      video: "",
    },
  ],

  awards: [
    { title: "AWS Well-Architected Proficient", date: "Apr 2026" },
    { title: "AWS Educate: Getting Started with Databases", date: "Jul 2023" },
    { title: "Best Performer of the Quarter, Equipo Health Inc.", date: "Aug 2023" },
  ],
  languages: ["English", "Malayalam", "Tamil"],
} as const;
