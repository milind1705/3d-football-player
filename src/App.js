
import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Physics, useBox } from '@react-three/cannon';
import './App.css';
import Orbit from './component/Orbit';
import Ground from './component/Ground';
import Player from './component/Player'
import SoccorPlayer from './component/SoccerPlayer'
import Sun from './component/Sun'
import Ball from './component/Ball';
import Footballplayerblue from './component/Footballplayerblue';
import Football from './component/Football'
import Ftball from './component/Ftball'
import Dragable from './component/Dragable';
import Box from './component/Box';


const PlayingBall = ()=>{
  return(
    <>
    <Dragable transformGroup>
      <Suspense>
      <Ball position={[0, 1,0]} dims={[1,1,1]} offset={[0,0,0]} visible>
        {/* <Ftball position={[0,0,0]}/> */}
      </Ball>
      </Suspense>
    </Dragable>
   
   </>
  )
}
function App() {
 
  return (
    <div style={{height:'100vh', width: '100vw',background:'black' }}>
      <Canvas   camera={{position:[7,7,7]}} shadowMap>
       
        <Orbit />
        <Sun position={[0, 6, 6]}/>
        {/* <Sun position={[0, 6, -5]}/> */}
      <ambientLight intensity={0.5}/>
      {/* <pointLight /> */}
      <Physics>
        <Suspense fallback={null}>
        {/* <Footballplayerblue /> */}
          <SoccorPlayer />
        </Suspense>
        <Suspense>
          <PlayingBall />
        {/* <Ball position={[0,0,0]} dims={[2,2,2]} offset={[0,0,0]}  /> */}
        </Suspense>
      
        <Box position={[3,0,0]}/>
        <Ground />
          </Physics>
      </Canvas>
    </div>
  );
}

export default App;
