import { Button, Card, Col, Form, Input, Row, Select, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addRelation, AddRelationPayload } from '../../store/actions/addEventTargetRealtion.action';
import { getEventTargetParams } from '../../store/actions/eventParam.action';
import { getEventTargetList } from '../../store/actions/eventTargetRealtion.action';
import { getEventTypeData } from '../../store/actions/eventTypeData.action';
import { AppState } from '../../store/reducers';
import { EventTargetParamsState } from '../../store/reducers/eventTargetParam.reducer';
import { EventTargetListState } from '../../store/reducers/eventTargetRealtion.reducer';
import { EventTypeDataState } from '../../store/reducers/eventTypeData.reducer';

const EventTargetRelation = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEventTargetList())
    // 获取该事件类型的参数列表
    dispatch(getEventTypeData(3))
  }, [])

  const { targets } = useSelector<AppState, EventTargetListState>(
    state => state.eventTargetList
  )

  const { targetParams } = useSelector<AppState, EventTargetParamsState>(
    state => state.eventTargetParams
  )

  const { properties } = useSelector<AppState, EventTypeDataState>(
    state => state.eventTypeData
  )

  const [targetList, setTargetList] = useState([]);
  const [eventTypeData, setEventTypeData] = useState([]);


  let param = useParams()


  useEffect(() => {
    if (!targets.success) {
      return;
    }
    setTargetList(targets.data.map(item => ({
      value: item.id,
      label: item.eventTargetName
    })));
  }, [targets]); // mount 和 unmount 时执行


  useEffect(() => {
    console.log("事件目标中定义的参数是", targetParams)
  }, [targetParams]); // mount 和 unmount 时执行

  useEffect(() => {
    console.log("该事件类型的参数是", properties)
    if (!properties) {
      return;
    }
    setEventTypeData(properties.map(item => ({
      value: '$.data.' + item.prop,
      label: '$.data.' + item.prop,
    })));
    console.log("eventTypeData", eventTypeData)
  }, [properties]);

  const onSelect = (value) => {
    console.log("你选则的是", value)
    dispatch(
      getEventTargetParams(value)
    )
  }

  const onFinish = (value) => {
    console.log("需要提交的数据", value)
    let data: AddRelationPayload = {
      eventTypeId: value.eventTypeId,
      eventTargetId: value.eventTargetId,
      relation: []
    }
    console.log("需要提交的数据", data)
    dispatch(
      addRelation(value)
    )
  }

  return (

    <Card title="投递参数设置">

      <Form onFinish={onFinish} initialValues={{ eventTypeId: 3 }}>
        <Form.Item label="事件类型" name="eventTypeId">
          <Input disabled />
        </Form.Item>
        <Form.Item label="事件目标" name="eventTargetId">
          <Select id="eee" options={targetList} onSelect={onSelect} />
        </Form.Item>


        <label>参数关系设置</label>

        <div>
          {targetParams.map(item => {
            return <Form.Item label={item.prop + `(` + item.httpParametersType + ')'} name={item.prop}>
              <Select  options={eventTypeData} />
            </Form.Item>
          })}
        </div>

        <Form.Item wrapperCol={{ offset: 11, span: 12 }}>
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

