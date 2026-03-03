import { NAV_LINKS } from '../../data/portfolio'

export default function NavBar() {
    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="nav">
            <div className="nav__brand">
                <div className="nav__logo">KV</div>
                <span className="nav__name">Kumaravelu</span>
            </div>
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
