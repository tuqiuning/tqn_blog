import styled from 'styled-components';
export const AboutWrapper = styled.div`
    width:100%;
    height:calc(100vh - 111px);
    display:flex;
    justify-content:center;
    gap:20px;
    padding-top:50px;
    .aboutItem {
        width:300px;
        height:300px;
        background-color:#f5f5f5;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    }
    .copyBtn {
        width:100%;
        display:flex;
        justify-content:flex-end;
        gap:20px;
        margin-top:10px;
    }
`