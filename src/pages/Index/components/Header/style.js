import styled from "styled-components";
import '@/assets/style/font.less';

export const HeaderWrapper = styled.header`
    box-sizing:border-box;
    z-index:99;
    position:absolute;
    width:100%;
    top:10px;
    display:flex;
    justify-content:space-between;
    padding:10px 40px 10px 20px;
    background-color:transparent;
    color:${props => props.logoColor};
    .header-left {
        flex:1;
        font-family: ${props => props.language === 'zh-CN' ? 'cursive':'douyuFont'};
        font-size:24px;
        cursor:pointer;
        display:flex;
        align-items:center;
    }
    .header-right{
        flex:1;
        display:flex;
        justify-content:flex-end;
    }
    .header-center {
        flex-grow:1;
        text-align:center;
        cursor:pointer;
        line-height:36px;
}`