import React from 'react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
}) => {
  return (
    <div className="min-h-screen bg-white text-black font-courier selection:bg-[#FF0000] selection:text-white flex flex-col">
      {/* 1. TOP NAVIGATION: Pure white, WORK on left, CONTACT on right, matching reference */}
      <header
        id="top-header"
        className="w-full bg-white px-6 sm:px-10 md:px-14 lg:px-16 pt-6 sm:pt-8 md:pt-10 pb-4 flex items-center justify-between transition-all"
      >
        <button
          onClick={onNavigateHome}
          className="font-courier font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer"
          aria-label="View work / return to portfolio"
        >
          WORK
        </button>

        <button
          onClick={onNavigateContact}
          className="font-courier font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer"
          aria-label="Navigate to contact section"
        >
          CONTACT
        </button>
      </header>

      {/* 2. MAIN ABOUT SECTION: 2-column layout matching uploaded reference */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-4 sm:pt-6 md:pt-8 pb-0 flex flex-col lg:flex-row items-stretch lg:items-end gap-8 lg:gap-12 xl:gap-16">
        {/* LEFT COLUMN: Photo of Harshpreet (Bigger, brought flush to the bottom) */}
        <div className="w-full lg:w-[44%] xl:w-[45%] flex justify-center lg:justify-start shrink-0 lg:sticky lg:bottom-0 lg:self-end pb-0 order-2 lg:order-1">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-none flex justify-center lg:justify-start">
            <img
              src="https://res.cloudinary.com/uybanqfq/image/upload/v1791364994/IMG_0511.png"
              alt="Harshpreet Kaur (Sherry)"
              className="w-full h-auto max-h-[82vh] lg:max-h-[88vh] object-contain object-bottom block select-none -mb-0.5"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('IMG_0511.png')) {
                  target.src = '/Copy-Portfolio-/IMG_0511.png';
                }
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Headline, "You can call me SHERRY", and exact verbatim body copy */}
        <div className="w-full lg:w-[56%] xl:w-[55%] flex flex-col pt-2 sm:pt-4 pb-12 sm:pb-16 md:pb-24 order-1 lg:order-2">
          {/* Main Headline: HELLO, I'M HARSHPREET. (Strictly 1 line, name clickable) */}
          <h1 className="font-anton text-[1.85rem] xs:text-[2.35rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.25rem] xl:text-[5.25rem] uppercase tracking-tight leading-none text-black whitespace-nowrap select-none">
            HELLO, I’M{' '}
            <button
              type="button"
              onClick={onNavigateHome}
              title="Click to return to home page"
              className="font-anton text-black hover:text-[#FF0000] cursor-pointer transition-colors inline-block text-inherit leading-inherit tracking-inherit"
            >
              HARSHPREET.
            </button>
          </h1>

          {/* Subheading row: "You can call me" + "SHERRY" overlapping HARSHPREET just a tad bit */}
          <div className="relative flex items-center gap-x-2 sm:gap-x-4 -mt-2 xs:-mt-3 sm:-mt-5 md:-mt-6 lg:-mt-7 xl:-mt-8 z-10">
            <span className="font-courier text-sm xs:text-base sm:text-xl md:text-2xl lg:text-[1.75rem] text-black font-normal tracking-normal whitespace-nowrap pt-2 sm:pt-4">
              You can call me
            </span>
            <span
              className="font-sprite-graffiti text-[#FF0000] text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.4rem] uppercase leading-none inline-block -rotate-3 select-none drop-shadow-xs"
              style={{
                textShadow: '0 0 1px rgba(255,0,0,0.3)',
              }}
            >
              SHERRY
            </span>
          </div>

          {/* Exact Verbatim Body Copy from User's Reference (Bigger font size & improved readability) */}
          <div className="mt-8 sm:mt-10 md:mt-12 space-y-5 sm:space-y-6 font-courier text-black text-sm sm:text-[15px] md:text-base lg:text-[16.5px] xl:text-[17px] leading-[1.78] sm:leading-[1.82] max-w-2xl">
            <p>
              You just unlocked my secret about page! Here, I claim full bragging rights. Read on to get to know the person behind the briefs.
            </p>

            <p>
              Artistic expression was the anchor to my culturally ambiguous upbringing, with poems and songs as my earliest mediums.
            </p>

            <p>
              While writing my Master’s dissertation, I discovered my endless curiosity for culture and how media shapes it. My research centered around how actively users on social media choose what they see on their feeds—a study that earned me top scores in my Journalism and Mass Communication degree.
            </p>

            <p>
              I started my professional journey in 2020 within the structured corporate environment of TCS Interactive as a Content Writer. That foundation gave me the grounding I needed before diving headfirst into the agency trenches.
            </p>

            <p>
              Somewhere between building always-on content calendars as a Senior Copywriter at Tonic Worldwide and architecting campaigns as a Senior Creative Strategist at Schbang, I found my niche and honed my craft.
            </p>

            <p>
              I did my time spending late nights at the office, surviving pitch seasons, and dozing off on early-morning Mumbai local trains before taking another leap of faith into OLIVER Agency, writing for Unilever accounts as a Senior Copywriter. Winning high-stakes pitches, converting retainers, and steering multi-channel launches pushed me into the role of Brand Lead.
            </p>

            <p>
              But for me, it was never just about climbing a ladder. Every brief, room, and campaign gave me a sharper read on markets, culture, and human behaviour.
            </p>

            <p>
              That's the strategic lens that guides my writing.
            </p>

            <p className="pt-2">
              If I sound like the missing link in your team,{' '}
              <a
                href="mailto:harshpreetkaur1598@gmail.com?subject=Let's%20connect%20%E2%80%94%20Work%20Opportunity"
                className="inline-flex items-center bg-[#FF0000] text-white hover:bg-black font-courier font-bold px-3 py-1 transition-all uppercase tracking-wider text-xs sm:text-sm active:scale-95 cursor-pointer align-baseline shadow-xs"
                title="Email harshpreetkaur1598@gmail.com"
              >
                hit me up!
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
