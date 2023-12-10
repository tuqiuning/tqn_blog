import styled from 'styled-components';
export const AboutWrapper = styled.div`
    width:100%;
    height:calc(100vh - 61px);
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
    background-color:#f5f5f5;
    .aboutItem {
        position:relative;
        margin-top:50px;
        width:300px;
        height:300px;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
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
    .scaleBox {
        position:absolute;
        background-color: #fff;
        width:100%;
        height:100%;
        z-index:9;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) scale(0,0);
        transition:all 0.5s ease;
        transform-origin:center center;
        box-shadow:0px 0px 10px #d3d3d3;
    }
    .aboutItem:hover > .scaleBox {
        transform:translate(-50%,-50%) scale(1,1);
    }
`