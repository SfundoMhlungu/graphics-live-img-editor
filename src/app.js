
import {drawImageOnCanvas, grayScale, tint, scale, colorChanel} from "./ImageEdit.js"

document.addEventListener("DOMContentLoaded", ()=> {

   /**
    * @type {HTMLCanvasElement}
    */
   const canvas = document.getElementById("canvas")
    // canvas.height  = window.innerHeight
    // canvas.width = window.innerWidth



   /**
    * @type {CanvasRenderingContext2D}
    */
   const ctx = canvas.getContext("2d")

 

const img = new Image()
img.onload = function(){
   // resizeImgtoCanvas(canvas, ctx, img)
   drawImageOnCanvas(img, canvas, ctx)
   // grayScale(ctx, canvas.width, canvas.height)
   colorChanel(ctx, canvas)
   // tint(ctx, [32, 38, 51], canvas.width, canvas.height)
   setTimeout(() => {
      const i = document.getElementById("i")
      
        // scale(ctx, .5, .5)
      //   rotate(ctx, canvas)
        // i.src = canvas.toDataURL("image/jpeg", 1.0)
   }, 5000);
    
}
img.src = "./imgs/1.jpg"



    
})
