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
        <BirthSVG style={{paddingTop:'4px',marginRight:'5px'}}/>
        <span className='row-left'>1996.11</span>
        <AddressSVG style={{paddingTop:'2px',marginRight:'2px'}}/>
        <span >{languageCode.CHONGQING[language]}</span>
      </div>
      <div className='row'>
        <SchoolSVG style={{paddingTop:'2px',marginRight:'5px'}}/>
        <span className='row-left'>{languageCode.CHONGQINGGONGCHENG[language]}</span>
        <EduSVG style={{marginRight:'2px'}}/>
        <span>{languageCode.BENKE[language]}</span>
      </div>
      <div className='row'>
        <MailOutlined style={{ fontSize: "20px", marginRight: '5px', paddingTop: '4px' }} />
        <span className='row-left'>tuqiuning@gmail.com</span>
        <PhoneOutlined style={{ fontSize: "20px" ,marginRight: '5px'}} />
        <span>13101085395</span>
      </div>

    </Page1Wrapper>
  )
})