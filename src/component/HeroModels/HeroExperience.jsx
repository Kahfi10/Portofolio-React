import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';

const HeroExperience = () => {
  
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{position: [15, 5, 14], fov: 35}} >


        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isTablet}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />  

        <HeroLights />

        <group 
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, Math.PI /4, 0]} ></group>
        <Room />
    </Canvas>
  )
}

export default HeroExperience