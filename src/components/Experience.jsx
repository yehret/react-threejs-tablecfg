import { OrbitControls, Stage } from '@react-three/drei';

export const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="sunset"
        shadows={{ type: 'accumulative', color: '#d9afd9', colorBlend: 2, opacity: 2 }}
        adjustCamera={2}>
        <mesh castShadow>
          <meshNormalMaterial />
          <boxGeometry />
        </mesh>
      </Stage>
      <OrbitControls makeDefault mixPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};
