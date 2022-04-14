export interface EventTargetParamResonse {
   data:EventTargetParamData
}

export interface EventTargetParamData {
    success: string
    data: EventTargetParamJson
}

export interface EventTargetParamJson {
   httpParams: EventTargetParam[]
}

export interface EventTargetParam {
    prop: string
    httpParametersType: string
    variableType: string
    value: string
}


// export interface EventTargetParam {
//     prop: string
//     httpParametersType: string
//     variableType: string
//     value: string
// }

export interface EventTarget {
    id: number
    eventTargetName: string
    description: string
}