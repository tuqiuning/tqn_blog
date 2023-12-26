import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Detail from './detail/index';
import ArrowRightSVG from '@/assets/icon/arrowRightSVG';
import ArrowLeftSVG from '@/assets/icon/arrowLeftSVG';
import xietong from '@/assets/img/协同+cover.png';
import { Page4Wrapper } from './style';

export default memo(() => {
  const [projectList, setProjectList] = useState([
    {
      name: '中信集团协同+二期',
      img: xietong,
      overview: '该项目是中信集团用于集团内部开展协同业务及协同管理工作的平台。支持子公司、区域分会提升协同质效，加强内部合作，服务外部客户。该项目 包含企业微信端和网页端，主要模块有：客户拜访、协同需求、协同活动、分会管理等。',
      skills: ['Vue','ElementUI','uniapp','uView'],
      content: [
        '开发及维护系统核心模块-客户拜访，完成发起人、参与人、审批人在各种审批状态下的页面展示、逻辑处理。',
        '完成消息、待办功能，使用WebSocket实时获取数据，点击消息跳转到相应模块页面。',
        '完成用户使用时长的埋点，利用Vuex和localStorage保存菜单名和后端返回的页面id。',
        '完成通知公告的开发，根据部门和部门职位展示对应的表单内容、发送范围和审批人，到达发送时间接收人账号弹出通知公告内容。',
        '完成订阅推荐，用户根据喜好设置感兴趣的标签，通过计算高度实现分类和各分类下的标签双向联动。',
        '编写多个公共组件、公共函数，表单创建组件、判断当前用户是否是集团员工的函数、用户操作时的积分获取函数、用于按钮的防抖函数等。'
      ]
    },
    {
      name: '中信集团协同+二期',
      img: xietong,
      overview: '该项目是中信集团用于集团内部开展协同业务及协同管理工作的平台。支持子公司、区域分会提升协同质效，加强内部合作，服务外部客户。该项目 包含企业微信端和网页端，主要模块有：客户拜访、协同需求、协同活动、分会管理等。',
      skills: ['Vue','ElementUI','uniapp','uView'],
      content: [
        '开发及维护系统核心模块-客户拜访，完成发起人、参与人、审批人在各种审批状态下的页面展示、逻辑处理。',
        '完成消息、待办功能，使用WebSocket实时获取数据，点击消息跳转到相应模块页面。',
        '完成用户使用时长的埋点，利用Vuex和localStorage保存菜单名和后端返回的页面id。',
        '完成通知公告的开发，根据部门和部门职位展示对应的表单内容、发送范围和审批人，到达发送时间接收人账号弹出通知公告内容。',
        '完成订阅推荐，用户根据喜好设置感兴趣的标签，通过计算高度实现分类和各分类下的标签双向联动。',
        '编写多个公共组件、公共函数，表单创建组件、判断当前用户是否是集团员工的函数、用户操作时的积分获取函数、用于按钮的防抖函数等。'
      ]
    },
    {
      name: '中信集团协同+二期',
      img: xietong,
      overview: '该项目是中信集团用于集团内部开展协同业务及协同管理工作的平台。支持子公司、区域分会提升协同质效，加强内部合作，服务外部客户。该项目 包含企业微信端和网页端，主要模块有：客户拜访、协同需求、协同活动、分会管理等。',
      skills: ['Vue','ElementUI','uniapp','uView'],
      content: [
        '开发及维护系统核心模块-客户拜访，完成发起人、参与人、审批人在各种审批状态下的页面展示、逻辑处理。',
        '完成消息、待办功能，使用WebSocket实时获取数据，点击消息跳转到相应模块页面。',
        '完成用户使用时长的埋点，利用Vuex和localStorage保存菜单名和后端返回的页面id。',
        '完成通知公告的开发，根据部门和部门职位展示对应的表单内容、发送范围和审批人，到达发送时间接收人账号弹出通知公告内容。',
        '完成订阅推荐，用户根据喜好设置感兴趣的标签，通过计算高度实现分类和各分类下的标签双向联动。',
        '编写多个公共组件、公共函数，表单创建组件、判断当前用户是否是集团员工的函数、用户操作时的积分获取函数、用于按钮的防抖函数等。'
      ]
    },
    {
      name: '中信集团协同+二期',
      img: xietong,
      overview: '该项目是中信集团用于集团内部开展协同业务及协同管理工作的平台。支持子公司、区域分会提升协同质效，加强内部合作，服务外部客户。该项目 包含企业微信端和网页端，主要模块有：客户拜访、协同需求、协同活动、分会管理等。',
      skills: ['Vue','ElementUI','uniapp','uView'],
      content: [
        '开发及维护系统核心模块-客户拜访，完成发起人、参与人、审批人在各种审批状态下的页面展示、逻辑处理。',
        '完成消息、待办功能，使用WebSocket实时获取数据，点击消息跳转到相应模块页面。',
        '完成用户使用时长的埋点，利用Vuex和localStorage保存菜单名和后端返回的页面id。',
        '完成通知公告的开发，根据部门和部门职位展示对应的表单内容、发送范围和审批人，到达发送时间接收人账号弹出通知公告内容。',
        '完成订阅推荐，用户根据喜好设置感兴趣的标签，通过计算高度实现分类和各分类下的标签双向联动。',
        '编写多个公共组件、公共函数，表单创建组件、判断当前用户是否是集团员工的函数、用户操作时的积分获取函数、用于按钮的防抖函数等。'
      ]
    },
  ])
  const [showIndex, setShowIndex] = useState(0);
  const [isPositive, setIsPositive] = useState(true);
  const prev = () => {
    setShowIndex(showIndex - 1)
    setIsPositive(false)
  }
  const next = () => {
    setShowIndex(showIndex + 1)
    setIsPositive(true)
  }
  return (
    <Page4Wrapper $direction={isPositive}>
      <div className='box'>
        <div className='btnBox'>
          {
            showIndex !== 0 && <ArrowLeftSVG onClick={prev} className='btn'/>
          }
        </div>
        <div className='content'>
          {
            projectList.map((item, index) => {
              return (
                <>
                  {
                    <CSSTransition in={showIndex === index} unmountOnExit={true} classNames='projectTransition' timeout={500}>
                      <Detail {...item}></Detail>
                    </CSSTransition>

                  }
                </>
              )
            })
          }
        </div>
        <div className='btnBox'>
          {
            showIndex !== projectList.length - 1 && <ArrowRightSVG onClick={next} className='btn'/>
          }
        </div>
      </div>
    </Page4Wrapper>
  )
})