import { extend, useThree } from "@react-three/fiber";
import React, {useRef, useEffect, useState} from "react";
import {DragControls } from "three/examples/jsm/controls/DragControls"

extend({DragControls});



 const Dragable = (props) =>{


      const domRef = useRef()
      const eventControlsRef = useRef()

      const {camera, gl, scene} = useThree(); // get the scene
      const [children, setChildren] = useState([])
      const [eventControls, setEventControls] = useState([])



        useEffect(() => {
          setChildren(domRef.current.children)
        }, [])


     //    Pass the events to the stte component


        useEffect(() => {

          eventControlsRef.current.addEventListener("hoveron", (e) => {
               console.log(scene);
            return   scene.orbitControls.enabled = false;
          })

          eventControlsRef.current.addEventListener("hoveroff", (e) => {
               console.log(scene);
            return   scene.orbitControls.enabled = true;
          })

     }, [children])

console.log(eventControls)
      return (
           <group ref={domRef}> 
               <dragControls 
                     ref={eventControlsRef}
                     args={[children, camera, gl.domElement]}
               />
               {props.children}
           </group>
      )
}

export default Dragable;