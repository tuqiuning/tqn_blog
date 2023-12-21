import styled from 'styled-components';

export const Page4Wrapper = styled.div`
    color:#fff;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    .box {
        width:500px;
        height:500px;
        background-color:gray;
        display:flex;
       
        .content {
            position:relative;
            width:80%;
            // overflow:hidden;
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
            .projectItem {
                position:absolute;
                border:1px solid red;
                top:0;
                left:0;
                width:100%;
                .left {
                    
                }
                .right {
                   
                }
            }
        }
        
        
        .btn {
            width:20%;
        }
        
    }
`