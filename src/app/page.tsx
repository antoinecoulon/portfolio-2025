import ProjetsSection from "@/components/sections/ProjetsSection";
import HomeSection from "../components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {  
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-start h-screen">
        <HomeSection />
      </section>
      <section className="snap-start h-screen">
        <ProjetsSection />
      </section>
      <section className="snap-start h-screen">
        <SkillsSection />
      </section>
      <section className="snap-start h-screen">
        <HomeSection />
      </section>
    </main>
  )
}

// TODO: sémentique html (sections...)