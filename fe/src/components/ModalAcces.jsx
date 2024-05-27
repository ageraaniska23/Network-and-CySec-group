import React from 'react';
import { Modal, Button } from 'antd';

const ModalAcces = ({ visible, onCancel }) => (
  <Modal
    title="Connect"
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

export default ModalAcces;
