import { Stage } from "@react-three/drei";
import { Suspense } from "react";

import Assembly from "./Assembly";

const Experience = () => {
  return (
    <Stage>
      <Suspense fallback={null}>
        <Assembly />
      </Suspense>
    </Stage>
  );
};

export default Experience;
