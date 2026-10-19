import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={visible ? "back-to-top visible" : "back-to-top"}
      onClick={scrollToTop}
      aria-label="Remonter en haut de la page"
    >
      <FaArrowUp size={18} aria-hidden="true" />
    </button>
  )
}

export default BackToTop