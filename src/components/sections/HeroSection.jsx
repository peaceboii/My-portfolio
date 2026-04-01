import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
    }),
}

export default function HeroSection() {
    return (
        <section className="hero-overlay" style={{ position: 'relative' }}>

            <motion.div className="m-stripe" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                <span className="s1" /><span className="s2" /><span className="s3" />
            </motion.div>

            <motion.span className="subtitle" style={{ animation: 'none', opacity: 1 }} initial="hidden" animate="visible" variants={fadeUp} custom={0.5}>
                Python Developer · Forex Trader · AI Builder
            </motion.span>

            <motion.div className="model-badge" style={{ animation: 'none', opacity: 1 }} initial="hidden" animate="visible" variants={fadeUp} custom={0.8}>
                M · PORTFOLIO EDITION
            </motion.div>

            <motion.h1 style={{ animation: 'none', opacity: 1 }} initial="hidden" animate="visible" variants={fadeUp} custom={1}>
                <span className="gradient-text">Kumaravelu</span>
                <br />
                <span style={{ fontSize: '0.55em', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.01em' }}>
                    crafting intelligent systems
                </span>
            </motion.h1>

            <motion.p className="tagline" style={{ animation: 'none', opacity: 1 }} initial="hidden" animate="visible" variants={fadeUp} custom={1.5}>
                I build automation scripts, trading bots, and AI-powered tools at the
                intersection of finance and technology. Performance-driven. Precision-coded.
            </motion.p>

            <motion.div className="hero-btns" style={{ animation: 'none', opacity: 1 }} initial="hidden" animate="visible" variants={fadeUp} custom={2}>
                <a href="#projects" className="btn btn--primary"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                    🚀 View Projects
                </a>
                <a href="#specs" className="btn btn--red"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#specs')?.scrollIntoView({ behavior: 'smooth' }) }}>
                    ⚡ M4 Specs
                </a>
                <a href="#contact" className="btn btn--ghost"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                    ✉ Contact
                </a>
            </motion.div>

            {/* Spec ticker — bottom right */}
            <motion.div className="spec-ticker" initial="hidden" animate="visible" variants={fadeUp} custom={2.5}>
                {[
                    { num: '530', unit: 'PS', label: 'Peak Power' },
                    { num: '3.9', unit: 's', label: '0–100 km/h' },
                    { num: '250', unit: '+', label: 'km/h Top Speed' },
                ].map((s) => (
                    <div key={s.num} className="spec-item">
                        <span className="num">{s.num}</span>
                        <div>
                            <span className="unit">{s.unit}</span>
                            <span className="label">{s.label}</span>
                        </div>
                    </div>
                ))}
            </motion.div>

            <div className="scroll-hint">
                <div className="scroll-hint__line" />
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
