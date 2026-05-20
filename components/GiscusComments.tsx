'use client'

import { useEffect, useRef } from 'react'

export function GiscusComments() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return

        const script = document.createElement('script')
        script.src = 'https://giscus.app/client.js'
        script.setAttribute('data-repo', 'melscodingcave/MCC_Portfolio')
        script.setAttribute('data-repo-id', 'R_kgDOQF8lxQ')
        script.setAttribute('data-category', 'Blog Comments')
        script.setAttribute('data-category-id', 'DIC_kwDOQF8lxc4C8t5m')
        script.setAttribute('data-mapping', 'pathname')
        script.setAttribute('data-strict', '0')
        script.setAttribute('data-reactions-enabled', '1')
        script.setAttribute('data-emit-metadata', '0')
        script.setAttribute('data-input-position', 'bottom')
        script.setAttribute('data-theme', 'dark_protanopia')
        script.setAttribute('data-lang', 'en')
        script.setAttribute('crossorigin', 'anonymous')
        script.async = true

        ref.current.appendChild(script)
    }, [])

    return (
        <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl text-white font-semibold mb-6">
                Discussion 💬
            </h3>
            <div ref={ref} />
        </div>
    )
}