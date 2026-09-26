import { useEffect, useState } from 'react'

export function useTypedSequence(sequence, startWhen, startDelay = 300, resetKey = '') {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!startWhen) return
    setText('')
    setDone(false)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
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
        if (i < word.length) after(speed, tick)
        else onComplete()
      }
      tick()
    }
    function eraseWord(word, speed, onComplete) {
      let i = word.length
      function tick() {
        i -= 1
        setText(word.slice(0, i))
        if (i > 0) after(speed, tick)
        else onComplete()
      }
      tick()
    }
    function runStep(index) {
      const step = sequence[index]
      typeWord(step.text, step.typeSpeed, () => {
        if (index === sequence.length - 1) {
          setDone(true)
          return
        }
        after(step.holdAfter, () => {
          eraseWord(step.text, step.eraseSpeed, () => after(300, () => runStep(index + 1)))
        })
      })
    }

    after(startDelay, () => runStep(0))
    return () => timeouts.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startWhen, resetKey])

  return { text, done }
}