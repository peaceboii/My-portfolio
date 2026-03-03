import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
    }),
}

export default function AboutSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="section" id="about" ref={ref}>
            <motion.div className="section__header" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={0}>
                <div className="section__eyebrow">01 — About Me</div>
                <h2 className="section__title gradient-text">Who I Am</h2>
            </motion.div>

            <div className="about-grid">
                <motion.div className="about-avatar" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={1}>
                    <div className="about-glow" />
                    {/* Profile image — falls back to emoji avatar if file missing */}
                    <img
                        src="/assets/profile.png"
                        alt="Kumaravelu"
                        style={{ width: '100%', maxWidth: 280, borderRadius: 20, border: '2px solid rgba(124,108,250,0.3)', display: 'block' }}
                        onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                        }}
                    />
                    <div style={{
                        display: 'none', width: 240, height: 240, borderRadius: 20,
                        background: 'linear-gradient(135deg, rgba(124,108,250,0.3), rgba(0,207,255,0.3))',
                        border: '2px solid rgba(124,108,250,0.3)',
                        fontSize: '6rem', alignItems: 'center', justifyContent: 'center',
                    }}>
                        👨‍💻
                    </div>
                </motion.div>

                <div>
                    {[
                        { delay: 2, text: <>I'm Kumaravelu, a passionate <strong>Python Developer</strong> and <strong>Forex Trader</strong> with hands-on experience in automation scripts, trading bots, and intelligent financial tools.</> },
                        { delay: 3, text: <>My journey started with scripting strategies for the forex market, but I quickly expanded into backend development, working on APIs, data pipelines, and real-time trading systems.</> },
                        { delay: 4, text: <>I love exploring the intersection of finance and technology — where logic meets market psychology. Outside of coding, I'm constantly optimizing workflows and learning about algorithmic trading models.</> },
                        { delay: 5, text: <>If you're interested in fintech, AI-driven trading, or automation projects — <strong>let's connect!</strong></> },
                    ].map((item, i) => (
                        <motion.p
                            key={i}
                            className="about-content"
                            style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: 1.8 }}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            custom={item.delay}
                        >
                            {item.text}
                        </motion.p>
                    ))}

                    <motion.div className="about-stats" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={6}>
                        {[
                            { number: '3+', label: 'Projects Shipped' },
                            { number: '5+', label: 'Tech Stack' },
                            { number: '∞', label: 'Coffee Cups' },
                        ].map((s) => (
                            <div key={s.label} className="stat">
                                <span className="stat__number">{s.number}</span>
                                <span className="stat__label">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
