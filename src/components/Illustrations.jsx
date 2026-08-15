// Original hand-drawn-style SVG illustrations (no external images) —
// keeps the site copyright-safe while giving each section real visual richness.

export const IllustrationSkyline = (props) => (
  <svg viewBox="0 0 900 260" fill="none" {...props}>
    <defs>
      <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    {/* water line */}
    <rect x="0" y="210" width="900" height="50" fill="currentColor" opacity="0.12" />
    <path d="M0 210c60 6 90-6 150 0s90 6 150 0 90-6 150 0 90 6 150 0 90-6 150 0 90 6 150 0" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />

    {/* domes & palace silhouette */}
    <g fill="url(#skyFade)">
      <path d="M40 210V150h18v60H40Z" />
      <circle cx="49" cy="142" r="10" />
      <path d="M90 210v-90h50v90H90Z" />
      <circle cx="98" cy="112" r="7" /><circle cx="132" cy="112" r="7" />
      <path d="M170 210V130c0-22 18-38 40-38s40 16 40 38v80H170Z" />
      <circle cx="210" cy="84" r="11" />
      <path d="M270 210v-70h26v70h-26Z" />
      <path d="M320 210V120c0-30 24-52 54-52s54 22 54 52v90H320Z" />
      <circle cx="374" cy="60" r="13" />
      <path d="M410 210v-55h20v55h-20Z" />
      <path d="M450 210V158h16v52h-16Z" />
      <path d="M480 210V140c0-18 15-32 34-32s34 14 34 32v70H480Z" />
      <circle cx="514" cy="102" r="9" />
      <path d="M560 210v-64h22v64h-22Z" />
      <path d="M600 210V145c0-20 17-36 38-36s38 16 38 36v65H600Z" />
      <circle cx="638" cy="103" r="10" />
      <path d="M690 210v-48h18v48h-18Z" />
      <path d="M725 210V158h16v52h-16Z" />
      <path d="M760 210V130c0-22 18-38 40-38s40 16 40 38v80H760Z" />
      <circle cx="800" cy="84" r="11" />
      <path d="M850 210v-40h16v40h-16Z" />
    </g>

    {/* birds */}
    <path d="M120 46q8-8 16 0M300 30q8-8 16 0M700 44q8-8 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
  </svg>
)

export const IllustrationLakeMoon = (props) => (
  <svg viewBox="0 0 400 400" fill="none" {...props}>
    <circle cx="200" cy="130" r="62" fill="currentColor" opacity="0.85" />
    <circle cx="222" cy="112" r="60" fill="var(--maroon-deep)" />
    <path d="M40 260c60-14 90 10 150 0s90-14 150 0 90 14 150 0" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    <path d="M40 286c60-14 90 10 150 0s90-14 150 0 90 14 150 0" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
    <path d="M40 312c60-14 90 10 150 0s90-14 150 0 90 14 150 0" stroke="currentColor" strokeWidth="1.4" opacity="0.22" />
    <g opacity="0.6">
      <circle cx="70" cy="60" r="1.6" fill="currentColor" />
      <circle cx="120" cy="40" r="1.6" fill="currentColor" />
      <circle cx="320" cy="55" r="1.6" fill="currentColor" />
      <circle cx="350" cy="90" r="1.6" fill="currentColor" />
      <circle cx="60" cy="110" r="1.6" fill="currentColor" />
    </g>
  </svg>
)

export const IllustrationMehndi = (props) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M100 20c30 20 46 44 46 74 0 30-22 52-46 66-24-14-46-36-46-66 0-30 16-54 46-74Z" />
    <path d="M100 46c14 12 22 26 22 44 0 18-10 32-22 42-12-10-22-24-22-42 0-18 8-32 22-44Z" opacity="0.7" />
    <circle cx="100" cy="88" r="8" opacity="0.7" />
    <path d="M60 150c14-6 26-6 40 0s26 6 40 0" opacity="0.6" />
    <path d="M100 160v20M85 176l30 8M115 176l-30 8" opacity="0.5" />
  </svg>
)

export const IllustrationDiya = (props) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M100 70c8 14 14 24 14 34a14 14 0 0 1-28 0c0-10 6-20 14-34Z" />
    <path d="M40 140c14-14 40-20 60-20s46 6 60 20c-10 14-34 22-60 22s-50-8-60-22Z" />
    <path d="M60 140c8 6 24 10 40 10s32-4 40-10" opacity="0.6" />
    <circle cx="100" cy="60" r="3" opacity="0.8" />
  </svg>
)

export const IllustrationDance = (props) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M80 40a12 12 0 1 1 0 .1Z" />
    <path d="M80 54c-10 10-14 22-10 34l14 30" strokeLinecap="round" />
    <path d="M84 78c14-6 26-2 34 8" strokeLinecap="round" />
    <path d="M84 118c-4 14-2 28 6 40" strokeLinecap="round" />
    <path d="M84 118c10 8 22 10 34 6" strokeLinecap="round" />
    <path d="M40 40q60-16 120 0" opacity="0.4" strokeDasharray="2 6" />
  </svg>
)

export const IllustrationLantern = (props) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M85 40h30M100 40v14" strokeLinecap="round" />
    <path d="M76 54h48l-8 70a16 16 0 0 1-32 0l-8-70Z" />
    <path d="M76 54c8 6 40 6 48 0" opacity="0.6" />
    <path d="M84 84h32M86 104h28" opacity="0.5" />
    <path d="M100 140v18" strokeLinecap="round" />
  </svg>
)

export const IllustrationSteps = (props) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M40 160h30v-20h30v-20h30v-20h30v-20h20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 160v10h140v-10" opacity="0.5" />
    <circle cx="150" cy="60" r="10" opacity="0.7" />
  </svg>
)

export const IllustrationHands = (props) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M60 120c-6-14-4-30 6-40M60 120c4 10 14 16 24 14M60 120l-4 22" strokeLinecap="round" />
    <path d="M140 120c6-14 4-30-6-40M140 120c-4 10-14 16-24 14M140 120l4 22" strokeLinecap="round" />
    <path d="M84 134c6 6 26 6 32 0" strokeLinecap="round" />
    <circle cx="100" cy="150" r="4" opacity="0.7" />
  </svg>
)

export const IllustrationSunset = (props) => (
  <svg viewBox="0 0 200 200" fill="none" {...props}>
    <circle cx="100" cy="110" r="34" fill="currentColor" opacity="0.85" />
    <path d="M30 150c20-8 30 8 50 0s30 8 50 0 30-8 40 0" stroke="currentColor" strokeWidth="1.3" opacity="0.6" fill="none" />
    <path d="M30 168c20-8 30 8 50 0s30 8 50 0 30-8 40 0" stroke="currentColor" strokeWidth="1.3" opacity="0.35" fill="none" />
  </svg>
)
