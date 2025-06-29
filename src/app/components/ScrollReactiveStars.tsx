import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import * as THREE from 'three'


export default function ScrollReactiveStars() {
  const groupRef = useRef<THREE.Group>(null)
  const { scrollYProgress } = useScroll()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollYProgress.get() * Math.PI * 2
    }
  })

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={4000} factor={4} fade speed={1} />
    </group>
  )
}
