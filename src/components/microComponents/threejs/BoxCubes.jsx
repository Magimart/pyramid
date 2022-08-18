import React, {useRef, useEffect, useCallback, useMemo,Suspense} from "react";
import {
          useLoader,
          extend,
          useThree
       } from '@react-three/fiber';
import imageTexture from "../../../assets/fredo2.jpg";
import { TextureLoader} from 'three';
import * as THREE from 'three';
import { OrbitControls} from '@react-three/drei';
import {  useBox } from '@react-three/cannon'

extend({OrbitControls})

  const deg2rad = degrees => degrees * (Math.PI / 180);
  

export const BoxCube = (props) => {

      // const ref = useRef();
   
      const [ref, api] = useBox(() => ({mass: 0.01, ...props }))
      const texture = useLoader(TextureLoader, imageTexture)       
        //  useFrame((state) => {
        //          ref.current.rotation.y += 0.01;
        //   });

          const decreaseScale = (object) => {
             object.scale.x  = 1
             object.scale.y  = 1
             object.scale.z  = 1 
          }

           const HandleBoxClick = (e) => {
                // let activeWindowMesh = e.object.active;
               e.object.active = true;
              let windowActiveMesh = e.object;
              if(window.activeMesh){
                decreaseScale(window.activeMesh)
                window.activeMesh.active = false;
              }
              window.activeMesh = windowActiveMesh; // sets object to global on window                        
            } 

   
            const handlePointerEnter = (e) => {
                 e.object.scale.x  = 1.5
                 e.object.scale.y  = 1.5
                 e.object.scale.z  = 1.5
            } 
            const HandlePointerLeave = (e) => {
                      if(!e.object.active){
                         decreaseScale(e.object)     
                      }
            } 

        return (
                 //<mesh rotation={[90, 0, 20]}>
                    <mesh ref={ref}
                           api={api}
                           {...props}
                           castShadow
                          //  receiveShadow
                           //onClick={(e) => HandleBoxClick(e)}
                           onPointerDown={HandleBoxClick}
                           onPointerEnter={handlePointerEnter}
                           onPointerLeave={HandlePointerLeave}
                    >
                        <boxBufferGeometry args={[1, 1, 1]}/> 
                        <meshPhysicalMaterial
                                 map={texture} 
                                 side={THREE.DoubleSide}                   
                       />                      
                    </mesh>

        );
}







