import { useEffect, useState } from "react";
import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveLink from "@/components/ArchiveLink";

const TheEpilogue = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Slowly reveal after a dramatic pause
    const timer = setTimeout(() => setRevealed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-xl px-4">
          {/* Secret marker */}
          <span 
            className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow text-ash/30"
            style={{ animationDelay: '1000ms' }}
          >
            [ This page does not exist ]
          </span>

          {/* Title */}
          <h1 
            className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow"
            style={{ animationDelay: '2000ms' }}
          >
            After the Archive
          </h1>

          {/* Divider */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '3000ms' }} 
          />

          {/* The secret story */}
          <div 
            className="space-y-8 md:space-y-12 opacity-0 animate-fade-slow"
            style={{ animationDelay: '4000ms' }}
          >
            <p className="archive-prose text-center text-sm md:text-base">
              Years pass.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              The palace becomes a library.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              The throne room, a reading hall.
            </p>
          </div>

          {/* Divider */}
          <div 
            className="archive-divider-vertical opacity-0 animate-fade-slow" 
            style={{ animationDelay: '5500ms' }} 
          />

          {/* The reunion */}
          <div 
            className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow"
            style={{ animationDelay: '6500ms' }}
          >
            <p className="archive-prose text-center italic text-sm md:text-base">
              A child asks about the old days.
            </p>
            <p className="archive-prose text-center italic text-sm md:text-base">
              About the kingdom before the light returned.
            </p>
          </div>

          {/* The parents */}
          <div 
            className="opacity-0 animate-fade-slow border border-border/20 p-6 md:p-12 max-w-md"
            style={{ animationDelay: '8000ms' }}
          >
            <p className="archive-prose text-center text-sm md:text-base">
              Her mother smiles.
            </p>
            <p className="archive-prose text-center text-sm md:text-base mt-4">
              Her father closes the book in his hands.
            </p>
            <p className="archive-quote text-center text-sm md:text-lg mt-8">
              "Some stories," he says,
              <br />
              "are better left unwritten."
            </p>
          </div>

          {/* The reveal */}
          <div 
            className="opacity-0 animate-fade-slow space-y-6"
            style={{ animationDelay: '10000ms' }}
          >
            <p className="archive-prose text-center text-sm md:text-base">
              But she notices the ink stains on his fingers.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              She notices her mother's knowing glance.
            </p>
          </div>

          {/* Final revelation */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '12000ms' }} 
          />

          <blockquote 
            className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow"
            style={{ animationDelay: '13000ms' }}
          >
            "They lived, didn't they?"
          </blockquote>

          <p 
            className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow"
            style={{ animationDelay: '14500ms' }}
          >
            The Archivist and the Heir.
            <br /><br />
            They lived.
          </p>

          {/* The very end */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '16000ms' }} 
          />

          <div 
            className="opacity-0 animate-fade-slow pt-8"
            style={{ animationDelay: '17000ms' }}
          >
            <p className="archive-subtitle text-[0.6rem] md:text-xs mb-8">
              — The True Ending —
            </p>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs italic text-ash/50">
              This page was never part of the Archive.
              <br />
              Consider it a gift.
            </p>
          </div>

          {/* Return */}
          <ArchiveLink 
            to="/" 
            className="archive-nav text-xs opacity-0 animate-fade-slow"
            style={{ animationDelay: '18500ms' }}
          >
            ← Return to the Beginning
          </ArchiveLink>
        </div>
      </div>
    </ArchiveLayout>
  );
};

export default TheEpilogue;
