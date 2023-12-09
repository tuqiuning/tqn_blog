import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./LoginStyled";
import axios from "../../utils/request";
// let timer = null;
export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [showRegister,setShowRegister] = useState(false);
  const [accountPlaceholder, setAccountPlaceholder] = useState("请输入账号")
  const [pwdPlaceholder, setPwdPlaceholder] = useState("请输入密码");
  const [conPwdPlaceholder, setConPwdPlaceholder] = useState("请输入确认密码");
  const [messageApi, contextHolder] = message.useMessage();
  
  const navigate = useNavigate();

  const submit = (type) => {
    console.log('20');
    type === 'register' ? submitRegister() : submitLogin();
  }
  // 登录
  const submitLogin = () => {
    if (account === "" || password === "") {
      messageApi.open({
        type: 'error',
        content: `${account === '' ? '请输入账号' : '请输入密码'}`,
      });
      return
    }
    if (account === "admin" && password === "123456") {
      navigate('/')
    } else {
      messageApi.open({
        type: 'error',
        content: '账号或密码错误',
      })
    }
  }
  // 注册
  const submitRegister = () => {
    if (account === "" || password === "" || conPassword === "") {
      messageApi.open({
        type: 'error',
        content: `${account === '' ? '请输入账号' : password === '' ? '请输入密码':'请输入确认密码'}`,
      });
      return
    }
    if(password !== conPassword){
      messageApi.open({
        type: 'error',
        content: '两次输入密码不一致',
      })
      return
    }
    messageApi.open({
      type: 'success',
      content: '注册成功！',
    })
    setAccount("");
    setPassword("");
    setConPassword("");
    goLogin();
  }
  const goRegister = () =>{
    setShowRegister(true);
    const loginBox = document.getElementsByClassName('loginBox');
    loginBox[0].style.opacity = 0;
    loginBox[0].style.transition = 'opacity .5s linear';
    const registerBox = document.getElementsByClassName('registerBox');
    registerBox[0].style.translate = '300px 0';
    registerBox[0].style.transition = 'translate .5s linear';
    // registerBox[0].style.ZIndex = '9';

    // timer = setTimeout(()=>{
    //   loginBox[0].style.display = 'none';
    // },500)
    setAccount("");
    setPassword("");
  }
  const goLogin = () =>{
    // clearTimeout(timer);
    const registerBox = document.getElementsByClassName('registerBox');
    registerBox[0].style.translate = '-300px 0';
    registerBox[0].style.transition = 'translate .5s linear';
    const loginBox = document.getElementsByClassName('loginBox');
    loginBox[0].style.display = 'flex';
    loginBox[0].style.opacity = 1;
    loginBox[0].style.transition = 'opacity .5s linear';
    setAccount("");
    setPassword("");
    setConPassword("");
  }


  return (
    <LoginStyled>
      <div className="centerBox">
      <div className="loginAndRegister">
        <div className="registerBox">
          <div className="loginTitle">REGISTER</div>
          <div className="account">
            <input type="text" className="accountInput" placeholder={accountPlaceholder} value={account} onChange={e => { setAccount(e.target.value) }} />
          </div>
          <div className="password">
            <input type="password" className="pwdInput" placeholder={pwdPlaceholder} value={password} onChange={e => { setPassword(e.target.value) }} />
          </div>
          <div className="password">
            <input type="password" className="pwdInput" placeholder={conPwdPlaceholder} value={conPassword} onChange={e => { setConPassword(e.target.value) }} />
          </div>
          <div className="btn" onClick={()=>submit('register')}>注册</div>
          <div className="switchBtn" onClick={goLogin}>去登录</div>
        </div>
        <div className="loginBox" style={{}}>
          <div className="loginTitle">LOGIN</div>
          <div className="account">
            <input type="text" className="accountInput" placeholder={accountPlaceholder} value={account} onChange={e => { setAccount(e.target.value) }} />
          </div>
          <div className="password">
            <input type="password" className="pwdInput" placeholder={pwdPlaceholder} value={password} onChange={e => { setPassword(e.target.value) }} />
          </div>
          <div className="btn1" onClick={()=>submit('login')}>登录</div>
          <div className="switchBtn" onClick={goRegister}>去注册</div>
        </div>
      </div>
      </div>
      

      {contextHolder}
    </LoginStyled>
  );
}
