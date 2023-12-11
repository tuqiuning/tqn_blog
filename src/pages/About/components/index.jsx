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
  const [messageApi, contextHolder] = message.useMessage();
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
  const handle = () =>{
    if(type === 'GITHUB'){
      window.open(modalContent)
    }else if(type === 'WECHAT') {
      const link = document.createElement('a')
      link.href = qrcode;
      link.download = 'qrcode'
      link.click()
      link.remove()
    }else if(type === 'PHONE'){
      const link = document.createElement('a')
      link.href = 'tel:13101085395';
      link.click()
      link.remove()
    }else {
      const recipient = 'tuqiuning@gmail.com';
      const subject = '关于你的博客的建议';
      const body = '我认为可以改进的地方有：';
    
      // 构建邮件链接
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
      // 跳转到邮箱应用
      window.location.href = mailtoLink;
      // const link = document.createElement('a')
      // link.href = 'mailto:tuqiuning@gmail.com';
      // link.click()
      // link.remove()
    }
  }
  // 复制文本
 const copyText = () => {
   let copyInput = document.createElement('input');//创建input元素
   document.body.appendChild(copyInput);//向页面底部追加输入框
   copyInput.setAttribute('value', modalContent);//添加属性，将url赋值给input元素的value属性
   copyInput.select();//选择input元素
   document.execCommand("Copy");//执行复制命令
   //复制之后再删除元素，否则无法成功赋值
   copyInput.remove();//删除动态创建的节点
   messageApi.open({
    type: 'success',
    content: `${languageCode.COPYSUCCESS[language]}`,
  });
 }

  return (
    <ScaleWrapper>
      <div className='main'>
      <div className='title'>
        {languageCode[type][language]}
      </div>
        {
          type === 'WECHAT' ? <Image
          style={{marginBottom:'20px'}}
          width={160}
          height={160}
          src={qrcode}
          preview={false}
          /> : 
          <div><span className='content' onClick={()=>{copyText()}}>{modalContent}</span></div>
          
        }
      </div>
      
        <div className='copyBtn' style={{width:'100%',display:'flex',justifyContent:'flex-end',gap:'20px',marginTop:'10px'}}>
          {
              <Button type="primary" onClick={()=>handle()}>
              { languageCode[`${type === 'GITHUB' ? 'OPENLINK':type === 'PHONE'?'CALL':type === 'EMAIL'?'SENDEMAIL':'SAVE'}`][language] }
            </Button>
          }
        </div>
        {contextHolder}
    </ScaleWrapper>
  )
})
