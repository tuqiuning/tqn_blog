import styled from 'styled-components';
export const FrontendWrapper = styled.div`
box-sizing:border-box;
    padding-top:60px;
    height:100vh;
    display:flex;
    .tabs {
        width:200px;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:20px;
        .active {
            color:#1677ff;
        }
    }
    .content {
        width:calc(100vw - 400px);
        height:100%;
    }
`