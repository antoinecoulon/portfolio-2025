"use client";

import { SkillCategory, skillsData } from "@/data/skills";
import { useState } from "react";
import SkillCard from "../ui/SkillCard";
import { AnimatePresence } from "framer-motion";

const categories: SkillCategory[] = ["Frontend", "Backend", "DevOps", "Data"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">(
    "All"
  );

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="w-full px-4 md:px-12 py-12 flex flex-col gap-8">
      <h2 className="text-3xl font-bold mb-6">Mes Compétences</h2>

      {/* Barre de filtres */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full border-2 border-accent-tertiary hover:cursor-pointer ${
            activeCategory === "All"
              ? "bg-accent-primary text-bg-primary"
              : "bg-text-primary text-bg-primary"
          }`}
        >
          Toutes
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border-2 border-accent-tertiary hover:cursor-pointer ${
              activeCategory === cat
                ? "bg-accent-primary text-bg-primary"
                : "bg-text-primary text-bg-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
