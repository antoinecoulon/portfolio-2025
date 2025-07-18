import TerminalUI from "../ui/TerminalUI";

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
            <TerminalUI className="rounded-lg" title={title}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2">
                  {stack.map((stack, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-500/30 text-blue-300 rounded text-sm">
                      {stack}
                  </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                    🔗
                  </button>
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                    📱
                  </button>
                </div>
              </div>

              <p className="text-text-primary text-sm line-clamp-3 p-2">
                {description}
              </p>
            </TerminalUI>
          </div>
        </div>
    )
}