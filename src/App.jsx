import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { SoftShadows } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
        {/* <SoftShadows samples={20} /> */}
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
