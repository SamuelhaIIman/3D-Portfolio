import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMateria, Preload, Sphere } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


const Stars = () => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array (5000), { radius: 1.2 })
  return (
    <group>
      <Points ref={ref} positions={Sphere} />
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 <-[-1]">
      <canvas camera={{ posisition: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

      </canvas>
    </div>
  )
}

export default StarsCanvas;