import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PageAdmin from './components/PageAdmin';
import { Layout } from 'antd';
import PublicPage from './components/PublicPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Crousel from './components/Crousel';
import AdminAccessModal from './components/AdminAccessModal';
import PublikMahasiswa from './components/PublicMahasiswa'
import AddMahasiswa from './components/AddMahasiswa';
import AddBlog1 from './components/AddBlog';

const { Content } = Layout;

const AppContent = () => {
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(true);
  const isRoute = location.pathname.toLowerCase().startsWith('/admin');

  const handleEnterAdminPage = () => {
    if (isRoute && modalVisible) {
      setModalVisible(false);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isRoute ? <Sidebar /> : <Navbar />}
      <Layout>
        <Content style={{ padding: '0 50px', marginTop: 64 }} onClick={handleEnterAdminPage}>
          <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route path="/Mahasiswa" element={<PublikMahasiswa/>} />
            <Route path="/admin/dashboard" element={<PageAdmin />} />
            <Route path="/admin/addmahasiswa" element={<AddMahasiswa />} />
            <Route path="/admin/addblog" element={<AddBlog1 />} />
            <Route path='/home' element={<Crousel />} />
          </Routes>
        </Content>
        {isRoute ? (
          <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
            Admin Footer
          </Footer>
        ) : (
          <Footer style={{ textAlign: 'center' }}>
            Public Footer
          </Footer>
        )}
      </Layout>
      {isRoute && <AdminAccessModal visible={modalVisible} onCancel={handleModalCancel} />}
    </Layout>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
