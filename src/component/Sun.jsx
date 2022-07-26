
const Sun = props=>{
    return(
        <mesh {...props}>
            <pointLight intensity={2}/>
            <sphereBufferGeometry args={[0.1, 10,10]}/>
            <meshPhysicalMaterial color={'yellow'}/>
        </mesh>
    )
}

export default Sun