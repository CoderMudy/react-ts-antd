
 export interface RelationDetailResonse {
    data:RelationDetail
 }
 

 export interface RelationDetail{
    eventTypeId: number,
    eventTargetId: number,
    eventTypeName: string,
    eventTargetName: string,
    relation: RelationItem[]
}

export interface RelationItem{
    variableType: string,
    prop: string,
    value:string,
    httpParametersType: string
}