import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function TradingBackground() {
    const containerRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        // Create random floating candlestick elements
        const elements = containerRef.current.querySelectorAll('.candlestick');

        elements.forEach((el, i) => {
            // Randomize starting properties
            gsap.set(el, {
                x: () => Math.random() * window.innerWidth,
                y: () => Math.random() * window.innerHeight,
                opacity: () => 0.1 + Math.random() * 0.2,
                scale: () => 0.5 + Math.random() * 1.5,
            });

            // Animate floating up and drifting
            gsap.to(el, {
                y: `-=${200 + Math.random() * 200}`,
                x: `+=${-50 + Math.random() * 100}`,
                duration: 20 + Math.random() * 20,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: -Math.random() * 20
            });
        });

    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >
            {/* Background grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Abstract Candlesticks */}
            {Array.from({ length: 15 }).map((_, i) => {
                const isGreen = Math.random() > 0.5;
                const color = isGreen ? 'bg-green-500' : 'bg-red-500';
                const height = 40 + Math.random() * 100;

                return (
                    <div key={i} className={`candlestick absolute w-3 ${color} rounded-sm shadow-sm`}>
                        {/* Wick */}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 w-[2px] ${color}`}
                            style={{
                                top: `${-10 - Math.random() * 20}px`,
                                bottom: `${-10 - Math.random() * 20}px`,
                                zIndex: -1
                            }}
                        />
                        {/* Body */}
                        <div className="w-full" style={{ height: `${height}px` }} />
                    </div>
                );
            })}

            {/* Abstract ticker text */}
            <div className="absolute top-10 left-0 w-full overflow-hidden opacity-10 flex gap-12 text-xs font-mono whitespace-nowrap animate-[marquee_200s_linear_infinite]">
                {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className={Math.random() > 0.5 ? "text-green-500" : "text-red-500"}>
                        {['BTC', 'ETH', 'AAPL', 'TSLA', 'SPY'][Math.floor(Math.random() * 5)]}/USD {(100 + Math.random() * 4000).toFixed(2)}
                        <span className="ml-2">{Math.random() > 0.5 ? '▲' : '▼'}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
