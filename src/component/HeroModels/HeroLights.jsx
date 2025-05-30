import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      intensity={100}
      penumbra={0.2}
      color={0xffffff}
      castShadow
    />

    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      intensity={40}
      penumbra={0.5}
      color={0x4cc9f0}
      castShadow
    />

    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      intensity={60}
      penumbra={1}
      color={0x9d4edd}
      castShadow
    />

    <primitive
    object={new THREE.RectAreaLight(0xa259ff, 5, 4, 4)} 
    />
    </>
  )
}

export default HeroLights