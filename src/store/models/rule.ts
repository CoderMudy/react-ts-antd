export interface Rule {
    id: number,
    eventBusName: string
    ruleName: string
    description: string
    filterPattern: string
    eventTarget: string
}