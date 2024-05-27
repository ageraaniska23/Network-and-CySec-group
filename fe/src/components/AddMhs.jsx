import React from 'react';
import { Statistic } from 'antd';

const AddMhs = () => (
    <div>
        <Statistic
            className='items-center mb-4 text-center border-2 p-5 bg-cyan-400 rounded-2xl'
            title="Jumlah Mahasiswa" value={112893}
        />
        <Statistic
            className='items-center mb-4 text-center border-2 p-5 mt-12 bg-yellow-200 rounded-2xl'
            title="Mahasiswa aktif" value={112893}
        />
    </div>
);

export default AddMhs;
