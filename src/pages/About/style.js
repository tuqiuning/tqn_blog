import styled from 'styled-components';
export const AboutWrapper = styled.div`
    box-sizing:border-box;
    width:100%;
    // height:calc(100vh - 3.75rem);
    height:100vh;
    padding-top:3.75rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:1.25rem;
    background-color:#f5f5f5;
    .aboutItem {
        position:relative;
        margin-top:3.125rem;
        width:18.75rem;
        height:18.75rem;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.75rem;
        box-shadow:rgba(66, 65, 65, 0.13) 0px 2px 8px 0px;
    }
    .copyBtn {
        width:100%;
        display:flex;
        justify-content:flex-end;
        gap:1.25rem;
        margin-top:0.625rem;
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
        box-shadow:rgba(66, 65, 65, 0.13) 0px 2px 8px 0px;
    }
    .aboutItem:hover > .scaleBox {
        transform:translate(-50%,-50%) scale(1,1);
    }
`