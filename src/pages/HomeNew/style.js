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
        right:40px;
    }
    .ant-carousel-vertical .slick-dots li {
        margin-top:10px;
        button {
            width:16px !important;
            height:16px !important;
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
        width:60px;
        height:60px;
        border-radius:50%;
        position:absolute;
        z-index:2;
        display:flex;
        justify-content:center;
        align-items:center;
        bottom:20px;
        left:50%;
        font-size:30px;
        transform:translate(-50%);
        color:#fccb71 ;
        border:1px #fccb71  solid;
        cursor:pointer;
        &:hover {
            color:#ffa500;
            border:1px #ffa500 solid;
        }
    }
      
`