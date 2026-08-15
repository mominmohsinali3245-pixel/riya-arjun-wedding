import { IconHeart } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <IconHeart className="heart-mark" />
        <p className="eyebrow">From the Bottom of Our Hearts</p>
        <h2 className="section-heading">Thank You</h2>
        <p className="message">
          To every soul who has loved us, prayed for us, and journeyed with us — your presence is
          a blessing we will carry forever. May your homes be filled with the same joy you bring
          to ours.
        </p>
        <p className="signature">— Riya &amp; Arjun</p>

        <a className="rsvp-cta" href="mailto:riya.arjun.wedding@example.com?subject=RSVP%20-%20Riya%20%26%20Arjun">
          RSVP by 1 August 2026
        </a>

        <p className="fine-print">Made with love · 12–16 September 2026 · Udaipur, India</p>
      </div>
    </footer>
  )
}
