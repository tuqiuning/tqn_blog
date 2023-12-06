import React, { memo,useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Nav';
import '@/assets/style/font.less';
import languageCode from '@/utils/language';
import dayjs from 'dayjs';
import { HeaderWrapper } from './style'

export default memo(() => {
    const [currentDate, setCurrentDate] = useState(new Date());
  const {language} = useSelector((state)=>{
    return state.counter
  })
  return (
    <HeaderWrapper className='header'>
        <div className='header-left'>{languageCode.TUQIUNING[language]}</div>
        <div className='header-center'>{dayjs(currentDate).format(`${language === 'zh-CN'?'YYYY年MM月DD日':'MMM DD,YYYY'}`)}</div>
        <div className='header-right'>
          <Nav />
        </div>
      </HeaderWrapper>
  )
})