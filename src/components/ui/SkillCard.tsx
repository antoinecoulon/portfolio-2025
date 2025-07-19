"use client";

import { Skill } from "@/data/skills";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  skill: Skill;
};

export default function SkillCard({ skill }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        layout: { type: "spring", stiffness: 200, damping: 20 },
        default: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        transition: { duration: 0.02, ease: "easeOut" },
      }}
      className="bg-bg-tertiary rounded-xl border hover:border-accent-primary shadow-md p-6 transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 relative">
          <Image
            src={skill.icon as string} // TODO: supprimé quand icons ok
            alt={skill.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>
      <p className="text-sm text-text-secondary mb-2">{skill.description}</p>
    </motion.div>
  );
}
