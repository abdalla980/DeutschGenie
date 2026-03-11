import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './Header.module.css'

const Header = () => {
  const headerRef = useRef(null)
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

  const handleDownloadClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const downloadSection = document.querySelector('[data-section="download"]')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.container}>
        <div ref={logoRef} className={styles.logo}>
          <img src="/images/logo.png" alt="DeutschGenie logo" className={styles.logoImg} />
        </div>

        <nav ref={navRef} className={styles.nav} aria-label="Main navigation">
          <a href="#how-it-works" className={styles.navLink}>How it Works</a>
          <a href="#results" className={styles.navLink}>Results</a>
          <a href="#faq" className={styles.navLink}>FAQs</a>
        </nav>

        <button
          ref={ctaRef}
          className={styles.ctaButton}
          onClick={handleDownloadClick}
          aria-label="Download DeutschGenie app"
        >
          Download now
        </button>

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
          <button className={styles.mobileCta} onClick={handleDownloadClick}>Download now</button>
        </div>
      )}
    </header>
  )
}

export default Header
