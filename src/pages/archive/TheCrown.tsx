import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheCrown = () => {
  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-14 max-w-xl mx-auto px-4">
          {/* Entry marker */}
          <span 
            className="archive-entry-marker opacity-0 animate-fade-slow"
            style={{ animationDelay: '400ms' }}
          >
            Artifact Record
          </span>

          {/* Title */}
          <h1 
            className="archive-title opacity-0 animate-fade-slow"
            style={{ animationDelay: '800ms' }}
          >
            The Crown of Cinders
          </h1>

          {/* Divider */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '1200ms' }} 
          />

          {/* Origin */}
          <div 
            className="space-y-6 opacity-0 animate-fade-slow"
            style={{ animationDelay: '1600ms' }}
          >
            <h2 className="archive-subtitle">Origin</h2>
            <p className="archive-prose">
              Forged in the year of the First Silence, 
              when the kingdom burned its own heart to survive.
              The crown was cast from blackened silver — 
              metal pulled from the ashes of the old palace.
            </p>
          </div>

          {/* Properties */}
          <div 
            className="space-y-6 opacity-0 animate-fade-slow"
            style={{ animationDelay: '2000ms' }}
          >
            <h2 className="archive-subtitle">Properties</h2>
            <p className="archive-prose">
              The crown cannot be removed until death.
              It grows heavier with each decision made against the heart.
              Some say it whispers. Others say it remembers.
            </p>
          </div>

          {/* Weight record */}
          <div 
            className="w-full border border-border/40 p-6 md:p-8 opacity-0 animate-fade-slow"
            style={{ animationDelay: '2400ms' }}
          >
            <h3 className="archive-subtitle mb-6">Recorded Weights</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between archive-entry-marker text-xs md:text-sm">
                <span>First Sovereign</span>
                <span className="text-muted-foreground">12 ounces</span>
              </div>
              <div className="flex justify-between archive-entry-marker text-xs md:text-sm">
                <span>The Silent King</span>
                <span className="text-muted-foreground">3 pounds</span>
              </div>
              <div className="flex justify-between archive-entry-marker text-xs md:text-sm">
                <span>Queen of Ash</span>
                <span className="text-muted-foreground">7 pounds</span>
              </div>
              <div className="flex justify-between archive-entry-marker text-xs md:text-sm">
                <span>The Last Heir</span>
                <span className="text-muted-foreground">Unknown</span>
              </div>
            </div>
          </div>

          {/* Final note */}
          <blockquote 
            className="archive-quote opacity-0 animate-fade-slow"
            style={{ animationDelay: '2800ms' }}
          >
            "The ruler does not sit.
            <br />
            They endure."
          </blockquote>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-black-council"
        prevLabel="The Council"
        nextPath="/letters-never-sent"
        nextLabel="Letters"
        entryNumber="Supplemental II"
      />
    </ArchiveLayout>
  );
};

export default TheCrown;
