import { useBox, useSphere } from "@react-three/cannon"

const Ball = ({
    position =[0,0,0],
    offset = [0,0,0,],
    dims = [1,1,1],
    visible =false,
    children 
        })=>{
    const [ref, api] = useBox(()=>({mass: 1, args:dims, position:position }))
    return(
        <group ref={ref} api={api} castShadow>
        <mesh scale={dims} visible={visible}>
        <sphereBufferGeometry args={[0.2, 20,20]}/>
            <meshPhysicalMaterial wireframe/>
        </mesh>
            <group position={offset}>
                
                {children}
            </group>
        </group>


       
    )
}

export default Ball