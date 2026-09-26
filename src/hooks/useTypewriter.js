import { useEffect, useState } from 'react'

const ROLE_SEQUENCE = [
  { text: 'DESIGNER', typeSpeed: 90, holdAfter: 700, eraseSpeed: 45 },
  { text: 'FULL-STACK & MOBILE DEVELOPER', typeSpeed: 55, holdAfter: 0, eraseSpeed: 0 },
]

const HEADLINE_SEQUENCE = [
  {
    text: 'I TURN REAL-WORLD PROBLEMS\nINTO SOFTWARE.',
    typeSpeed: 55,
    holdAfter: 0,
    eraseSpeed: 0,
  },
]

function useTypedSequence(sequence, startWhen, startDelay = 300) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!startWhen) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const finalText = sequence[sequence.length - 1].text

    if (prefersReducedMotion) {
      setText(finalText)
      setDone(true)
      return
    }

    const timeouts = []
    function after(delay, fn) {
      timeouts.push(setTimeout(fn, delay))
    }

    function typeWord(word, speed, onComplete) {
      let i = 0
      function tick() {
        i += 1
        setText(word.slice(0, i))
        if (i < word.length) {
          after(speed, tick)
        } else {
          onComplete()
        }
      }
      tick()
    }

    function eraseWord(word, speed, onComplete) {
      let i = word.length
      function tick() {
        i -= 1
        setText(word.slice(0, i))
        if (i > 0) {
          after(speed, tick)
        } else {
          onComplete()
        }
      }
      tick()
    }

    function runStep(index) {
      const step = sequence[index]
      typeWord(step.text, step.typeSpeed, () => {
        const isLastStep = index === sequence.length - 1
        if (isLastStep) {
          setDone(true)
          return
        }
        after(step.holdAfter, () => {
          eraseWord(step.text, step.eraseSpeed, () => {
            after(300, () => runStep(index + 1))
          })
        })
      })
    }

    after(startDelay, () => runStep(0))

    return () => timeouts.forEach(clearTimeout)
  }, [startWhen])

  return { text, done }
}

export function useTypewriter() {
  return useTypedSequence(ROLE_SEQUENCE, true, 300)
}

export function useHeadlineTypewriter(startWhen) {
  return useTypedSequence(HEADLINE_SEQUENCE, startWhen, 250)
}

export default useTypewriter