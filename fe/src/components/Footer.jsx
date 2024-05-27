import React from 'react';
import {  Layout} from 'antd';
const { Footer } = Layout;

const App = () => {

    return (
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                NetSc ©{new Date().getFullYear()}
            </Footer>

    );
};
export default App;