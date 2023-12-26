import styled from 'styled-components';

export const Page4Wrapper = styled.div`
    color:#fff;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    .box {
        width:80%;
        height:500px;
        // background-color:gray;
        display:flex;
        justify-content:center;
        .content {
            position:relative;
            width:80%;
            margin:0 30px;
            overflow:hidden;
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
            width:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            .btn {
                // width:50px;
                // height:50px;
                cursor:pointer;
            }
        }
        
        
    }
`