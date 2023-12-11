import styled from 'styled-components';

export const ScaleWrapper = styled.div`
    padding:20px;
    .main {
        width:100%;
        height:calc(100% - 60px);
        display:flex;
        flex-direction:column;
        justify-content:center;
        .title {
            font-size:18px;
            margin-bottom:20px;
        }
        .content {
            font-size:16px;
            margin-bottom:20px;
            background:linear-gradient(to right,#000,#000) no-repeat right bottom;
            background-size:0 1px;
            padding-bottom:5px;
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
        right:20px;
        bottom:20px;
    }
  `