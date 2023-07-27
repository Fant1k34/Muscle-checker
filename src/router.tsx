import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { HostPage } from './pages/host-page/host-page';

import { AppTabs } from './types/app-tabs';
import { getLinkToMenuItem } from './utils';
import { MusclePointer } from './components/muscle-input/muscle-pointer';
import { MuscleMeasure } from './types';

const PageProvider = (children) => <HostPage> {children} </HostPage>;

const router = createBrowserRouter([
    {
        path: getLinkToMenuItem(AppTabs.MAIN),
        element: PageProvider(<MainPage />),
    },
    {
        path: getLinkToMenuItem(AppTabs.MEASURE),
        element: PageProvider(
            <MusclePointer
                muscle={MuscleMeasure.BICEPS}
                muscleHint={'Тут подсказка'}
                position="R"
                onSet={(value) => {
                    alert(value);
                }}
                otherStyle={{ opacity: '0.3' }}
            />
        ),
    },
    {
        path: getLinkToMenuItem(AppTabs.STATISTICS),
        element: PageProvider(<div>Просмотреть статистику</div>),
    },
    {
        path: getLinkToMenuItem(AppTabs.SETTINGS),
        element: PageProvider(<div>Настройки</div>),
    },
]);

export const Router = () => <RouterProvider router={router} />;
