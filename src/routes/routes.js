import React from 'react';
import { Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import MainLayout from '../layout/MainLayout';
import Main from '../layout/Main';

const BaseRouter = () => (
    <Switch>
        <AppRoute exact path='/' layout={MainLayout} component={Main} />
    </Switch>
)

export default BaseRouter;