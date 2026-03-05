import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Advantages.module.css'

gsap.registerPlugin(ScrollTrigger)

const Advantages = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const advantagesRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!titleRef.current || !advantagesRef.current || !imageRef.current || !sectionRef.current) return
    
    const triggers = []
    
    const titleTrigger = gsap.from(titleRef.current, {
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(titleTrigger.scrollTrigger)

    const advantages = Array.from(advantagesRef.current.children || [])
    advantages.forEach((advantage, index) => {
      const advantageTrigger = gsap.from(advantage, {
        scale: 0.8,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: advantage,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
      triggers.push(advantageTrigger.scrollTrigger)
    })

    const imageTrigger = gsap.from(imageRef.current, {
      scale: 0.9,
      rotation: 5,
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

  const advantages = [
    { text: 'Multiple Games Based on German Level', position: 'topLeft' },
    { text: 'Choose between Grammar, Vocabulary, Listening, Reading & Writing.', position: 'bottomLeft' },
    { text: 'Learn from anywhere at anytime', position: 'topRight' },
    { text: 'Short sessions that work', position: 'bottomRight' }
  ]

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div ref={titleRef} className={styles.titleWrapper}>
          <div className={styles.titleBox}>Advantages</div>
          <h2 className={styles.subtitle}>Why do users use our app?</h2>
        </div>
        <div className={styles.content}>
          <div ref={advantagesRef} className={styles.advantages}>
            {advantages.map((advantage, index) => (
              <div key={index} className={`${styles.advantage} ${styles[advantage.position]}`}>
                {advantage.text}
              </div>
            ))}
          </div>
          <div ref={imageRef} className={styles.imageWrapper}>
            <img 
              src="/images/app-screenshot.png" 
              alt="DeutschGenie app features" 
              className={styles.appImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages

