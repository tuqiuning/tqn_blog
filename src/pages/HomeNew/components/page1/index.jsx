import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import EduSVG from '@/assets/icon/EduSVG';
import SchoolSVG from '@/assets/icon/SchoolSVG';
import BirthSVG from '@/assets/icon/BirthSVG';
import AddressSVG from '@/assets/icon/addressSVG';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Page1Wrapper } from './style';
import languageCode from '@/utils/page1.js';

export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })
  return (
    <Page1Wrapper $language={language}>
      <div className='motto'>
        <span>{languageCode.MOTTO[language]}</span>
        {/* <span>吾尝终日而思矣，不如须臾之所学也。</span> */}
      </div>
      <div className='row'>
        <span>{languageCode.FRONTENDDEVELOPER[language]}</span>
        <div className='divide'></div>
        <span>{languageCode.TUQIUNING[language]}</span>
      </div>
      <div className='row'>
      <BirthSVG style={{paddingTop:'0.25rem',marginRight:'0.31rem',width:'1.56rem',height:'1.56rem'}}/>
        <span className='row-left'>1996.11</span>
        <AddressSVG style={{paddingTop:'0.125rem',marginRight:'0.125rem',width:'1.56rem',height:'1.56rem'}}/>
        <span >{languageCode.CHONGQING[language]}</span>
      </div>
      <div className='row'>
        <SchoolSVG style={{paddingTop:'0.125rem',marginRight:'0.31rem',width:'1.56rem',height:'1.56rem'}}/>
        <span className='row-left'>{languageCode.CHONGQINGGONGCHENG[language]}</span>
        <EduSVG style={{marginRight:'0.125rem',width:'1.56rem',height:'1.56rem'}}/>
        <span>{languageCode.BENKE[language]}</span>
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