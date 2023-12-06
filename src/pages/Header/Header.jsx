import React,{ useEffect, useRef,useState,memo } from "react";
import "./Header.less";
import { useNavigate } from "react-router-dom";
import header from '../../assets/img/header.jpg';
import { Avatar,Dropdown,Space,message  } from "antd";

function Header(props) {
  console.log('渲染')
  let navigate = useNavigate();
  let [counter,setCounter] = useState(23)
  let items = useRef([
    {
      label: '退出登录',
      key: '1',
    }
  ]).current;
  const onClick = ({ key }) => {
      navigate('/login')
  };
  return (
    <div className="container_header">
      <div className="welcome">
        <h3>欢迎使用</h3>
      </div>
      <div className="quit">
      <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar src={header} size={50} />
        {/* <img src={header}></img> */}
        <span className="userName">admin</span>
      </Space>
    </a>
  </Dropdown>
      
      </div>
    </div>
  );
}

export default memo(Header)