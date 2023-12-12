import styled from 'styled-components';
export const HomeContainer = styled.div`
    width:100%;
    .title {
        width:100%;
        text-align:center;
        margin:20px 0;
        .info {
            margin-top:10px;
            display:flex;
            justify-content:center;
            gap:20px;
        }
    }
    .tabs {
        width:100%;
        text-align:center;
        margin-bottom:20px;
        span {
            margin:0 10px;
        }
        .active {
            color:#1677ff
        }
    }
    .content {
        width:100%;
        display:flex;
        justify-content:center;
    }
    .footer {
        position:absolute;
        width:100%;
        bottom:10px;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        a {
            margin-right:5px;
            font-size:12px;
             /* 去除默认的下划线 */
            text-decoration: none;
            outline: none;	/* 去除旧版浏览器的点击后的外虚线框 */
            color: #333;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`