import React, { useState, useEffect } from 'react';
import {
    CalendarOutlined,
    FileAddOutlined,
    UserOutlined,
    UsergroupAddOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth < 768); 
            setShowSidebar(window.innerWidth >= 768); 
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>

            {showSidebar && (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    className="relative min-h-screen"
                    style={{ background: colorBgContainer }}
                >
                    <div className=" text-center mt-9 mb-8">
                        <h1 className="text-3xl font-bold font-serif ">
                            <span style={{ color: 'blue' }}>Net</span>
                            <span style={{ color: 'slate' }}>/</span>
                            <span style={{ color: 'red' }}>Sc</span>
                        </h1>
                    </div>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        onClick={({ key }) => {
                            if (key === '1') {
                                navigate('/Admin/Dashboard');
                            } else if (key === '2') {
                                navigate('/Admin/AddMahasiswa');
                            } else if (key === '3') {
                                navigate('/admin/AddMahasiswa');
                            } else if (key === '4') {
                                navigate('/Admin/AddJadwalSidang');
                            } else if (key === '5') {
                                navigate('/admin/addblog');
                            }
                        }}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Mahasiswa',
                            },
                            {
                                key: '2',
                                icon: <UsergroupAddOutlined />,
                                label: 'Add Data Mahasiswa',
                            },
                            {
                                key: '3',
                                icon: <FileAddOutlined />,
                                label: 'Add TA Mahasiswa',
                            },
                            {
                                key: '4',
                                icon: <CalendarOutlined />,
                                label: 'Add jadwal Sidang',
                            },
                            {
                                key: '5',
                                icon: <CalendarOutlined />,
                                label: 'Add Blog',
                            },
                        ]}
                    />
                </Sider>
            )}

            {/* Button to toggle sidebar on mobile */}
            <div className="fixed top-0 left-0 z-50 m-4">
                <button
                    className="block lg:hidden text-2xl"
                    onClick={toggleSidebar}
                >
                    <MenuOutlined />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
