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
                transition:.1s;
                /* 切换中英文的hover不加颜色效果 */
                &:nth-child(-n+3) {
                    &:hover {
                        color:#1677ff;
                    }
                }
                /* 处于激活状态的hover不加文字变小效果 */
                &:not(.active) {
                    &:hover {
                        font-size:15px;
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
    .active {
        color:#1677ff;
    }
    .tabs-modal {
        background-color:#000;
        list-style:none;
        padding-top:10px;
        padding-bottom:1px;
        padding-left:30px;
        li {
            margin-bottom:10px;
            
        } 
    }
    
`
