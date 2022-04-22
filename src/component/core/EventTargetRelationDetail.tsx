import { Button, Card, Form, Input, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRelation, AddRelationPayload, getRelationDetail } from '../../store/actions/eventTargetRealtion.action';
import { getEventTargetParams } from '../../store/actions/eventParam.action';
import { getEventTargetList } from '../../store/actions/eventTarget.action';
import { getEventTypeData } from '../../store/actions/eventTypeData.action';
import { AppState } from '../../store/reducers';
import { EventTargetParamsState } from '../../store/reducers/eventTargetParam.reducer';
import { EventTargetListState } from '../../store/reducers/eventTargetList.reducer';
import { EventTypeDataState } from '../../store/reducers/eventTypeData.reducer';
import { GetRelationState } from '../../store/reducers/getEventTargetRealtion.reducer';
import FormItemLabel from 'antd/lib/form/FormItemLabel';

const EventTargetRelationDetail: React.FC = () =>  {
  const param = new URLSearchParams(window.location.search)
  const id = param.get("id")


  const dispatch = useDispatch()

  useEffect(() => {
    // 获取详情
    dispatch(getRelationDetail(Number(id)))
  }, [])


  const { res } = useSelector<AppState, GetRelationState>(
    state => state.getRelationDetail
  )


  return (

    <Card title="投递参数关系对应详情">

      <Form  initialValues={{ eventTypeId: res.eventTypeName}}>
        <Form.Item label="事件类型" name="eventTypeId">
          <span>{res.eventTypeName}</span>
        </Form.Item>
        <Form.Item label="事件目标" name="eventTargetId">
          {/* <Input  disabled  defaultValue={res.eventTargetName}/> */}
          <span>{res.eventTargetName}</span>
        </Form.Item>


        <label>参数关系</label>

        <div>
          {res.relation.map(item => {
            return <Form.Item label={item.prop + `(` + item.httpParametersType + ')'} name={item.prop}>
              <span>{item.value}</span>
            </Form.Item>
          })}
        </div>
      </Form>
    </Card>

  )
}


export default EventTargetRelationDetail

