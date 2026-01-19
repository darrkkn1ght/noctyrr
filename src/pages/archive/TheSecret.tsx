import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheSecret = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 max-w-2xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Forbidden Text
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* Discovery */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              Weeks pass. He returns each night, descending the seven floors 
              in darkness, learning the path by memory. She waits without 
              admitting she waits. They speak in whispers — of history, 
              of law, of everything except what grows between them.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              Until one night, she shows him the locked cabinet. 
              The one sealed with seven iron bands. The one even 
              she is forbidden to open.
            </p>
          </div>

          {/* The book */}
          <div 
            className="opacity-0 animate-fade-slow border border-border/30 p-6 md:p-12 max-w-md"
            style={{ animationDelay: '900ms' }}
          >
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mb-4 md:mb-6">Recovered Fragment</p>
            <p className="archive-prose text-center italic text-ash/80 text-sm md:text-base">
              "...and the Crowned Heir descended to where memory sleeps, 
              finding there the keeper of wounds. Their silence became a 
              language. Their glances, a treaty. What the kingdom had 
              forbidden, the heart had already signed..."
            </p>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mt-6 md:mt-8 text-muted-foreground/50">
              — Author erased, Year unknown
            </p>
          </div>

          {/* The revelation */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '1100ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              She reads it three times in silence.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              The story is identical to theirs.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Written centuries ago. About lovers who have not yet been born.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1300ms' }} />

          {/* The pattern */}
          <div className="opacity-0 animate-fade-slow space-y-4 md:space-y-6" style={{ animationDelay: '1500ms' }}>
            <p className="archive-prose text-center text-sm md:text-base font-medium">
              History is preparing to repeat itself.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Every Heir who descended. Every Archivist who waited.
              Every love that bloomed in these depths.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash">
              All erased. All forgotten. All doomed.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '1700ms' }}>
            "Every love story in this kingdom ends the same way."
          </blockquote>

          {/* The truth */}
          <div className="opacity-0 animate-fade-slow border-l-2 border-border/40 pl-6 max-w-sm" style={{ animationDelay: '1900ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mb-4">The Truth They Discover</p>
            <p className="archive-prose text-center text-sm md:text-base">
              The kingdom does not collapse because of love.
            </p>
            <p className="archive-prose text-center text-sm md:text-base mt-4 italic">
              It collapses because of the lie that love must be erased.
            </p>
            <p className="archive-prose text-center text-sm md:text-base mt-4 text-ash/70">
              The Black Council has been preserving power, not peace.
            </p>
          </div>

          {/* Transition */}
          <p className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow max-w-xs" style={{ animationDelay: '2100ms' }}>
            Now they must choose: accept the pattern, or break it.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-erased"
        prevLabel="The Erased"
        nextPath="/the-choice"
        nextLabel="The Choice"
        entryNumber="Archive Entry IX"
      />
    </ArchiveLayout>
  );
};

export default TheSecret;
