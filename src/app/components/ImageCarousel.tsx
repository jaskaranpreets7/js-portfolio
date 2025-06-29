'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ImageCarousel({ screenshots }: { screenshots: string[] }) {
    const [startIndex, setStartIndex] = useState<number>(0)
    const triggerRotate = useRef<boolean>(true)
    const timerId = useRef<NodeJS.Timeout | null>(null)
    const VISIBLE_COUNT = 1
    const INTERVAL = 5000

    const resetTimers = () => {
        if (timerId.current) clearInterval(timerId.current)
    }

    const onPrevHandler = useCallback(() => {
        resetTimers()
        setStartIndex(prev => Math.max(prev - 1, 0))
    }, [])

    const onNextHandler = useCallback(() => {
        resetTimers()
        setStartIndex(prev => {
            return prev + 1 + VISIBLE_COUNT - 1 < screenshots.length ? prev + 1 : 0
        })
    }, [screenshots])

    useEffect(() => {
        if (triggerRotate.current && screenshots.length > 0) {
            timerId.current = setInterval(() => {
                setStartIndex(prev => {
                return prev + 1 + VISIBLE_COUNT - 1 < screenshots.length ? prev + 1 : 0
                })
            }, INTERVAL)
        }

        return () => {
            resetTimers()
        }
    }, [screenshots])

    return (
        <div className="relative flex items-center justify-center w-full">
            {/* Image */}
            <div className="relative w-[600px] h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={screenshots[startIndex]}
                    fill
                    alt={`Screenshot ${startIndex}`}
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Left Control */}
            <button
                onClick={onPrevHandler}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-pink-500/60 text-white p-2 rounded-full transition"
            >
                <FaChevronLeft size={18} />
            </button>

            {/* Right Control */}
            <button
                onClick={onNextHandler}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-pink-500/60 text-white p-2 rounded-full transition"
            >
                <FaChevronRight size={18} />
            </button>
        </div>
    )
}
