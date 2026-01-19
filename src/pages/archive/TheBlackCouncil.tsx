import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const TheBlackCouncil = () => {
  const councilSymbols = [
    { symbol: "◈", name: "The Silence" },
    { symbol: "◇", name: "The Witness" },
    { symbol: "⬡", name: "The Seal" },
    { symbol: "◆", name: "The Shadow" },
    { symbol: "⬢", name: "The Keeper" },
    { symbol: "◊", name: "The Judge" },
    { symbol: "⬣", name: "The Veil" },
  ];

  return (
    <ArchiveLayout>
      <div className="archive-page pb-32">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16 max-w-2xl mx-auto px-4">
          {/* Entry marker */}
          <span 
            className="archive-entry-marker opacity-0 animate-fade-slow"
            style={{ animationDelay: '400ms' }}
          >
            Supplemental Record
          </span>

          {/* Title */}
          <h1 
            className="archive-title opacity-0 animate-fade-slow"
            style={{ animationDelay: '800ms' }}
          >
            The Black Council
          </h1>

          {/* Divider */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '1200ms' }} 
          />

          {/* Introduction */}
          <p 
            className="archive-prose opacity-0 animate-fade-slow"
            style={{ animationDelay: '1600ms' }}
          >
            Seven hooded figures. They do not age.
            They do not speak their names.
            Only their symbols remain.
          </p>

          {/* Council Symbols Grid */}
          <div 
            className="grid grid-cols-1 gap-8 md:gap-10 w-full opacity-0 animate-fade-slow"
            style={{ animationDelay: '2000ms' }}
          >
            {councilSymbols.map((member, index) => (
              <div 
                key={member.name}
                className="flex items-center justify-center gap-6 md:gap-8 py-4 border-b border-border/30 last:border-b-0"
              >
                <span 
                  className="text-3xl md:text-4xl text-ash/60"
                  style={{ fontFamily: 'serif' }}
                >
                  {member.symbol}
                </span>
                <span className="archive-subtitle tracking-[0.3em] md:tracking-[0.5em]">
                  {member.name}
                </span>
              </div>
            ))}
          </div>

          {/* Closing text */}
          <blockquote 
            className="archive-quote opacity-0 animate-fade-slow text-base md:text-lg"
            style={{ animationDelay: '2400ms' }}
          >
            "They approve unions. They authorize erasures.
            <br className="hidden md:block" />
            They decide which stories burn."
          </blockquote>

          {/* Warning */}
          <p 
            className="archive-entry-marker opacity-0 animate-fade-slow"
            style={{ animationDelay: '2800ms' }}
          >
            Their names are forbidden.
            <br />
            Their faces, unknown.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/what-remains"
        prevLabel="What Remains"
        nextPath="/the-crown"
        nextLabel="The Crown"
        entryNumber="Supplemental I"
      />
    </ArchiveLayout>
  );
};

export default TheBlackCouncil;
