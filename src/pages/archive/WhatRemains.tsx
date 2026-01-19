import { useState, useEffect } from "react";
import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveLink from "@/components/ArchiveLink";

const WhatRemains = () => {
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    // Show the secret link after the user has been on the page for a while
    const timer = setTimeout(() => setShowSecret(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            What Remains
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* The archive empties */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The Archive empties.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              The shelves grow light.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              The wounds begin to heal.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '900ms' }} />

          {/* The final entry */}
          <div 
            className="opacity-0 animate-fade-slow border border-border/30 p-6 md:p-12 max-w-md"
            style={{ animationDelay: '1100ms' }}
          >
            <p className="archive-entry-marker mb-6 md:mb-8 text-[0.5rem] md:text-xs">The Final Entry</p>
            <blockquote className="archive-quote text-center text-sm md:text-lg">
              "This kingdom fell not to war,
              <br />
              but to truth."
            </blockquote>
            <p className="archive-entry-marker mt-6 md:mt-8 text-muted-foreground/50 text-[0.5rem] md:text-xs">
              — The Archivist
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1400ms' }} />

          {/* Resolution */}
          <div className="opacity-0 animate-fade-slow space-y-4 md:space-y-6" style={{ animationDelay: '1600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The lovers may survive.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              They may vanish.
            </p>
            <p className="archive-prose text-center italic text-ash text-sm md:text-base">
              What matters is that they are written.
            </p>
          </div>

          {/* The ending */}
          <div className="opacity-0 animate-fade-slow pt-4 md:pt-8" style={{ animationDelay: '1900ms' }}>
            <p className="archive-subtitle mb-6 md:mb-8 text-[0.6rem] md:text-xs">
              And for the first time in Noctyrr's history
            </p>
            <p className="archive-title text-base md:text-xl tracking-[0.2em] md:tracking-archive">
              Love remains.
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '2200ms' }} />

          {/* Entry marker */}
          <span className="archive-entry-marker opacity-0 animate-fade-slow text-[0.5rem] md:text-xs" style={{ animationDelay: '2400ms' }}>
            Archive Entry XIII — Final
          </span>

          {/* Navigation options */}
          <div className="opacity-0 animate-fade-slow flex flex-col sm:flex-row gap-4 sm:gap-8" style={{ animationDelay: '2600ms' }}>
            <ArchiveLink 
              to="/" 
              className="archive-nav text-xs"
            >
              ← Read Again
            </ArchiveLink>
            <ArchiveLink 
              to="/the-black-council" 
              className="archive-nav text-xs"
            >
              Supplemental Records →
            </ArchiveLink>
          </div>

          {/* Dedication */}
          <div className="opacity-0 animate-fade-slow pt-8 md:pt-16 pb-8" style={{ animationDelay: '2800ms' }}>
            <div className="archive-divider mx-auto mb-6 md:mb-8" />
            <p className="archive-entry-marker italic text-[0.5rem] md:text-xs">
              For the one who understands
              <br />
              that love is not loud —
              <br />
              <br />
              it is enduring.
            </p>
          </div>

          {/* Secret link - appears after delay */}
          <div 
            className={`transition-opacity duration-3000ms ${showSecret ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="archive-divider mx-auto mb-8 opacity-20" />
            <ArchiveLink 
              to="/the-epilogue" 
              className="archive-entry-marker text-[0.45rem] md:text-[0.6rem] text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-1000ms cursor-pointer"
            >
              [ There is more... ]
            </ArchiveLink>
          </div>
        </div>
      </div>
    </ArchiveLayout>
  );
};

export default WhatRemains;
