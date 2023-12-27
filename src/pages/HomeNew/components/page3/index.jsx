import React, { memo } from 'react';
import { ConfigProvider, Timeline } from 'antd';
import { useSelector } from 'react-redux';
import { title,companyData } from './data'
import { Page3Wrapper } from './style';


export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })

  const toWebsite = (link) => {
    window.open(link)
  }
  const items = [
    {
      dot: 
          <div className='logoBox' onClick={() => toWebsite(companyData[language][0].link)}>
            <div className='logo logo1'></div>
          </div>,
      label: <div className='company'>
          <div>{companyData[language][0].title}</div>
          <span className='duration'>{companyData[language][0].duration}</span>
      </div>,
      children: <div className='workContent'>
        {
          companyData[language][0].dutys.map ((duty, index) => {
            return <div key={index} className='item'>
              {duty}
              </div>
          })
        }
      </div>
    },
    {
      dot: 
          <div className='logoBox' onClick={() => toWebsite(companyData[language][1].link)}>
            <div className='logo logo2'></div>
          </div>,
      label: <div className='company'>
          <div>{companyData[language][1].title}</div>
          <span className='duration'>{companyData[language][1].duration}</span>
      </div>,
      children: <div className='workContent'>
        {
          companyData[language][1].dutys.map ((duty, index) => {
            return <div key={index} className='item'>{duty}</div>
          })
        }
      </div>
    },
    // {
    //   dot: <div className='logoBox' onClick={goShangyou}>
    //   <div className='logo logo2'>

    //   </div>
    // </div>,
    //   label: <div className='company'>
    //       <h4>尚优科技有限公司</h4>
    //       <span className='duration'>2022/09 - 2023/10</span>
    //   </div>,
    //   children: <div className='workContent'>
    //     {
    //       dutys.map ((duty, index) => {
    //         return <div key={index}>{duty}</div>
    //       })
    //     }
    //   </div>
    // }
  ]
  return (
    <Page3Wrapper>
       <div className='title'>{title[language]}</div>
      <ConfigProvider
        // 修改Timeline的轴线样式
        theme={{
          components: {
            Timeline: {
              tailColor: '#fff',
              tailWidth: 5,
              dotBg:'transparent',
            }
          }
        }}
      >
        
        <Timeline
          mode='left'
          items={items}
        />
      </ConfigProvider>
    </Page3Wrapper>
  )
})