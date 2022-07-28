/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

export default function Model({ ...props }) {
  const[action, setAction] = useState('idle')
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/player.glb')
  const { actions } = useAnimations(animations, group)
  const previousAction = usePrevious(action);
  const startAnimation =()=>{
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'p'){
        setAction('pass')
      }
      if(e.key === 'k'){
        setAction('penaltyKick1')
      }
    })
  }
  const stopAnimation = ()=>{
    window.addEventListener('keyup', ()=>{
      setAction('idle')
    })
  }
  startAnimation()
  stopAnimation()
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);
  const[snikker, api] = useBox(()=>({args:[0.1,0.1,0.1]}))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh receiveShadow castShadow name="Ch42__Eyelashes" geometry={nodes.Ch42__Eyelashes.geometry} material={materials.Ch42_Hair} skeleton={nodes.Ch42__Eyelashes.skeleton} />
          <skinnedMesh receiveShadow castShadow name="Ch42_Body1" geometry={nodes.Ch42_Body1.geometry} material={materials.Ch42_Body} skeleton={nodes.Ch42_Body1.skeleton} />
          <skinnedMesh receiveShadow castShadow name="Ch42_Hair1" geometry={nodes.Ch42_Hair1.geometry} material={materials.Ch42_Hair} skeleton={nodes.Ch42_Hair1.skeleton} />
          <skinnedMesh  receiveShadow castShadow name="Ch42_Shirt" geometry={nodes.Ch42_Shirt.geometry} material={materials.Ch42_Body} skeleton={nodes.Ch42_Shirt.skeleton} />
          <skinnedMesh receiveShadow castShadow name="Ch42_Shorts" geometry={nodes.Ch42_Shorts.geometry} material={materials.Ch42_Body} skeleton={nodes.Ch42_Shorts.skeleton} />
          <skinnedMesh receiveShadow castShadow ref={snikker} name="Ch42_Sneakers" geometry={nodes.Ch42_Sneakers.geometry} material={materials.Ch42_Sneakers} skeleton={nodes.Ch42_Sneakers.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/player.glb')
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
}