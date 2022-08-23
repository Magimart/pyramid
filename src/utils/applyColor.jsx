import * as THREE from 'three';


export const  addSelectedColor = (color) => {
         if(!window.activeMesh) return;
         const applyColor =  new THREE.Color(color)          
             return window.activeMesh.material.color = applyColor;
}



export const getDragEvent = (eventControlsRef, scene) => {
    eventControlsRef.current.addEventListener("hoveron", (e) => {                                                                                                                
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
          e.object.api.mass.set(0);
    })

// comment below for building puzzle blocks                   
    eventControlsRef.current.addEventListener("dragend", (e) => {
          e.object.api.mass.set(1);
    })
}


export const decreaseScale = (object) => {
      object.scale.x  = 1
      object.scale.y  = 1
      object.scale.z  = 1 
}

  export const handlePointerEnter = (e) => {

                e.object.scale.x  = 1.2
                e.object.scale.y  =1.2
                e.object.scale.z  = 1.2
            } 

  export const handlePointerLeave = (e) => {
                      if(!e.object.active){
                         decreaseScale(e.object)     
                      }
    } 
