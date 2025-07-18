interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalUI({ title = "Terminal", children, className = "" }: TerminalProps) {
  return (
    <div className={`bg-bg-secondary border border-border-primary rounded-lg overflow-hidden ${className}`}>
      {/* Header avec contrôles */}
      <div className="bg-bg-tertiary px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-status-error rounded-full"></div>
            <div className="w-3 h-3 bg-status-warning rounded-full"></div>
            <div className="w-3 h-3 bg-status-success rounded-full"></div>
          </div>
          <span className="text-text-secondary font-bold font-mono ml-2">{title}</span>
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}

// TODO: sauvegarder component dans notion
