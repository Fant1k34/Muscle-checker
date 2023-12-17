import React, { ReactNode, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import { hostStyle, headerStyle, footerStyle } from './styles';
import { menuItems } from '../../constant/menu-items';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLinkToMenuItem, getMenuIdByLink } from '../../utils';

const { Header, Content, Footer, Sider } = Layout;

type HostPageProps = {
    children: ReactNode;
};

export const HostPage = ({ children }: HostPageProps) => {
    const location = useLocation();

    // Получаем нужный id раздела в Sidebar
    const [chosenItem, setChosenItem] = useState<number>(
        getMenuIdByLink(location.pathname)
    );

    const handleRedirect = (item) => {
        // Редиректим при клике, меняем id раздела
        // Key - это строчный id раздела
        document.location = getLinkToMenuItem(Number(item.key));

        setChosenItem(Number(item.key));
    };

    return (
        <Layout style={hostStyle}>
            <Sider>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[String(chosenItem)]}
                    onClick={handleRedirect}
                    items={menuItems.map(({ icon, label, id }) => ({
                        icon,
                        label,
                        key: id,
                    }))}
                />
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Header>
                <Content> {children} </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    );
};
