import React, { memo,useEffect,useState,useRef } from 'react';
import { useSelector } from 'react-redux';
import { Carousel, Radio,message } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import languageCode from '@/utils/language';
import icon from '@/assets/icon/备案图标.png';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';

import {HomeContainer} from './style'

export default memo(() => {
  const CarouseRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(current);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(()=>{
  // 添加滚动事件监听器  
  const carouselEl = document.getElementById('carousel');
  carouselEl.addEventListener('mousewheel',(e) => handleScroll(e));  
  return () =>{
    carouselEl.removeEventListener('mousewheel',(e) => handleScroll(e));
  }
  },[])
  const handleScroll = (e) =>{
    const delta = e.wheelDeltaY > 0 ? -1 : 1; // 判断滚动的方向  
    if(delta === 1 && currentRef.current === 3) {
      // messageApi.open({
      //   type: 'warning',
      //   content: '已经是最后一张了',
      // });
      return
    }else if(delta === -1 && currentRef.current === 0) {
      // messageApi.open({
      //   type: 'warning',
      //   content: '已经是第一张了',
      // });
      return
    }
    if(delta === 1){
      nextPanel()
    }else if(delta){
      prevPanel()
    }
    }
  const {language} = useSelector((state)=>{
    return state.system
  })
  
  const contentStyle = {
    height: 'calc(100vh - 3.75rem)',
    color: '#fff',
    lineHeight: '13.75rem',
    textAlign: 'center',
    background: '#364d79',
  };
  const beforeChange = (cur,next) => {
    setCurrent(next)
    currentRef.current = next;
  }
  // 下一面板
  const nextPanel = () =>{
      CarouseRef.current.next();
      currentRef.current += 1;
  }
  // 上一面板
  const prevPanel = () =>{
      CarouseRef.current.prev();
      currentRef.current -= 1;
  }
  return (
    <HomeContainer>
         <Carousel dotPosition='right' id='carousel' ref={CarouseRef} beforeChange={beforeChange}>
          <Page1></Page1>
          <Page2></Page2>
          <Page3></Page3>
          <Page4></Page4>
        </Carousel>
        {
          currentRef.current !== 3 && <div className='arrowDownBox' onClick={nextPanel}>
          <ArrowDownOutlined />
          </div>
        }
        <div className='footer'>
        <img src={icon} alt="" className='policeIcon'/>
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=50011302222072\" rel="noreferrer" target="_blank">渝公网安备50011302222072</a>
      <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2023016344号-1</a>
      </div>
      {contextHolder}
    </HomeContainer>
  )
})
