import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './FAQ.module.css'

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const [expandedIndex, setExpandedIndex] = useState(0)

  useEffect(() => {
    if (!titleRef.current || !sectionRef.current) return
    
    const titleTrigger = gsap.from(titleRef.current, {
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    return () => {
      titleTrigger.scrollTrigger?.kill()
    }
  }, [])

  const faqs = [
    {
      question: 'Is DeutschGenie suitable for beginners?',
      answer: 'Yes, DeutschGenie caters to all levels, from complete beginners to advanced learners. You can select your level when you start, and the app will adjust the content accordingly. Our beginner-friendly games start with basic vocabulary and simple grammar concepts, making it easy for anyone to start learning German.'
    },
    {
      question: 'How does the app adjust content to my level?',
      answer: 'DeutschGenie uses an adaptive learning system that tracks your progress and adjusts the difficulty of games based on your performance. As you improve, the content becomes more challenging, ensuring you\'re always learning at the right pace.'
    },
    {
      question: 'Can I use DeutschGenie offline?',
      answer: 'Yes, once you download the app and sync your content, you can practice German games offline. This makes it perfect for learning on the go, even without an internet connection.'
    },
    {
      question: 'What types of games are available?',
      answer: 'DeutschGenie offers a wide variety of games covering Grammar, Vocabulary, Listening, Reading, and Writing. Each category has multiple game types to keep your learning experience fun and engaging.'
    }
  ]

  return (
    <section ref={sectionRef} id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>FAQ</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <article key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className={styles.icon}>{expandedIndex === index ? '−' : '+'}</span>
              </button>
              {expandedIndex === index && (
                <div id={`faq-answer-${index}`} className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

