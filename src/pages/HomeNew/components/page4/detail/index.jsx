import React, { memo } from 'react';
import { Image } from 'antd';
import { Page4DetailWrapper } from './style';

export default memo((props) => {
  return (
    <Page4DetailWrapper>
      <div className='left'>
      <Image
        width={'12.5rem'}
        src={props.img}
      />
      </div>
      <div className='right'>
        <div className='title'>
           {props.name}
        </div>
        <ul className='participation'>
            {
            props.content && props.content.map(item =>{
              return <li key={item}>{item}</li>
            })
            }
        </ul>
        <div className='skills'>
          {
            props.skills.map(item =>{
              return <span key={item} className='skill'>{item}</span>
            })
          }
        </div>
      </div>
    </Page4DetailWrapper>
  )
})