import React, { memo,useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import languageCode from '@/utils/language';
import Skill from './components/Skill';
import Project from './components/Project';
import icon from '@/assets/icon/备案图标.png';

import {HomeContainer} from './style'

export default memo(() => {
  const {language} = useSelector((state)=>{
    return state.system
  })
  const [current, setCurrent] = useState(0);
  const [showSkill,setShowSkill] = useState(true)
  const toSkill = () => {
    setCurrent(0);
    setShowSkill(true)
  }
  const toProject = () => {
    setCurrent(1);
    setShowSkill(false)
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
        {
          showSkill ? <Skill /> : <Project />
        }
      </div>
      <div className='footer'>
        <img src={icon} alt="" width={15} height={15}/>
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=50011302222072\" rel="noreferrer" target="_blank">渝公网安备50011302222072</a>
      <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2023016344号-1</a>
      </div>
    </HomeContainer>
  )
})
