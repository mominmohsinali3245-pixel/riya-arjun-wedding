import { IconCalendar, IconPin } from './Icons.jsx'
import { IllustrationSkyline } from './Illustrations.jsx'

const CORNER = (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M6 6c30 0 45 6 60 20M6 6c0 30 6 45 20 60M6 6h34M6 6v34" strokeLinecap="round" />
    <circle cx="6" cy="6" r="3" fill="currentColor" stroke="none" />
  </svg>
)

export default function Hero({ open, onOpen }) {
  return (
    <header id="top" className="hero">
      {/* ambient floating light specks */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="ambient-dot"
          style={{
            width: `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            top: `${8 + ((i * 37) % 84)}%`,
            left: `${4 + ((i * 53) % 92)}%`,
            animationDelay: `${(i % 7) * 0.6}s`,
          }}
        />
      ))}

      <IllustrationSkyline className="hero-skyline" />

      <span className="hero-frame-corner tl">{CORNER}</span>
      <span className="hero-frame-corner tr">{CORNER}</span>
      <span className="hero-frame-corner bl">{CORNER}</span>
      <span className="hero-frame-corner br">{CORNER}</span>

      {!open && (
        <div
          className="envelope-stage"
          onClick={onOpen}
          role="button"
          tabIndex={0}
          aria-label="Open the wedding invitation"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onOpen()
          }}
        >
          <div className="envelope">
            <div className="body-shade" />
            <div className="card-inside">
              <div>
                <div className="card-eyebrow">An Invitation Awaits</div>
                <div className="card-names">Riya &amp; Arjun</div>
              </div>
            </div>
            <div className="flap" />
            <div className="seal">R+A</div>
          </div>
          <p className="prompt-text">Tap the seal to open</p>
        </div>
      )}

      <div className={`hero-content ${open ? 'visible' : ''}`}>
        <p className="eyebrow">Together with their families</p>
        <h1 className="names">
          Riya
          <span className="amp">&amp;</span>
          Arjun
        </h1>
        <p className="tagline">
          "Two souls, one heart, woven by destiny — request the joy of your presence as we begin our forever."
        </p>
        <div className="meta-row">
          <span className="meta-pill"><IconCalendar width={15} height={15} /> 12–16 September 2026</span>
          <span className="meta-pill"><IconPin width={15} height={15} /> Udaipur, India</span>
        </div>
        <a href="#story" className="scroll-cue">
          <span>Begin the story</span>
          <span className="stem" />
        </a>
      </div>
    </header>
  )
}
