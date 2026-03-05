import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Header.module.css'

const Header = () => {
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!logoRef.current || !navRef.current || !ctaRef.current) return
    
    // Set initial visibility
    gsap.set([logoRef.current, ctaRef.current], { opacity: 1 })
    gsap.set(Array.from(navRef.current.children), { opacity: 1 })
    
    const tl = gsap.timeline()
    tl.from(logoRef.current, { x: -20, duration: 0.6 })
      .from(navRef.current.children, { y: -10, duration: 0.4, stagger: 0.1 }, '-=0.3')
      .from(ctaRef.current, { x: 20, duration: 0.6 }, '-=0.4')
  }, [])

  const handleDownloadClick = (e) => {
    e.preventDefault()
    // Scroll to download section
    const downloadSection = document.querySelector('[data-section="download"]')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.container}>
        <div ref={logoRef} className={styles.logo}>
          <div className={styles.logoIcon}>
            <span className={styles.logoD}>D</span>
            <span className={styles.logoG}>G</span>
          </div>
        </div>
        <nav ref={navRef} className={styles.nav} aria-label="Main navigation">
          <a href="#how-it-works" className={styles.navLink}>How it Works</a>
          <a href="#benefits" className={styles.navLink}>Benefits</a>
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
      </div>
    </header>
  )
}

export default Header

