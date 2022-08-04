import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Settings from '../pages/Settings'
import Record from '../pages/Record'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/patients' component={Customers}/>
            <Route path='/track' component={Products}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/records' component={Record}/>
        </Switch>
    )
}

export default Routes
