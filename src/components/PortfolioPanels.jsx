import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Projects from './Projects';
import { Download, User, Code, Mail, Sparkles, ArrowRight } from 'lucide-react';

const SECTIONS = ['About', 'Projects', 'Skills', 'Contact'];
const STATS = [
    { label: 'Years Building', value: '3+' },
    { label: 'Projects Delivered', value: '18+' },
    { label: 'Focus', value: 'FinTech + AI' },
];

export default function PortfolioPanels() {
    const [activeSection, setActiveSection] = useState('About');
    const resumeUrl = `${import.meta.env.BASE_URL}assets/resume.pdf`;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'About':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col gap-4 text-sapphire-frost/85"
                    >
                        <h2 className="text-3xl font-space font-bold text-white mb-1 flex items-center gap-3">
                            <User className="text-sapphire-mist" /> About Me
                        </h2>
                        <p className="leading-relaxed text-[15px]">
                            Hello! I'm Kumaravelu, a passionate developer combining my expertise in Python with modern web technologies.
                            I specialize in building robust digital products, algorithmic systems, and immersive web experiences.
                        </p>
                        <p className="leading-relaxed text-[15px]">
                            My work blends engineering precision with creative storytelling so every project feels both useful and unforgettable.
                        </p>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            {STATS.map((item) => (
                                <div key={item.label} className="rounded-xl border border-sapphire-frost/20 bg-sapphire-night/40 p-3">
                                    <p className="text-lg font-space text-white font-bold">{item.value}</p>
                                    <p className="text-[11px] uppercase tracking-widest text-sapphire-frost/75">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={handleDownload}
                                className="glass-button flex items-center gap-2 text-sm w-max"
                            >
                                <Download size={16} /> Download Full Resume
                            </button>
                        </div>
                    </motion.div>
                );
            case 'Projects':
                return <Projects />;
            case 'Skills':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <h2 className="text-3xl font-space font-bold text-white mb-6 flex items-center gap-3">
                            <Code className="text-sapphire-mist" /> Technical Arsenal
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { category: 'Languages', items: 'Python, JavaScript, SQL' },
                                { category: 'Frontend', items: 'React, Three.js, TailwindCSS' },
                                { category: 'Backend', items: 'Node.js, Express, Django' },
                                { category: 'Tools', items: 'Git, Vite, TradingView PineScript' },
                            ].map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className="glass-panel p-4 rounded-xl hover:border-sapphire-frost/45 transition-colors"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <h3 className="text-sapphire-frost font-semibold mb-2">{skill.category}</h3>
                                    <p className="text-sm text-sapphire-frost/75">{skill.items}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'Contact':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-3xl font-space font-bold text-white mb-2 flex items-center gap-3">
                            <Mail className="text-sapphire-mist" /> Transmission Link
                        </h2>
                        <p className="text-sapphire-frost/80">Ready to start a new project or collaborate? Send a transmission across the void.</p>

                        <form className="flex flex-col gap-4 pointer-events-auto mt-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" className="w-full bg-sapphire-night/60 border border-sapphire-frost/20 rounded-lg p-3 text-white focus:outline-none focus:border-sapphire-frost/65 transition-colors" />
                            <input type="email" placeholder="Your Email" className="w-full bg-sapphire-night/60 border border-sapphire-frost/20 rounded-lg p-3 text-white focus:outline-none focus:border-sapphire-frost/65 transition-colors" />
                            <textarea placeholder="Your Message" rows="4" className="w-full bg-sapphire-night/60 border border-sapphire-frost/20 rounded-lg p-3 text-white focus:outline-none focus:border-sapphire-frost/65 transition-colors resize-none"></textarea>
                            <button type="submit" className="glass-button w-full mt-2 flex items-center justify-center gap-2">Send Message <ArrowRight size={16} /></button>
                        </form>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full px-4 sm:px-8 lg:px-14 pt-20 sm:pt-24 pb-5 sm:pb-8">
            <div className="w-full h-full flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="pointer-events-auto max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 section-chip mb-3">
                        <Sparkles size={12} />
                        Sapphire Nightfall Whisper
                    </div>
                    <h1 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                        Building immersive interfaces with code, motion and precision.
                    </h1>
                    <p className="text-sapphire-frost/85 text-sm sm:text-base max-w-xl">
                        Navigate through sections to explore projects, skills and collaboration-ready ideas.
                    </p>

                    <div className="mt-5 flex gap-2 sm:gap-3 flex-wrap">
                        {SECTIONS.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item)}
                                className={`rounded-full px-4 py-2 font-space text-xs sm:text-sm tracking-wider border transition-all duration-300 ${activeSection === item
                                    ? 'border-sapphire-frost bg-sapphire-abyss/70 text-white shadow-[0_0_24px_rgba(4,116,196,0.35)]'
                                    : 'border-sapphire-frost/25 bg-sapphire-night/55 text-sapphire-frost/80 hover:border-sapphire-frost/60 hover:text-white'
                                    }`}
                            >
                                {item.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full lg:w-[35rem] xl:w-[40rem]"
                >
                    <div className="glass-panel p-5 sm:p-7 lg:p-8 pointer-events-auto min-h-[430px] sm:min-h-[470px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeSection}>
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
