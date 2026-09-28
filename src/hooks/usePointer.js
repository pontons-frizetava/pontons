import { useEffect, useState } from 'react'

/** Normalized pointer position in the [-1, 1] range, relative to the viewport. */
export function usePointer() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      setPointer({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return pointer
}
