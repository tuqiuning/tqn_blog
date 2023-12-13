import React, { memo } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { Page3Wrapper } from './style';
import ChinessIcon from '@/assets/icon/zhSvg.jsx';

export default memo(() => {
  const items = [
    {
      label:<div className='company1'>
      <h4>尚优科技有限公司</h4>
      <h4>2022/09-2023/10</h4>
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
      dot:<ChinessIcon />,
      label:<div className='company1'>
      <h4>尚优科技有限公司</h4>
      <h4>2022/09-2023/10</h4>
    </div>,
      children: <div className='workContent'>
        <div>根据需求实现页面交互效果，配合后端完成PC端及小程序的业务开发
        </div>
        <div> 优化网站性能，提高用户体验，包括加载速度、响应时间和页面布局等方面的优化
        </div>
        <div>参与项目的需求分析和功能设计，提供前端技术方案和建议
        </div>
      </div>
    }
  ]
  return (
    <Page3Wrapper>
        <Timeline
        mode='left'
        items={items}
      />
    </Page3Wrapper>
  )
})