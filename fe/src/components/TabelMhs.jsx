import React, { useState } from 'react';
import { Form, Input, InputNumber, Table, Row, Col } from 'antd';

const originData = [
    {
        key: '1',
        nama: 'John Doe',
        nim: '2023001',
        angkatan: 2023,
        prodi: 'Teknik Informatika',
        jurusan: 'Teknik',
        fakultas: 'Teknik',
        alamat: 'Jalan Jenderal Sudirman No. 123',
        status: 'Aktif',
    },
    {
        key: '2',
        nama: 'Jane Smith',
        nim: '2023002',
        angkatan: 2023,
        prodi: 'Sistem Informasi',
        jurusan: 'Teknik',
        fakultas: 'Teknik',
        alamat: 'Jalan Ahmad Yani No. 456',
        status: 'Tidak Aktif',
    },
    // Tambahkan data contoh lainnya di sini jika diperlukan
];

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const TabelMhs = () => {
    const [form] = Form.useForm();
    const [data] = useState(originData);
    const [searchText, setSearchText] = useState('');

    const filteredData = data.filter((item) => {
        return (
            item.nama.toLowerCase().includes(searchText.toLowerCase()) ||
            item.nim.toLowerCase().includes(searchText.toLowerCase()) ||
            item.angkatan.toString().includes(searchText) ||
            item.prodi.toLowerCase().includes(searchText.toLowerCase()) ||
            item.jurusan.toLowerCase().includes(searchText.toLowerCase()) ||
            item.fakultas.toLowerCase().includes(searchText.toLowerCase()) ||
            item.alamat.toLowerCase().includes(searchText.toLowerCase()) ||
            item.status.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    const columns = [
        {
            title: 'Nama',
            dataIndex: 'nama',
            width: '15%',
            editable: true,
        },
        {
            title: 'NIM',
            dataIndex: 'nim',
            width: '10%',
            editable: true,
        },
        {
            title: 'Angkatan',
            dataIndex: 'angkatan',
            width: '10%',
            editable: true,
        },
        {
            title: 'Prodi',
            dataIndex: 'prodi',
            width: '10%',
            editable: true,
        },
        {
            title: 'Jurusan',
            dataIndex: 'jurusan',
            width: '10%',
            editable: true,
        },
        {
            title: 'Fakultas',
            dataIndex: 'fakultas',
            width: '10%',
            editable: true,
        },
        {
            title: 'Alamat',
            dataIndex: 'alamat',
            width: '20%',
            editable: true,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '10%',
            editable: true,
        },
    ];

    const mergedColumns = columns.map((col) => ({
        ...col,
        onCell: (record) => ({
            record,
            inputType: col.dataIndex === 'angkatan' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
        }),
    }));

    return (
        <div>
            <Row justify="center" style={{ marginBottom: 16 }}>
                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                    <Input.Search
                        placeholder="Search"
                        allowClear
                        onSearch={(value) => setSearchText(value)}
                        style={{ width: '100%' }}
                    />
                </Col>
            </Row>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={filteredData}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={false}
                    scroll={{ x: 'max-content' }}
                />
            </Form>
        </div>
    );
};

export default TabelMhs;
