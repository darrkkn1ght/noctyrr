import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheFall = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Fall of Noctyrr
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* What didn't happen - sparse for impact */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The kingdom does not burn.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              There is no war.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              No blood in the streets.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '900ms' }} />

          {/* What happened - sparse, ceremonial */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '1100ms' }}>
            <p className="archive-prose text-center italic text-sm md:text-base">
              The bells stop ringing.
            </p>
            <p className="archive-prose text-center italic text-sm md:text-base">
              The Council disappears.
            </p>
            <p className="archive-prose text-center italic text-sm md:text-base">
              The Crown is left behind.
            </p>
          </div>

          {/* What it means */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '1400ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The seven hooded figures who ruled from shadows are simply... gone. 
              Their chambers empty. Their symbols faded from the walls. 
              As if they were never there at all.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash/70">
              Perhaps they never were.
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1600ms' }} />

          {/* The aftermath */}
          <div className="opacity-0 animate-fade-slow space-y-4 md:space-y-6" style={{ animationDelay: '1800ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              Without erasure, stories return.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Names resurface.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              People remember love — quietly, cautiously, freely.
            </p>
          </div>

          {/* The change */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '2000ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              Children ask about the old days, and for the first time, 
              parents answer. Portraits are hung again. Letters are sent 
              without fear.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              The Archive opens its doors.
            </p>
          </div>

          {/* The sky */}
          <div className="opacity-0 animate-fade-slow pt-4 md:pt-8" style={{ animationDelay: '2200ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs">
              For the first time in seven generations
            </p>
            <p className="archive-prose text-center mt-3 md:mt-4 text-sm md:text-base italic text-ash">
              The sky begins to clear.
            </p>
          </div>

          {/* Final note */}
          <p className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow max-w-xs" style={{ animationDelay: '2400ms' }}>
            This is not an ending.
            <br /><br />
            It is a return.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-oath"
        prevLabel="The Oath"
        nextPath="/what-remains"
        nextLabel="What Remains"
        entryNumber="Archive Entry XII"
      />
    </ArchiveLayout>
  );
};

export default TheFall;
