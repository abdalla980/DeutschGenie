import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Hero.module.css'

const APP_URL = 'https://www.figma.com/design/QrB7vsHSaOpkQC28sIHnm1/DeutschGenie?node-id=0-1&t=O0iBNmm3eIHT8bkC-1'

const Hero = () => {
  const cardRef = useRef(null)
  const imagesRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current || !imagesRef.current) return

    gsap.set([cardRef.current, imagesRef.current], { opacity: 1 })

    const tl = gsap.timeline()
    tl.from(cardRef.current, { y: 30, duration: 0.8 })
      .from(imagesRef.current, { opacity: 0, duration: 0.8 }, '-=0.4')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div ref={cardRef} className={styles.card}>
          <h1 className={styles.headline}>
            Practice German Online with Fun Learning Games
          </h1>
          <p className={styles.subtext}>
            DeutschGenie offers a wide range of fun and interactive games to help you improve your German skills.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            aria-label="Try DeutschGenie now"
          >
            Try it now!
          </a>
        </div>
        <div ref={imagesRef} className={styles.images}>
          <img src="/images/app-screenshot.png" alt="DeutschGenie app screenshot 1" className={styles.heroImage1} />
          <img src="/images/app-screenshot.png" alt="DeutschGenie app screenshot 2" className={styles.heroImage2} />
          <img src="/images/app-screenshot.png" alt="DeutschGenie app screenshot 3" className={styles.heroImage3} />
        </div>
      </div>
    </section>
  )
}

export default Hero
