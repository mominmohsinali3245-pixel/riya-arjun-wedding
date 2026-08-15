import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2026-09-16T00:00:00+05:30')

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const cells = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section id="countdown" className="countdown-section">
      <div className="container">
        <p className="eyebrow">The Countdown Begins</p>
        <h2 className="section-heading">Counting the Moments</h2>
        <p className="until">Until forever begins — 16 September 2026</p>

        <div className="countdown-grid">
          {cells.map((c) => (
            <div className="countdown-cell" key={c.label}>
              <div className="num">{String(c.value).padStart(2, '0')}</div>
              <div className="lbl">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
