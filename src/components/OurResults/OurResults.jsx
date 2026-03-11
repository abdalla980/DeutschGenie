import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LineChart } from '@mui/x-charts/LineChart'
import styles from './OurResults.module.css'

gsap.registerPlugin(ScrollTrigger)

const learnerData = [
  { month: 'Jan 24', learners: 800 },
  { month: 'Feb 24', learners: 1100 },
  { month: 'Mar 24', learners: 1600 },
  { month: 'Apr 24', learners: 2000 },
  { month: 'May 24', learners: 2500 },
  { month: 'Jun 24', learners: 3200 },
  { month: 'Jul 24', learners: 4100 },
  { month: 'Aug 24', learners: 5300 },
  { month: 'Sep 24', learners: 6400 },
  { month: 'Oct 24', learners: 7200 },
  { month: 'Nov 24', learners: 8500 },
  { month: 'Dec 24', learners: 9100 },
  { month: 'Jan 25', learners: 10200 },
]

const OurResults = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    if (!titleRef.current || !statsRef.current || !sectionRef.current) return

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
    '92% retention rate',
    '90% of our users rated us 4⭐+'
  ]

  return (
    <section ref={sectionRef} id="results" className={styles.section}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>Our Results</h2>
        <div className={styles.graph}>
          <LineChart
            dataset={learnerData}
            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
              {
                dataKey: 'learners',
                label: 'Learners',
                color: '#9c27b0',
                showMark: false,
                area: true,
                valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
              },
            ]}
            height={260}
            sx={{
              '& .MuiAreaElement-root': {
                fill: 'url(#purpleGradient)',
                opacity: 0.4,
              },
              '& .MuiLineElement-root': {
                strokeWidth: 2.5,
              },
              fontFamily: 'Poppins, sans-serif',
              '& text': { fontFamily: 'Poppins, sans-serif' },
            }}
            slotProps={{ legend: { hidden: true } }}
            margin={{ top: 20, right: 20, bottom: 40, left: 55 }}
          >
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ce93d8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#f3e5f5" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </LineChart>
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
