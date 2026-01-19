import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheChoice = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            The Choice
          </h1>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }} />

          {/* The summons - sparse for drama */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The Heir is summoned to take the Crown of Cinders.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              At the same time, the Archivist is ordered to prepare an erasure.
            </p>
            <p className="archive-prose text-center italic text-ash text-sm md:text-base">
              Her own.
            </p>
          </div>

          {/* The context */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '900ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The Council knows. They have always known — they have seen this story 
              before. The Archivist who loves the Heir. The Heir who cannot choose. 
              The kingdom that demands silence.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              They give him until dawn.
            </p>
          </div>

          {/* Vertical divider - taller for drama */}
          <div 
            className="opacity-0 animate-fade-slow w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-border to-transparent"
            style={{ animationDelay: '1100ms' }}
          />

          {/* The choice */}
          <div className="opacity-0 animate-fade-slow space-y-8 md:space-y-12" style={{ animationDelay: '1300ms' }}>
            <p className="archive-subtitle text-[0.6rem] md:text-xs">The Heir must decide</p>
            
            <div className="space-y-4 md:space-y-6">
              <p className="archive-prose text-center text-sm md:text-base">
                Accept the crown.
              </p>
              <p className="text-muted-foreground/50 text-xs md:text-sm">
                Wear the weight of cinders. Rule as his fathers ruled. 
                Allow the Archivist to be erased — her name scratched from 
                every record, her face forgotten, her voice unheard.
              </p>
            </div>

            <p className="text-muted-foreground/30 tracking-widest text-xs md:text-sm">— or —</p>

            <div className="space-y-4 md:space-y-6">
              <p className="archive-prose text-center text-sm md:text-base">
                Reject the kingdom's laws.
              </p>
              <p className="text-muted-foreground/50 text-xs md:text-sm">
                Refuse the crown. Break the pattern. Let Noctyrr Vale fall 
                into whatever chaos follows when silence ends.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1600ms' }} />

          {/* The twist */}
          <div className="opacity-0 animate-fade-slow space-y-6" style={{ animationDelay: '1800ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              He goes to her. In the depths of the Archive, 
              where no decree has ever reached.
            </p>
            <p className="archive-prose text-center text-sm md:text-base">
              He tells her he will refuse. He tells her he chooses her.
            </p>
          </div>

          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '2000ms' }}>
            "The Archivist makes her own choice first."
          </blockquote>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-secret"
        prevLabel="The Secret"
        nextPath="/the-oath"
        nextLabel="The Oath"
        entryNumber="Archive Entry X"
      />
    </ArchiveLayout>
  );
};

export default TheChoice;
