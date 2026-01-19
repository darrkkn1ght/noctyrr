import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheThrone = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 max-w-2xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Throne of Cinders
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* Description */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The ruler does not sit upon the throne.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              They endure it.
            </p>
          </div>

          {/* Extended narrative */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '800ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The throne room stretches vast and cold, lit only by candles that servants 
              replace every hour. The floor is obsidian, polished to reflect nothing — 
              for mirrors are forbidden in the palace. A king should not see himself. 
              A king should only see forward.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              At its center sits the Throne of Cinders, carved from the bones of the 
              first palace — the one that burned when love still lived openly. 
              They say the seat is never warm. They say the armrests remember the 
              grip of every sovereign who sat before.
            </p>
          </div>

          {/* Crown description */}
          <div className="opacity-0 animate-fade-slow border border-border/30 p-6 md:p-10 max-w-md space-y-4 md:space-y-6" style={{ animationDelay: '1000ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs">The Crown of Cinders</p>
            <div className="archive-prose text-center space-y-4 text-sm md:text-base">
              <p>Forged from blackened silver pulled from the ashes of the old palace.</p>
              <p>It grows heavier with every decision made against the heart.</p>
              <p>It cannot be removed until death.</p>
              <p className="italic text-ash/70">Some say it whispers at night — the names of those it has outlived.</p>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1200ms' }} />

          {/* The Heir */}
          <div className="opacity-0 animate-fade-slow space-y-6" style={{ animationDelay: '1400ms' }}>
            <p className="archive-subtitle text-[0.6rem] md:text-xs">The Crowned Heir</p>
            <p className="archive-prose text-center text-sm md:text-base">
              He was raised without mirrors, without portraits, without a name spoken in affection. 
              He is addressed only by title. He sleeps with armor beside his bed — not for war, 
              but for comfort. The cold metal is the closest thing to an embrace he has known.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              His tutors taught him law. His nurses taught him posture. 
              His father taught him nothing — his father was erased before he could speak.
            </p>
          </div>

          {/* Secret */}
          <div className="opacity-0 animate-fade-slow border-l-2 border-border/40 pl-6 max-w-sm" style={{ animationDelay: '1600ms' }}>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mb-4">A Secret</p>
            <p className="archive-prose text-center text-sm md:text-base italic">
              He dreams of a woman he has never met. She is always reading. 
              He wakes with the taste of ink on his tongue.
            </p>
          </div>

          {/* Closing quote */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow pt-2 md:pt-4" style={{ animationDelay: '1800ms' }}>
            "He has never chosen anything. Not even himself."
          </blockquote>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/noctyrr-vale"
        prevLabel="The Kingdom"
        nextPath="/the-archive"
        nextLabel="The Archive"
        entryNumber="Archive Entry IV"
      />
    </ArchiveLayout>
  );
};

export default TheThrone;
