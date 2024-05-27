// CustomTable.js
import React from 'react';
import { Space, Table as AntTable, Tag } from 'antd';

const { Column } = AntTable;

const data = [
  {
    key: '1',
    name: 'John',
    nim: '09011282025070',
    address: 'New York No. 1 Lake Park',
    tags: ['developer'],
  },
  {
    key: '2',
    name: 'John',
    nim: '090111111111111',
    address: 'New York No. 1 Lake Park',
    tags: ['developer'],
  },
  {
    key: '3',
    name: 'John',
    nim: '090111111111111',
    address: 'New York No. 1 Lake Park',
    tags: ['developer'],
  },
];

const CustomTable = () => (
  <div className="overflow-x-auto border ">
    <AntTable dataSource={data} className='bg-slate-50 rounded-xl mt-6'>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Nim" dataIndex="nim" key="nim" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"  
        key="tags"
        render={(tags) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        className='text-blue-400'
        render={() => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        )}
      />
    </AntTable>
  </div>
);

export default CustomTable;
