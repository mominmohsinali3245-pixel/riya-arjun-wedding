import { IconPlane, IconPassport, IconBed, IconSun, IconCloud } from './Icons.jsx'
import useReveal from '../hooks/useReveal.js'

const CARDS = [
  {
    icon: IconPlane,
    title: 'International Hubs',
    text: 'Fly into Delhi (DEL) or Mumbai (BOM), both offering frequent onward flights to Udaipur (UDR).',
  },
  {
    icon: IconPassport,
    title: 'Visa Tips',
    text: 'Most international guests are eligible for an e-visa — we recommend applying at least 3 weeks before travel.',
  },
  {
    icon: IconBed,
    title: 'Stay Suggestions',
    text: 'Block rooms early at The Oberoi Udaivilas, Leela Palace or Trident Udaipur — special wedding rates apply.',
  },
]

const WEATHER = [
  { day: '12 Sept', icon: IconSun, temp: '29° / 23°', note: 'Sunny morning' },
  { day: '13 Sept', icon: IconCloud, temp: '28° / 23°', note: 'Partly cloudy' },
  { day: '14 Sept', icon: IconCloud, temp: '27° / 22°', note: 'Light showers possible' },
  { day: '15 Sept', icon: IconSun, temp: '30° / 23°', note: 'Pleasant evening' },
  { day: '16 Sept', icon: IconSun, temp: '30° / 24°', note: 'Clear skies' },
]

export default function Travel() {
  const [ref, visible] = useReveal()

  return (
    <section id="travel" className="travel">
      <div className="container">
        <p className="eyebrow">Travelling From Abroad</p>
        <h2 className="section-heading">Getting Here</h2>

        <div ref={ref} className={`travel-grid reveal ${visible ? 'in-view' : ''}`}>
          {CARDS.map((c) => {
            const Icon = c.icon
            return (
              <div className="travel-card" key={c.title}>
                <Icon className="icon" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            )
          })}
        </div>

        <div className="weather-strip">
          <p className="w-title">Udaipur Weather</p>
          <p className="w-sub">
            A typical mid-September outlook — warm, sunny days and breezy evenings by the lake.
          </p>
          <div className="weather-cards">
            {WEATHER.map((w) => {
              const Icon = w.icon
              return (
                <div className="w-card" key={w.day}>
                  <p className="w-day">{w.day}</p>
                  <Icon />
                  <p className="w-temp">{w.temp}</p>
                  <p className="w-note">{w.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
