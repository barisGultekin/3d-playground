/* eslint-disable react/no-unknown-property */
import "./App.css";
import { useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  PresentationControls,
} from "@react-three/drei";

import Chair from "./components/Chair";
import Configurator from "./components/Configurator";

function App() {
  const [item, setItem] = useState("chair");

  return (
    <div className="App">
      <div className="toggler">
        <button
          onClick={() => {
            setItem("chair");
          }}
        >
          Chair
        </button>
        <button
          onClick={() => {
            setItem("custom");
          }}
        >
          Custom
        </button>
      </div>

      <Configurator />

      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, 0]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        >
          {item == "chair" ? (
            <Chair />
          ) : (
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial />
            </mesh>
          )}
        </PresentationControls>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={0.8}
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
