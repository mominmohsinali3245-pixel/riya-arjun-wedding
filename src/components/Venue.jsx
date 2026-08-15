import { IconPin, IconCalendar, IconPlane } from './Icons.jsx'
import { IllustrationLakeMoon } from './Illustrations.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Venue() {
  const [ref, visible] = useReveal()

  return (
    <section id="venue" className="venue">
      <div className="container">
        <div ref={ref} className={`venue-wrap reveal ${visible ? 'in-view' : ''}`}>
          <div className="venue-copy">
            <p className="eyebrow">Where We Say I Do</p>
            <h2 className="section-heading">The Oberoi Udaivilas</h2>
            <p>
              Set along the tranquil shores of Lake Pichola, The Oberoi Udaivilas is a palatial
              sanctuary of marble domes, hand-painted frescoes and golden domes — the perfect
              canvas for our forever.
            </p>

            <div className="venue-details">
              <div className="v-row"><IconPin /> <span>Haridas Ki Magri, Udaipur, Rajasthan 313001</span></div>
              <div className="v-row"><IconCalendar /> <span>Valet parking available on-site</span></div>
              <div className="v-row"><IconPlane /> <span>Nearest airport: Maharana Pratap Airport (UDR) — 30 min</span></div>
            </div>

            <a
              className="venue-cta"
              href="https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>

          <div className="venue-art">
            <IllustrationLakeMoon />
          </div>
        </div>
      </div>
    </section>
  )
}
