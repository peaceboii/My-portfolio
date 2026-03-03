import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../../data/portfolio'

const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function SkillsSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-120px' })

    return (
        <section className="section" id="skills" ref={ref}>
            <motion.div className="section__header" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={0}>
                <div className="section__eyebrow">02 — Skills</div>
                <h2 className="section__title gradient-text">What I Build With</h2>
            </motion.div>

            <div className="skills-grid">
                {SKILLS.map((skill, i) => (
                    <motion.div
                        key={skill.id || skill.title}
                        className="skill-card glass"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        custom={i + 1}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="skill-card__icon">{skill.icon}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--accent2)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                            {skill.category}
                        </div>
                        <h3>{skill.title}</h3>
                        <div className="skill-tags">
                            {skill.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
