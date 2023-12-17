import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { HostPage } from './pages/host-page/host-page';
import { Index } from './pages/login-page';
import { AddMeasure } from './pages/add-measure/add-measure';

import { AppTabs } from './types/app-tabs';
import { getLinkToMenuItem } from './utils';

const PageProvider = (children) => <HostPage> {children} </HostPage>;

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
        // TODO: Заменить ссылкой из config
        path: '/login',
        element: PageProvider(<Index />),
    },
]);

export const Router = () => <RouterProvider router={router} />;
