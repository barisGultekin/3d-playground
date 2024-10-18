/* eslint-disable react/no-unknown-property */
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas camera={{position: [5, 5, 5], fov: 75}}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={0.5}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#242424"
            metalness={0.5}
          />
        </mesh>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

export default App;
