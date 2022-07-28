import { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Physics, useBox } from "@react-three/cannon";
import "./App.css";
import Orbit from "./component/Orbit";
import Ground from "./component/Ground";
import Player from "./component/Player";
import Sun from "./component/Sun";
import Ball from "./component/Ball";
import Footballplayerblue from "./component/Footballplayerblue";
import Football from "./component/Football";
import Dragable from "./component/Dragable";

const PlayingBall = () => {
  return (
    <>
      <Dragable transformGroup>
        <Suspense>
          <Ball
            position={[0, 1, 0.8]}
            dims={[0.8, 0.8, 0.7]}
            offset={[0, -0.3, 0]}
          >
            <Football receiveShadow position={[0, 0.3, 0]} />
          </Ball>
        </Suspense>
      </Dragable>
      <Dragable transformGroup>
        <Suspense>
          <Ball
            position={[4, 1, 0.8]}
            dims={[0.8, 0.8, 0.7]}
            offset={[0, -0.3, 0]}
          >
            <Football receiveShadow position={[0, 0.3, 0]} />
          </Ball>
        </Suspense>
      </Dragable>
    </>
  );
};
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadowMap="true"
        style={{ backgroundColor: "black" }}
        camera={{ position: [0, 10, 20] }}
      >
        <ambientLight intensity={0.5} castShadow/>
        <pointLight position={[0, 60, -100]} intensity={20} />
        <pointLight position={[-50, 0, -50]} intensity={2} />
        {/* <spotLight
          castShadow
          intensity={8}
          angle={Math.PI / 10}
          position={[10, 10, 10]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        /> */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 4.5, -10]}
          receiveShadow
        >
          <shadowMaterial attach="material" opacity={0.3} color="blue" />
        </mesh>
        {/* <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow /> */}
        <Orbit />
        <Sun position={[0, 6, 6]}/>
        {/* <Sun position={[0, 6, -5]}/> */}
        {/* <ambientLight intensity={0.5}/> */}
        {/* <directionalLight
          castShadow
          position={[10, 10,0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */}
        {/* <pointLight /> */}
        {/* <pointLight position={[-10, 0, -20]} intensity={0.5} /> */}
        {/* <pointLight  position={[0, 10, 4]} intensity={1.5} /> */}
        <Physics>
          <Suspense fallback={null}>
            {/* <Footballplayerblue /> */}
            <Player castShadow receiveShadow/>
          </Suspense>
          <Suspense>
            <PlayingBall />
          </Suspense>
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
