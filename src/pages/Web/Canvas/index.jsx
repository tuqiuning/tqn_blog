import React, { memo, useEffect } from 'react';
import { CanvasWrapper } from './style'

export default memo(() => {
    let canvas = null;
    let ctx = null;
    useEffect(()=>{
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        
    },[])
    const draw = () => {
        ctx.clearRect(0, 0, 300, 300);
        ctx.save();
        ctx.beginPath();
        ctx.translate(150,150);
        ctx.arc(0,0,100,0,Math.PI*2,false);
        ctx.restore();
    }
  return (
    <CanvasWrapper>
        <canvas width={300} height={300} id='canvas'>

        </canvas>
    </CanvasWrapper>
  )
})