import React from 'react'

import TabelMhs from './TabelMhs';



const PublicMahasiswa = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mb-12 mt-4 font-mono'>Daftar Mahasiswa</h1>
      <TabelMhs />
    </div>
  )
}

export default PublicMahasiswa