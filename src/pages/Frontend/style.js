import styled from 'styled-components';
export const FrontendWrapper = styled.div`
box-sizing:border-box;
    padding-top:3.75rem;
    height:100vh;
    display:flex;
    .tabs {
        width:12.5rem;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:1.25rem;
        .active {
            color:#1677ff;
        }
    }
    .content {
        width:calc(100vw - 25rem);
        height:100%;
    }
`