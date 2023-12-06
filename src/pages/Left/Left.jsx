import React from 'react';
import { Space, Table } from 'antd';
import './left.less';
const columns = [
  {
    title: '拜访主题',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '客户名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '拜访时间',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '拜访类型',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '状态',
    key: 'status',
    render:(_,record) => (
        <div className={'status'+record.status}>{transform(record.status)}</div>
    )
  },
  {
    title: '发起单位',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '发起人',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '发起时间',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <div onClick={() => view(record)}>222</div>
        <a >查看</a>
        <a>删除</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '主题1111',
    age: 32,
    address: '类型1111',
    tags: ['nice', 'developer'],
    status:'1',
  },
  {
    key: '2',
    name: '主题2222',
    age: 42,
    address: '类型2222',
    tags: ['loser'],
    status:'2',
  },
  {
    key: '3',
    name: '主题3333',
    age: 32,
    address: '类型3333',
    tags: ['cool', 'teacher'],
    status:'3',
  },
];
const view = (record) => {
    console.log(record)
}
const transform = (val) => {
  switch (val) {
    case '1':
      return '已完成';
    case '2':
      return '已反馈';
    case '3':
      return '已退回';
    default:
      return '未知'
  }
}
const Left = () => (
  <div><Table columns={columns} dataSource={data} />
  </div>
);


export default Left;