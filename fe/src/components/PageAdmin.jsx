import React from 'react';

import CustomTable from './CustomTable';
import AddMhs from './AddMhs';



const PageAdmin = () => {
    return (
        <div className=''>
                <div className="flex flex-col lg:flex-row lg:flex-wrap -mx-4">
                    <div className="w-full lg:w-3/4 px-4 mb-4 lg:mb-0">
                        <h1 className='text-center text-3xl font-bold mb-4'>Data Mahasiswa</h1>
                        <div className="p-0 bg-slate-50 rounded-xl">
                            <CustomTable />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 px-4">
                        <div className="p-4 bg-slate-100 rounded-xl">
                            <AddMhs />
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default PageAdmin;
