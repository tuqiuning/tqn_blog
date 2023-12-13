import styled from 'styled-components';

export const Page1Wrapper = styled.div`
background-color:transparent;
    color:#fff;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .motto {
        border-bottom:1px solid #fff;
        padding:0 30px 10px 40px;
        font-size:28px;
    }
    .row {
        display:flex;
        margin-top:20px;
        margin-bottom:20px;
        font-size:20px;
        .divide {
            margin:0 10px;
            height:100%;
            width:1px;
            background-color:#fff;
        }
        .row-left {
            margin-right:20px;
        }
    }
`