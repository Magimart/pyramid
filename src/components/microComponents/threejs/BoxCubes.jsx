import React, {  useCallback} from "react";
import {
          useLoader,
          
       } from '@react-three/fiber';
import imageTexture from "../../../assets/fredo2.jpg";
import { TextureLoader} from 'three';
import * as THREE from 'three';
import {  useBox } from '@react-three/cannon'
import { useDispatch} from "react-redux";
import { increaseDescreaseScaleActions,  clearErrors } from "../../../redux/actions/applyColorActions";
import { useState } from "react";
import { handlePointerEnter, handlePointerLeave } from "../../../utils/applyColor";


// extend({OrbitControls})

const BoxCube = (props) => {

   const [ref, api] = useBox(() => ({mass: 0.01, ...props }))
   const texture = useLoader(TextureLoader, imageTexture)  
   const dispatch = useDispatch();
   const [activeMesh, setActiveMesh] = useState({});


           const handleBoxClick = useCallback((e) => {
                     dispatch(increaseDescreaseScaleActions(e))
                     dispatch(clearErrors())                       
            }, [dispatch, clearErrors]) 
           
            console.log(api)


        return (
                 //<mesh rotation={[90, 0, 20]}>
                 <>
                     <mesh ref={ref}
                           api={api}
                           {...props}
                           castShadow
                           //  receiveShadow
                           //  onPointerDown={(e) =>setActiveMesh(e)}
                           onPointerDown={handleBoxClick}
                           onPointerEnter={handlePointerEnter}
                           onPointerLeave={handlePointerLeave}
                        >
                        <boxBufferGeometry args={[1.2, 1.2, 1.2]}/> 
                        <meshPhysicalMaterial
                                 map={texture} 
                                 side={THREE.DoubleSide}                   
                        />                      
                     </mesh>
                  </>

        );
}


export default BoxCube;




