import React, { memo, useEffect } from 'react';
import { CanvasWrapper } from './style';
import '@/assets/style/font.less';

export default memo(() => {
  let canvas = null;
  let ctx = null;
  useEffect(() => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    requestAnimationFrame(draw)
  }, [])
  const draw = () => {

    // 绘制圆盘
    ctx.clearRect(0, 0, 500, 500);
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.translate(250, 250);
    ctx.arc(0, 0, 200, 0, Math.PI * 2, false);
    ctx.fill()
    ctx.restore();

    // 绘制圆环
    ctx.save();
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.translate(250, 250);
    ctx.arc(0, 0, 200, 0, Math.PI * 2, false);
    ctx.lineWidth = 2;
    ctx.stroke()
    ctx.restore();

    // 绘制时针刻度
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(250, 250);

      let x1 = Math.cos(Math.PI / 6 * i) * 180;
      let y1 = Math.sin(Math.PI / 6 * i) * 180;
      let x2 = Math.cos(Math.PI / 6 * i) * 200;
      let y2 = Math.sin(Math.PI / 6 * i) * 200;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 3;
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    // 绘制分针刻度
    for (let i = 0; i < 60; i++) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(250, 250);

      let x1 = Math.cos(Math.PI / 30 * i) * 190;
      let y1 = Math.sin(Math.PI / 30 * i) * 190;
      let x2 = Math.cos(Math.PI / 30 * i) * 200;
      let y2 = Math.sin(Math.PI / 30 * i) * 200;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    // 绘制数字
    ctx.save();
    ctx.translate(250, 250);
    ctx.font = "30px fangsong";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    let numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    for (let i = 0; i < numbers.length; i++) {
      let x = Math.cos(Math.PI / 6 * i) * 160;
      let y = Math.sin(Math.PI / 6 * i) * 160;
      ctx.fillText(numbers[i], x, y)
    }
    ctx.restore();

    // 绘制时针
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let milliseconds = time.getMilliseconds();
    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(
      Math.PI * 2 / 12 * hours +
      Math.PI * 2 / 12 * minutes / 60 +
      Math.PI * 2 / 12 * seconds / 3600
    )
    ctx.lineCap = 'round'
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -100);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // 绘制分针
    ctx.save();
    ctx.translate(250, 250);

    ctx.rotate(
      Math.PI * 2 / 60 * minutes +
      Math.PI * 2 / 60 * seconds / 60
    )
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, -120);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();

    // 绘制秒针
    ctx.save();
    ctx.translate(250, 250);

    ctx.rotate(
      Math.PI * 2 / 60 * seconds +
      Math.PI * 2 / 60 * milliseconds / 1000

    )
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#bf0000';
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(0, -140);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // 绘制中心点
    ctx.save();
    ctx.translate(250, 250);
    ctx.beginPath();
    ctx.fillStyle = "#cf0000";
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // 绘制logo
    ctx.save();
    ctx.translate(250,250);
    ctx.font = "30px none";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.fillText('Canvas',0,-100)
    ctx.closePath();
    ctx.restore();

    requestAnimationFrame(draw)
  }
  return (
    <CanvasWrapper>
      <canvas width={500} height={500} id='canvas'>

      </canvas>
    </CanvasWrapper>
  )
})