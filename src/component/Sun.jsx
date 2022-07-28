
const Sun = props=>{
    return(
        <mesh {...props} castShadow>
             <directionalLight
            intensity={1.5}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
        />
            <sphereBufferGeometry args={[0.1, 10,10]}/>
            <meshPhysicalMaterial color={'yellow'}/>
        </mesh>
    )
}

export default Sun