import React, { memo, useEffect } from 'react';
import Particles from "particlesjs";
import { MyContainer } from './style';

const My = memo(() => {
  useEffect(()=>{
      draw()
  },[])
  function draw() {
    Particles.init({
        // 选择canvas画布元素
        selector: '.background',
        // 设置最大粒子数
        maxParticles: 100,
        // 设置粒子的移动速度
        speed: 1,
        // 设置粒子颜色
        color: '#8ACAFF',
        // 开启点连线
        connectParticles: true,
        // 设置
        minDistance: 140,
        // 设置响应式配置项的调整
        responsive: [
            {
                // 当浏览器窗口宽小于768像素大小采用以下配置
                breakpoint:768,
                options: {
                    maxParticles: 200,
                    color: '#9400D3',
                    connectParticles: false
                }
            }, {
                // 当浏览器窗口宽小于425像素大小采用以下配置
                breakpoint:425,
                options: {
                    maxParticles:100,
                    connectParticles:true
                }
            }, {
                // 当浏览器窗口宽小于320像素大小采用以下配置
                breakpoint:320,
                options: {
                    maxParticles:0
                }
            }
        ]

    })
}

  return (
    <MyContainer>
      <canvas className="background"> </canvas>
    </MyContainer>
  )
})

export default My