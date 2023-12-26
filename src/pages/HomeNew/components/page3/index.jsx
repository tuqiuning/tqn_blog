import React, { memo } from 'react';
import { ConfigProvider, Timeline } from 'antd';
import { Page3Wrapper } from './style';


export default memo(() => {

  const goShangyou = () => {
    window.open('http://www.sunutech.net/')
  }
  const dutys = [
  '负责开发和维护公司业务系统核心模块，参与前端技术选型',
  '负责开发和维护公司业务系统核心模块，参与前端技术选型',
  '负责开发和维护公司业务系统核心模块，参与前端技术选型'];
  const items = [
    {
      dot: 
          <div className='logoBox' onClick={goShangyou}>
            <div className='logo logo1'></div>
          </div>,
      label: <div className='company'>
          <h4>尚优科技有限公司</h4>
          <span className='duration'>2022/09 - 2023/10</span>
      </div>,
      children: <div className='workContent'>
        {
          dutys.map ((duty, index) => {
            return <div key={index}>{duty}</div>
          })
        }
      </div>
    },
    {
      dot: <div className='logoBox' onClick={goShangyou}>
      <div className='logo logo2'>

      </div>
    </div>,
      label: <div className='company'>
          <h4>尚优科技有限公司</h4>
          <span className='duration'>2022/09 - 2023/10</span>
      </div>,
      children: <div className='workContent'>
        {
          dutys.map ((duty, index) => {
            return <div key={index}>{duty}</div>
          })
        }
      </div>
    }
  ]
  return (
    <Page3Wrapper>
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