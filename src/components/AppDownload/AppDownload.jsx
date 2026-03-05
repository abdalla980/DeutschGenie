import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './AppDownload.module.css'

gsap.registerPlugin(ScrollTrigger)

const AppDownload = () => {
  const sectionRef = useRef(null)
  const qrContainerRef = useRef(null)
  const decorativeRef = useRef(null)

  useEffect(() => {
    if (!qrContainerRef.current || !decorativeRef.current || !sectionRef.current) return
    
    const triggers = []
    
    const qrTrigger = gsap.from(qrContainerRef.current, {
      y: 30,
      scale: 0.9,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(qrTrigger.scrollTrigger)

    const decorativeTrigger = gsap.from(decorativeRef.current, {
      scale: 0.8,
      rotation: -10,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(decorativeTrigger.scrollTrigger)

    return () => {
      triggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} data-section="download" className={styles.section}>
      <div className={styles.container}>
        <div ref={qrContainerRef} className={styles.qrContainer}>
          <div className={styles.qrCode}>
            <div className={styles.qrPlaceholder}>
              <svg viewBox="0 0 200 200" className={styles.qrSvg}>
                <rect width="200" height="200" fill="white" />
                <rect x="0" y="0" width="60" height="60" fill="black" />
                <rect x="140" y="0" width="60" height="60" fill="black" />
                <rect x="0" y="140" width="60" height="60" fill="black" />
                <rect x="20" y="20" width="20" height="20" fill="white" />
                <rect x="160" y="20" width="20" height="20" fill="white" />
                <rect x="20" y="160" width="20" height="20" fill="white" />
                <rect x="60" y="60" width="10" height="10" fill="black" />
                <rect x="80" y="60" width="10" height="10" fill="black" />
                <rect x="100" y="60" width="10" height="10" fill="black" />
                <rect x="130" y="60" width="10" height="10" fill="black" />
                <rect x="60" y="80" width="10" height="10" fill="black" />
                <rect x="130" y="80" width="10" height="10" fill="black" />
                <rect x="60" y="100" width="10" height="10" fill="black" />
                <rect x="80" y="100" width="10" height="10" fill="black" />
                <rect x="100" y="100" width="10" height="10" fill="black" />
                <rect x="130" y="100" width="10" height="10" fill="black" />
                <rect x="60" y="130" width="10" height="10" fill="black" />
                <rect x="80" y="130" width="10" height="10" fill="black" />
                <rect x="100" y="130" width="10" height="10" fill="black" />
                <rect x="130" y="130" width="10" height="10" fill="black" />
              </svg>
            </div>
            <p className={styles.qrLabel}>App store</p>
          </div>
          <div className={styles.qrCode}>
            <div className={styles.qrPlaceholder}>
              <svg viewBox="0 0 200 200" className={styles.qrSvg}>
                <rect width="200" height="200" fill="white" />
                <rect x="0" y="0" width="60" height="60" fill="black" />
                <rect x="140" y="0" width="60" height="60" fill="black" />
                <rect x="0" y="140" width="60" height="60" fill="black" />
                <rect x="20" y="20" width="20" height="20" fill="white" />
                <rect x="160" y="20" width="20" height="20" fill="white" />
                <rect x="20" y="160" width="20" height="20" fill="white" />
                <rect x="60" y="60" width="10" height="10" fill="black" />
                <rect x="80" y="60" width="10" height="10" fill="black" />
                <rect x="100" y="60" width="10" height="10" fill="black" />
                <rect x="130" y="60" width="10" height="10" fill="black" />
                <rect x="60" y="80" width="10" height="10" fill="black" />
                <rect x="130" y="80" width="10" height="10" fill="black" />
                <rect x="60" y="100" width="10" height="10" fill="black" />
                <rect x="80" y="100" width="10" height="10" fill="black" />
                <rect x="100" y="100" width="10" height="10" fill="black" />
                <rect x="130" y="100" width="10" height="10" fill="black" />
                <rect x="60" y="130" width="10" height="10" fill="black" />
                <rect x="80" y="130" width="10" height="10" fill="black" />
                <rect x="100" y="130" width="10" height="10" fill="black" />
                <rect x="130" y="130" width="10" height="10" fill="black" />
              </svg>
            </div>
            <p className={styles.qrLabel}>Google Play</p>
          </div>
        </div>
        <div ref={decorativeRef} className={styles.decorative}></div>
      </div>
    </section>
  )
}

export default AppDownload

