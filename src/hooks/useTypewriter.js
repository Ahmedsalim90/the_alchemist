import { useEffect, useState } from 'react'

const FIRST_WORD = 'DESIGNER'
const FINAL_ROLE = 'FULL-STACK & MOBILE DEVELOPER'

function useTypewriter() {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setText(FINAL_ROLE)
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

    after(300, () => {
      typeWord(FIRST_WORD, 90, () => {
        after(700, () => {
          eraseWord(FIRST_WORD, 45, () => {
            after(300, () => {
              typeWord(FINAL_ROLE, 55, () => setDone(true))
            })
          })
        })
      })
    })

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return { text, done }
}

export default useTypewriter