import React, { memo, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeActiveNavIndex } from '@/store/features/counter';
import routers from "./index";

const AuthRoute = memo((props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mathchs = matchRoutes(routers, location);
    
    const isExist = mathchs?.some((item) => item.pathname == location.pathname);
    useEffect(() => {
        console.log('%O', props.children);
        console.log(location.hash);
        if (['', '#/'].includes(location.hash)) {
            navigate('/home');
            sessionStorage.setItem('activeNavIndex',0);
            sessionStorage.setItem('navColor','#ffffff');
            dispatch(changeActiveNavIndex(0))
        }
    }, [])
    //   return (
    //     <div>AuthRoute</div>
    //   )
    return props.children
})

export default AuthRoute