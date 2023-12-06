import styled from 'styled-components';
export const AboutWrapper = styled.div`
    width:100%;
    height:calc(100vh - 61px);
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
    .aboutItem {
        margin-top:50px;
        width:300px;
        height:300px;
        background-color:#f5f5f5;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        font-size:28px;
        box-shadow:0px 0px 10px #d3d3d3;
    }
    .copyBtn {
        width:100%;
        display:flex;
        justify-content:flex-end;
        gap:20px;
        margin-top:10px;
    }
`