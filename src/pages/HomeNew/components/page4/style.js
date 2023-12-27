import styled from 'styled-components';

export const Page4Wrapper = styled.div`
    color:#fff;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    overflow:hidden;
    align-items:center;
    > .title {
        font-size:1.5rem;
        font-weight:bold;
        margin-bottom:5rem;
    }
    .box {
        width:90%;
        height:90%;
        // background-color:gray;
        display:flex;
        justify-content:center;
        .content {
            position:relative;
            width:80%;
            margin:0 1.875rem;
            overflow:hidden;
            > .title {
                font-size:1.5rem;
                font-weight:bold;
                margin-bottom:3rem;
                width:100%;
                text-align:center;
            }
            .projectTransition-enter {
                top:0;
                transform:${props => props.$direction ? 'translateX(100%)': 'translateX(-100%)'};
            }
            .projectTransition-enter-active {
                transform:translateX(0);
                transition:all .5s ease;
            }
            .projectTransition-exit {
                transform:translateX(0);
            }
            .projectTransition-exit-active {
                transform:${props => props.$direction ? 'translateX(-100%)': 'translateX(100%)'};
                transition:all .5s ease;
            }
        }
        
        .btnBox {
            height:100%;
            width:3.125rem;
            display:flex;
            justify-content:center;
            align-items:center;
            .btnTransition-enter {
              scale:0;
            }
            .btnTransition-enter-active {
               scale:1;
               transition:all .5s ease;
            }
            .btnTransition-exit {
                scale:1;
            }
            .btnTransition-exit-active {
                scale:0;
                transition:all .5s ease;
            }
            .btn {
                // width:50px;
                // height:50px;
                cursor:pointer;
            }
        }
        
        
    }
`