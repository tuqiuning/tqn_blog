import React, { memo, useEffect } from 'react';
import Header from '@/pages/Index/components/Header';
import { useDispatch } from 'react-redux';
import { NotFound } from './style';
import { changeNavColor } from '@/store/features/system';
import { changeActiveNavIndex } from '../../store/features/system';

export default memo(() => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeNavColor('#000000'));
    sessionStorage.setItem('navColor','#000000');
    dispatch(changeActiveNavIndex(-1));
    sessionStorage.setItem('activeNavIndex',-1);
  },[])

  return (
    <NotFound>
      < Header />
      <div className='content'>404</div>
    </NotFound>
  )
})
