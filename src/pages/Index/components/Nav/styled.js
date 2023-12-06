import styled from "styled-components";
export const Container =  styled.div`
    color:#fff;
    position: relative;
    display:flex;
    .searchBox {
        margin-top:-2px;
        width:100px;
        height:24px;
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
            height:22px;
            width:80%;
            background-color:#000
        }
    }
    .tabs {
        list-style:none;
        display:flex;
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
            top:200px;
            left:0;
            height:calc(100vh - 261px);
            background-color:rgba(0,0,0,.3)
        }
    }
    .active {
        color:#118add;
    }
    
`
