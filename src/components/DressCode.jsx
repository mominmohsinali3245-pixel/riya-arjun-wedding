import useReveal from '../hooks/useReveal.js'

const DAYS = [
  {
    day: 'Day 1 · Haldi',
    title: 'Sunshine & Marigold',
    note: 'Bright yellows and florals — pastels welcome, whites best avoided.',
    colors: ['#f2c14e', '#f4a52d', '#fbe19b'],
  },
  {
    day: 'Day 2 · Mehendi',
    title: 'Emerald Garden',
    note: 'Greens, teals and pops of coral for a garden-party feel.',
    colors: ['#3f6b4a', '#7fa88a', '#e08a6b'],
  },
  {
    day: 'Day 3 · Mayra',
    title: 'Royal Blue & Ivory',
    note: 'Rich blues with soft ivory accents — semi-formal Indian wear.',
    colors: ['#2a4d7a', '#5b82ad', '#f3ede1'],
  },
  {
    day: 'Day 4 · Sangeet',
    title: 'Jewel & Antique Gold',
    note: 'Magenta, plum and shimmer gold — dance-floor ready.',
    colors: ['#8e2a5b', '#c6a15b', '#5a2a52'],
  },
  {
    day: 'Day 5 · Wedding',
    title: 'Royal Red & Antique Gold',
    note: 'Traditional attire in reds, maroons and heirloom jewellery.',
    colors: ['#6d1524', '#c6a15b', '#8a1f30'],
  },
]

export default function DressCode() {
  const [ref, visible] = useReveal()

  return (
    <section id="dresscode" className="dresscode">
      <div className="container">
        <p className="eyebrow">What to Wear</p>
        <h2 className="section-heading">Dress Code</h2>
        <p className="lede">
          A colour guide for each celebration, so you can dress the part at every function.
        </p>

        <div ref={ref} className={`dress-grid reveal ${visible ? 'in-view' : ''}`}>
          {DAYS.map((d) => (
            <div className="dress-card" key={d.day}>
              <p className="d-day">{d.day}</p>
              <h3>{d.title}</h3>
              <p>{d.note}</p>
              <div className="swatches">
                {d.colors.map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
