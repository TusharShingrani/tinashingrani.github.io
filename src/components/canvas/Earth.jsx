import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Loader from '../Loader';

const AnimatedSphere = () => {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.6;
      ringRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group>
      {/* Main sphere with gradient-like shading */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          color="#915EFF"
          roughness={0.3}
          metalness={0.4}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[1.82, 16, 16]} />
        <meshStandardMaterial
          color="#dd85ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting ring */}
      <mesh ref={ringRef} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#f272c8" />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => (
  <Canvas
    shadows
    frameloop="always"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
  >
    <Suspense fallback={<Loader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#915EFF" intensity={0.5} />
      <AnimatedSphere />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default EarthCanvas;
