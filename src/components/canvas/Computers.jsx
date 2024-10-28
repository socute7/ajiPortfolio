import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./monster_circus.glb", "/draco-gltf/");

  // Ref to control the 3D model rotation
  const meshRef = React.useRef();

  useFrame(() => {
    // Incrementally rotate the model on the Y-axis
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust speed as desired
    }
  });

  return (
    <mesh ref={meshRef}>
      <directionalLight position={[5, 10, 5]} intensity={3} color="white" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.1 : 0.15}
        position={isMobile ? [0, -3.5, -2.2] : [0, -4, -1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [30, 5, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
