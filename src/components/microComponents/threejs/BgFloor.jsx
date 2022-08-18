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
import { MeshPhongMaterial, TextureLoader} from 'three';
import * as THREE from 'three';
import { OrbitControls} from '@react-three/drei';
import { useBox, usePlane } from '@react-three/cannon'

extend({OrbitControls})


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
                        args={[5, 1, 10]}
                       object={formatted && formatted.texture}
                />
            )
}


export const Floor = props => {

  const [ref, api] = useBox(() => ({args:[20, 1, 12], ...props}))
  // const [ref, api] = usePlane(() => ({args:[20, 1, 12], ...props}))

    return (
      <mesh 
            ref={ref} 
            api={api} {...props} 
            receiveShadow
      >
        {/* <boxBufferGeometry args={[20, 1, 12]}/> */}
        {/* <boxBufferGeometry args={[40, -6, 29]}/> */}     
        <boxBufferGeometry args={[40, 0, 19]}/>         
        <meshPhysicalMaterial color={""}/>
        {props.children} 
      </mesh>   
    );
  }


  export const SurfacePlane = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="black" transparentm opacity={0.5} />
      </mesh>
    )
  }

export const Bulb = (props) => {

    return (
        <mesh {...props}>
            <pointLight castShadow/>
            <sphereBufferGeometry args={[0.3, 2]} />
            <meshPhongMaterial emissive="#171717" emissiveIntensity={90}/>
        </mesh>
    )
}







