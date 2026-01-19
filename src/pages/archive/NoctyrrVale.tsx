import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const NoctyrrVale = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 max-w-2xl px-4">
          {/* Title */}
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>
            Noctyrr Vale
          </h1>

          {/* Subtitle */}
          <p className="archive-subtitle text-[0.6rem] md:text-xs opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }}>
            The Kingdom of Eternal Dusk
          </p>

          {/* Divider */}
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }} />

          {/* Rich description */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-slow" style={{ animationDelay: '800ms' }}>
            <p className="archive-prose text-center text-sm md:text-base">
              The kingdom stands as it has for seven generations — carved from black stone, 
              veiled in mist that never lifts. The sky here holds no stars, only the heavy 
              grey of clouds that have forgotten how to part.
            </p>
            
            <p className="archive-prose text-center text-sm md:text-base">
              At night, the bells begin. Deep bronze voices that echo through empty streets, 
              counting hours that seem to stretch longer than they should. The people draw 
              their curtains. They light their candles — it is law. They do not look outside.
            </p>

            <p className="archive-prose text-center text-sm md:text-base">
              Black banners hang from every tower, every gate, every bridge. They do not 
              move because the wind here has learned to be still. To be still is to survive.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="archive-divider-vertical opacity-0 animate-fade-slow" style={{ animationDelay: '1000ms' }} />

          {/* The atmosphere */}
          <div className="space-y-6 opacity-0 animate-fade-slow" style={{ animationDelay: '1200ms' }}>
            <p className="archive-prose text-center text-sm md:text-base italic">
              Those who visit — and few do — speak of the weight. Not of stone or 
              architecture, but of silence. The silence of words never spoken. 
              The silence of names never called.
            </p>

            <p className="archive-prose text-center text-sm md:text-base italic">
              The silence of love that was, and then was not.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '1400ms' }}>
            "The dark here is not cruel. It is patient."
          </blockquote>

          {/* Details */}
          <div 
            className="opacity-0 animate-fade-slow grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-8 w-full max-w-xl"
            style={{ animationDelay: '1600ms' }}
          >
            <div className="text-center space-y-2">
              <span className="archive-entry-marker text-[0.5rem] md:text-xs">Founded</span>
              <p className="text-muted-foreground font-heading text-xs md:text-sm tracking-widest">827 AE</p>
            </div>
            <div className="text-center space-y-2">
              <span className="archive-entry-marker text-[0.5rem] md:text-xs">Rulers Erased</span>
              <p className="text-muted-foreground font-heading text-xs md:text-sm tracking-widest">XIII</p>
            </div>
            <div className="text-center space-y-2">
              <span className="archive-entry-marker text-[0.5rem] md:text-xs">Current Era</span>
              <p className="text-muted-foreground font-heading text-xs md:text-sm tracking-widest">Silence</p>
            </div>
          </div>

          {/* Final note */}
          <p className="archive-entry-marker text-[0.5rem] md:text-xs opacity-0 animate-fade-slow max-w-sm" style={{ animationDelay: '1800ms' }}>
            This is the kingdom that chose order over feeling. 
            Structure over passion. Survival over joy.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-decree"
        prevLabel="The Decree"
        nextPath="/the-throne"
        nextLabel="The Throne"
        entryNumber="Archive Entry III"
      />
    </ArchiveLayout>
  );
};

export default NoctyrrVale;
