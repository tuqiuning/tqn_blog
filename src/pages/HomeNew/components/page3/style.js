import styled from 'styled-components';
import shangyouLogo from '@/assets/icon/shangyou.png';
import zhixing from '@/assets/icon/yaobangbang.png';

export const Page3Wrapper = styled.div`
    color:#fff;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    .company {
        color:#fff;
        margin-bottom:50px;
        margin-right:30px;
        position:relative;
        top:-10px;
        font-size:24px;
        .duration {
            font-size:18px;
            color:#ddd;
        }
    }
    .company1 {
        color:#fff;
        margin-bottom:50px;
        margin-right:30px;
        position:relative;
        top:-10px;
        font-size:24px;
        font-family:sans-serif;
    }
    .logo {
        width:56px;
        height:56px;
        border-radius:50%;
        border:5px solid #fff;
        background-color:#008074;
        background-position:center;
        background-repeat:no-repeat;
        cursor:pointer;
    }
    .logo1 {
        background-image:url(${shangyouLogo});
        
        background-size:80%;
        
    }
    .logo2 {
        background-image:url(${zhixing});
        background-size:contain;
    }
    .workContent {
        color:#fff;
        width:600px;
        margin-bottom:50px;
        margin-left:30px;
        position:relative;
        top:-10px;
    }
`