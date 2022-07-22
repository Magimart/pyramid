import { extend, useThree } from "@react-three/fiber";
import React, {useRef, useEffect, useState} from "react";
import {DragControls } from "three/examples/jsm/controls/DragControls"

extend({DragControls});



 const Dragable = (props) =>{


      const domRef = useRef()
      const {camera, gl} = useThree();
      const [children, setDragableValues] = useState([])



        useEffect(() => {
             setDragableValues(domRef.current.children)
        }, [])

        console.log(children)

      return (
           <group ref={domRef}> 
               <dragControls args={[children, camera, gl.domElement]}/>
               {props.children}
           </group>
      )
}

export default Dragable;