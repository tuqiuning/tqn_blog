import React, { memo } from 'react';
import { Divider } from 'antd';
import EduSVG from '@/assets/icon/EduSVG';
import SchoolSVG from '@/assets/icon/SchoolSVG';
import BirthSVG from '@/assets/icon/BirthSVG';
import AddressSVG from '@/assets/icon/addressSVG';
import { GithubOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import { Page1Wrapper } from './style';

export default memo(() => {
  return (
    <Page1Wrapper>
      <div className='motto'>
        {/* <span>业精于勤；荒于嬉；行成于思；毁于随。</span> */}
        <span>吾尝终日而思矣，不如须臾之所学也。</span>
      </div>
      <div className='row'>
        <span>前端开发工程师</span>
        <div className='divide'></div>
        <span>涂邱宁</span>
      </div>
      <div className='row'>
        <BirthSVG style={{paddingTop:'4px',marginRight:'5px'}}/>
        <span className='row-left'>1996.11</span>
        <AddressSVG style={{paddingTop:'2px',marginRight:'2px'}}/>
        <span >重庆</span>
      </div>
      <div className='row'>
        <SchoolSVG style={{paddingTop:'2px',marginRight:'5px'}}/>
        <span className='row-left'>重庆工程学院</span>
        <EduSVG style={{marginRight:'2px'}}/>
        <span >本科</span>
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