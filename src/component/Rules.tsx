import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import Search from 'antd/lib/input/Search';
import "../index.css"

const { Column, ColumnGroup } = Table;

const data = [
    {
      key: '1',
      ruleName: '规则一',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      ruleName: '规则2',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      ruleName: '规则三',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const RuleItem:React.FC = () => {
  return (
    <div>
      <div className="div-inline"> 
        <Button type="primary" style={{background:'#0064c8'}}>创建规则</Button>
        <Search style={{ width: 300}} placeholder='可按规则名称进行前缀匹配搜索' onSearch={(value)=>{
          console.log("点击了搜索",value)
        }}></Search>
      </div>
      <Table dataSource={data}>
      <Column title="名称" dataIndex="ruleName" key="ruleName" />
      <Column title="状态" dataIndex="lastName" key="lastName" />
      <Column title="事件目标" dataIndex="lastName" key="lastName" />
      <Column title="创建时间" dataIndex="createTime" key="createTime" />

      <Column
        title="操作"
        key="action"
        render={(text, record:any) => (
          <Space size="middle">
            <a>详情 {record.lastName}</a>
            <a>编辑事件目标</a>
            <a>编辑事件模式</a>
            <a>发布事件</a>
            <a>禁用</a>
            <a>删除</a>
          </Space>
        )}
      />
    </Table>
  </div>
  )
}

export default RuleItem