import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Loader from '../Loader';

// A creative 3D composition for the hero section
// Represents design elements: wireframe shapes, color palette rings
const DesignComposition = () => {
  const groupRef = useRef();
  const torusRef = useRef();
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.5;
      torusRef.current.rotation.z = t * 0.2;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = -t * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central wireframe icosahedron */}
      <mesh scale={1.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#915EFF" wireframe />
      </mesh>

      {/* Outer torus ring - purple */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshStandardMaterial color="#915EFF" />
      </mesh>

      {/* Second torus ring - pink, tilted */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.06, 16, 100]} />
        <meshStandardMaterial color="#dd85ff" opacity={0.7} transparent />
      </mesh>

      {/* Orbiting sphere - accent */}
      <mesh ref={sphereRef} position={[2.2, 0, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Small floating cubes */}
      {[
        [1.6, 1.0, 0.5],
        [-1.6, -1.0, -0.5],
        [0.5, -1.8, 1.0],
        [-0.5, 1.8, -1.0],
      ].map((pos, i) => (
        <mesh key={i} position={pos} scale={0.15}>
          <boxGeometry />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#915EFF' : '#dd85ff'}
            wireframe={i % 2 !== 0}
          />
        </mesh>
      ))}
    </group>
  );
};

const ComputersCanvas = () => (
  <Canvas
    frameloop="always"
    shadows
    dpr={[1, 2]}
    camera={{ position: [0, 0, 7], fov: 40 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#915EFF" intensity={0.5} />
      <DesignComposition />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default ComputersCanvas;
