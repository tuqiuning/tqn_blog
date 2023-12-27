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
    font-size:1rem;
    .company {
        color:#fff;
        margin-bottom:3.125rem;
        margin-right:1.875rem;
        position:relative;
        top:-0.625rem;
        font-size:1.5rem;
        .duration {
            font-size:1.125rem;
            color:#ddd;
        }
    }
    .company1 {
        color:#fff;
        margin-bottom:3.125rem;
        margin-right:1.875rem;
        position:relative;
        top:-0.625rem;
        font-size:1.5rem;
        font-family:sans-serif;
    }
    .logoBox {
        width:3.5rem;
        height:3.5rem;
        border-radius:50%;
        border:0.3rem solid #fff;
        background-color:#008074;
        cursor:pointer;
    }
    .logo {
        width:100%;
        height:100%;
        background-position:center;
        background-repeat:no-repeat;
        background-size:80%;
        animation:logo 2s ease infinite;
        
    }
    .logo1 {
        background-image:url(${shangyouLogo});
    }
    .logo2 {
        background-image:url(${zhixing});
        animation-delay:.5s;
    }
    @keyframes logo {
        0% {
            opacity:1;
        }
        50% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
     }
    .workContent {
        color:#fff;
        width:37.5rem;
        margin-bottom:3.125rem;
        margin-left:1.875rem;
        position:relative;
        top:-0.625rem;
        font-size:1rem;
    }
`