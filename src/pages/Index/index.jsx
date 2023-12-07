import React, { memo, useEffect } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import { IndexContainer } from './style.js'
import Header from './components/Header';


export default memo(() => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/home')
  },[])
  return (
    <IndexContainer>
      < Header />
      < Outlet />
    </IndexContainer>
  )
})
