import { ReactNode } from "react";

interface ArchiveLayoutProps {
  children: ReactNode;
}

const ArchiveLayout = ({ children }: ArchiveLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Grain texture overlay */}
      <div className="archive-grain" aria-hidden="true" />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, hsl(0 0% 0% / 0.4) 100%)'
        }}
        aria-hidden="true"
      />
      
      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default ArchiveLayout;
