import React, {Suspense} from "react";
import {
          Canvas,
          extend,
          useThree
      } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Line } from '@react-three/drei';
import { ColorPIcker,
           Orbit
     } from "./MicroComponents";
import Dragable  from "./Dragable";
import { Physics} from '@react-three/cannon'
import { BoxCube } from "./BoxCubes";
import { Floor, Background, Bulb, SurfacePlane } from "./BgFloor";

extend({OrbitControls})



 export function AppMain() {


     const axesHelper = new THREE.AxesHelper( [8] );
          // scene.add( axesHelper );

      return (

         <div  style={{  height:"100vh", width: "100vw" }}>
                <ColorPIcker
                  //handleChangeColor={handleChangeColor} 
                />
               <Canvas shadows dpr={[1.5, 2]}
                    camera={{ position: [-1, 5, 5], fov: 70 }}
          >       
                     <ambientLight intensity={1.5} />
                     <Bulb position={[0,7,0]} />
                     <Orbit/>
                     <axesHelper args={[30]}/>

                    <Physics>
                         <Suspense fallback={null} >
                            <Background />
                       </Suspense>
                       <Line points={[[0, -10, 0], [0, 20, 0]]} color="red"/>
                       <Dragable>                                                          
                              <Suspense fallback={null} >
                                   <BoxCube position={[-5, (Math.random() * 7), -2]}/>
                              </Suspense>
                              <Suspense fallback={null} >
                                   <BoxCube position={[Math.random() *-1.5, 40, 0]}/>
                              </Suspense>                              
                              <Suspense fallback={null} >
                                   <BoxCube position={[Math.random() * 3, Math.random() * 10, Math.random() * -13]}/>
                              </Suspense>
                              <Suspense fallback={null} >
                                   <BoxCube position={[Math.random() *3, 30, 0]}/>
                              </Suspense>                   
                       </Dragable>  
                       <Suspense fallback={null} >
                          {/* <Floor position={[-3, 0, -3]}/> */}
                          <Floor position={[-0.9, -10, -15]}/>
                       </Suspense> 
                       <Suspense fallback={null} >
                          {/* <SurfacePlane  position={[-3, 0, -3]} /> */}
                          <SurfacePlane  position={[-0.9, -10, -15]} />
                       </Suspense>                                     
                    </Physics>
               </Canvas>
          </div>
      );
}