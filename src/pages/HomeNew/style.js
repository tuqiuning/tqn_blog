import styled from 'styled-components';
import pscmin from "@/assets/img/psc1.jpeg";
export const HomeContainer = styled.div`
height:100%;
background-image:url(${pscmin});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
    width:100%;
    position:relative;
    :where(.css-dev-only-do-not-override-nnuwmp).ant-carousel-vertical {
        height:100%;
    }
    :where(.css-dev-only-do-not-override-nnuwmp).ant-carousel-vertical .slick-dots-right {
        right:40px;
    }
    :where(.css-dev-only-do-not-override-nnuwmp).ant-carousel-vertical .slick-dots li {
        margin-top:10px;
        button {
            width:16px;
            height:16px;
            border-radius:50%;
        }
    }
    :where(.css-dev-only-do-not-override-nnuwmp).ant-carousel .slick-dots li.slick-active button {
        background-color:#ffa500;
        opacity:1;
    }
    :where(.css-dev-only-do-not-override-nnuwmp).ant-carousel .slick-dots li button {
        opacity:0.3;
        &:hover {
            opacity:1;
        }
    }
    .arrowDownBox {
        width:60px;
        height:60px;
        border:1px #fff solid;
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
        color:#fff;
        &:hover {
            color:#ffa500;
            border:1px #ffa500 solid;
        }
    }
      
`