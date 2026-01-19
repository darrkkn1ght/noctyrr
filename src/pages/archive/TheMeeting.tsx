import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheMeeting = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-2xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Unwritten Meeting
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* The meeting - sparse, poetic (dramatic moment) */}
          <div className="space-y-10 md:space-y-16 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              A door that should not open.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Candlelight catching the edge of a page.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Eyes meeting across shelves of the forgotten.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1000ms' }} />

          {/* The encounter - still sparse but with more */}
          <div className="space-y-8 md:space-y-10 opacity-0 animate-fade-slow" style={{ animationDelay: '1200ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              He expected dust and silence. He found a woman sitting 
              among the ghosts, reading aloud to no one.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic">
              She does not bow.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic">
              He does not command.
            </p>
          </div>

          {/* The exchange */}
          <div className="opacity-0 animate-fade-slow space-y-6" style={{ animationDelay: '1400ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              For a long moment, neither speaks. 
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Then she closes her book. Holds it out to him.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash">
              A book passes between hands.
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1600ms' }} />

          {/* The silence */}
          <div className="opacity-0 animate-fade-slow space-y-6 md:space-y-8" style={{ animationDelay: '1800ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs">What was exchanged</p>
            <div className="space-y-4">
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">No words.</p>
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">No introductions.</p>
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide">Only understanding.</p>
            </div>
          </div>

          {/* What they recognized */}
          <div className="opacity-0 animate-fade-slow space-y-4" style={{ animationDelay: '2000ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              He recognized something in her eyes — the same 
              loneliness he sees in mirrors he is forbidden to look into.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              She recognized something in his posture — the weight of 
              a crown he has not yet worn.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '2200ms' }}>
            "Some meetings are written in ink that hasn't dried yet."
          </blockquote>

          {/* Transition */}
          <p className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow" style={{ animationDelay: '2400ms' }}>
            He will return. They both know it.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-archivist"
        prevLabel="The Archivist"
        nextPath="/the-erased"
        nextLabel="The Erased"
        entryNumber="Archive Entry VII"
      />
    </ArchiveLayout>
  );
};

export default TheMeeting;
