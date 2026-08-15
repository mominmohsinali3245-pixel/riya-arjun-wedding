import { useEffect, useState } from 'react'
import { IconMenu, IconClose } from './Icons.jsx'

const LINKS = [
  { href: '#story', label: 'Our Story' },
  { href: '#countdown', label: 'Countdown' },
  { href: '#events', label: 'Events' },
  { href: '#venue', label: 'Venue' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#travel', label: 'Travel' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="brand">R &amp; A</a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <IconClose width={26} height={26} /> : <IconMenu width={26} height={26} />}
      </button>
    </nav>
  )
}
