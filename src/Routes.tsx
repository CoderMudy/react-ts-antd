import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import EditEventTargetRelation from './component/core/EditEventTargetRelation'
import EventSource from './component/core/EventSource'
import EventTargetRelation from './component/core/EventTarget'
import EventTargetRelationDetail from './component/core/EventTargetRelationDetail'

import RuleInfo from './component/core/RuleInfo'
import Rules from './component/core/Rules'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" component={Rules} exact />
                <Route path="/rule" component={RuleInfo}  />
                <Route path="/event-sources" component={EventSource}  />
                <Route path="/rules" component={Rules}  /> */}
                <Route path="/eventTarget" component={EventTargetRelation}  />
                <Route path="/eventTargetDetail" component={EventTargetRelationDetail}  />
                <Route path="/eventTargetEdit" component={EditEventTargetRelation}  />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes