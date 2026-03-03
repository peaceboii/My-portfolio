import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '../../data/portfolio'

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
    }),
}

export default function ProjectsSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-120px' })

    return (
        <section className="section" id="projects" ref={ref}>
            <motion.div className="section__header" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={0}>
                <div className="section__eyebrow">03 — Projects</div>
                <h2 className="section__title gradient-text">Things I've Built</h2>
            </motion.div>

            <div className="projects-grid">
                {PROJECTS.map((project, i) => (
                    <motion.article
                        key={project.title}
                        className="project-card glass"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        custom={i + 1}
                        whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(124,108,250,0.25)' }}
                    >
                        {/* Thumbnail */}
                        <div className="project-card__img--placeholder">
                            <span>{project.emoji}</span>
                        </div>

                        <span className="project-chip">{project.chip}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        {project.metrics.length > 0 && (
                            <div className="project-metrics">
                                {project.metrics.map((m) => (
                                    <div key={m.label} className="metric">
                                        <span>{m.label}</span>
                                        <b>{m.value}</b>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                                ⌥ Code
                            </a>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                                    🌐 Demo
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
