import React, { memo } from 'react';
import Header from '@/pages/Index/components/Header';
import { NotFound } from './style';

export default memo(() => {
  sessionStorage.setItem('navColor','#000000');
  return (
    <NotFound>
      < Header />
      <div className='content'>404</div>
    </NotFound>
  )
})
