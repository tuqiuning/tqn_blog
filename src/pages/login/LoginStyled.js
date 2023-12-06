import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;

  .loginBox {
    /* padding:0 50px; */
    width: 350px;
    height: 400px;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%);
    background-color: #000;
    border:1px solid #fff;
    border-radius: 10px;
    text-align: center;
    color:#fff ;
    /* color:white !important; */
    .welcome {
      margin-top:20px;
    }
    .title {
      margin-top:20px;
      margin-bottom:30px;
    }
    :where(.css-dev-only-do-not-override-nnuwmp).ant-form-item .ant-form-item-label >label {
      color: #fff !important;
    }
  }
`;
