
export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface RoadmapItem {
  year: string;
  phase: string;
  description: string;
  company?: string;
  designation?: string;
}

export interface Service {
  title: string;
  description: string;
  note?: string;
}
