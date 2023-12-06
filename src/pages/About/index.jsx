import React, { memo,useState,useRef } from 'react';
import {  Modal,Button,message,Image } from 'antd';
import { useSelector } from 'react-redux';
import languageCode from '@/utils/language';
import qrcode from '../../assets/img/wechat_qrcode.png'
import { AboutWrapper } from './style'

export default memo(() => {
  const {language} = useSelector((state)=>{
    return state.counter
  })
  const [isModalOpen,setIsModalOpen] = useState(false); //弹窗开关
  const info = useRef({
    phone:'13101085395',
    wechat:'tu_qiu_ning',
    Email:'tuqiuning@gmail.com'
  })
  const [type,setType] = useState('phone');
  const [modalContent,setModalContent] = useState('13101085395'); //弹窗显示的内容
  const [messageApi,contextHolder] = message.useMessage(); //提示语
  const showModal = (type) => {
    setType(languageCode[type][language]);
    setModalContent(info.current[languageCode[type]['en-US']])
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const copyPhone = () => {
    navigator.clipboard.writeText(modalContent).then(()=>{
      messageApi.open({
        type:'success',
        content:`${languageCode.COPY[language]}!`
      })
    })
  }
  return (
    <AboutWrapper>
      <div className='aboutItem' onClick={()=>showModal('PHONE')} >
        {languageCode.PHONE[language]}
      </div>
      <div className='aboutItem' onClick={()=>showModal('WECHAT')} >
        {languageCode.WECHAT[language]}
      </div>
      <div className='aboutItem' onClick={()=>showModal('EMAIL')} >
        {languageCode.EMAIL[language]}
      </div>
      <Modal title={type} footer={null} open={isModalOpen} onCancel={handleCancel} width={400}>
        <p>{modalContent}</p>
        <Image
        style={{marginLeft:'-24px'}}
        width={200}
        src={qrcode}
        />
        <div className='copyBtn' style={{width:'100%',display:'flex',justifyContent:'flex-end',gap:'20px'}}>
        <Button type="primary" onClick={copyPhone}>
          {languageCode.SAVE[language]}
        </Button>
        <Button type="primary" onClick={copyPhone}>
          {languageCode.COPY[language]}
        </Button>
        </div>
        
        {contextHolder}
      </Modal>
    </AboutWrapper>
  )
})
