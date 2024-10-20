/* eslint-disable react/no-unknown-property */
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Experience from "./components/Experience";

import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";

export default function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas
          style={{ height: "100vh", background: "#242424" }}
          camera={{ position: [2, 1, 5] }}
          shadows
          // Adding fog to blend floor with background
          fog={{ color: "gray", near: 5, far: 15 }}
        >
          {/* Minimal lighting with shadows */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.4}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* OrbitControls to rotate the scene, locking the floor */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
          />

          {/* Add the box with shadows */}
          <Experience />
        </Canvas>

        <Configurator />
      </div>
    </CustomizationProvider>
  );
}
