import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const erasedNames = ["Seraphine of the Eastern Tower", "Lord Valdris the Unnamed", "The Twin Consorts of Year 412", "Maren, called the Beloved", "Prince Aldric the Forgotten", "The Handmaiden of Secrets", "Duke Caelum and Lady Vesper", "Queen Elara the Last", "The Nameless Heir of Winter", "Confessor Theron", "Lady Isolde of Ashford", "The Poet of the Black Gate", "King Malachar III", "The Woman He Loved", "Their Children"];

const TheErased = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 max-w-2xl mx-auto px-4">
          <h1 className="archive-title text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-slow" style={{ animationDelay: '200ms' }}>The Erased</h1>
          <p className="archive-subtitle text-[0.6rem] md:text-xs opacity-0 animate-fade-slow" style={{ animationDelay: '400ms' }}>Names Lost to the Archive</p>
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '600ms' }} />
          <div className="w-full max-w-md opacity-0 animate-fade-slow" style={{ animationDelay: '800ms' }}>
            {erasedNames.map((name) => (
              <div key={name} className="border-b border-border/50 py-3 md:py-4 first:border-t">
                <p className="text-muted-foreground/70 text-xs md:text-sm tracking-wide hover:text-muted-foreground transition-colors duration-800ms">{name}</p>
              </div>
            ))}
          </div>
          <div className="opacity-0 animate-fade-slow space-y-4" style={{ animationDelay: '1200ms' }}>
            <p className="archive-entry-marker animate-pulse-ember">⋮</p>
            <p className="archive-entry-marker text-[0.5rem] md:text-xs">The list continues.</p>
          </div>
          <div className="archive-divider opacity-0 animate-fade-slow" style={{ animationDelay: '1400ms' }} />
          <blockquote className="archive-quote text-base md:text-lg opacity-0 animate-fade-slow" style={{ animationDelay: '1600ms' }}>"Some of these were kings."</blockquote>
        </div>
      </div>
      <ArchiveNavigation prevPath="/the-meeting" prevLabel="The Meeting" nextPath="/the-secret" nextLabel="The Secret" entryNumber="Archive Entry VIII" />
    </ArchiveLayout>
  );
};

export default TheErased;
