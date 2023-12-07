import styled from "styled-components";
export const Container =  styled.div`
    color:#fff;
    position: relative;
    display:flex;
    .rotateContainer {
        height:30px;
        overflow:hidden;
        .rotateBox {
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        .tabs {
            height:30px;
            list-style:none;
            display:flex;
            
            align-items:center;
            gap:10px;
            margin-bottom:0;
            white-space:nowrap;
            li {
                cursor:pointer;
                &:nth-child(-n+5) {
                    &:hover {
                        color:#118add
                    }
                }
            }
        }
        .searchBox {
            width:200px;
            height:30px;
            box-sizing:border-box;
            border-radius:24px;
            border:1px solid #fff;
            background-color:#000;
    
            margin-right:10px;
            display:flex;
            align-items:center;
            padding:0 5px;
            overflow:hidden;
            input {
                color:#fff;
                border:none;
                outline:none;
                margin-left:5px;
                height:22px;
                width:90%;
                background-color:#000
            }
        }
    }
    .searchIcon {
        height:30px;
        display:flex;
        margin-left:10px;
        align-items:center;
    }
    
    .icon {
        height:20px;
    }
    .modal {
        color:#000;
        border-top:${props => props.isOpen ? '1px':'0'} solid #d4d4d4;
        border-bottom:${props => props.isOpen ? '1px':'0'} solid #d4d4d4;
        position:absolute;
        z-index:9;
        top:40px;
        right:-20px;
        width:100vw !important;
        height:${props => props.isOpen ? 'calc(100vh - 60px)':'0'};
        overflow:hidden;
        transition:height 0.5s ease,border-top 0.5s ease,border-bottom 0.5s ease;
        .tabs-modal {
            background-color:#fff;
            list-style:none;
            padding-top:10px;
            padding-bottom:1px;
            padding-left:30px;
            li {
                margin-bottom:10px;
                
            } 
        }
        .mask {
            position:absolute;
            z-index:9;
            width:100%;
            top:135px;
            left:0;
            height:calc(100vh - 196px);
            background-color:rgba(0,0,0,.3)
        }
    }
    .active {
        color:#118add;
    }
    
`
