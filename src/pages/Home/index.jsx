import React, { memo,useEffect,useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import languageCode from '@/utils/language';

import {HomeContainer} from './style'

export default memo(() => {
  const {language} = useSelector((state)=>{
    return state.counter
  })
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/home/skill')
  },[])
  const toSkill = () => {
    navigate('/home/skill');
    setCurrent(0);
  }
  const toProject = () => {
    navigate('/home/project');
    setCurrent(1);
  }
  return (
    <HomeContainer>
        <div className='title'>
        <h1>{languageCode.CENTER[language]}</h1>
        <div className='info'>
          <span>{languageCode.NAME[language]}:{languageCode.TUQIUNING[language]}</span>
          <span>{languageCode.SEX[language]}:{languageCode.MALE[language]}</span>
        </div>
      </div>

      <div className='tabs'>
        <span onClick={toSkill} className={classNames({ active: current === 0 })}>{languageCode.SKILLS[language]}</span>
        <span onClick={toProject} className={classNames({ active: current === 1 })}>{languageCode.PROJECT[language]}</span>
      </div>
      <div className='content'>
        <Outlet></Outlet>
      </div>
    </HomeContainer>
  )
})
