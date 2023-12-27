import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { title,skills } from './data';
import { Page2Wrapper } from './style';

export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })
  return (
    <Page2Wrapper>
      <div className='title'>{title[language]}</div>
      <ul>
        {
          skills[language].map((item,index) =>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>

    </Page2Wrapper>
  )
})