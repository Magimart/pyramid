import React, {useRef, useEffect, useCallback, useMemo,Suspense} from "react";
import * as THREE from 'three';
import {
          extend,
          useThree,
          useLoader
       } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import { applyColorActions, clearErrors } from "../../../redux/actions/applyColorActions";
import { useDispatch } from "react-redux";



extend({OrbitControls});


   export const Orbit = () => {
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



  export const ColorPIcker = () => {

    const dispatch = useDispatch()

    const handleChangeColor = useCallback((e) => {

              let selectedColor = e.target.style.backgroundColor
                dispatch(applyColorActions(selectedColor))
                dispatch(clearErrors())
    }, [dispatch])


    

    return (
         <>
                  <div className="absolute top-20 left-10 z-10 flex flex-col space-y-1 h-max">
                     <div className="my-1 bg-black w-44">
                        <h2 className=" text-white p-2 semibold">
                           select box and apply any colors
                         </h2>
                         <p className=" text-xs text-yellow-500 flex justify-center flex-row px-2 pb-2 w-full ">
                           In this  challenge you are tasked with piling the boxes on top of each other on unstable floor.
                           Think of a floor that is perhaps place on the water surface.
                         </p>
                         <p className="flex-1 text-xs text-gray-500 flex justify-center flex-row px-2 pb-2 w-full ">
                            You may select a box and apply any of the colors below to be able to identify the edges of the box during play.
                             
                           </p>
                     </div>
                    <div style={{position: "relative", background: "blue", height: "4em", maxWidth: "4em" }} onClick={handleChangeColor} > </div>
                    <div style={{position: "relative", background: "green", height: "4em", width: "4em" }} onClick={handleChangeColor}> </div>
                    <div style={{position: "relative", background: "red", height: "4em", width: "4em" }}  onClick={handleChangeColor}></div>

                  <div className="bg-black  w-max p-4 bg-opacity-20">
                    ↩️↪️⤴️⤵️
                </div>
                </div>

         </>
    )
}




