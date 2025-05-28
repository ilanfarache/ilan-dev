import { useEffect, useState } from "react"

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            className="pointer-events-none fixed z-50 h-40 w-40 rounded-full bg-amber-50 opacity-10 blur-[10px]"
            style={{
                transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
            }}
        />
    )
}
