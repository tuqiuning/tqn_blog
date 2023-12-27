import React, { memo, useState, useRef, useEffect } from 'react';
import { Modal, Button, message, Image } from 'antd';
import { useSelector } from 'react-redux';
import languageCode from '@/utils/language';
import qrcode from '@/assets/img/wechat_qrcode.png';
import { ScaleWrapper } from './style';

export default memo(({ type }) => {
  useEffect(() => {
    setModalContent(info.current[type])
  }, [])
  const [messageApi, contextHolder] = message.useMessage();
  const [modalContent, setModalContent] = useState('');
  const info = useRef({
    PHONE: '13101085395',
    WECHAT: 'tu_qiu_ning',
    EMAIL: 'tuqiuning@gmail.com',
    GITHUB: 'https://github.com/tuqiuning'
  })
  const { language } = useSelector((state) => {
    return state.system
  })
  const handle = () => {
    if (type === 'GITHUB') {
      window.open(modalContent)
    } else if (type === 'WECHAT') {
      const link = document.createElement('a')
      link.href = qrcode;
      link.download = 'qrcode'
      link.click()
      link.remove()
    } else if (type === 'PHONE') {
      const link = document.createElement('a')
      link.href = 'tel:13101085395';
      link.click()
      link.remove()
    } else {
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
    // 如果是微信，则是下载二维码
    if (type === 'WECHAT') {
      const link = document.createElement('a')
      link.href = qrcode;
      link.download = 'qrcode';
      link.click();
      link.remove();
      return;
    }
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
            style={{ marginBottom: '1.25rem',width:'10rem',height:'10rem' }}
            // width={160}
            // height={160}
            src={qrcode}
            preview={false}
          /> :
            <div><span className='content' onClick={() => { handle() }}>{modalContent}</span></div>

        }
      </div>

      <div className='copyBtn' style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '1.25rem', marginTop: '0.625rem' }}>
        {
          <Button type="primary" onClick={() => copyText()} style={{height:'2.2rem',fontSize:'1rem',borderRadius:'0.4rem',display:'flex',alignItems:'center',padding:'0.3rem 0.94rem'}}>
            {languageCode[`${type === 'WECHAT' ? 'SAVE' : 'COPY'}`][language]}
          </Button>
        }
      </div>
      {contextHolder}
    </ScaleWrapper>
  )
})
