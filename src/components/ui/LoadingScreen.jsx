import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinished }) {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setVisible(false)
                        onFinished?.()
                    }, 400)
                    return 100
                }
                return p + Math.random() * 18
            })
        }, 120)
        return () => clearInterval(interval)
    }, [onFinished])

    if (!visible) return null

    return (
        <div
            className="loading"
            style={{
                opacity: progress >= 100 ? 0 : 1,
                transition: 'opacity 0.4s ease',
                pointerEvents: progress >= 100 ? 'none' : 'all',
            }}
        >
            <div className="loading__logo">KV</div>
            <div className="loading__bar-wrap">
                <div
                    className="loading__bar"
                    style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.15s ease' }}
                />
            </div>
            <span className="loading__text">Entering the cosmos...</span>
        </div>
    )
}
