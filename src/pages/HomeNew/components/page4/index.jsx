import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Page4Wrapper } from './style';

export default memo(() => {
  const [current,setCurrent] = useState(0);
  const [projectList,setProjectList] = useState([
    {
      name:'11111',
    },
    {
      name:'22222',
    },
    {
      name:'33333',
    },
    {
      name:'44444',
    },

  ])
  const [showIndex,setShowIndex] = useState(0);
  const [isPositive,setIsPositive] = useState(true);
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
        <div className='content'>
        {
          <CSSTransition in={showIndex === 0} unmountOnExit={true} classNames='projectTransition' timeout={500}>
            <div className='projectItem'>
              <div className='left'>
                {projectList[current]?.name}
              </div>
              <div className='right'>
                右边
              </div>
            </div>
          </CSSTransition>
          
        }
        {
          <CSSTransition in={showIndex === 1} unmountOnExit={true} classNames='projectTransition' timeout={500}>
            <div className='projectItem'>
              <div className='left'>
              {projectList[current + 1]?.name}
              </div>
              <div className='right'>
                右边1
              </div>
            </div>
          </CSSTransition>
          
        }
         {
          <CSSTransition in={showIndex === 2} unmountOnExit={true} classNames='projectTransition' timeout={500}>
            <div className='projectItem'>
              <div className='left'>
              {projectList[current + 2]?.name}
              </div>
              <div className='right'>
                右边1
              </div>
            </div>
          </CSSTransition>
          
        }
         {
          <CSSTransition in={showIndex === 3} unmountOnExit={true} classNames='projectTransition' timeout={500}>
            <div className='projectItem'>
              <div className='left'>
              {projectList[current + 3]?.name}
              </div>
              <div className='right'>
                右边1
              </div>
            </div>
          </CSSTransition>
          
        }
        </div>
        

        <button className='btn' onClick={prev}>上一张</button>
        <button className='btn' onClick={next}>下一张</button>
      </div>
    </Page4Wrapper>
  )
})