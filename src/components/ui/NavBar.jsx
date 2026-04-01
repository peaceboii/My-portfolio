import { NAV_LINKS } from '../../data/portfolio'

export default function NavBar() {
    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="nav">
            {/* Brand: wolf logo + name */}
            <div className="nav__brand">
                <img
                    src="/assets/logo.png"
                    alt="KV Logo"
                    style={{ height: 42, width: 42, objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(0,162,255,0.7))' }}
                    onError={(e) => { e.target.style.display = 'none' }}
                />
                <div>
                    <div className="nav__name">Kumaravelu</div>
                    <div className="nav__model">M·Portfolio</div>
                </div>
            </div>

            {/* Nav links */}
            <nav>
                <ul className="nav__links">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href) }}>
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav__cta">
                            Resume ↗
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
