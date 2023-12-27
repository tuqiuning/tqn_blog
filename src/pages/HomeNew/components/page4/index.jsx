import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Detail from './detail/index';
import { useSelector } from 'react-redux';
import ArrowRightSVG from '@/assets/icon/arrowRightSVG';
import ArrowLeftSVG from '@/assets/icon/arrowLeftSVG';
import xietong from '@/assets/img/协同+cover.png';
import { title,projectList } from './data';
import { Page4Wrapper } from './style';

export default memo(() => {
  const { language } = useSelector((state) => {
    return state.system
  })
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
      {/* <div className='title'>{title[language]}</div> */}
      <div className='box'>
        <div className='btnBox'>
          {
            <CSSTransition in={showIndex !== 0} unmountOnExit={true} classNames='btnTransition' timeout={500}>
              <ArrowLeftSVG onClick={prev} className='btn' />
            </CSSTransition>
          }
        </div>
        <div className='content'>
          
      <div className='title'>{title[language]}</div>
          {
            projectList[language].map((item, index) => {
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
            <CSSTransition in={showIndex !== projectList[language].length - 1} unmountOnExit={true} classNames='btnTransition' timeout={500}>
              <ArrowRightSVG onClick={next} className='btn' />
            </CSSTransition>
          }
        </div>
      </div>
    </Page4Wrapper>
  )
})