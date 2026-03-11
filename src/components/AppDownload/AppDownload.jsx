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
              <img src="/images/qrcode.png" alt="App Store QR code" className={styles.qrImg} />
            </div>
            <p className={styles.qrLabel}>App store</p>
          </div>
          <div className={styles.qrCode}>
            <div className={styles.qrPlaceholder}>
              <img src="/images/qrcode.png" alt="Google Play QR code" className={styles.qrImg} />
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
