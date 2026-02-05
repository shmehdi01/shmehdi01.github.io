
import { Project, RoadmapItem, Service } from './types';

export const PERSONAL_INFO = {
  name: 'Syed Hussain Mehdi',
  title: 'Mobile Systems Architect',
  brand: 'CodeSH Lab',
  experience: '7+ Years',
  tagline: 'Building scalable mobile & web products with clean architecture and long-term vision.',
  location: 'Noida, India / Global',
};

export const ROADMAP: RoadmapItem[] = [
  {
    year: '2018 - 2019',
    phase: 'Foundations & Native Android',
    company: 'CodePlay Labs Pvt Ltd',
    designation: 'Native Android Developer',
    description: 'Mastering Java & Kotlin. Focusing on Android internals and memory management.'
  },
  {
    year: '2019 - 2020',
    phase: 'Native Android & Integration',
    company: 'Queuebuster',
    designation: 'Native Android',
    description: 'Working on Native Android & Android Based POS Solution, Integration with third Parties POS SDKs'
  },
  {
    year: '2021 - 2022',
    phase: 'Cross-Platform Transition',
    company: 'Hudle',
    designation: 'Native Android & Flutter',
    description: 'Adopting Flutter for rapid iteration without compromising on performance or architecture.'
  },
  {
    year: '2022 - 2023',
    phase: 'Architecture & LLD Focus',
    company: 'Hudle',
    designation: 'Senior Mobile Developer',
    description: 'Deep dive into SOLID principles, Clean Architecture, and modular system design.'
  },
  {
    year: '2024 - 2026',
    phase: 'Product Engineering & Leadership',
    company: 'Queuebuster',
    designation: 'Sr. Android Engineer & Mobile Architect Design',
    description: 'Leading mobile product life-cycles from ideation to high-scale production deployment.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Vani Voice Asistance',
    description: 'Vani is a Voice Assistant App Which Allows you to Manage your Incoming Calls Just by your Voice. Easy and Simple to Use Just Use your Voice to Set Commands',
    techStack: ['Android Native', 'Java', 'MVP'],
    link: 'https://www.vaniassistant.com/'
  },
  {
    id: '2',
    name: 'Queuebuster',
    description: 'QueueBuster POS is a powerful all-in-one application with Billing, Inventory, Loyalty, Khata & Online Dukaan bundled into one.',
    techStack: ['Native Android', 'Java', 'Kotlin', 'MVVM', 'Multiple POS SDKs'],
    link: 'https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos&hl=en_IN'
  },
  {
    id: '3',
    name: 'Hudle',
    description: "India's largest sports community platform, enabling players to book sports venues, events, find players and join games. Hudle - Where India Plays.",
    techStack: ['Flutter', 'WebRTC', 'Firebase', 'Clean Architecture'],
    link: 'https://hudle.page.link/website'
  },
  {
    id: '4',
    name: 'Society Portal',
    description: 'Manage your society, Low rise apratments..',
    techStack: ['React', 'TypeScript', 'Node.js', 'Web'],
    link: 'https://saphomes.codesh.in'
  },
  {
    id: '5',
    name: 'DriveThru (Ongoing)',
    description: 'Building a scalable, multi-app food ordering platform with location-based restaurant discovery, real-time order management, and centralized store administration.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Web'],
    link: '#'
  },
  {
    id: '6',
    name: 'Log My Work',
    description: 'Log your daily work. Generate client-ready timesheets.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Web'],
    link: 'https://logmywork.codesh.in/'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Mobile App Development',
    description: 'End-to-end production-ready mobile applications using Native Android (Kotlin) and Flutter. Expert development based in Noida.'
  },
  {
    title: 'System Architecture',
    description: 'Designing low-level design (LLD) documents and modular architectures that scale with user growth.'
  },
  {
    title: 'Web Engineering',
    description: 'Full-stack web applications using React, TypeScript, and high-performance Node.js backends.'
  }
];
