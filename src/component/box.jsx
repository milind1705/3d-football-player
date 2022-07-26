import * as THREE from 'three';
import { useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame,  useLoader} from 'react-three-fiber'
import Dragable from './Dragable';
const Box = props =>{
  const [ref, api] = useBox(()=>({mass:1,...props}))
    const texture = useLoader(THREE.TextureLoader, '/wood.jpg');
  
  
    return(
        <Dragable>
      <mesh api={api} ref={ref} {...props} castShadow receiveShadow >
          <sphereBufferGeometry args={[0.2, 20,20]}/>
          <meshPhysicalMaterial map={texture}
          side={THREE.DoubleSide}
           />
        </mesh>
        </Dragable>
    )
  }

  export default Box