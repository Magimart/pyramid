import * as THREE from 'three';


export const  addSelectedColor = (color) => {
         if(!window.activeMesh) return;
         const applyColor =  new THREE.Color(color)          
             return window.activeMesh.material.color = applyColor;
   }



   export const getDragEvent = (eventControlsRef, scene) => {
    eventControlsRef.current.addEventListener("hoveron", (e) => {
         console.log(e)
         console.log(scene);
                                                                                                                
    return   scene.orbitControls.enabled = false;
    })

    eventControlsRef.current.addEventListener("hoveroff", (e) => {
    return   scene.orbitControls.enabled = true;
    })

    eventControlsRef.current.addEventListener("drag", (e) => {
              e.object.api.position.copy(e.object.position)
              e.object.api.velocity.set(0, 0, 0)
         }
    )

    eventControlsRef.current.addEventListener("dragstart", (e) => {
          console.log(e)
          e.object.api.mass.set(0);
    })

// comment below for building puzzle blocks                   
    eventControlsRef.current.addEventListener("dragend", (e) => {
          e.object.api.mass.set(1);
    })
  }







