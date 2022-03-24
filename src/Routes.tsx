import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import EventSource from './component/core/EventSource'
import RuleInfo from './component/core/RuleInfo'
import Rules from './component/core/Rules'

const Routes = () => {
    return (
        // <HashRouter>
        //     <Switch>
        //         <Route path="/" component={Rules} exact />
        //         <Route path="/rule" component={RuleInfo}  />
        //         <Route path="/event-sources" component={EventSource}  />
        //         <Route path="/rules" component={Rules}  />
        //     </Switch>
        // </HashRouter>
        <HashRouter>
            <Switch>
                <Route path="/" component={Rules} exact />
                <Route path="/shop" component={RuleInfo} />
                <Route path="/signin" component={EventSource} />
                <Route path="/product/:productId" component={Rules} />
            </Switch>
        </HashRouter>
    )
}

export default Routes