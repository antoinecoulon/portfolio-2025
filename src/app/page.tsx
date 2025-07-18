import ProjetsSection from "@/components/sections/ProjetsSection";
import HomeSection from "../components/sections/HomeSection";

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
        <HomeSection />
      </section>
      <section className="snap-start h-screen">
        <HomeSection />
      </section>
    </main>
  )
}