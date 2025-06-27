import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function ImageCarousel({screenshots}:any) {
    const[ startIndex, setStartIndex] = useState<number>(0)
    const triggerRotate = useRef<boolean>(false)
    const timerId = useRef<any>(null)
    const VISIBLE_COUNT = 3

    const onPrevHandler = useCallback(() => {
        if(timerId.current){
            clearInterval(timerId.current)
            timerId.current = null
        }

        setStartIndex(prev => Math.max(prev-1, 0))

    },[])

    const onNextHandler = useCallback(() => {
        if(timerId.current){
            clearInterval(timerId.current)
            timerId.current = null

        }
        setStartIndex((prev) => {
            return prev + 1 + VISIBLE_COUNT - 1 < screenshots.length ? prev + 1 : 0
        })
    },[screenshots])
    

    useEffect(() => {
        if(triggerRotate.current && screenshots.length > 0 && !timerId.current){
            timerId.current = setInterval(() => {
                setStartIndex((prev) => {
                    return prev + 1 + VISIBLE_COUNT - 1 < screenshots.length ? prev + 1 : 0
                })
            }, 2000)
        }

        return () => {
            clearInterval(timerId.current)
            timerId.current = null
        }
    }, [triggerRotate,screenshots])

    return (
        <div>
            <div>
                {screenshots.slice(startIndex, startIndex + VISIBLE_COUNT).map((img:any, idx:number) => (
                    <img
                        key={idx}
                        src={img}
                        alt={img}
                        style={{
                            width: `${500 / screenshots.length}%`,
                            objectFit: 'contain',
                            padding: '0 10px'
                        }}
                    />
                    ))}
            </div>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <button  disabled={ startIndex === 0} onClick={onPrevHandler}>Prev</button>
                <button  disabled={ startIndex + VISIBLE_COUNT >= screenshots.length}  onClick={onNextHandler}>Next</button>
            </div>
        </div>
    )
}
