import styled from "styled-components";
export const Container =  styled.div`
    color:${props => {console.log(props.$navTextColor);
      return  props.$navTextColor}};
    position: relative;
    display:flex;
    .rotateContainer {
        height:2.25rem;
        overflow:hidden;
        .rotateBox {
            display:flex;
            flex-direction:column;
            align-items:flex-end;
        }
        .tabs {
            height:2.25rem;
            list-style:none;
            display:flex;
            
            align-items:center;
            gap:0.625rem;
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
                /**
                &:not(.active) {
                    &:hover {
                        font-size:0.91rem;
                    }
                }
                */
               
            }
        }
        .searchBox {
            width:12.5rem;
            height:2.25rem;
            box-sizing:border-box;
            border-radius:1.5rem;
            border:1px solid ${props => props.$navTextColor};
            background-color:transparent;
            display:flex;
            align-items:center;
            padding:0 0.3rem;
            overflow:hidden;
            input {
                color:${props => props.$navTextColor};
                border:none;
                outline:none;
                margin-left:0.3rem;
                height:1.875rem;
                width:90%;
                font-size:1rem;
                background-color:transparent;
            }
        }
    }
    
    .searchSwitchIcon {
        height:2.25rem;
        display:flex;
        margin-left:0.625rem;
        align-items:center;
        position:relative;
        font-size:1.25rem;
        .closeIcon,.searchIcon {
            position:absolute;
            transition:scale .5s ease;
        }
        .closeIcon {
            scale:${props => props.$showSearchBox ? 1 : 0};
        }
        .searchIcon {
            scale:${props => props.$showSearchBox ? 0 : 1};
        }
        
    }
    
    .icon {
        height:1.25rem;
    }
    .active {
        color:#1677ff;
    }
    .tabs-modal {
        background-color:#000;
        list-style:none;
        padding-top:0.625rem;
        padding-bottom:1px;
        padding-left:1.875rem;
        li {
            margin-bottom:0.625rem;
            
        } 
    }
    
`
