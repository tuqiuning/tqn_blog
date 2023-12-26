import styled from 'styled-components';

export const Page4DetailWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    position:absolute;
    top:0;
    left:0;
    }
    .left {
        width:30%;
    }
    .right {
        flex:1;
        .title {
            font-size:24px;
            font-weight:bold;
        }
        .skills {
            margin-top:10px;
            .skill {
                // display:inline-block;
                margin-right:10px;
                font-size:18px;
                // font-weight:bold;
                
            }
        }
    }
`