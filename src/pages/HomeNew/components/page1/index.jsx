import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import EduSVG from '@/assets/icon/EduSVG';
import SchoolSVG from '@/assets/icon/SchoolSVG';
import BirthSVG from '@/assets/icon/BirthSVG';
import AddressSVG from '@/assets/icon/addressSVG';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { overviewData } from './data';
import { Page1Wrapper } from './style';

export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })
  return (
    <Page1Wrapper $language={language}>
      <div className='motto'>
        <span>{overviewData[language].motto}</span>
        {/* <span>吾尝终日而思矣，不如须臾之所学也。</span> */}
      </div>
      <div className='row'>
        <span>{overviewData[language].post}</span>
        <div className='divide'></div>
        <span>{overviewData[language].name}</span>
      </div>
      <div className='row'>
      <BirthSVG style={{paddingTop:'0.25rem',marginRight:'0.31rem',width:'1.56rem',height:'1.56rem'}}/>
        <span className='row-left'>1996.11</span>
        <AddressSVG style={{paddingTop:'0.125rem',marginRight:'0.125rem',width:'1.56rem',height:'1.56rem'}}/>
        <span >{overviewData[language].address}</span>
      </div>
      <div className='row'>
        <SchoolSVG style={{paddingTop:'0.125rem',marginRight:'0.31rem',width:'1.56rem',height:'1.56rem'}}/>
        <span className='row-left'>{overviewData[language].school}</span>
        <EduSVG style={{paddingTop:'0.125rem',marginRight:'0.125rem',width:'1.56rem',height:'1.56rem'}}/>
        <span>{overviewData[language].educational}</span>
      </div>
      <div className='row'>
        <MailOutlined style={{ fontSize: "1.25rem", marginRight: '0.31rem', paddingTop: '0.25rem' }} />
        <span className='row-left'>tuqiuning@gmail.com</span>
        <PhoneOutlined style={{ fontSize: "1.25rem" ,marginRight: '0.31rem'}} />
        <span>13101085395</span>
      </div>

    </Page1Wrapper>
  )
})