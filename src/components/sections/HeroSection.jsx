import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function HeroSection() {
    return (
        <section className="hero-overlay" style={{ position: 'relative' }}>
            <motion.span className="subtitle" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                Python Developer · Forex Trader · AI Builder
            </motion.span>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}>
                <span className="gradient-text">Kumaravelu</span>
                <br />
                <span style={{ fontSize: '0.7em', fontWeight: 600, color: 'var(--text-muted)' }}>
                    crafting intelligent systems
                </span>
            </motion.h1>
            <motion.p className="tagline" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
                I build automation scripts, trading bots, and AI-powered tools at the
                intersection of finance and technology.
            </motion.p>
            <motion.div className="hero-btns" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
                <a
                    href="#projects"
                    className="btn btn--primary"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}
                >
                    🚀 View Projects
                </a>
                <a
                    href="#contact"
                    className="btn btn--ghost"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                >
                    ✉️ Contact
                </a>
            </motion.div>

            {/* Scroll hint */}
            <div className="scroll-hint" style={{ bottom: '3rem', left: '8vw', transform: 'none' }}>
                <div className="scroll-hint__arrow" />
                <span>Scroll</span>
            </div>
        </section>
    )
}
