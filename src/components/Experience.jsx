import { OrbitControls, Stage } from '@react-three/drei';
import { Table } from './Table';
import { useConfigurator } from '../contexts/Configutator';

export const Experience = () => {
  const { legs } = useConfigurator();
  return (
    <>
      <Stage
        intensity={1.5}
        environment="sunset"
        shadows={{ type: 'accumulative', color: '#d9afd9', colorBlend: 2, opacity: 2 }}
        adjustCamera={2}>
        <Table />
      </Stage>
      <OrbitControls makeDefault mixPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};
