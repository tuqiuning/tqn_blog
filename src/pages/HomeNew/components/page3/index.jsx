import React, { memo } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { ConfigProvider, Timeline, Image } from 'antd';
import { Page3Wrapper } from './style';
import ChinessIcon from '@/assets/icon/zhSvg.jsx';


export default memo(() => {

  const goShangyou = () => {
    window.open('http://www.sunutech.net/')
  }
  const items = [
    {
      dot: 
          <div className='logo logo1' onClick={goShangyou}></div>,
      label: <div className='company'>
          <h4>尚优科技有限公司</h4>
          <span className='duration'>2022/09 - 2023/10</span>
      </div>,
      children: <div className='workContent'>
        <div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div>
        <div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div><div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div><div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div>
      </div>
    },
    {
      dot: <div className='logo logo2'></div>,
      label: <div className='company'>
          <h4>尚优科技有限公司</h4>
          <span className='duration'>2022/09 - 2023/10</span>
      </div>,
      children: <div className='workContent'>
        <div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div>
        <div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div><div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div><div>
          负责开发和维护公司业务系统核心模块，参与前端技术选型
        </div>
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