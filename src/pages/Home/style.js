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
            color:#118add
        }
    }
    .content {
        width:100%;
        display:flex;
        justify-content:center;
    }
    .footer {
        position:fixed;
        width:100%;
        bottom:20px;
        display:flex;
        justify-content:center;
        a {
            text-decoration: none; /* 去除默认的下划线 */
	outline: none;	/* 去除旧版浏览器的点击后的外虚线框 */
	color: #000;
        }
    }
`