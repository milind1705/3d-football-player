
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
import Box from './component/Box';


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
     {/* <Dragable transformGroup>
     <Suspense>
     <Ball position={[4, 1,0.8]} dims={[0.8,0.8,0.7]} offset={[0,-0.3,0]} >
       <Football position={[0, 0.3,0]}/>
     </Ball>
     </Suspense>
   </Dragable> */}
   </>
  )
}
function App() {
 
  return (
    <div style={{height:'100vh', width: '100vw', }}>
      <Canvas style={{background:'black'}} camera={{position:[7,7,7]}}>
        <Orbit />
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
      
        <Box position={[3,0,3]}/>
        <Ground />
          </Physics>
      </Canvas>
    </div>
  );
}

export default App;
