
import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Physics, useBox } from '@react-three/cannon';
import './App.css';
import Orbit from './component/Orbit';
import Ground from './component/Ground';
import Player from './component/Player'
import Sun from './component/Sun'
import Ball from './component/Ball';
import Footballplayerblue from './component/Footballplayerblue';
import Football from './component/Football'
import Dragable from './component/Dragable';

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
  // const d = 2.25
  // const mouse = useRef({ x: 0, y: 0 })
  return (
    <div style={{height:'100vh', width: '100vw', }}>
      <Canvas shadows  style={{background:'white'}} camera={{position:[7,7,7]}}>
      <directionalLight
        position={[5, 8, 9.8]}
        intensity={1}
        castShadow
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      
      />
      
      <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -10, 0]} />
        <Orbit />
        
        <Sun position={[0, 6, 2]}/>
         {/*
        {/* <Sun position={[0, 6, -5]}/> */}
      <ambientLight intensity={0.5}/> 
      <pointLight />
      <Physics>
        <Suspense fallback={null}>
        {/* <Footballplayerblue /> */}
        {/* <Player /> */}
        <Player />
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
