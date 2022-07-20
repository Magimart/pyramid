import React, {useRef, useEffect, useCallback, useMemo,Suspense} from "react";
import {
          Canvas,
          useFrame,
          useLoader,
          extend,
          useThree
      } from '@react-three/fiber';
import imageTexture from "../../../assets/fredoapp0.png";
import bgTexture from "../../../assets/werkstatt.jpg";

import { 
    MeshPhongMaterial, 
    TextureLoader 
   } 
    from 'three';
import * as THREE from 'three';
import { OrbitControls} from '@react-three/drei';

  extend({OrbitControls})


  const deg2rad = degrees => degrees * (Math.PI / 180);

  const Orbit = () => {
    const {camera, gl} = useThree();
    //  camera.rotation.set(deg2rad(-30), 0, 0);
    //   camera.position.set(0, 6, 6)
            return (
                    <OrbitControls args={[camera, gl.domElement]}/>
            ) 
   }
   


  export const BoxCube = (props) => {

      const ref = useRef();
      const texture = useLoader(TextureLoader, imageTexture)
        
          useFrame((state) => {
            //   ref.current.rotation.x += 0.01;
                 ref.current.rotation.y += 0.01;
          });


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
                           {...props}
                           castShadow
                           receiveShadow

                           //onClick={(e) => HandleBoxClick(e)}
                           onPointerDown={HandleBoxClick}
                           onPointerEnter={handlePointerEnter}
                           onPointerLeave={HandlePointerLeave}
                    >
                        <boxBufferGeometry args={[1, 1, 1]}/> 
                        {/* <sphereBufferGeometry args={[1, 100, 100]}  /> */}

                        <meshPhysicalMaterial
                                 map={texture} 
                                //  color="gray" 
                                 fog={false}
                                // opacity={0.7}
                                 transparent
                                // wireframe 
                                //  metalness={1}
                                transmission={0.5}
                                reflectivity={6}
                                // roughness={0}
                                // clearcoat={1}
                                side={THREE.DoubleSide}
                        />                      
                    </mesh>
        );
 }



  export const Background = () => {

     const {gl} = useThree()
     const texture = useLoader(TextureLoader, bgTexture);
    //const texture = useTexture(bgTexture)

     const formatted = useMemo(() => {

                let webGlTarget = new THREE.WebGLCubeRenderTarget(texture.image.height)
                                .fromEquirectangularTexture(gl, texture)
                return webGlTarget;

       }, [gl, texture]);

    
            return(
                <primitive
                       attach="background"
                      // object={texture}
                       object={formatted && formatted.texture}
                />
            )
}


export const Floor = props => {

    return (
      <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[20, 1, 10]}/>
        <meshPhysicalMaterial />
      </mesh>
    
    );
  }


export const Bulb = (props) => {

    return (
        <mesh {...props}>
            <pointLight castShadow/>
            <sphereBufferGeometry args={[0.3]} />
            <meshPhongMaterial emissive="yellow" emissiveIntensity={90}/>
        </mesh>
    )
}


export const ColorPIcker = ({handleChangeColor}) => {
    return (
         <>
                   <div className="absolute top-20 left-10 z-10 flex flex-col">
                    <div style={{position: "relative", background: "green", height: "4em", width: "4em" }} onClick={handleChangeColor} >11 </div>
                    <div style={{position: "relative", background: "yellow", height: "4em", width: "4em" }} onClick={handleChangeColor}> 22</div>
                    <div style={{position: "relative", background: "red", height: "4em", width: "4em" }}  onClick={handleChangeColor}>33 </div>
            </div>
         </>
    )
}




