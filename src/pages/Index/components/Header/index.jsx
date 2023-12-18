import React, { memo, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import '@/assets/style/font.less';
import languageCode from '@/utils/language';
import dayjs from 'dayjs';
import ComputerSVG from '@/assets/icon/computerSVG.jsx';
import { changeActiveNavIndex,changeNavColor } from '@/store/features/system'
import { HeaderWrapper } from './style'

export default memo(() => {
  const dispatch = useDispatch();
  const { language,activeNavIndex,navColor } = useSelector((state) => {
    return state.system
  })
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
    sessionStorage.setItem('activeNavIndex', 0);
    sessionStorage.setItem('navColor', '#ffffff');
    dispatch(changeActiveNavIndex(0));
    dispatch(changeNavColor('#ffffff'));
  }
  return (
    <HeaderWrapper $language={language} $logoColor={navColor}>
      <div className='header-left' onClick={goHome}>
        <ComputerSVG color={navColor}/>
        {languageCode.TUQIUNING[language]}
        </div>
      <div className='header-center'>{dayjs(currentDate).format(`${language === 'zh-CN' ? 'YYYY年MM月DD日' : 'MMM DD,YYYY'}`)}</div>
      <div className='header-right'>
        <Nav activeNavIndex={parseInt(activeNavIndex)} />
      </div>
    </HeaderWrapper>
  )
})