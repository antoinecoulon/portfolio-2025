import { ReactNode } from "react";

export type SkillCategory = "Frontend" | "Backend" | "Data" | "DevOps"

export interface Skill {
    id: string
    name: string
    category: SkillCategory
    description: string
    icon: ReactNode | string
}

export const skillsData: Skill[] = [
    {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Développement d'interfaces SPA avec hooks, context et composants custom.",
    icon: "/icons/react.svg"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description: "Sites fullstack avec App Router, SSR/ISR, API routes et performances optimisées.",
    icon: "/icons/nextjs.svg"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Design system responsive avec composants réutilisables et utility-first CSS.",
    icon: "/icons/tailwind.svg"
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
    description: "Applications REST robustes avec DRF, ORM PostgreSQL et auth JWT.",
    icon: "/icons/django.svg"
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Data",
    description: "Modélisation relationnelle, requêtes SQL complexes, intégration Django.",
    icon: "/icons/postgresql.svg"
  },
  {
    id: "git",
    name: "Git",
    category: "DevOps",
    description: "Versioning, travail collaboratif",
    icon: "/icons/git.svg"
  },
]
