import styled from 'styled-components';
export const HomeContainer = styled.div`
    width:100%;
    .title {
        width:100%;
        text-align:center;
        margin:1.25rem 0;
        .info {
            margin-top:0.625rem;
            display:flex;
            justify-content:center;
            gap:1.25rem;
        }
    }
    .tabs {
        width:100%;
        text-align:center;
        margin-bottom:1.25rem;
        span {
            margin:0 0.625rem;
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
        bottom:0.625rem;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        a {
            margin-right:0.3125rem;
            font-size:0.75rem;
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