import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Countdown from './components/Countdown.jsx'
import Events from './components/Events.jsx'
import Venue from './components/Venue.jsx'
import Gallery from './components/Gallery.jsx'
import DressCode from './components/DressCode.jsx'
import Travel from './components/Travel.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [open, setOpen] = useState(false)

  // Lock page scroll while the envelope hasn't been opened yet,
  // so guests only see the invitation until they tap the seal.
  useEffect(() => {
    document.body.style.overflow = open ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {open && <Navbar />}
      <Hero open={open} onOpen={() => setOpen(true)} />
      {open && (
        <>
          <Story />
          <Countdown />
          <Events />
          <Venue />
          <Gallery />
          <DressCode />
          <Travel />
          <Footer />
        </>
      )}
    </>
  )
}
