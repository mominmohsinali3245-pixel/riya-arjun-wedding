import useReveal from '../hooks/useReveal.js'

const MOMENTS = [
  {
    date: 'August 2019',
    title: 'First Meeting',
    text: 'A chance encounter at a Mumbai bookshop turned into hours of conversation — neither of them wanted it to end.',
  },
  {
    date: 'March 2021',
    title: 'The First Trip',
    text: 'A weekend in the hills of Coorg, and somewhere between the coffee plantations, they knew this was different.',
  },
  {
    date: 'January 2024',
    title: 'The Proposal',
    text: 'On the ghats of Udaipur at sunset, with the lake turning gold, Arjun asked and Riya said yes before he finished.',
  },
  {
    date: 'September 2026',
    title: 'Happily Ever After',
    text: 'Five days, one royal city, and the people they love most — the next chapter begins in Udaipur.',
  },
]

export default function Story() {
  const [ref, visible] = useReveal()

  return (
    <section id="story" className="story">
      <div className="container">
        <p className="eyebrow">A Glimpse Into Our Journey</p>
        <h2 className="section-heading">Our Love Story</h2>
        <div className="divider-mark" style={{ color: 'var(--gold)' }}>
          <span className="line" /><span className="dot" /><span className="line" />
        </div>
        <p className="lede">
          From a fleeting glance to a lifetime promise — every chapter brought us closer.
        </p>

        <div ref={ref} className={`timeline reveal ${visible ? 'in-view' : ''}`}>
          {MOMENTS.map((m) => (
            <div className="timeline-item" key={m.title}>
              <span className="node" />
              <p className="t-date">{m.date}</p>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
