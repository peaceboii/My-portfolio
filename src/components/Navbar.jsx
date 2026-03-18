import React from 'react';
import { Download, Layers, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
    const resumeUrl = `${import.meta.env.BASE_URL}assets/resume.pdf`;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="absolute top-0 w-full z-50 p-4 sm:p-6 flex justify-between items-center pointer-events-auto">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-sapphire-abyss/40 border border-sapphire-frost/40 flex items-center justify-center shadow-[0_0_20px_rgba(4,116,196,0.35)]">
                    <Layers className="text-sapphire-frost" size={22} />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-sm text-sapphire-frost/80 font-space tracking-[0.3em]">PORTFOLIO</span>
                    <span className="text-lg sm:text-xl font-bold font-space text-white tracking-[0.12em]">KUMARAVELU</span>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <a href="#" aria-label="GitHub" className="h-9 w-9 rounded-lg border border-sapphire-frost/25 bg-sapphire-night/40 hover:bg-sapphire-abyss/45 transition-colors flex items-center justify-center">
                    <Github size={16} className="text-sapphire-frost" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-lg border border-sapphire-frost/25 bg-sapphire-night/40 hover:bg-sapphire-abyss/45 transition-colors flex items-center justify-center">
                    <Linkedin size={16} className="text-sapphire-frost" />
                </a>
                <button className="glass-button flex items-center gap-2 font-space text-xs sm:text-sm" onClick={handleDownload}>
                    <Download size={15} /> RESUME
                </button>
            </div>
        </nav>
    );
}
