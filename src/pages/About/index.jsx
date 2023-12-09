import React, { memo,useState,useRef } from 'react';
import {  Modal,Button,message,Image } from 'antd';
import { useSelector } from 'react-redux';
import { GithubOutlined,MailOutlined,WechatOutlined,PhoneOutlined } from '@ant-design/icons';
import languageCode from '@/utils/language';
import qrcode from '../../assets/img/wechat_qrcode.png';
import DetailInfo from './components';
import { AboutWrapper } from './style'

export default memo(() => {
  const {language} = useSelector((state)=>{
    return state.counter
  })
  const [messageApi,contextHolder] = message.useMessage(); //提示语
  const copyPhone = () => {
    navigator.clipboard.writeText(modalContent).then(()=>{
      messageApi.open({
        type:'success',
        content:`${languageCode.COPYSUCCESS[language]}!`
      })
    })
  }
 
  return (
    <AboutWrapper>
      <div className='aboutItem'>
      <PhoneOutlined style={{fontSize:"60px"}}/>
        <div className='scaleBox'>
        < DetailInfo type="PHONE"/>
        </div>
      </div>
      <div className='aboutItem'>
      <WechatOutlined style={{fontSize:"60px"}}/>
        <div className='scaleBox'>
        < DetailInfo type="WECHAT"/>
        </div>
      </div>
      <div className='aboutItem' >
      <MailOutlined style={{fontSize:"60px"}}/>
        <div className='scaleBox'>
        < DetailInfo type="EMAIL"/>
        </div>
      </div>
      <div className='aboutItem' >
      <GithubOutlined style={{fontSize:"60px"}}/>
        <div className='scaleBox'>
        < DetailInfo type="GITHUB"/>
        </div>
      </div>
    
    </AboutWrapper>
  )
})
