import styled from 'styled-components';
import '@/assets/style/font.less';

export const Page1Wrapper = styled.div`
    // font-family: ${props => props.$language === 'zh-CN' ? 'serif':'douyuFont'};
    font-family:Poppins,sans-serif;
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
        padding:0 1.25rem 0.625rem 1.875rem;
        font-size:1.625rem;
        font-weight:bold;
    }
    .row {
        display:flex;
        margin-top:1.25rem;
        margin-bottom:1.25rem;
        font-size:1.25rem;
        .divide {
            margin:0 0.625rem;
            height:1.3rem;
            margin-top:0.3rem;
            width:0.125rem;
            background-color:#fff;
        }
        .row-left {
            margin-right:1.25rem;
        }
    }
`