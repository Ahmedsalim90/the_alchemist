import { useEffect, useRef } from 'react'

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let width = 0
    let height = 0
    let particles = []
    let last = 0

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = Math.min(52, Math.max(16, Math.round(width * height / 28000)))
      particles = Array.from({ length: count }, (_, i) => ({
        x: ((i * 618.034) % 1000) / 1000 * width,
        y: ((i * 317.731) % 1000) / 1000 * height,
        speed: 7 + (i % 7) * 2.5,
        radius: i % 9 === 0 ? 1.7 : 0.8 + (i % 3) * 0.25,
        phase: i * 1.7,
      }))
      draw(0)
    }

    function draw(dt) {
      context.clearRect(0, 0, width, height)
      const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim()
      for (const particle of particles) {
        particle.y += reduced.matches ? 0 : particle.speed * dt
        if (particle.y > height + 12) particle.y = -12
        const x = particle.x + Math.sin(particle.y / 120 + particle.phase) * 8
        context.fillStyle = `rgba(${color}, ${particle.radius > 1.5 ? 0.42 : 0.24})`
        context.beginPath()
        context.arc(x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
        if (particle.radius > 1.5) {
          context.strokeStyle = `rgba(${color}, 0.13)`
          context.lineWidth = 0.7
          context.beginPath()
          context.moveTo(x, particle.y - 17)
          context.lineTo(x, particle.y - 4)
          context.stroke()
        }
      }
    }

    function tick(now) {
      const dt = Math.min((now - (last || now)) / 1000, 0.05)
      last = now
      draw(dt)
      if (!reduced.matches && !document.hidden) frame = requestAnimationFrame(tick)
    }

    function onVisibility() {
      cancelAnimationFrame(frame)
      last = 0
      if (!document.hidden) frame = requestAnimationFrame(tick)
    }
    resize()
    if (!reduced.matches) frame = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    const themeObserver = new MutationObserver(() => draw(0))
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      themeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="particle-field" />
}

export default ParticleField