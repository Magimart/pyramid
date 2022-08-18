import { extend, useThree } from "@react-three/fiber";
import React, {useRef, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {DragControls } from "three/examples/jsm/controls/DragControls"
import { getDragEvent } from "../../../utils/applyColor";

 extend({DragControls});


const Dragable = (props) =>{

     const domRef = useRef()
     const eventControlsRef = useRef()

     const {camera, gl, scene} = useThree(); // get the scene
     const [allMesh, setChildren] = useState([])
     // const [eventControls, setEventControls] = useState([])


               useEffect(() => {
                    setChildren(domRef.current.children)
               }, [])


               useEffect(async() => {
                   getDragEvent(eventControlsRef, scene)
               }, [allMesh])

          return (
                    <group ref={domRef}> 
                         <dragControls 
                              ref={eventControlsRef}
                              args={[allMesh, camera, gl.domElement]}
                         />
                         {props.children}
                    </group>
          )
}

export default Dragable;