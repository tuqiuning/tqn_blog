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
        }
    }
    
    .copyBtn {
        position:absolute;
        right:20px;
        bottom:20px;
    }
  `