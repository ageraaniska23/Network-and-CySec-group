import React from 'react';
import { Calendar, Layout } from 'antd';
import Crousel from './Crousel';
import BlogList from './BlogList';
const { Content } = Layout;

const PublicPage = () => {
    return (
        <>
            <Content className="">
                <div className="">
                    <h1 className='text-3xl font-serif text-center p-8 font-bold text-gray-950'>SELAMAT DATANG DI
                        <span style={{ color: 'blue' }}> Net</span>
                        <span style={{ color: 'slate' }}>/</span>
                        <span style={{ color: 'red' }}>Sc</span>
                    </h1>
                    <Crousel />

                    <div>
                        <BlogList/>
                    </div>

                    <div>
                        <Calendar/>
                    </div>
                </div>
            </Content>
        </>
    );
};

export default PublicPage;
