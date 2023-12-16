import React, { memo,useState } from 'react';
import { useSelector } from 'react-redux';
import Echarts from './Echarts';
import Canvas from './Canvas';

import { FrontendWrapper } from './style';
import classNames from 'classnames';
import languageCode from '@/utils/frontend';

export default memo(() => {
  const { language } = useSelector(state => {
    return state.counter;
  });
  const [activeIndex,setActiveIndex] = useState(0);
  return (
    <FrontendWrapper>
      <div className='tabs'>
        <div onClick={()=>setActiveIndex(0) } className={classNames(activeIndex === 0 ? 'active':'null')}>{languageCode.ECHARTS[language]}</div>
        <div onClick={()=>setActiveIndex(1) } className={classNames(activeIndex === 1 ? 'active':'null')}>{languageCode.CANVAS[language]}</div>
      </div>
      <div className='content'>
        {
          activeIndex === 0 ?  <Echarts /> : <Canvas />
        }
      </div>
    </FrontendWrapper>
  )
})
