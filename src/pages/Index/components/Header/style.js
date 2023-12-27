import styled from "styled-components";
import '@/assets/style/font.less';

export const HeaderWrapper = styled.header`
    box-sizing:border-box;
    z-index:99;
    position:absolute;
    width:100%;
    top:0.625rem;
    display:flex;
    justify-content:space-between;
    padding:0.625rem 2.5rem 0.625rem 1.25rem;
    background-color:transparent;
    color:${props => props.$logoColor};
    .header-left {
        width:50%;
        // font-family: ${props => props.$language === 'zh-CN' ? '':'douyuFont'};
        font-size:1.5rem;
        // font-weight:bold;
        cursor:pointer;
        display:flex;
        align-items:center;
        .computerIcon {
            font-size:2.5rem;
        }
    }
    .header-right{
        width:50%;
        display:flex;
        justify-content:flex-end;
    }
    .header-center {
        flex-grow:1;
        text-align:center;
        cursor:pointer;
        line-height:2.25rem;
}`