import React from 'react';
import { Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import DashboardSider from '../layout/DashboardSider';
import Home from '../pages/Home';
import Main from '../layout/Main';

const BaseRouter = () => (
    <Switch>
        <AppRoute exact path='/' layout={DashboardSider} component={Home} />
        <AppRoute exact path='/main/' layout={DashboardSider} component={Main} />
    </Switch>
)

export default BaseRouter;