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
            font-size:1.5rem;
            font-weight:bold;
        }
        .participation {
            margin-top:1.25rem;
            margin-bottom:1.25rem;
            font-size:1rem;
        }
        .skills {
            .skill {
                // display:inline-block;
                margin-right:0.625rem;
                font-size:1.125rem;
                // font-weight:bold;
                
            }
        }
    }
`