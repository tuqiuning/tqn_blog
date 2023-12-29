import styled from 'styled-components';
import shangyouLogo from '@/assets/icon/shangyou.png';
import tuoliangfeng from '@/assets/icon/托良峰.png'
import zhixing from '@/assets/icon/yaobangbang.png';

export const Page3Wrapper = styled.div`
    color:#fff;
    width:100%;
    height:100vh;
    padding-right:10rem;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    color:#fff;
    font-size:1rem;
    .title {
        font-size:1.5rem;
        font-weight:bold;
        margin-bottom:5rem;
    }
    .company {
        color:#fff;
        margin-bottom:3.125rem;
        margin-right:1.875rem;
        position:relative;
        top:-0.625rem;
        font-size:1.3rem;
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
        font-size:1.3rem;
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
        background-image:url(${tuoliangfeng});
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
        font-size:0.9rem;
        .item {
            margin-bottom:1rem;
            width:90%;
            ::before {
                content:'·',
            }
        }
    }
`