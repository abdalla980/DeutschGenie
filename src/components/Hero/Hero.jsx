import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Hero.module.css'

const Hero = () => {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)
  const buttonRef = useRef(null)
  const imagesRef = useRef(null)

  useEffect(() => {
    if (!headlineRef.current || !subtextRef.current || !buttonRef.current || !imagesRef.current) return
    
    // Set initial visibility
    gsap.set([headlineRef.current, subtextRef.current, buttonRef.current, imagesRef.current], { opacity: 1 })
    
    const tl = gsap.timeline()
    tl.from(headlineRef.current, { y: 30, duration: 0.8 })
      .from(subtextRef.current, { y: 20, duration: 0.6 }, '-=0.4')
      .from(buttonRef.current, { scale: 0.9, duration: 0.6 }, '-=0.3')
      .from(imagesRef.current.children, { x: 50, rotation: 5, duration: 1, stagger: 0.2 }, '-=0.8')

    // Animate images floating
    const floatAnimation = gsap.to(imagesRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    return () => {
      tl.kill()
      floatAnimation.kill()
    }
  }, [])

  const handleTryNow = () => {
    const downloadSection = document.querySelector('[data-section="download"]')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 ref={headlineRef} className={styles.headline}>
            Practice German Online with Fun Learning Games
          </h1>
          <p ref={subtextRef} className={styles.subtext}>
            DeutschGenie offers a wide range of fun and interactive games to help you improve your German skills.
          </p>
          <button 
            ref={buttonRef}
            className={styles.ctaButton}
            onClick={handleTryNow}
            aria-label="Try DeutschGenie now"
          >
            Try it now!
          </button>
          </div>
        <div ref={imagesRef} className={styles.images}>
          <img
            src="/images/app-screenshot.png"
            alt="DeutschGenie app screenshot 1"
            className={styles.heroImage1}
          />
          <img
            src="/images/app-screenshot.png"
            alt="DeutschGenie app screenshot 2"
            className={styles.heroImage2}
          />
          <img
            src="/images/app-screenshot.png"
            alt="DeutschGenie app screenshot 3"
            className={styles.heroImage3}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

