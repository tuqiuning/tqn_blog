import styled from "styled-components";
import '@/assets/style/font.less';

export const HeaderWrapper = styled.header`
    z-index:99;
    position:sticky;
    top:0;
    display:flex;
    justify-content:space-between;
    padding:20px;
    background-color:#000;
    color:#fff;
    .header-left {
        flex:1;
        font-family: cursive;
        font-size:24px;
        cursor:pointer;
        line-height:30px;
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
        line-height:30px;
}`