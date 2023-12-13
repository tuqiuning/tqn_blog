import React, { memo } from 'react';
import Echarts from './Echarts'
import { FrontendWrapper } from './style'

export default memo(() => {
  return (
    <FrontendWrapper>
      <h1>前端</h1>
      <Echarts />
    </FrontendWrapper>
  )
})
