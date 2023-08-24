

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLImageElement} image 
 */
export function resizeImgtoCanvas(canvas, ctx, image){
   const naturalH = image.naturalHeight;
   const naturalW = image.naturalWidth;
   const AspectRatio = naturalW / naturalH;
   const heightTobe = naturalW / AspectRatio
   canvas.height = heightTobe
   ctx.drawImage(image,0, 0, canvas.width, heightTobe)

}

/**
 * 
 * @param {HTMLImageElement} img 
 * @param {HTMLCanvasElement} canvas 
 *  @param {CanvasRenderingContext2D} ctx 
 */
export function drawImageOnCanvas(img, canvas, ctx){
    const maxSide = Math.max(img.width, img.height);
    const scale = 400 / maxSide;
    const canvasWidth = img.width * scale;
    const canvasHeight = img.height * scale;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
 
  };


/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
export function grayScale(ctx, canvasWidth, canvasHeight){
    let toEditImage = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    for(let i = 0; i < toEditImage.data.length; i += 4){
        const avg = (toEditImage.data[i] + toEditImage.data[i + 1] + toEditImage.data[i + 2]) / 3;
        toEditImage.data[i] = toEditImage.data[i + 1] = toEditImage.data[i + 2] = avg;
        toEditImage.data[i + 3] = toEditImage.data[i + 3];
    }

    ctx.putImageData(toEditImage, 0, 0)
}




/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
export function tint(ctx, tintColor, canvasWidth, canvasHeight){
   const editedImage = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    //  tintColor = [255, 0, 0]; // Red tint color
  
    for (let i = 0; i < editedImage.data.length; i += 4) {
      editedImage.data[i] = editedImage.data[i] + tintColor[0];
      editedImage.data[i + 1] = editedImage.data[i + 1] + tintColor[1];
      editedImage.data[i + 2] = editedImage.data[i + 2] + tintColor[2];
      editedImage.data[i + 3] = editedImage.data[i + 3]; // Preserve alpha value
    }
  
    ctx.putImageData(editedImage, 0, 0);
}


/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
 export function scale(ctx, w, h){
    const newWidth = canvas.width * w;
    const newHeight = canvas.height * h;
  
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = newWidth;
    tmpCanvas.height = newHeight;
    const tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.drawImage(canvas, 0, 0, newWidth, newHeight);
  
    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.drawImage(tmpCanvas, 0, 0);
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLCanvasElement} canvas 
 */
 export function rotate(ctx, canvas){

   let editedImage = ctx.getImageData(0, 0, canvas.width , canvas.height);

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const destIndex = (y * canvas.width + x) * 4;
        const srcIndex = ((canvas.width - x - 1) * canvas.height + y) * 4;
  
        editedImage.data[destIndex] = editedImage.data[srcIndex];
        editedImage.data[destIndex + 1] = editedImage.data[srcIndex + 1];
        editedImage.data[destIndex + 2] = editedImage.data[srcIndex + 2];
        editedImage.data[destIndex + 3] = editedImage.data[srcIndex + 3];
      }
    }
  
    canvas.width = canvas.height;
    canvas.height = editedImage.width;
    ctx.putImageData(editedImage, 0, 0);
}



export function colorChanel(ctx, canvas){
  let editedImage = ctx.getImageData(0, 0, canvas.width , canvas.height);
  
  for (let i = 0; i < editedImage.data.length; i += 4) {
    // editedImage.data[i] = 0
    // editedImage.data[i + 1] = 0
    editedImage.data[i + 2] = 0
  
  }
  ctx.putImageData(editedImage, 0, 0);
}