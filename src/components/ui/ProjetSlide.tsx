import TerminalUI from "../ui/TerminalUI";
import { FaGithub } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';

type ProjectProps = {
  title: string 
  description: string
  screenshot: string
  stack: string[]
  demo: string
  github?: string
}

export default function ProjetSlide({ title, description, screenshot, stack, demo, github }: ProjectProps) {
    return (
        
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0">
            <img
              src={screenshot}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Contenu superposé */}
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <TerminalUI className="h-auto rounded-lg" title={title}>
              <p className="text-text-primary text-sm p-1">
                {description}
              </p>

              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  {stack.map((stack, idx) => (
                    <span key={idx} className="text-blue-300 rounded text-sm">
                      {stack}
                  </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a 
                    href="http://github.com"
                    target="_blank"
                    rel="noopener roreferrer"
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="http://github.com"
                    target="_blank"
                    rel="noopener roreferrer"
                    className="w-16 h-8 bg-white/20 rounded-lg flex items-center justify-center gap-1 font-semibold hover:bg-white/30"
                  >
                    <FaCirclePlay /> Démo
                  </a>
                </div>
              </div>
            </TerminalUI>
          </div>
        </div>
    )
}