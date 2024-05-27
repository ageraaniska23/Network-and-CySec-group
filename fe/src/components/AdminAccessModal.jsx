import React from 'react';
import { Modal, Button } from 'antd';

// eslint-disable-next-line react/prop-types
const AdminAccessModal = ({ visible, onCancel }) => (
  <Modal
    title="Admin Access"
    visible={visible}
    onCancel={onCancel}
    footer={[
      <Button key="ok" onClick={onCancel}>
        OK
      </Button>,
    ]}
  >
    <p>Please confirm that you want to access the admin page.</p>
  </Modal>
);

export default AdminAccessModal;
