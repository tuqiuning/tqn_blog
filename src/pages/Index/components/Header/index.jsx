import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import '@/assets/style/font.less';
import languageCode from '@/utils/language';
import dayjs from 'dayjs';
import ComputerSVG from '@/assets/icon/computerSVG.jsx';
import { HeaderWrapper } from './style'

export default memo(() => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeNavIndex,setActiveNavIndex] = useState(sessionStorage.getItem('activeNav') || 0); //导航栏激活的下标
  const [logoColor,setLogoColor] = useState( sessionStorage.getItem('navColor') || '#ffffff'); //导航栏字体颜色
  const { language } = useSelector((state) => {
    return state.counter
  })
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
    setActiveNavIndex(0);
  }
  // 点击导航栏
  const clickNav = (index) =>{
    setActiveNavIndex(index);
    if(index === 0 ){
      setLogoColor('#ffffff');
      sessionStorage.setItem('navColor','#ffffff');
    }else {
      setLogoColor('#000000');
      sessionStorage.setItem('navColor','#000000');
    }
  } 
  return (
    <HeaderWrapper $language={language} $logoColor={logoColor}>
      <div className='header-left' onClick={goHome}>
        <ComputerSVG color={logoColor}/>
        {languageCode.TUQIUNING[language]}
        </div>
      <div className='header-center'>{dayjs(currentDate).format(`${language === 'zh-CN' ? 'YYYY年MM月DD日' : 'MMM DD,YYYY'}`)}</div>
      <div className='header-right'>
        <Nav activeNavIndex={parseInt(activeNavIndex)} clickNav={(index)=>clickNav(index)}/>
      </div>
    </HeaderWrapper>
  )
})