import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CONTACT } from '../../data/portfolio'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
    }),
}

export default function ContactSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-120px' })

    return (
        <section className="section" id="contact" ref={ref}>
            <motion.div className="section__header" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={0}>
                <div className="section__eyebrow">04 — Contact</div>
                <h2 className="section__title gradient-text">Let's Connect</h2>
            </motion.div>

            <div className="contact-wrap">
                <motion.p initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={1}>
                    {CONTACT.blurb}
                </motion.p>

                <motion.div className="contact-links" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={2}>
                    <a href={`mailto:${CONTACT.email}`} className="btn btn--primary">
                        ✉️ Email Me
                    </a>
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                        💼 LinkedIn
                    </a>
                    <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                        ⌥ GitHub
                    </a>
                </motion.div>
            </div>

            {/* Footer inside contact section */}
            <motion.footer
                className="footer"
                style={{ marginTop: '6rem', borderTop: '1px solid rgba(124,108,250,0.1)', paddingLeft: 0 }}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                custom={3}
            >
                <span>© 2025 Kumaravelu · Coded at midnight, debugged at dawn · Powered by ☕ + Python 🐍</span>
            </motion.footer>
        </section>
    )
}
