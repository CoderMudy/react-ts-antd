import { Button, Card, Col, Form, Input, notification, Row, Select, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addRelation, AddRelationPayload } from '../../store/actions/eventTargetRealtion.action';
import { getEventTargetParams } from '../../store/actions/eventParam.action';
import { getEventTargetList } from '../../store/actions/eventTarget.action';
import { getEventTypeData } from '../../store/actions/eventTypeData.action';
import { AppState } from '../../store/reducers';
import { EventTargetParamsState } from '../../store/reducers/eventTargetParam.reducer';
import { EventTypeDataState } from '../../store/reducers/eventTypeData.reducer';
import { EventTargetListState } from '../../store/reducers/eventTargetList.reducer';
import axios from 'axios';
import { API } from '../../config';

const EventTargetRelation: React.FC = () => {
  const param = new URLSearchParams(window.location.search)
  const eventTypeId = Number(param.get("id"))
  const eventTypeName = param.get("eventTypeName")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEventTargetList())
    // 获取该事件类型的参数列表
    dispatch(getEventTypeData(eventTypeId))
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
  const [eventTypeData2, setEventTypeData2] = useState([]);


  useEffect(() => {
    console.log("事件目标：", targets)
    if (!targets.success) {
      return;
    }
    setTargetList(targets.data.map(item => ({
      value: item.id,
      label: item.eventTargetName
    })));
    console.log("targetList", targetList)
  }, [targets]); // mount 和 unmount 时执行


  useEffect(() => {
    console.log("事件目标中定义的参数是", targetParams)
  }, [targetParams]); // mount 和 unmount 时执行

  useEffect(() => {
    console.log("该事件类型的参数是", properties)
    if (!properties) {
      return;
    }
    setEventTypeData2(properties.map(item => ({
      value: '$.data.' + item.prop,
      label: '$.data.' + item.prop,
    })));
    console.log("eventTypeData", eventTypeData2)
  }, [properties]);

  const onSelect = (value) => {
    console.log("你选则的是", value)
    dispatch(
      getEventTargetParams(value)
    )
  }

  const onFinish = async (value) => {
    console.log("需要提交的数据", value)
    let data: AddRelationPayload = {
      eventTypeId: value.eventTypeId,
      eventTargetId: value.eventTargetId,
      relation: []
    }
    value.eventTypeId = eventTypeId
    console.log("需要提交的数据", value)
    // dispatch(
    //   addRelation(value)
    // )

    const response = await axios({
      url: `${API}/relation/misAdd`,
      method: 'post',
      data: value
    })
    if(response.data.success === true){
      openSuccessNotification()
    }else{
      openErrorNotification(response.data.errorMessage)
    }
    console.log("添加事件类型目标关系2", response.data)

  }


  const openErrorNotification = (message) => {
    notification.open({
      message: '添加失败',
      description:message,
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
};

const openSuccessNotification = () => {
    notification.open({
      message: '添加成功',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  
  
};


  return (

    <Card title="投递参数设置">

      <Form onFinish={onFinish} initialValues={{ eventTypeId: eventTypeName }}>
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
              <Select options={eventTypeData2} />
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

