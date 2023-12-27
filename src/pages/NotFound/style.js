import styled from 'styled-components';
import NotFoundIMG from '@/assets/img/404.png';

export const NotFound = styled.div`
    box-sizing: border-box;
    width:100vw;
    height:100vh;
    background-image:url(${NotFoundIMG});
    background-size:80%;
    background-position:center;
    background-repeat: no-repeat;
    .content {
        box-sizing: border-box;
        height:100%;
        padding-top:3.75rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:2.5rem;
    }
`