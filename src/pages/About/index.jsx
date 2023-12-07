import React, { memo,useState,useRef } from 'react';
import {  Modal,Button,message,Image } from 'antd';
import { useSelector } from 'react-redux';
import { GithubOutlined,MailOutlined,WechatOutlined,PhoneOutlined } from '@ant-design/icons';
import languageCode from '@/utils/language';
import qrcode from '../../assets/img/wechat_qrcode.png'
import { AboutWrapper } from './style'

export default memo(() => {
  const {language} = useSelector((state)=>{
    return state.counter
  })
  const [isModalOpen,setIsModalOpen] = useState(false); //弹窗开关
  const info = useRef({
    Phone:'13101085395',
    WeChat:'tu_qiu_ning',
    Email:'tuqiuning@gmail.com',
    GitHub:'https://github.com/tuqiuning'
  })
  const [type,setType] = useState('PHONE'); //当前弹窗打开的类型
  const [modalTitle,setModalTitle] = useState(''); //弹窗标题
  const [modalContent,setModalContent] = useState('13101085395'); //弹窗显示的内容
  const [messageApi,contextHolder] = message.useMessage(); //提示语
  const showModal = (type) => {
    setType(type);
    setModalTitle(languageCode[type][language]);
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
        content:`${languageCode.COPYSUCCESS[language]}!`
      })
    })
  }
  const handle = () =>{
    if(type === 'GITHUB'){
      window.open(modalContent)
    }else {
      const url = 'https://profile-avatar.csdnimg.cn/59c225e0c3d245df8846d9e231c21c2f_m0_45067620.jpg!1';
      const name = 'antd';
      const x = new XMLHttpRequest();
      const resourceUrl = url;
      x.open('GET', resourceUrl, true);
      x.responseType = 'blob';
      x.onload = function () {
        const urls = window.URL.createObjectURL(x.response);
        const a = document.createElement('a');
        a.href = urls;
        a.download = name + '.png';
        a.click();
      };
      x.send();
    }
  }
  return (
    <AboutWrapper>
      <div className='aboutItem' onClick={()=>showModal('PHONE')} >
      <PhoneOutlined style={{fontSize:"60px"}}/>
        {/* {languageCode.PHONE[language]} */}
      </div>
      <div className='aboutItem' onClick={()=>showModal('WECHAT')} >
      <WechatOutlined style={{fontSize:"60px"}}/>
        {/* {languageCode.WECHAT[language]} */}
      </div>
      <div className='aboutItem' onClick={()=>showModal('EMAIL')} >
      <MailOutlined style={{fontSize:"60px"}}/>
        {/* {languageCode.EMAIL[language]} */}
      </div>
      <div className='aboutItem' onClick={()=>showModal('GITHUB')} >
      <GithubOutlined style={{fontSize:"60px"}}/>
        {/* {languageCode.GITHUB[language]} */}
      </div>
      <Modal title={modalTitle} footer={null} open={isModalOpen} onCancel={handleCancel} width={400}>
        <p>{modalContent}</p>
        {
          type === 'WECHAT' && <Image
          style={{marginLeft:'-24px'}}
          width={200}
          src={qrcode}
          />
        }
        <div className='copyBtn' style={{width:'100%',display:'flex',justifyContent:'flex-end',gap:'20px',marginTop:'10px'}}>
          {
            ['WECHAT','GITHUB'].includes(type) && 
              <Button type="primary" onClick={()=>handle()}>
              {type === 'GITHUB'? languageCode.OPENLINK[language]:languageCode.SAVE[language]}
            </Button>
          }
        
        <Button type="primary" onClick={copyPhone}>
          {languageCode.COPY[language]}
        </Button>
        </div>
        
        {contextHolder}
      </Modal>
    </AboutWrapper>
  )
})
