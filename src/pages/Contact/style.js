import styled from 'styled-components';

export const Contact = styled.div`
    padding:6rem 2rem 0 2rem;
    box-sizing: border-box;
    width:100vw;
    height:100vh;
    display:flex;
    overflow:hidden;
    .content {
        box-sizing: border-box;
        height:100%;
        padding-top:3.75rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:2.5rem;
    }
    .ant-form {
        width:50% !important;
        .ant-btn-default {
            color:#fff !important;
            background-color:#000 !important;
            font-weight:bold !important;
        }
    }
`