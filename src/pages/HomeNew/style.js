import styled from 'styled-components';
import pscmin from "@/assets/img/bg1.jpg";
export const HomeContainer = styled.div`
height:100%;
background-image:url(${pscmin});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
    width:100%;
    position:relative;
    .ant-carousel-vertical {
        height:100%;
    }
    .ant-carousel-vertical .slick-dots-right {
        right:2.5rem;
    }
    .ant-carousel-vertical .slick-dots li {
        margin-top:0.625rem;
        button {
            width:1rem !important;
            height:1rem !important;
            border-radius:50% !important;
        }
    }
    .ant-carousel .slick-dots li.slick-active button {
        background-color:#ffa500;
        opacity:1;
    }
    .ant-carousel .slick-dots li button {
        opacity:0.3;
        &:hover {
            opacity:1;
        }
    }
    .arrowDownBox {
        width:3.75rem;
        height:3.75rem;
        border-radius:50%;
        position:absolute;
        z-index:2;
        display:flex;
        justify-content:center;
        align-items:center;
        bottom:3rem;
        left:50%;
        font-size:1.875rem;
        transform:translate(-50%);
        color:#fccb71 ;
        border:1px #fccb71  solid;
        cursor:pointer;
        &:hover {
            color:#ffa500;
            border:1px #ffa500 solid;
        }
    }
    .footer {
        position:absolute;
        width:100%;
        bottom:0.625rem;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        .policeIcon {
            width:0.94rem;
            height:0.94rem;
        }
        a {
            margin-right:0.3125rem;
            font-size:0.75rem;
             /* 去除默认的下划线 */
            text-decoration: none;
            outline: none;	/* 去除旧版浏览器的点击后的外虚线框 */
            color: #ddd;
            &:hover {
                text-decoration: underline;
            }
        }
    }
      
`