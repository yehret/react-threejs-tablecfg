import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { SoftShadows } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-4, 4, 12], fov: 35 }}>
        <SoftShadows />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
