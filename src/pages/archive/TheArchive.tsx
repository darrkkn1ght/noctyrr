import { useEffect, useRef, useState } from "react";
import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheArchive = () => {
  const [revealed, setRevealed] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 max-w-2xl mx-auto px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Black Archive
          </h1>

          {/* Subtitle */}
          <p className="archive-subtitle text-[0.6rem] md:text-xs opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }}>
            Beneath the Palace
          </p>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }} />

          {/* Rich description */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '800ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              Seven floors beneath the throne room, past locks that require no keys — 
              only bloodlines — lies the Black Archive. No windows. No natural light. 
              Only candles that have burned for so long, the wax has pooled into rivers 
              across the floor.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              The shelves stretch endlessly into darkness. Each book is bound in leather 
              the color of skin — unmarked, unnamed. The spines bear no titles. 
              The pages bear the weight of what the kingdom wished to forget.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              The margins of every page are burned. Words have been scratched away by 
              careful hands. What remains are fragments — a date, a title, a symbol 
              that once meant "forever."
            </p>
          </div>

          {/* The purpose */}
          <div className="opacity-0 animate-fade-slow space-y-4" style={{ animationDelay: '1000ms' }}>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash">
              This is where forbidden love comes to die.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash">
              Or rather — to be unborn.
            </p>
          </div>

          {/* Auto-reveal warning - works on scroll */}
          <div 
            ref={revealRef}
            className="opacity-0 animate-fade-slow py-4 md:py-8"
            style={{ animationDelay: '1200ms' }}
          >
            <p className="archive-entry-marker text-[0.5rem] md:text-xs transition-opacity duration-800ms opacity-50">
              [ A warning carved into the entrance stone ]
            </p>
            <p className={`archive-prose text-center text-sm md:text-base mt-4 transition-opacity duration-1500ms ${revealed ? 'opacity-100' : 'opacity-0'}`}>
              "Do not linger. The Archive remembers those who stay too long."
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1300ms' }} />

          {/* Archive contents */}
          <div className="opacity-0 animate-fade-slow space-y-4 w-full max-w-md" style={{ animationDelay: '1500ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mb-4 md:mb-6">Known Contents</p>
            <div className="border-t border-border py-3 md:py-4">
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">
                Royal correspondence — <span className="text-ash/50">burned</span>
              </p>
            </div>
            <div className="border-t border-border py-3 md:py-4">
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">
                Marriage petitions (unsanctioned) — <span className="text-ash/50">denied</span>
              </p>
            </div>
            <div className="border-t border-border py-3 md:py-4">
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">
                Love letters — <span className="text-ash/50">reduced to ash</span>
              </p>
            </div>
            <div className="border-t border-border py-3 md:py-4">
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">
                Portraits of the beloved — <span className="text-ash/50">faces scratched away</span>
              </p>
            </div>
            <div className="border-t border-b border-border py-3 md:py-4">
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">
                Names of the erased — <span className="text-ash/50">unknown, yet remembered</span>
              </p>
            </div>
          </div>

          {/* The keeper */}
          <div className="opacity-0 animate-fade-slow space-y-4" style={{ animationDelay: '1700ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              Someone must tend these wounds. Someone must remember 
              what the world has decided to forget.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow pt-4 md:pt-8" style={{ animationDelay: '1900ms' }}>
            "Every wound the kingdom wished to forget is kept here. 
            <br className="hidden md:block" />
            And someone guards them all."
          </blockquote>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-throne"
        prevLabel="The Throne"
        nextPath="/the-archivist"
        nextLabel="The Archivist"
        entryNumber="Archive Entry V"
      />
    </ArchiveLayout>
  );
};

export default TheArchive;
