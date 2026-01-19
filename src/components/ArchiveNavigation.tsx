import ArchiveLink from "./ArchiveLink";

interface ArchiveNavigationProps {
  prevPath?: string;
  prevLabel?: string;
  nextPath?: string;
  nextLabel?: string;
  entryNumber?: string;
}

const ArchiveNavigation = ({
  prevPath,
  prevLabel = "Back",
  nextPath,
  nextLabel = "Continue",
  entryNumber,
}: ArchiveNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 opacity-0 animate-fade-delayed-3 bg-gradient-to-t from-background via-background/80 to-transparent">
      <div className="flex items-center justify-between px-4 py-6 md:px-16 md:py-8">
        {/* Back navigation */}
        <div className="w-1/3">
          {prevPath && (
            <ArchiveLink to={prevPath} className="archive-nav inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <span className="text-muted-foreground">←</span>
              <span className="hidden sm:inline">{prevLabel}</span>
              <span className="sm:hidden">Back</span>
            </ArchiveLink>
          )}
        </div>

        {/* Entry marker */}
        <div className="w-1/3 flex justify-center">
          {entryNumber && (
            <span className="archive-entry-marker text-[0.5rem] md:text-xs">{entryNumber}</span>
          )}
        </div>

        {/* Next navigation */}
        <div className="w-1/3 flex justify-end">
          {nextPath && (
            <ArchiveLink to={nextPath} className="archive-nav inline-flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <span className="hidden sm:inline">{nextLabel}</span>
              <span className="sm:hidden">Next</span>
              <span className="text-muted-foreground">→</span>
            </ArchiveLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ArchiveNavigation;
