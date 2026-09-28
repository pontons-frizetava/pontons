import { forwardRef, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const EXTRUDE_SETTINGS = {
  depth: 0.05,
  bevelEnabled: true,
  bevelThickness: 0.012,
  bevelSize: 0.012,
  bevelSegments: 3,
  curveSegments: 24,
}

/** One lever: blade tapering up from the pivot, shank, and finger-ring below. Pivot sits at local (0,0). */
function buildLeverGeometry() {
  const shape = new THREE.Shape()
  shape.moveTo(-0.075, 0.04)
  shape.quadraticCurveTo(-0.13, 0.85, -0.018, 1.78)
  shape.quadraticCurveTo(0, 1.9, 0.02, 1.78)
  shape.quadraticCurveTo(0.1, 0.85, 0.07, 0.04)
  shape.quadraticCurveTo(0.09, -0.28, 0.05, -0.6)
  shape.lineTo(-0.05, -0.6)
  shape.quadraticCurveTo(-0.09, -0.28, -0.075, 0.04)

  const geometry = new THREE.ExtrudeGeometry(shape, EXTRUDE_SETTINGS)
  geometry.translate(0, 0, -EXTRUDE_SETTINGS.depth / 2)
  return geometry
}

function EnergyRings() {
  const ring1 = useRef()
  const ring2 = useRef()

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.25
    if (ring2.current) ring2.current.rotation.z -= delta * 0.18
  })

  return (
    <>
      <mesh ref={ring1} rotation={[1.15, 0.3, 0]}>
        <torusGeometry args={[2.1, 0.006, 8, 96]} />
        <meshBasicMaterial color="#2f7dff" transparent opacity={0.35} toneMapped={false} />
      </mesh>
      <mesh ref={ring2} rotation={[1.3, -0.4, 0.6]}>
        <torusGeometry args={[2.55, 0.004, 8, 96]} />
        <meshBasicMaterial color="#5aa6ff" transparent opacity={0.22} toneMapped={false} />
      </mesh>
    </>
  )
}

// Shared geometries/materials across both levers — built once at module load.
const leverGeometry = buildLeverGeometry()
const ringGeometry = new THREE.TorusGeometry(0.27, 0.052, 20, 48)
// Slim inner bezel, nested just inside each finger-ring — the glowing "blue ring inside the handle".
const ringAccentGeometry = new THREE.TorusGeometry(0.233, 0.02, 14, 40)
const metalMaterial = new THREE.MeshPhysicalMaterial({
  color: '#d7dde5',
  metalness: 1,
  roughness: 0.14,
  clearcoat: 0.85,
  clearcoatRoughness: 0.1,
})
const glowMaterial = new THREE.MeshStandardMaterial({
  color: '#0d1420',
  metalness: 0.4,
  roughness: 0.3,
  emissive: new THREE.Color('#2f7dff'),
  emissiveIntensity: 1.8,
})

// Thick finger-ring (silver metal + blue glowing lining, like the original) with a curled finger rest ("tang"), per the brand reference: a thick
// smooth ring, the shank flowing into it from the upper side and a tapered tail that curls out
// to the side and ends in a rounded bulb.
const RING_CENTER = [0, -0.86]
function buildBlackRingGeometry() {
  const shape = new THREE.Shape()
  shape.absellipse(0, 0, 0.34, 0.34, 0, Math.PI * 2, false, 0)
  const hole = new THREE.Path()
  hole.absellipse(0, 0, 0.245, 0.245, 0, Math.PI * 2, true, 0)
  shape.holes.push(hole)
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.026,
    bevelSegments: 8,
    curveSegments: 72,
  })
  geometry.translate(0, 0, -0.025)
  return geometry
}
const blackRingGeometry = buildBlackRingGeometry()
const blackTailGeometry = new THREE.TubeGeometry(
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.08, -1.16, 0),
    new THREE.Vector3(-0.115, -1.31, 0),
    new THREE.Vector3(-0.18, -1.45, 0),
    new THREE.Vector3(-0.28, -1.54, 0),
  ]),
  40,
  0.047,
  16,
  false
)
// blackHandle (name kept): 'tail' = ring with a curled finger rest; 'pin' = ring with a small
// round stop-pin on its outer lower edge (no tail).
const Lever = forwardRef(function Lever({ zOffset, blackHandle }, ref) {
  if (blackHandle) {
    return (
      <group ref={ref} position={[0, 0, zOffset]}>
        <mesh geometry={leverGeometry} material={metalMaterial} castShadow />
        <mesh geometry={blackRingGeometry} material={metalMaterial} position={[RING_CENTER[0], RING_CENTER[1], 0]} />
        <mesh geometry={ringAccentGeometry} material={glowMaterial} position={[RING_CENTER[0], RING_CENTER[1], 0]} />
        {blackHandle === 'tail' && (
          <>
            <mesh geometry={blackTailGeometry} material={metalMaterial} />
            <mesh material={metalMaterial} position={[-0.28, -1.54, 0]}>
              <sphereGeometry args={[0.057, 24, 16]} />
            </mesh>
          </>
        )}
        {blackHandle === 'pin' && (
          <mesh material={metalMaterial} position={[0.26, -1.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.058, 0.058, 0.13, 20]} />
          </mesh>
        )}
      </group>
    )
  }
  return (
    <group ref={ref} position={[0, 0, zOffset]}>
      <mesh geometry={leverGeometry} material={metalMaterial} castShadow />
      <mesh geometry={ringGeometry} material={metalMaterial} position={[0, -0.82, 0]} />
      <mesh geometry={ringAccentGeometry} material={glowMaterial} position={[0, -0.82, 0]} />
    </group>
  )
})

// How open the blades sit at rest, and how far/fast they breathe open and shut.
const BLADE_BASE_ANGLE = 0.28
const BLADE_BREATHE_AMPLITUDE = 0.05
const BLADE_BREATHE_SPEED = 0.18

export function ScissorsModel({ pointer }) {
  const groupRef = useRef()
  const leverARef = useRef()
  const leverBRef = useRef()
  const tilt = useRef({ x: 0, z: 0 })

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y += delta * 0.12
    tilt.current.x = THREE.MathUtils.lerp(tilt.current.x, pointer.y * 0.18, 0.04)
    tilt.current.z = THREE.MathUtils.lerp(tilt.current.z, -pointer.x * 0.18, 0.04)
    groupRef.current.rotation.x = 0.12 + tilt.current.x
    groupRef.current.rotation.z = -0.32 + tilt.current.z
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.08

    const breathe = Math.sin(t * BLADE_BREATHE_SPEED) * BLADE_BREATHE_AMPLITUDE
    if (leverARef.current) leverARef.current.rotation.z = BLADE_BASE_ANGLE + breathe
    if (leverBRef.current) leverBRef.current.rotation.z = -(BLADE_BASE_ANGLE + breathe)
  })

  return (
    <group ref={groupRef} rotation={[0.12, 0, -0.32]}>
      <Lever ref={leverARef} zOffset={0.03} blackHandle="pin" />
      <Lever ref={leverBRef} zOffset={-0.03} blackHandle="tail" />
      <mesh material={glowMaterial} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.16, 24]} />
      </mesh>
      <EnergyRings />
    </group>
  )
}
