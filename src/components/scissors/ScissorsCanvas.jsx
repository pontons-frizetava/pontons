import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment, Lightformer } from '@react-three/drei'
import { ScissorsModel } from './ScissorsModel'
import { ScissorsFallback } from './ScissorsFallback'
import { ErrorBoundary } from '../ErrorBoundary'
import { usePointer } from '../../hooks/usePointer'
import { useIsMobile } from '../../hooks/useIsMobile'

export function ScissorsCanvas() {
  const pointer = usePointer()
  const isMobile = useIsMobile()

  return (
    <div className="h-full w-full">
      <ErrorBoundary fallback={<ScissorsFallback />}>
        <Canvas
          dpr={isMobile ? [1, 1.25] : [1, 1.75]}
          camera={{ position: [0, 0, 6.4], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-4, 1, -3]} intensity={0.5} color="#5aa6ff" />
          <pointLight position={[-3, -2, 3]} intensity={22} color="#2f7dff" distance={12} />
          <pointLight position={[2, -3, -2]} intensity={12} color="#5aa6ff" distance={10} />

          <Suspense fallback={null}>
            {/* Procedural studio reflections (no HDR download): without them polished metal renders almost black. */}
            <Environment resolution={512} environmentIntensity={0.25}>
              <Lightformer form="rect" intensity={1.0} color="#dfe6f2" position={[0, 0, 7]} scale={[16, 12, 1]} />
              <Lightformer form="rect" intensity={8} position={[0, 5, 3]} scale={[12, 1.4, 1]} />
              <Lightformer form="rect" intensity={7} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[9, 1.2, 1]} />
              <Lightformer form="rect" intensity={1.5} color="#7db3ff" position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[9, 0.6, 1]} />
              <Lightformer form="rect" intensity={5} position={[2, -4, 3]} scale={[8, 1, 1]} />
              <Lightformer form="rect" intensity={5} position={[-2, 2, -5]} scale={[8, 0.8, 1]} />
            </Environment>
            <ScissorsModel pointer={pointer} />
            {/* electric-blue energy dust */}
            <Sparkles
              count={isMobile ? 28 : 70}
              scale={[5, 5, 3]}
              size={2.4}
              speed={0.25}
              color="#5aa6ff"
              opacity={0.6}
            />
            {/* fine floating hair strands drifting past the blades */}
            <Sparkles
              count={isMobile ? 10 : 26}
              scale={[4.5, 4.5, 2.5]}
              size={5}
              speed={0.12}
              color="#cdbfa8"
              opacity={0.35}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
