import { Stars } from '@react-three/drei'
import React from 'react'

export default function StarsWithoutScroll() {
  return (
    <>
        <Stars
          radius={80} 
          depth={50} 
          count={5000} 
          factor={4} 
          fade 
          speed={1} 
        />
    </>

  )
}
