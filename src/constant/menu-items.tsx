import {
    BarChartOutlined,
    HomeOutlined,
    RiseOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { AppTabs } from '../types/app-tabs';

export const menuItems = [
    {
        id: AppTabs.MAIN,
        icon: <HomeOutlined />,
        label: 'Главная',
        link: '/',
    },
    {
        id: AppTabs.MEASURE,
        icon: <RiseOutlined />,
        label: 'Замеры',
        link: '/add-measure',
    },
    {
        id: AppTabs.STATISTICS,
        icon: <BarChartOutlined />,
        label: 'Статистика',
        link: '/statistics',
    },
    {
        id: AppTabs.SETTINGS,
        icon: <UserOutlined />,
        label: 'Настройки',
        link: '/settings',
    },
];
