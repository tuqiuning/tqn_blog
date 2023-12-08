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

  .loginBox {
    color:#fff;
    width:300px;
    height:360px;
    background-color:rgba(0,0,0,0.3);
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:5px;
    .loginTitle {
      margin-top:30px;
      font-size:24px;
      font-weight:bold;
    }
    .account {
      width:60%;
      height:40px;
      margin-top:20px;
      border-bottom:1px solid #bbb;
      line-height:40px;
      color:gray;
      .accountInput {
        border:none;
        outline:none;
        background-color:transparent;
        height:40px;
        color:#fff;
      }
    }
    .password {
      width:60%;
      height:40px;
      border-bottom:1px solid #bbb;
      line-height:40px;
      color:gray;
      .pwdInput {
        border:none;
        outline:none;
        background-color:transparent;
        height:40px;
        color:#fff;
      }
    }
    .btn {
      cursor:pointer;
      margin-top:60px;
      text-align:center;
      width:64%;
      height:40px;
      background-color:rgba(84,84,84,.8);
      border-radius:20px;
      line-height:40px;
    }
  }
`;
