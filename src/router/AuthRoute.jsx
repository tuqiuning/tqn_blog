import React, { memo, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeActiveNavIndex,changeNavColor } from '@/store/features/system';
import routers from "./index";

const AuthRoute = memo((props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mathchs = matchRoutes(routers, location);
    
    const isExist = mathchs?.some((item) => item.pathname == location.pathname);
    useEffect(() => {
        if (['', '#/'].includes(location.hash)) {
            navigate('/home');
            sessionStorage.setItem('activeNavIndex',0);
            sessionStorage.setItem('navColor','#ffffff');
            dispatch(changeActiveNavIndex(0));
            dispatch(changeNavColor('#ffffff'));
        }
    }, [])
    //   return (
    //     <div>AuthRoute</div>
    //   )
    return props.children
})

export default AuthRoute