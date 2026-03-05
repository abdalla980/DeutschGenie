import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './WhoIsItFor.module.css'

gsap.registerPlugin(ScrollTrigger)

const WhoIsItFor = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current || !imageRef.current || !sectionRef.current) return
    
    const triggers = []
    
    const contentTrigger = gsap.from(contentRef.current, {
      x: -50,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(contentTrigger.scrollTrigger)

    const imageTrigger = gsap.from(imageRef.current, {
      x: 50,
      rotation: 10,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(imageTrigger.scrollTrigger)

    return () => {
      triggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  const items = [
    'Students practicing daily German',
    'Professionals relocating to Germany',
    'Exam preparation (Goethe, TELC)',
    'Busy parents',
    'Anyone who prefers games over textbooks'
  ]

  return (
    <section ref={sectionRef} id="benefits" className={styles.section}>
      <div className={styles.container}>
        <div ref={contentRef} className={styles.content}>
          <h2 className={styles.title}>Who is DeutschGenie For? 🤔</h2>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
        <div ref={imageRef} className={styles.imageWrapper}>
          <img 
            src="/images/app-screenshot.png" 
            alt="DeutschGenie app showing success screen" 
            className={styles.appImage}
          />
        </div>
      </div>
    </section>
  )
}

export default WhoIsItFor

