import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { M4_SPECS } from '../../data/portfolio'

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
    }),
}

export default function SpecsSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="section" id="specs" ref={ref}>
            <motion.div className="specs-header" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={0}>
                <div className="m-stripe" style={{ marginBottom: '0.5rem' }}>
                    <span className="s1" /><span className="s2" /><span className="s3" />
                </div>
                <div className="section__eyebrow">M4 COMPETITION COUPÉ · G82</div>
                <h2 className="section__title gradient-text">Technical Specifications</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '55ch', marginTop: '0.5rem' }}>
                    Like the BMW M4, my work is built on precision engineering —
                    every system optimised, every pipeline refined.
                </p>
            </motion.div>

            {/* Spec cards grid */}
            <div className="specs-grid">
                {M4_SPECS.map((spec, i) => (
                    <motion.div
                        key={spec.label}
                        className="spec-card carbon-card"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        custom={i + 1}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="spec-card__icon">{spec.icon}</div>
                        <div className="spec-card__label">{spec.label}</div>
                        <div>
                            <span className="spec-card__value">{spec.value}</span>
                            <span className="spec-card__unit">{spec.unit}</span>
                        </div>
                        <div className="spec-card__desc">{spec.desc}</div>
                    </motion.div>
                ))}
            </div>

            {/* Engine panel */}
            <motion.div
                className="engine-panel carbon-card"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                custom={M4_SPECS.length + 1}
            >
                <div className="engine-badge">
                    <span className="big">S58</span>
                    <span className="small">ENGINE</span>
                </div>
                <div>
                    <h3>BMW S58 · 3.0L Twin-Turbo Inline-6</h3>
                    <p>
                        The heart of the M4 Competition — a 3.0-litre twin-turbocharged straight-six producing
                        <strong style={{ color: 'var(--accent2)' }}> 530 PS</strong> and
                        <strong style={{ color: 'var(--accent2)' }}> 650 Nm</strong> of torque.
                        8-speed M Steptronic with Drivelogic. 50:50 weight distribution.
                        M xDrive all-wheel drive with rear-wheel drive mode.
                        Built at BMW M GmbH, Munich.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
