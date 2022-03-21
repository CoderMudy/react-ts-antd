import React from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
    {
      key: '1',
      busName: 'jj-eventbus',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      busName: 'test-eventbus',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      busName: 'ceshi-eventbus',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const Buses:React.FC = (props) => {
  return (
    <Table dataSource={data}>
    {/* <ColumnGroup title="Name"> */}
      <Column title="名称" dataIndex="busName" key="firstName" />
      <Column title="描述" dataIndex="lastName" key="lastName" />
    {/* </ColumnGroup> */}
    <Column title="创建时间" dataIndex="createTime" key="createTime" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map((tag:any) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="操作"
      key="action"
      render={(text, record:any) => (
        <Space size="middle">
          <a>详情 {record.lastName}</a>
          <a>事件规则</a>
          <a>事件源</a>
          <a>事件追踪</a>
          <a>发布事件</a>
        </Space>
      )}
    />
  </Table>
  )
}

export default Buses