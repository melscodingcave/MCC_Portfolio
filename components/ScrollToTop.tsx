'use client'

import { useEffect, useState } from 'react'

export function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!visible) return null

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 bg-[#3B82F6] text-white rounded-full shadow-lg hover:bg-[#2563EB] transition-all hover:shadow-[#3B82F6]/40 hover:shadow-lg"
            aria-label="Back to top"
        >
            ↑
        </button>
    )
}