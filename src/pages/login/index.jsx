import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate  } from "react-router-dom";
import { LoginStyled } from "./LoginStyled";
import axios from "../../utils/request";
import img1 from "@/assets/img/loginBG.png";
export default function Login() {
  let [img, setImg] = useState("");
  let bb = aaa()
  let navigate = useNavigate()
  useEffect(() => {
    setImg(
      "http://192.168.10.60:8080/coordination/api/system/v1/login/kaptcha"
    );
    // axios.get(
    //   "http://192.168.10.60:8080/coordination/api/system/v1/login/kaptcha",
    //   {responseType:'blob'}
    // ).then((res)=>{
    //   console.log(res)
    // })
  }, []);
  // 切换验证码
const changeKaptcha = ()=>{
  setImg(`http://192.168.10.60:8080/coordination/api/system/v1/login/kaptcha?${Math.random()}`)
  
};
const onFinish = (values) => {
  console.log("Success:", values);
  axios
    .post("/api/system/v1/login/user-name", values)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      // 切换验证码
    });
    console.log(navigate('/home'))
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

  return (
    <LoginStyled>
      <div>
        <img
          src={img1}
          alt=""
          width={"100%"}
          height={"60%"}
        />
        <div className="loginBox">
          <h1>WELCOME</h1>
          <div>
            <h3>tuqiuning's blog</h3>
            <Form
              name="basic"
              layout="vertical"
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入账号",
                  },
                ]}
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 18,
                }}
                style={{ marginLeft: 70 }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ]}
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 18,
                }}
                style={{ marginLeft: 70 }}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="验证码"
                name="kaptchaCode"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码",
                  },
                ]}
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 18,
                }}
                style={{ marginLeft: 70 }}
              >
                <div className="kaptcha" onClick={changeKaptcha}>
                  <Input />
                  <img src={img} alt="验证码" width={80} />
                </div>
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ marginLeft: 70 }}
              >
                <div style={{ display: "flex" }}>
                  {" "}
                  <Checkbox>记住密码</Checkbox>
                </div>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
}
