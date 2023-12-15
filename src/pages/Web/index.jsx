import React, { memo } from 'react';
import Echarts from './Echarts';
import Canvas from './Canvas'
import { FrontendWrapper } from './style'

export default memo(() => {
  return (
    <FrontendWrapper>
      <h1>前端</h1>
      <Echarts />
      <div style={{width:'400px',height:'400px'}}>
      <Canvas />
      </div>
      
    </FrontendWrapper>
  )
})
