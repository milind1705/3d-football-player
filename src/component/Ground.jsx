
import { useBox } from "@react-three/cannon"

const Ground = props=>{
  const [ref, api] = useBox(()=>({args:[10,0,10],...props}))
  return(
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[10,0,10]}/>
      <meshPhysicalMaterial color={'green'}/>
    </mesh>
  )
}

export default Ground
// import { useBox } from '@react-three/cannon';
// const Floor = props =>{
//   const [ref, api] = useBox(()=>({args:[20,1,10],...props}))
//     // const ref = useRef();
   
//     return(
//       <mesh ref={ref} {...props} receiveShadow>
//           <boxBufferGeometry args={[20,1,20]}/>
//           <meshPhysicalMaterial color={'green'} opacity={0.2} />
//         </mesh>
//     )
//   }

//   export default Floor;