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
        width:25%;
    }
    .right {
        flex:1;
        .title {
            font-size:1.3rem;
            font-weight:bold;
            text-align:center;

        }
        .overview {
            margin:0.8rem 0;
            font-size:1rem;
            text-indent:2em;
        }
        .participation {
            margin-bottom:1.25rem;
            font-size:1rem;
        }
        .skills {
            .skill {
                // display:inline-block;
                margin-right:1.2rem;
                font-size:1.125rem;
                // font-weight:bold;
                color:'red';
            }
        }
        .icons {
            display:flex;
            .icon {
                margin-right:1.25rem;
            } 
        }
    }
`