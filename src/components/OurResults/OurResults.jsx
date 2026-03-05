import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './OurResults.module.css'

gsap.registerPlugin(ScrollTrigger)

const OurResults = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const graphRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    if (!titleRef.current || !graphRef.current || !statsRef.current || !sectionRef.current) return
    
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

    const graphTrigger = gsap.from(graphRef.current, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 1,
      scrollTrigger: {
        trigger: graphRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
    triggers.push(graphTrigger.scrollTrigger)

    const stats = Array.from(statsRef.current.children || [])
    stats.forEach((stat, index) => {
      const statTrigger = gsap.from(stat, {
        x: -20,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
      triggers.push(statTrigger.scrollTrigger)
    })

    return () => {
      triggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  const stats = [
    '10,000+ learners',
    '4.8 average rating',
    '82% retention rate',
    '90% of our users rated us 4⭐+'
  ]

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>Our Results</h2>
        <div ref={graphRef} className={styles.graph}>
          <svg viewBox="0 0 400 200" className={styles.graphSvg}>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e1bee7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e1bee7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 20 150 Q 80 120, 120 100 T 200 80 T 280 60 T 360 50 L 360 200 L 20 200 Z"
              fill="url(#gradient)"
              className={styles.graphArea}
            />
            <path
              d="M 20 150 Q 80 120, 120 100 T 200 80 T 280 60 T 360 50"
              stroke="#9c27b0"
              strokeWidth="3"
              fill="none"
              className={styles.graphLine}
            />
            <text x="80" y="195" className={styles.graphLabel}>20k users</text>
            <text x="280" y="195" className={styles.graphLabel}>50k users</text>
          </svg>
        </div>
        <ul ref={statsRef} className={styles.stats}>
          {stats.map((stat, index) => (
            <li key={index} className={styles.statItem}>{stat}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurResults

