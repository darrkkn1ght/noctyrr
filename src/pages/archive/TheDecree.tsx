import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheDecree = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-12 max-w-2xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Decree
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* The law */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              Love is permitted only once.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Only for duty.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              Only for the Crown.
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1000ms' }} />

          {/* Explanation */}
          <p 
            className="archive-entry-marker opacity-0 animate-fade-slow max-w-md leading-relaxed text-[0.6rem] md:text-xs"
            style={{ animationDelay: '1200ms' }}
          >
            By order of the Black Council, all affection beyond function 
            shall be unwritten. What is not recorded cannot exist. 
            What cannot exist cannot destroy.
          </p>

          {/* Seal */}
          <div className="opacity-0 animate-fade-slow pt-4 md:pt-8" style={{ animationDelay: '1600ms' }}>
            <div className="w-12 h-12 md:w-16 md:h-16 border border-border rounded-full flex items-center justify-center">
              <span className="text-muted-foreground text-[0.6rem] md:text-xs tracking-widest">VII</span>
            </div>
          </div>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/"
        prevLabel="Return"
        nextPath="/noctyrr-vale"
        nextLabel="The Kingdom"
        entryNumber="Archive Entry II"
      />
    </ArchiveLayout>
  );
};

export default TheDecree;
