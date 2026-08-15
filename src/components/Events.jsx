import { IconCalendar, IconClock, IconPin, IconFlame, IconHenna, IconDrum, IconMusic, IconRings } from './Icons.jsx'
import useReveal from '../hooks/useReveal.js'

const EVENTS = [
  {
    name: 'Haldi',
    icon: IconFlame,
    date: 'Sat, 12 Sept 2026',
    time: '10:00 AM onward',
    place: 'Marigold Lawns, Udaipur Palace',
  },
  {
    name: 'Mehendi',
    icon: IconHenna,
    date: 'Sun, 13 Sept 2026',
    time: '4:00 PM onward',
    place: 'Garden Pavilion, Udaipur Palace',
  },
  {
    name: 'Mayra',
    icon: IconDrum,
    date: 'Mon, 14 Sept 2026',
    time: '6:00 PM onward',
    place: 'Courtyard, Udaipur Palace',
  },
  {
    name: 'Sangeet',
    icon: IconMusic,
    date: 'Tue, 15 Sept 2026',
    time: '7:00 PM onward',
    place: 'Sunset Deck, Udaipur Palace',
  },
  {
    name: 'Wedding',
    icon: IconRings,
    date: 'Wed, 16 Sept 2026',
    time: '7:30 PM onward',
    place: 'Lakeview Mandap, The Oberoi Udaivilas',
  },
]

export default function Events() {
  const [ref, visible] = useReveal()

  return (
    <section id="events" className="events">
      <div className="container">
        <p className="eyebrow">Five Days of Celebration</p>
        <h2 className="section-heading">The Festivities</h2>
        <div className="divider-mark" style={{ color: 'var(--gold)' }}>
          <span className="line" /><span className="dot" /><span className="line" />
        </div>

        <div ref={ref} className={`events-grid reveal ${visible ? 'in-view' : ''}`}>
          {EVENTS.map((e) => {
            const Icon = e.icon
            return (
              <div className="event-card" key={e.name}>
                <Icon className="icon" />
                <h3>{e.name}</h3>
                <div className="e-row"><IconCalendar /> <span>{e.date}</span></div>
                <div className="e-row"><IconClock /> <span>{e.time}</span></div>
                <div className="e-row"><IconPin /> <span>{e.place}</span></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
