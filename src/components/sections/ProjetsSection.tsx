import ProjetSlide from "../ui/ProjetSlide";
import { projects } from "@/data/projects";

export default function ProjetsSection() {
  return (
    <div className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
      <div className="flex w-max gap-4 items-center min-h-screen px-[5vw]">
        {projects.map((project) => (
            <div className="w-[92vw]  h-[880px] pb-8 shrink-0 snap-center" key={project.id}>
              <ProjetSlide  
                title={project.title}
                description={project.description}
                screenshot={project.screenshot}
                stack={project.stack}
                demo={project.demo}
                github={project.github}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
// TODO: scrollbar none