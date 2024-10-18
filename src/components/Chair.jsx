/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Chair = (props) => {
  const {nodes, materials} = useLoader(GLTFLoader, "/models/chair.gltf");

  return (
    <group {...props} dispose={null}>
        <mesh geometry={nodes.Chair.geometry} material={materials.Chair} />
        <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} />
        <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
        <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={false}/>
    </group>
  );
};

export default Chair;
