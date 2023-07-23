import * as React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Main page</div>,
    },
    {
        path: '/add-measure',
        element: <div>Добавить измерение</div>,
    },
    {
        path: '/statistics',
        element: <div>Просмотреть статистику</div>,
    },
    {
        path: '/settings',
        element: <div>Настройки</div>,
    },
])

export const Router = () => <RouterProvider router={router} />
