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
        padding:0 30px 10px 40px;
        font-size:26px;
    }
    .row {
        display:flex;
        margin-top:20px;
        margin-bottom:20px;
        font-size:20px;
        .divide {
            margin:0 10px;
            height:21px;
            margin-top:5px;
            width:2px;
            background-color:#fff;
        }
        .row-left {
            margin-right:20px;
        }
    }
`