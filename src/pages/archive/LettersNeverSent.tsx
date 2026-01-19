import ArchiveLayout from "@/components/ArchiveLayout";
import ArchiveNavigation from "@/components/ArchiveNavigation";

const LettersNeverSent = () => {
  const letters = [
    {
      fragment: "I have learned your name. I will never speak it. But I write it here, in ink that fades — so that for one moment, you exist outside the silence.",
      attribution: "— Unsigned, Year of the Third Erasure"
    },
    {
      fragment: "You asked me what I dream of. I did not answer. But I will tell you now: I dream of a room with no doors. And you are there. And we are not hiding.",
      attribution: "— Found beneath a floorboard, Royal Quarters"
    },
    {
      fragment: "If they erase me, remember this: I chose you. Not the kingdom. Not the crown. You. And that choice was the only freedom I ever had.",
      attribution: "— Recovered from ash, Sender unknown"
    },
    {
      fragment: "The bells rang all night. I counted them. Forty-seven. One for every day I have known you. One for every day I have lied about knowing you.",
      attribution: "— Margin note, Archive Ledger VII"
    },
    {
      fragment: "Do not mourn me. I was never here. That is what they will say. But you will know. And that is enough.",
      attribution: "— Final correspondence, Sealed"
    },
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
            Recovered Fragments
          </span>

          {/* Title */}
          <h1 
            className="archive-title opacity-0 animate-fade-slow text-xl md:text-2xl lg:text-3xl"
            style={{ animationDelay: '800ms' }}
          >
            Letters Never Sent
          </h1>

          {/* Divider */}
          <div 
            className="archive-divider opacity-0 animate-fade-slow" 
            style={{ animationDelay: '1200ms' }} 
          />

          {/* Letters */}
          <div className="space-y-12 md:space-y-16 w-full">
            {letters.map((letter, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-slow space-y-4"
                style={{ animationDelay: `${1600 + (index * 400)}ms` }}
              >
                <blockquote className="archive-prose italic text-ash/80 text-base md:text-lg leading-relaxed">
                  "{letter.fragment}"
                </blockquote>
                <p className="archive-entry-marker text-xs">
                  {letter.attribution}
                </p>
                {index < letters.length - 1 && (
                  <div className="archive-divider mx-auto mt-8 opacity-30" />
                )}
              </div>
            ))}
          </div>

          {/* Closing note */}
          <p 
            className="archive-entry-marker opacity-0 animate-fade-slow pt-8"
            style={{ animationDelay: '4000ms' }}
          >
            These words were never delivered.
            <br />
            They were found. They were kept.
            <br />
            They remain.
          </p>
        </div>
      </div>

      <ArchiveNavigation
        prevPath="/the-crown"
        prevLabel="The Crown"
        nextPath="/"
        nextLabel="Return to Threshold"
        entryNumber="Supplemental III"
      />
    </ArchiveLayout>
  );
};

export default LettersNeverSent;
