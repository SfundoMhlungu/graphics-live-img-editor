
import {drawImageOnCanvas, grayScale, tint, scale, rotate, colorChanel} from "./ImageEdit.js"

document.addEventListener("DOMContentLoaded", ()=> {

   /**
    * @type {HTMLCanvasElement}
    */
   const canvas = document.getElementById("canvas")
    // canvas.height  = window.innerHeight
    // canvas.width = window.innerWidth

   let x = (canvas.clientWidth/2)-100
   let y = (canvas.clientHeight/2)-100
   let size = 50
   const VELOCITY = 5

   /**
    * @type {CanvasRenderingContext2D}
    */
   const ctx = canvas.getContext("2d")

    // ctx.fillStyle = "hotpink"

    // ctx.fillRect((canvas.clientWidth/2)-100, (canvas.clientHeight/2)-100, 200, 200)
    // ctx.fillRect(x, y, size, size)




//   function loop(){
//     ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    
//     onkeydown = (event)=> {
       

//         if(event.key == "ArrowDown")
//                y += VELOCITY

//         if(event.key == "ArrowLeft")
//                 x -= VELOCITY

//         if(event.key == "ArrowRight")
//                x += VELOCITY

//         if(event.key == "ArrowUp")
//                y -= VELOCITY

//     }
//     // console.log(x, y)
//     ctx.fillRect(x, y,size, size)
//     requestAnimationFrame(loop)
//   }



// loop()




// image things

const img = new Image()
img.onload = function(){
   // resizeImgtoCanvas(canvas, ctx, img)
   drawImageOnCanvas(img, canvas, ctx)
   // grayScale(ctx, canvas.width, canvas.height)
   colorChanel(ctx, canvas)
   // tint(ctx, [32, 38, 51], canvas.width, canvas.height)
   setTimeout(() => {
      const i = document.getElementById("i")
      
        scale(ctx, 2, 2)
      //   rotate(ctx, canvas)
        i.src = canvas.toDataURL("image/jpeg", 1.0)
   }, 5000);
    
}
img.src = "./imgs/5.png"



    
})
