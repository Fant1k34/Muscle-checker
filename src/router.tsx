import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { HostPage } from './pages/host-page/host-page';
import { LoginPage } from './pages/login-page/login-page';
import { AddMeasure } from './pages/add-measure/add-measure';

import { AppTabs } from './types/app-tabs';
import { getLinkToMenuItem } from './utils';

import config from '../config/local.js';
import { Provider } from 'react-redux';
import store from './redux/store';

const PageProvider = (children) => (
    <HostPage>
        <Provider store={store}> {children} </Provider>
    </HostPage>
);

const router = createBrowserRouter([
    {
        path: getLinkToMenuItem(AppTabs.MAIN),
        element: PageProvider(<MainPage />),
    },
    {
        path: getLinkToMenuItem(AppTabs.MEASURE),
        element: PageProvider(<AddMeasure />),
    },
    {
        path: getLinkToMenuItem(AppTabs.STATISTICS),
        element: PageProvider(<div>Просмотреть статистику</div>),
    },
    {
        path: getLinkToMenuItem(AppTabs.SETTINGS),
        element: PageProvider(<div>Настройки</div>),
    },
    {
        path: config.server.pages.loginPageUrl,
        element: PageProvider(<LoginPage />),
    },
]);

export const Router = () => <RouterProvider router={router} />;
