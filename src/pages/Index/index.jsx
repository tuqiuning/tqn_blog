import React, { memo, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { IndexContainer } from './style.js'
import Header from './components/Header';


export default memo(() => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home/skill');
  }, [])
  return (
    <IndexContainer>
      < Header/>
      <Outlet></Outlet>
    </IndexContainer>
  )
})
