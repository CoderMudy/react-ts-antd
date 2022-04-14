export interface EventTypeDataResonse {
    data:EventTypeDataData
 }
 
 export interface EventTypeDataData {
     success: string
     data: EventTypeDataJson
 }
 
 export interface EventTypeDataJson {
    properties: EventTypeData[]
 }
 
 export interface EventTypeData {
     prop: string
     description: string
     type: string
 }