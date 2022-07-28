
import {DragControls} from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useRef, useEffect,useState } from 'react';

extend({DragControls})
const Dragable = props =>{
    const [children, setChildren] = useState();
    const {camera, gl, scene} =useThree()
    const groupRef = useRef();
    const controlRef = useRef();
    useEffect(()=>{
        setChildren(groupRef.current.children)
    },[])
    useEffect(()=>{
      console.log(scene.orbitControls.enabled )
        controlRef.current.addEventListener('hoveron', e =>{
          scene.orbitControls.enabled = false
        })
        controlRef.current.addEventListener('hoveroff', e =>{
            scene.orbitControls.enabled = true
          })
          controlRef.current.addEventListener('dragStart', e =>{
            e?.object?.api?.mass.set(0)
          })
          controlRef.current.addEventListener('dragEnd', e =>{
            e?.object?.api?.mass.set(1)
          })
          controlRef.current.addEventListener('drag', e =>{
            // console.log(e.object.api.mass)
            e.object.api.position.copy(e.object.position)
            e.object.api.velocity.set(0,0,0)
          })
    },[children])
    return (
        <group ref={groupRef}>
            <dragControls ref={controlRef} transformGroup={props.transformGroup} args={[children, camera, gl.domElement]} />
            {props.children}
        </group>
    )
}

export default Dragable;