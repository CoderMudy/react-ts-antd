import { Button, Card, Col, Form, Input, Layout, notification, Result, Row, Select, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddRelationPayload, editRelation, getRelationDetail } from '../../store/actions/eventTargetRealtion.action';
import { getEventTargetParams } from '../../store/actions/eventParam.action';
import { getEventTargetList } from '../../store/actions/eventTarget.action';
import { getEventTypeData } from '../../store/actions/eventTypeData.action';
import { AppState } from '../../store/reducers';
import { EventTargetParamsState } from '../../store/reducers/eventTargetParam.reducer';
import { EventTargetListState } from '../../store/reducers/eventTargetList.reducer';
import { EventTypeDataState } from '../../store/reducers/eventTypeData.reducer';
import { GetRelationState } from '../../store/reducers/getEventTargetRealtion.reducer';
import { RelationState } from '../../store/reducers/eventTargetRealtion.reducer';
import axios from 'axios';
import { CommonResonse } from '../../store/models/response/commonResponse';
import { API } from '../../config';

const EditEventTargetRelation: React.FC = () => {
  const param = new URLSearchParams(window.location.search)

  const relationId = param.get("id")
  // const eventTypeName = param.get("eventTypeName")
  var eventTypeName = ""
  const dispatch = useDispatch()



  const { targets } = useSelector<AppState, EventTargetListState>(
    state => state.eventTargetList
  )

  const { targetParams } = useSelector<AppState, EventTargetParamsState>(
    state => state.eventTargetParams
  )

  const { properties } = useSelector<AppState, EventTypeDataState>(
    state => state.eventTypeData
  )

  const { res } = useSelector<AppState, GetRelationState>(
    state => state.getRelationDetail
  )



  // 获取到参数关系对应的详情之后 获取事件类型的参数列表
  useEffect(() => {
    const eventTypeId = res.eventTypeId
    if (eventTypeId === -1) {
      return
    }
    eventTypeName = res.eventTargetName
    const eventTargetId = res.eventTargetId

    // 获取该事件类型的参数列表
    dispatch(getEventTypeData(eventTypeId))

    dispatch(
      getEventTargetParams(eventTargetId)
    )
  }, [res])


  const [eventTypeData, setEventTypeData] = useState([]);


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
    console.log("properties", properties)
  }, [properties]);



  const onFinish = async (value) => {
    console.log("需要提交的数据", value)
    value.eventTypeId = res.eventTypeId
    value.eventTargetId = res.eventTargetId
    console.log("需要提交的数据", value)
    // dispatch(
    //   editRelation(value)
    // )

    console.log("开始编辑事件类型目标关系")
    const response  = await  axios({
        url:`${API}/relation/misEdit`,
        method:'post',
        data: value
    })
    console.log("编辑事件类型目标关系",response.data)
    if(response.data.success === true){
      openSuccessNotification()
    }else{
      openErrorNotification(response.data.errorMessage)
    }
  }

  
  useEffect(() => {
    // 获取参数对应关系详情
    dispatch(getRelationDetail(Number(relationId)))
  }, [])


  const openErrorNotification = (message) => {
      notification.open({
        message: '编辑失败',
        description:message,
        className: 'custom-class',
        style: {
          width: 600,
        },
      });
  };

  const openSuccessNotification = () => {
      notification.open({
        message: '编辑成功',
        className: 'custom-class',
        style: {
          width: 600,
        },
      });
    
    
  };



  return (
    <div>
      <Card title="投递参数编辑">
        <Form onFinish={onFinish} >
          <Form.Item label="事件类型" name="eventTypeId">
            {/* <Input disabled /> */}
            <span>{res.eventTypeName}</span>
          </Form.Item>
          <Form.Item label="事件目标" name="eventTargetId">
            {/* <Input disabled /> */}
            <span>{res.eventTargetName}</span>
          </Form.Item>

          <label>参数关系设置</label>
          <div>
            {res.relation.map(item => {
              return <Form.Item label={item.prop + `(` + item.httpParametersType + ')'} name={item.prop}>
                <Select options={eventTypeData} defaultValue={item.value} />
              </Form.Item>
            })}
          </div>

          <Form.Item wrapperCol={{ offset: 11, span: 12 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>


  )
}


export default EditEventTargetRelation
