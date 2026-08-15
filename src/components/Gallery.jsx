import useReveal from '../hooks/useReveal.js'

const MOMENTS = [
  { title: 'By the Lake', src: '/gallery/photo-1.jpg' },
  { title: 'Hand in Hand', src: '/gallery/photo-2.jpg' },
  { title: 'First Dance', src: '/gallery/photo-3.jpg' },
  { title: 'Golden Hour', src: '/gallery/photo-4.jpg' },
  { title: 'Evening Glow', src: '/gallery/photo-5.jpg' },
  { title: 'Palace Steps', src: '/gallery/photo-6.jpg' },
  { title: 'Mehendi Nights', src: '/gallery/photo-7.jpg' },
  { title: 'Warm Beginnings', src: '/gallery/photo-8.jpg' },
  { title: 'Laughter Shared', src: '/gallery/photo-9.jpg' },
  { title: 'Quiet Moments', src: '/gallery/photo-10.jpg' },
  { title: 'Under the Stars', src: '/gallery/photo-11.jpg' },
  { title: 'Together Always', src: '/gallery/photo-12.jpg' },
]

export default function Gallery() {
  const [ref, visible] = useReveal()

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <p className="eyebrow">Cherished Moments</p>
        <h2 className="section-heading">A Few Frames of Us</h2>
        <p className="lede">
          Laughter, love and togetherness — a glimpse into our journey so far.
          Our full photo album will be shared here closer to the day.
        </p>

        <div ref={ref} className={`gallery-grid reveal ${visible ? 'in-view' : ''}`}>
          {MOMENTS.map(({ title, src }) => (
            <div className="g-tile" key={title}>
              <img className="g-art" src={src} alt={title} loading="lazy" />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
