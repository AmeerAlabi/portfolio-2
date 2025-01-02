import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Rocket3D({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    group.current.rotation.y += 0.01
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + position[1]
  })

  return (
    <group ref={group} position={position}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      
      {/* Nose cone */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="#ff4136" />
      </mesh>
      
      {/* Fins */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, -0.8, 0]} rotation={[0, (i * Math.PI) / 2, 0]}>
          <boxGeometry args={[0.7, 0.5, 0.1]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
      ))}
      
      {/* Window */}
      <mesh position={[0, 0.5, 0.45]}>
        <sphereGeometry args={[0.15, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#7FDBFF" />
      </mesh>
    </group>
  )
}

