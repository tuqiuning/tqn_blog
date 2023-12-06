import React, { useEffect,useState } from "react";
import { Space, Table, Tag,Modal } from "antd";
import Detail from "./Detail.jsx";
import './my.less';

function MyList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [columns,setColumns] = useState([
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={showModal}>查看</a>
          <a>删除</a>
        </Space>
      ),
    },
  ]);
  let [data,setData] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setData([
        {
          key: "1",
          name: "张三",
          age: 32,
          address: "上海陆家嘴",
          tags: ["协同活动", "协同需求"],
        },
        {
          key: "2",
          name: "李四",
          age: 42,
          address: "上海徐家汇",
          tags: ["协同资讯"],
        },
        {
          key: "3",
          name: "王五",
          age: 32,
          address: "上海外滩",
          tags: ["协同产品", "协同管理"],
        },
      ])
    },100)
  },[])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal"
      >
        <Detail></Detail>
      </Modal>
    </>
  );
}

export default MyList;
