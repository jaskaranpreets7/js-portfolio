'use client'

import { Canvas } from '@react-three/fiber'
import StarsWithoutScroll from './StarsWithoutScroll'

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <StarsWithoutScroll/>
      </Canvas>
    </div>
  )
}
