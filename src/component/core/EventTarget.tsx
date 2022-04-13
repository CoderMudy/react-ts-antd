import { Button, Card, Col, Form, Input, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEventTargetParams } from '../../store/actions/eventParam.action';
import { getEventTargetList } from '../../store/actions/eventTargetRealtion.action';
import { AppState } from '../../store/reducers';
import { EventTargetParamsState } from '../../store/reducers/eventTargetParam.reducer';
import { EventTargetListState } from '../../store/reducers/eventTargetRealtion.reducer';
import { RuleState } from '../../store/reducers/rule.reducer';

const listColumns = [
  {
    title: '目标',
    dataIndex: 'eventTargetName',
    key: 'eventTargetName',
    width: '30%',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    width: '20%'
  }
];

const columns = [
  {
    title: '目标参数',
    dataIndex: 'prop',
    key: 'prop',
    width: '30%',
  },
  {
    title: '源参数',
    dataIndex: 'age',
    key: 'age',
    width: '20%',
    scopedSlots: { customRender: "select" }
  }
];

const data = [{
  key: 1,
  prop: 'Joe Black1',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
},
{
  key: 2,
  prop: 'Joe Black2',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: 3,
  prop: 'Joe Black3',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}
];

let giftScope = [
  {
    code: 200,
    id: 1,
    name: "张三"
  }, {
    code: 300,
    id: 2,
    name: "李四"
  }, {
    code: 400,
    id: 3,
    name: "王五"
  }, {
    code: 500,
    id: 4,
    name: "赵六"
  },
]
const EventTargetRelation = () => {



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEventTargetList())
  }, [])

  const { targets } = useSelector<AppState, EventTargetListState>(
    state => state.eventTargetList
  )

  const { targetParams } = useSelector<AppState, EventTargetParamsState>(
    state => state.eventTargetParams
  )

  const [targetList, setTargetList] = useState([]);
  const [targetParamList, setTrgetParamList] = useState([]);


  useEffect(() => {
    if (targets && !targets.success) {
      return;
    }
    setTargetList(targets.data.map(item => ({
      value: item.id,
      label: item.eventTargetName,
    })));
  }, [targets]); // mount 和 unmount 时执行


  useEffect(() => {
    console.log("目标参数是",targetParams)
  }, [targetParams]); // mount 和 unmount 时执行

  const onSelect = (value) => {
    console.log("你选则的是", value)
    dispatch(
      getEventTargetParams(value)
    )
  }

  return (

    <Card title="投递参数设置">

      <Form>
        <Form.Item label="事件类型" name="eventType">
          <Input disabled defaultValue="dede" />
        </Form.Item>
        <Form.Item label="事件目标" name="eventTarget">
          <Select id="eee" options={targetList} onSelect={onSelect} />
        </Form.Item>


        <label>参数关系设置</label>

        {data.map(d => {
          return <Form.Item label={d.prop} name="eventTarget">
            <Select />
          </Form.Item>
        })}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>

      </Form>

      {/* <Table columns={listColumns} dataSource={targets.data} /> */}

    </Card>

  )
}


export default EventTargetRelation

