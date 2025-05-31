import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
    <spotLight
      position={[3, -5, -5]}
      angle={0.50}
      intensity={100}
      penumbra={0.5}
      color={0xffffff}
      
    />

    <spotLight
      position={[-3, 4, 5]}
      angle={0.50}
      intensity={70}
      penumbra={0.5}
      color={0x4cc9f0}
    />

    <spotLight
      position={[-3, 4, -5]}
      angle={0.5}
      intensity={60}
      penumbra={1}
      color={0x9d4edd}
    />

    <primitive
    object={new THREE.RectAreaLight("#e7d1ff", 2, 4, 4)} 
    position={[0, 5, 0]}
    penumbra={0.5}
    />
    </>
  )
}

export default HeroLights