
import { useBox } from "@react-three/cannon"

const Ground = props=>{
  const [ref, api] = useBox(()=>({args:[10,0,10],...props}))
  return(
    <mesh castshadow ref={ref} api={api}{...props} receiveShadow>
      <boxBufferGeometry args={[10,0,10]}/>
      <meshPhysicalMaterial color={'green'}/>
    </mesh>
  )
}

export default Ground