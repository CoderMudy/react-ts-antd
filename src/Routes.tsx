import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import EventSource from './component/core/EventSource'
import JsonEditor from './component/core/JsonEditor'
import RuleInfo from './component/core/RuleInfo'
import Rules from './component/core/Rules'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Rules} exact />
                <Route path="/rule" component={RuleInfo}  />
                <Route path="/jsonView" component={JsonEditor}  />
                <Route path="/event-sources" component={EventSource}  />
                <Route path="/rules" component={Rules}  />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes