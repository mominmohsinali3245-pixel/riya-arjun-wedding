import { useEffect, useRef, useState } from 'react'

// Adds a "reveal" fade-up-on-scroll effect to any section.
// Usage: const [ref, visible] = useReveal(); <div ref={ref} className={`reveal ${visible ? 'in-view' : ''}`}>
export default function useReveal(threshold = 0.18) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
