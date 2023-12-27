import React, { memo,useState } from 'react';
import { GithubOutlined,MailOutlined,WechatOutlined,PhoneOutlined } from '@ant-design/icons';
import DetailInfo from './components';
import { AboutWrapper } from './style'

export default memo(() => {
  const [items,setItems] = useState([
    {
      type:'PHONE',
      icon: <PhoneOutlined style={{fontSize:"3.75rem"}}/>,
    },
    {
      type:'WECHAT',
      icon: <WechatOutlined style={{fontSize:"3.75rem"}}/>,
    },
    {
      type:'EMAIL',
      icon: <MailOutlined style={{fontSize:"3.75rem"}}/>,
    },
    {
      type:'GITHUB',
      icon: <GithubOutlined style={{fontSize:"3.75rem"}}/>,
    }
  ])
  
  return (
    <AboutWrapper>
      {
        items.map(item =>{
          return <div className='aboutItem' key={item.type}>
            {item.icon}
            <div className='scaleBox'>
              <DetailInfo type={item.type}/>
              </div>
          </div>
        })
      }
    </AboutWrapper>
  )
})
