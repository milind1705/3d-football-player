import { useBox, useSphere } from "@react-three/cannon"
import { useLoader } from "react-three-fiber"
import * as THREE from 'three'

const Ball = ({
    position =[0,0,0],
    offset = [0,0,0,],
    dims = [10,10,10],
    visible =false,
    children 
        })=>{
            const texture = useLoader(THREE.TextureLoader, '/blue-voronoi-pattern-background_1409-1288.webp')
    const [ref, api] = useBox(()=>({mass: 1, args:dims, position:position }))
    return(
        <group ref={ref} api={api} castShadow>
        <mesh scale={dims} >
        <sphereBufferGeometry args={[0.2, 20,20]}/>
            <meshPhysicalMaterial map={texture}/>
        </mesh>
            <group position={offset}>
                
                {children}
            </group>
        </group>


       
    )
}

export default Ball