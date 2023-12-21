import React, { memo } from 'react';
import { Image } from 'antd';
import { Page4DetailWrapper } from './style';

export default memo((props) => {
  return (
    <Page4DetailWrapper>
      <div className='left'>
      <Image
        width={200}
        src={props.img}
      />
      </div>
      <div className='right'>
        <div><span>项目名称：</span>{props.name}</div>
        <div><span>技术栈：</span>{props.skill}</div>
        <div><span>项目描述：</span>{props.overview}</div>
        <div>
          <span>
          我参与的：
          </span>
          {
            props.content && props.content.map(item =>{
              return <div key={item}>{item}</div>
            })
          }
        </div>
      </div>
    </Page4DetailWrapper>
  )
})