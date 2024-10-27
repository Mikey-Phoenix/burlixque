import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader material for gradient effect
const gradientShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    color1: { value: new THREE.Color('red') },
    color2: { value: new THREE.Color('blue') },
  },
  vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec3 vPosition;
    void main() {
      float mixValue = (vPosition.y + 1.0) / 2.0; // Adjust gradient based on vertical position
      gl_FragColor = vec4(mix(color1, color2, mixValue), 1.0);
    }
  `,
});

function CarModel() {
  const carRef = useRef();
  const { scene } = useGLTF('/covered_car_1k.gltf/covered_car_1k.gltf'); // Path to your car model

  // Log mesh names to the console
  scene.traverse((child) => {
    if (child.isMesh) {
      console.log(child.name); // Log each mesh name
    }
  });

  // Apply colors: gradient for the car body, black for tires
  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name === 'covered_car') {
        // Apply gradient shader to the car body
        child.material = gradientShaderMaterial;
      } else if (child.name.includes('covered_car_wheel')) {
        // Apply black color to the wheels
        const wheelMaterial = new THREE.MeshStandardMaterial({ color: 'black' });
        child.material = wheelMaterial;
      }
    }
  });

  // Rotate the car continuously
  useFrame(() => {
    carRef.current.rotation.y += 0.01;
  });

  return <primitive ref={carRef} object={scene} scale={1.5} />;
}

const Car3D = () => {
  return (
    <Canvas style={{zIndex: 500}}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="white" intensity={0.5} />

      {/* Car model */}
      <CarModel />

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default Car3D;
