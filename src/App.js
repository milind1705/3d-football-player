
import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Physics, useBox } from '@react-three/cannon';
import './App.css';
import Orbit from './component/Orbit';
import Ground from './component/Ground';
import Player from './component/Player'
import Sun from './component/Sun'
import Ball from './component/Ball';
// import Footballplayerblue from './component/Footballplayerblue';
import Football from './component/Football'
import Dragable from './component/Dragable';
// import Lights from './component/lights';
import Floor from './component/Floor';

function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  )
} 
const PlayingBall = ()=>{
  return(
    <>
    <Dragable transformGroup>
      <Suspense>
      <Ball position={[0, 1,0.8]} dims={[0.8,0.8,0.7]} offset={[0,-0.3,0]}  >
        <Football position={[0, 0.3,0]}/>
      </Ball>
      </Suspense>
    </Dragable>
     <Dragable transformGroup>
     <Suspense>
     <Ball position={[4, 1,0.8]} dims={[0.8,0.8,0.7]} offset={[0,-0.3,0]} >
       <Football position={[0, 0.3,0]}/>
     </Ball>
     </Suspense>
   </Dragable>
   </>
  )
}
function App() {
 const d = 8.25
  return (
    <div style={{height:'100vh', width: '100vw', }}>
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-5, 4, 4] }}>
      <directionalLight
        position={[10,10,10]}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      />
       {/* <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -10, 0]}color={'Green'}/> */}
        {/* <Lights/> */}
        <Orbit />
        
        {/* <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial 
            attach='material' opacity={0.3} />
          </mesh> */}
        <Sun position={[0, 6, 6]}/>
        {/* <Sun position={[0, 6, -5]}/> */}
      <ambientLight intensity={0.5}/>
      {/* <pointLight /> */}
      <Physics>
        <Suspense fallback={null}>
        {/* <Footballplayerblue /> */}
          <Player />
        </Suspense>
        <Suspense>
          <PlayingBall />
        </Suspense>
        <Ground />
          </Physics>
          <Floor />
      </Canvas>
    </div>
  );
}

export default App;
