import React, { memo, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import '@/assets/style/font.less';
import languageCode from '@/utils/language';
import dayjs from 'dayjs';
import ComputerSVG from '@/assets/icon/computerSVG.jsx';
import { changeActiveNavIndex } from '@/store/features/system'
import { HeaderWrapper } from './style'

export default memo(() => {
  const dispatch = useDispatch();
  const { language,activeNavIndex } = useSelector((state) => {
    return state.system
  })
  const [currentDate, setCurrentDate] = useState(new Date());
  const [logoColor,setLogoColor] = useState( sessionStorage.getItem('navColor') || '#ffffff'); //导航栏字体颜色
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
    sessionStorage.setItem('activeNavIndex', 0);
    dispatch(changeActiveNavIndex(0))
  }
  // 点击导航栏
  const clickNav = (index) =>{
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