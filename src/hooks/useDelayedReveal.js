import { useEffect, useState } from 'react'

function useDelayedReveal(delay = 500) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setRevealed(true)
      return
    }

    const timeout = setTimeout(() => setRevealed(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return revealed
}

export default useDelayedReveal