import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position:sticky;
    top:0;
    display:flex;
    justify-content:space-between;
    padding:20px;
    background-color:#000;
    color:#fff;
    .header-left {
        flex:1;
        fontFamily: 'douyuFont';
        cursor:pointer;
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
}`