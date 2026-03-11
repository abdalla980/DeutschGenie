import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './HowItWorks.module.css'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const stepsRef = useRef(null)

  useEffect(() => {
    if (!titleRef.current || !stepsRef.current) return
    
    const steps = Array.from(stepsRef.current.children || [])
    const triggers = []
    
    const titleTrigger = gsap.from(titleRef.current, {
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(titleTrigger.scrollTrigger)

    steps.forEach((step, index) => {
      const stepTrigger = gsap.from(step, {
        y: 50,
        rotation: -5,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
      triggers.push(stepTrigger.scrollTrigger)
    })

    return () => {
      triggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Select your German level',
      description: 'Beginner to advanced',
      color: 'pink',
      icon: '□'
    },
    {
      number: 2,
      title: '70+ Games that adjust to your level',
      description: 'From more options to a lot of options for you',
      color: 'teal',
      icon: '💬'
    },
    {
      number: 3,
      title: 'Choose what you want to practice',
      description: 'Grammar, Vocabulary, Listening, Reading & Writing',
      color: 'yellow',
      icon: '✎'
    },
    {
      number: 4,
      title: 'Get Corrected',
      description: 'Your skills improve with instant feedback on your answers',
      color: 'olive',
      icon: '✓'
    }
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>How it Works</h2>
        <div ref={stepsRef} className={styles.steps}>
          {steps.map((step) => (
            <article key={step.number} className={`${styles.step} ${styles[step.color]}`}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepNumber}>{step.number}.</h3>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

