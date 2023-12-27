import React, { memo } from 'react';
import { Image } from 'antd';
import { Page4DetailWrapper } from './style';

export default memo((props) => {
  return (
    <Page4DetailWrapper>
      <div className='left'>
        {
          props.img.map(item => {
            return <Image
            width={'12.5rem'}
            height={'12.5rem'}
            style={{objectFit:'cover'}}
            src={item}
          />
          })
        }
      </div>
      <div className='right'>
        <div className='title'>
           {props.name}
        </div>
        <p className='overview'>
          {props.overview}
        </p>
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
              return <span key={item} className='skill' style={{color:'rgb(130 255 177)'}}>{'#'+ item}</span>
            })
          }
        </div>
      </div>
    </Page4DetailWrapper>
  )
})