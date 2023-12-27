import styled from "styled-components";
import loginBG from "@/assets/img/loginBG.jpg";

export const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display:flex;
  justify-content: center;
  align-items: center;
  background-image:url(${loginBG});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
.centerBox {
  width:18.75rem;
    height:33.75rem;
   overflow:hidden;
    .loginAndRegister {
      width:37.5rem;
      height:100%;
      display:flex;
      transform:translateX(-18.75rem);
    }
}
.registerBox {
  z-index:9;
}
  .loginBox,.registerBox {
    position:relative;
    color:#fff;
    width:18.75rem;
    height:33.75rem;
    background-color:rgba(0,0,0,0.3);
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:5px;
    .loginTitle {
      margin-top:1.875rem;
      font-size:1.5rem;
      font-weight:bold;
    }
    .account {
      width:60%;
      height:2.5rem;
      margin-top:1.25rem;
      border-bottom:1px solid #bbb;
      line-height:2.5rem;
      color:gray;
      .accountInput {
        border:none;
        outline:none;
        background-color:transparent;
        height:2.5rem;
        color:#fff;
      }
    }
    .password {
      width:60%;
      height:2.5rem;
      border-bottom:1px solid #bbb;
      line-height:2.5rem;
      color:gray;
      .pwdInput {
        border:none;
        outline:none;
        background-color:transparent;
        height:2.5rem;
        color:#fff;
      }
    }
    .btn {
      cursor:pointer;
      margin-top:2.5rem;
      text-align:center;
      width:64%;
      height:2.5rem;
      background-color:rgba(84,84,84,.8);
      border-radius:1.25rem;
      line-height:2.5rem;
    }
    .btn1 {
      cursor:pointer;
      margin-top:5rem;
      text-align:center;
      width:64%;
      height:2.5rem;
      background-color:rgba(84,84,84,.8);
      border-radius:1.25rem;
      line-height:2.5rem;
    }
    .switchBtn {
      cursor:pointer;
      margin-top:0.625rem;
      font-size:0.875rem;
      color:#aaa;
    }
  }
`;
