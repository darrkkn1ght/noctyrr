import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheArchivist = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 max-w-2xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            She Who Remembers
          </h1>

          {/* Subtitle */}
          <p className="archive-subtitle text-[0.6rem] md:text-xs opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }}>
            The Archivist
          </p>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }} />

          {/* Rich description */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '800ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              She was given to the Archive at seven years old — the youngest daughter 
              of a minor house, traded for a debt her father could not pay. 
              She learned to read before she learned to grieve. She learned to 
              catalogue before she learned to cry.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              Now, thirty years later, she knows every erased name. She can recite 
              burned passages from memory, word for word, as if the fire never 
              touched them. The kingdom believes the Archive holds only ashes. 
              She knows it holds ghosts.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              Her hands are stained with ink that will not wash away — it has seeped 
              beneath her skin, into her veins. The kingdom calls it devotion. 
              She calls it penance for surviving.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1100ms' }} />

          {/* Her nature */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '1300ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              She speaks to no one. The servants who bring her meals have never 
              heard her voice. The Council summons her once a year to verify the 
              seals remain unbroken. She nods. She does not speak.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              But alone, in the depths of the Archive, she whispers the names 
              of the erased. She reads their letters aloud. She weeps for people 
              she has never met — and loves them anyway.
            </p>
          </div>

          {/* Secret */}
          <div className="opacity-0 animate-fade-slow border border-border/30 p-6 md:p-10 max-w-sm" style={{ animationDelay: '1500ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mb-4">A Secret She Keeps</p>
            <p className="archive-prose text-center italic text-sm md:text-base">
              Her bloodline descends from the first erased queen — Elara the Last, 
              who loved a poet and was unmade for it. The Archivist carries 
              that queen's blood. She carries that queen's name.
            </p>
            <p className="archive-prose text-center italic text-sm md:text-base mt-4 text-ash/60">
              She has never spoken it aloud.
            </p>
          </div>

          {/* Character details */}
          <div className="opacity-0 animate-fade-slow py-4 md:py-8 space-y-6 md:space-y-8" style={{ animationDelay: '1700ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              She does not write stories.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              She guards wounds.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash">
              And she waits — though she does not know for what.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '1900ms' }}>
            "She has loved people she has never met."
          </blockquote>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '2100ms' }} />

          {/* Transition */}
          <p className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow max-w-xs" style={{ animationDelay: '2300ms' }}>
            One night, a door opens that should not.
            <br /><br />
            The Heir descends into the Archive seeking truth.
            <br /><br />
            There, they meet.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-archive"
        prevLabel="The Archive"
        nextPath="/the-meeting"
        nextLabel="The Meeting"
        entryNumber="Archive Entry VI"
      />
    </ArchiveLayout>
  );
};

export default TheArchivist;
