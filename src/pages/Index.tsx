import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveLink from "@/components/ArchiveLink";
import archiveCrest from "@/assets/archive-crest.png";

const Index = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page archive-surface archive-border-carved">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 px-4 archive-corner-ornament">
          {/* Crest */}
          <div 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-0 animate-fade-slow archive-frame-heavy p-4"
            style={{ animationDelay: '400ms', animationDuration: '2500ms' }}
          >
            <img 
              src={archiveCrest} 
              alt="Noctyrr Crest" 
              className="w-full h-full object-contain opacity-60"
            />
          </div>

          {/* Main title */}
          <h1 
            className="opacity-0 animate-fade-slow archive-title"
            style={{ animationDelay: '1500ms', animationDuration: '2200ms' }}
          >
            NOCTYRR
          </h1>

          {/* Subtitle */}
          <p 
            className="archive-subtitle text-[0.6rem] sm:text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] opacity-0 animate-fade-slow"
            style={{ animationDelay: '2800ms', animationDuration: '2000ms' }}
          >
            An Archive of Erased Love
          </p>

          {/* Divider */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '4000ms', animationDuration: '1800ms' }} 
          />

          {/* Warning quote */}
          <blockquote 
            className="archive-quote text-sm sm:text-base md:text-lg opacity-0 animate-fade-slow max-w-sm archive-border-etched p-6"
            style={{ animationDelay: '5000ms', animationDuration: '2000ms' }}
          >
            "You were not meant to read this."
          </blockquote>

          {/* Ornamental separator */}
          <div className="archive-rule-ornamental opacity-0 animate-fade-slow" 
               style={{ animationDelay: '5500ms', animationDuration: '1800ms' }} />

          {/* Enter link */}
          <ArchiveLink 
            to="/the-decree" 
            className="archive-nav opacity-0 animate-fade-slow text-xs sm:text-sm"
            style={{ animationDelay: '6500ms', animationDuration: '2000ms' }}
          >
            Enter the Archive →
          </ArchiveLink>

          {/* Double separator */}
          <div className="archive-separator-double opacity-0 animate-fade-slow" 
               style={{ animationDelay: '7500ms', animationDuration: '1800ms' }} />

          {/* Entry marker */}
          <span 
            className="archive-entry-marker text-[0.5rem] sm:text-xs opacity-0 animate-fade-slow"
            style={{ animationDelay: '8000ms', animationDuration: '2200ms' }}
          >
            Archive Entry I — The Threshold
          </span>

          {/* Footer warning */}
          <p 
            className="archive-entry-marker opacity-0 animate-fade-slow max-w-xs text-[0.5rem] sm:text-xs mt-8"
            style={{ animationDelay: '9000ms', animationDuration: '2200ms' }}
          >
            What follows is not a story.
            <br />
            It is a confession.
          </p>
        </div>
      </div>
    </ArchiveLayout>
  );
};

export default Index;
