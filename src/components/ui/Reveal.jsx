import { useEffect, useRef, useState } from 'react'

function Reveal({
  children,
  delay = 0,
  duration = 700,
  distance = 24,
  direction = 'up',
  once = true,
  threshold = 0.15,
  className = '',
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setSkipAnimation(true)
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold])

  const offsets = {
  up: `translateY(${distance}px)`,
  down: `translateY(-${distance}px)`,
  left: `translateX(${distance}px)`,
  right: `translateX(-${distance}px)`,
}

  const style = skipAnimation
    ? undefined
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : offsets[direction],
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
      }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

export default Reveal