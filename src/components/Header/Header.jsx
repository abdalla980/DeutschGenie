import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './Header.module.css'

const APP_URL = 'https://www.figma.com/design/QrB7vsHSaOpkQC28sIHnm1/DeutschGenie?node-id=0-1&t=O0iBNmm3eIHT8bkC-1'

const Header = () => {
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const ctaRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!logoRef.current || !navRef.current || !ctaRef.current) return

    gsap.set([logoRef.current, ctaRef.current], { opacity: 1 })
    gsap.set(Array.from(navRef.current.children), { opacity: 1 })

    const tl = gsap.timeline()
    tl.from(logoRef.current, { x: -20, duration: 0.6 })
      .from(ctaRef.current, { x: 20, duration: 0.6 }, '-=0.4')
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div ref={logoRef} className={styles.logo}>
          <img src="/images/logo.png" alt="DeutschGenie" className={styles.logoImg} />
        </div>

        <nav ref={navRef} className={styles.nav} aria-label="Main navigation">
          <a href="#how-it-works" className={styles.navLink}>How it Works</a>
          <a href="#results" className={styles.navLink}>Results</a>
          <a href="#faq" className={styles.navLink}>FAQs</a>
        </nav>

        <a
          ref={ctaRef}
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          aria-label="Download DeutschGenie app"
        >
          Download now
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#how-it-works" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#results" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#faq" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>FAQs</a>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>Download now</a>
        </div>
      )}
    </header>
  )
}

export default Header
