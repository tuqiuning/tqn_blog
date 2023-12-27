import styled from 'styled-components';

export const ScaleWrapper = styled.div`
    padding:1.25rem;
    .main {
        width:100%;
        height:calc(100% - 3.75rem);
        display:flex;
        flex-direction:column;
        justify-content:center;
        .title {
            font-size:1.125rem;
            margin-bottom:1.25rem;
        }
        .content {
            font-size:1rem;
            margin-bottom:1.25rem;
            background:linear-gradient(to right,#000,#000) no-repeat right bottom;
            background-size:0 1px;
            padding-bottom:0.3rem;
            transition:background-size 0.5s ease;
            cursor:pointer;
        }
        .content:hover {
            background-position:left bottom;
            background-size:100% 1px;
        }
    }
    .copyBtn {
        position:absolute;
        right:1.25rem;
        bottom:1.25rem;
    }
  `