import React, {Suspense} from "react";
import {
          Canvas,
          extend,
          useThree
      } from '@react-three/fiber';

import * as THREE from 'three';
import { OrbitControls, Line } from '@react-three/drei';
import { Background, Bulb, BoxCube, Floor, ColorPIcker } from "./MicroComponents";
import Dragable  from "./Dragable";

  extend({OrbitControls})


  const deg2rad = degrees => degrees * (Math.PI / 180);

  const Orbit = () => {
    const {camera, gl} = useThree();
    //  camera.rotation.set(deg2rad(-30), 0, 0);
    //   camera.position.set(0, 6, 6)
            return (
                    <OrbitControls 
                       attach="orbitControls"
                       args={[camera, gl.domElement]}
                    />
            ) 
   }
   

 export function AppCube() {


     
     const axesHelper = new THREE.AxesHelper( [8] );
          // scene.add( axesHelper );
         const  handleChangeColor = (e) => {
          console.log("this was  clcked ------")
          let bg = e.target.style.backgroundColor
           console.log(bg)

                if(!window.activeMesh) return;

                   const applyColor =  new THREE.Color(bg)               
                window.activeMesh.material.color = applyColor;
         }

      return (

             <div   style={{  height:"100vh", width: "100vw" }}>
                <ColorPIcker handleChangeColor={handleChangeColor} />

               <Canvas 
                    // dpr={[1.5, 2]} linear shadows 
                          camera={{position: [7,7,7]}} 
                >    
                   <fog attach="fog" args={['white', 1, 10]}/> 
                     <ambientLight intensity={6.2} />
                     <Bulb position={[0,5,0]} />
                     <Orbit/>
                     <axesHelper args={[5]}/>
                       <Suspense fallback={null} >
                            <Background />
                       </Suspense>
                       <Line points={[[0, 0, 0], [0, 10, 0]]} color="green"/>
                       <Dragable>
                              <Suspense fallback={null} >
                                   <BoxCube position={[-2,1,0]}/>
                              </Suspense>
                              
                              <Suspense fallback={null} >
                                   <BoxCube position={[2,1,0]}/>
                              </Suspense>                    
                       </Dragable>
  
                      <Floor position={[0, -55, -50]}/>
                      <directionalLight />
               </Canvas>
            </div>
      );
}