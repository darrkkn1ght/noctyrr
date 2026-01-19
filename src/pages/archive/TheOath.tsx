import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheOath = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Oath
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* The moment - sparse, ceremonial */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              In the lowest chamber of the Archive, where no decree has ever 
              reached, she stands before the final record — the original 
              documentation of the First Silence, the founding lie of Noctyrr Vale.
            </p>
          </div>

          {/* Her choice */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '900ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              She does not wait for him to save her.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              She does not ask permission.
            </p>
            <p className="archive-prose text-center text-sm md:text-base italic text-ash">
              She sets it aflame.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1100ms' }} />

          {/* The vow */}
          <div 
            className="opacity-0 animate-fade-slow border border-border/20 p-6 md:p-12 max-w-md"
            style={{ animationDelay: '1300ms' }}
          >
            <p className="archive-entry-marker text-[0.5rem] md:text-xs mb-6 md:mb-8">A Vow Whispered, Not Spoken</p>
            <p className="archive-quote text-center text-sm md:text-lg">
              "If this love must be erased,
              <br />
              let it be erased by my hand.
              <br />
              <br />
              Not by theirs.
              <br />
              <br />
              And if it survives the fire —
              <br />
              then it was never meant to burn."
            </p>
          </div>

          {/* What happens */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '1600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The flames take the record. They take the lie.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              They do not take her.
            </p>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1800ms' }} />

          {/* The consequence */}
          <p className="archive-prose text-sm md:text-base opacity-0 animate-fade-slow text-center" style={{ animationDelay: '2000ms' }}>
            The fire does not spread.
          </p>
          
          <p className="archive-prose text-sm md:text-base opacity-0 animate-fade-slow text-center" style={{ animationDelay: '2200ms' }}>
            It purifies.
          </p>

          <p className="archive-prose text-sm md:text-base opacity-0 animate-fade-slow text-center" style={{ animationDelay: '2400ms' }}>
            And somewhere above, the bells stop ringing.
          </p>

          {/* Closing */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '2600ms' }}>
            "History will call this treason."
          </blockquote>

          {/* Final note */}
          <p className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow" style={{ animationDelay: '2800ms' }}>
            The Archivist does not care.
            <br /><br />
            She has chosen.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-choice"
        prevLabel="The Choice"
        nextPath="/the-fall"
        nextLabel="The Fall"
        entryNumber="Archive Entry XI"
      />
    </ArchiveLayout>
  );
};

export default TheOath;
