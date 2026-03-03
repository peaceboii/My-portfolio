import { useState, useEffect, useRef } from 'react'
import SpaceCanvas from './components/canvas/SpaceCanvas'
import NavBar from './components/ui/NavBar'
import LoadingScreen from './components/ui/LoadingScreen'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import './styles/globals.css'

export default function App() {
    const [loaded, setLoaded] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Loading screen (fixed overlay) */}
            <LoadingScreen onFinished={() => setLoaded(true)} />

            {/* Fixed 3D canvas background */}
            <SpaceCanvas scrollProgress={scrollProgress} />

            {/* Scrollable content layer */}
            <div id="content" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
                <NavBar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </>
    )
}
