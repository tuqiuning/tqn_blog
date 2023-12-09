import React, { memo,useState,useRef, useEffect } from 'react';
import {  Modal,Button,message,Image } from 'antd';
import { useSelector } from 'react-redux';
import languageCode from '@/utils/language';
import qrcode from '@/assets/img/wechat_qrcode.png';
import { ScaleWrapper } from './style';

export default memo(({type}) => {
  useEffect(()=>{
    setModalContent(info.current[type])
  },[])
  const [modalContent,setModalContent] = useState('');
  const info = useRef({
    PHONE:'13101085395',
    WECHAT:'tu_qiu_ning',
    EMAIL:'tuqiuning@gmail.com',
    GITHUB:'https://github.com/tuqiuning'
  })
  const {language} = useSelector((state)=>{
    return state.counter
  })
  const copyPhone = () =>{
    console.log(modalContent);
  }
  const handle = () =>{
    if(type === 'GITHUB'){
      window.open(modalContent)
    }else {
      const link = document.createElement('a')
      link.href = qrcode;
      link.download = 'qrcode'
      link.click()
      link.remove()
    }
  }
  return (
    <ScaleWrapper>
      <div className='title'>
        {languageCode[type][language]}
      </div>
        {
          type === 'WECHAT' ? <Image
          style={{marginBottom:'20px'}}
          width={160}
          src={qrcode}
          /> : <p className='content'>{modalContent}</p>
        }

        <div className='copyBtn' style={{width:'100%',display:'flex',justifyContent:'flex-end',gap:'20px',marginTop:'10px'}}>
          {
            ['WECHAT','GITHUB'].includes(type) && 
              <Button type="primary" onClick={()=>handle()}>
              { languageCode[`${type === 'GITHUB' ? 'OPENLINK':'SAVE'}`][language] }
            </Button>
          }
        
        <Button type="primary" onClick={copyPhone}>
          {languageCode.COPY[language]}
        </Button>
        </div>
    </ScaleWrapper>
  )
})
