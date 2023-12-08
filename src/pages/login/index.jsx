import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input,message } from "antd";
import { useNavigate  } from "react-router-dom";
import { LoginStyled } from "./LoginStyled";
import axios from "../../utils/request";
export default function Login() {
  const [account,setAccount] = useState("")
  const [password,setPassword] = useState("")
  const [accountPlaceholder,setAccountPlaceholder] = useState("请输入账号")
  const [pwdPlaceholder,setPwdPlaceholder] = useState("请输入密码");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  
  const submit = ()=>{
    if(account === "" || password === ""){
      messageApi.open({
        type: 'error',
        content: `${account === '' ? '请输入账号' : '请输入密码'}`,
      });
      return
    }
    if(account === "admin" && password === "123456"){
      navigate('/')
    }else {
      messageApi.open({
        type: 'error',
        content: '账号或密码错误',
      })
    }
  }


  return (
    <LoginStyled>
        <div className="loginBox">
            <div className="loginTitle">LOGIN</div>
            <div className="account">
              <input type="text" className="accountInput" placeholder={accountPlaceholder} onChange={e=>{setAccount(e.target.value)}}/>
            </div>
            <div className="password">
          <input type="password" className="pwdInput" placeholder={pwdPlaceholder}  onChange={e=>{setPassword(e.target.value)}}/>
            </div>
            <div className="btn" onClick={submit}>登录</div>
        </div>
        {contextHolder}
    </LoginStyled>
  );
}
