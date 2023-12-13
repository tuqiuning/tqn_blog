import React, { memo } from 'react';
import { Page2Wrapper } from './style';

export default memo(() => {

  return (
    <Page2Wrapper>
      <h1>专业技能</h1>
        <ul>
          <li>
            熟练使用Vue2、Vue3、Vuex、Pinia
          </li>
          <li>
            熟练使用React、React Hooks、Redux、Redux-Saga
          </li>
          <li>
            熟练使用Node.js、Express、Koa、Nest、
          </li>
          <li>
            熟练使用Canvas、SVG、Echarts、WebGL、Three.js
          </li>
          
        </ul>
      
    </Page2Wrapper>
  )
})