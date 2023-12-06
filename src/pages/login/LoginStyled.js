import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;

  .loginBox {
    /* padding:0 50px; */
    width: 400px;
    height: 500px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    background-color: rgb(198, 193, 193,0.5);
    border-radius: 10px;
    text-align: center;
    /* color:white !important; */

    .kaptcha {
      display: flex;
    }
  }
`;
