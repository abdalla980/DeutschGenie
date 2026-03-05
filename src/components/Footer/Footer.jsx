import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Footer.module.css'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return
    
    const footerTrigger = gsap.from(footerRef.current, {
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    })

    return () => {
      footerTrigger.scrollTrigger?.kill()
    }
  }, [])

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoD}>D</span>
              <span className={styles.logoG}>G</span>
            </div>
          </div>
          <p className={styles.copyright}>© 2026 DeutschGenie. All rights reserved.</p>
        </div>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <a href="#terms" className={styles.footerLink}>Terms</a>
          <a href="#privacy" className={styles.footerLink}>Privacy</a>
          <a href="#contact" className={styles.footerLink}>Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

