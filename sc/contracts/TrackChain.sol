// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract TrackChain {
    address public admin;

    struct DataMhs {
        string nama;
        uint nim;
        string angkatan;
        string prodi;
        string jurusan;
        string fakultas;
        string alamat;
        string status;
    }

    struct DataTa {
        uint nim;
        string judulTa;
        string dospem1;
        string dospem2;
    }
    struct JadwalTa1 {
        string jadwal;
    }

    struct AddDataSkripsi {
        string abstrak;
        string keyword;
    }

    struct SkripsiWithTa {
        uint nim;
        string nama;
        string abstrak;
        string keyword;
        string judulTa;
        string dospem1;
        string dospem2;
    }

    struct JadwalSkripsi{
        uint nim;
        string nama;
        string jadwal;
        string judulTa;
        string dospem1;
        string dospem2;
    }

    mapping(uint => bool) public isMhsRegistered;
    mapping(uint => DataMhs) public dataMhsMapping;
    mapping(uint => DataTa) public dataTaMapping;
    mapping(uint => JadwalTa1) public jadwalTa1Mapping;
    mapping(uint => AddDataSkripsi) public dataSkripsiMapping;
    mapping(uint => uint) private indexMapping; 

    DataMhs[] public allData;
    DataTa[] public allTa;
    JadwalTa1[] public jadwalTaSatu;
    AddDataSkripsi[] public allSkripsi;
    SkripsiWithTa[] public allSkripsiWithTa;
    JadwalSkripsi[] public allJadwalSkripsi;

    event SkripsiAdded(uint nim, SkripsiWithTa skripsiWithTa);
    event MhsAdded(uint nim, DataMhs dataMhs);
    event StatusChanged(uint nim, string newStatus);
    event DataTaAdded(uint nim, DataTa dataTa);
    event JadwalAdded(uint nim, JadwalSkripsi jadwalSkripsi);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Hanya admin yang dapat mengakses");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addMhs(
        string memory _nama,
        uint _nim,
        string memory _angkatan,
        string memory _prodi,
        string memory _jurusan,
        string memory _fakultas,
        string memory _alamat,
        string memory _status
    ) public onlyAdmin {
        require(!isMhsRegistered[_nim], "Data sudah terdaftar");
        DataMhs memory newMhs = DataMhs({
            nama: _nama,
            nim: _nim,
            angkatan: _angkatan,
            prodi: _prodi,
            jurusan: _jurusan,
            fakultas: _fakultas,
            alamat: _alamat,
            status: _status
        });
        isMhsRegistered[_nim] = true;
        dataMhsMapping[_nim] = newMhs;
        allData.push(newMhs);
        indexMapping[_nim] = allData.length - 1;

        emit MhsAdded(_nim, newMhs);
    }

    function changeStatus(uint _nim, string memory _status) public onlyAdmin {
        require(isMhsRegistered[_nim], "Mahasiswa tidak ada");
        dataMhsMapping[_nim].status = _status;
        uint index = indexMapping[_nim];
        allData[index].status = _status;
        emit StatusChanged(_nim, _status);
    }

    function addDataTa(
        uint _nim,
        string memory _judulTa,
        string memory _dospem1,
        string memory _dospem2
    ) public onlyAdmin {
        require(isMhsRegistered[_nim], "Mahasiswa tidak terdaftar");

        DataTa memory newDataTa = DataTa({
            nim: _nim,
            judulTa: _judulTa,
            dospem1: _dospem1,
            dospem2: _dospem2
        });


        dataTaMapping[_nim] = newDataTa;
        allTa.push(newDataTa);

        emit DataTaAdded(_nim, newDataTa);
    }

    function addJadwal(
        uint _nim,
        string memory _jadwal
    ) public onlyAdmin {
        require(isMhsRegistered[_nim], "Mahasiswa tidak terdaftar");

        JadwalTa1 memory newJadwalTa1 = JadwalTa1({
            jadwal: _jadwal
        });

        DataTa memory taData = dataTaMapping[_nim];
        DataMhs memory mhsData = dataMhsMapping[_nim];

        JadwalSkripsi memory newJadwalSkripsi = JadwalSkripsi({
            nim: _nim,
            jadwal:newJadwalTa1.jadwal,
            nama: mhsData.nama,
            judulTa: taData.judulTa,
            dospem1: taData.dospem1,
            dospem2: taData.dospem2
        });


        jadwalTa1Mapping[_nim] = newJadwalTa1;
        allJadwalSkripsi.push(newJadwalSkripsi);
        jadwalTaSatu.push(newJadwalTa1);
        emit JadwalAdded(_nim, newJadwalSkripsi);
    }

    function addSkripsi(
        uint _nim,
        string memory _abstrak,
        string memory _keywords
    ) public onlyAdmin {
        require(isMhsRegistered[_nim], "Mahasiswa tidak terdaftar");
        require(bytes(dataTaMapping[_nim].judulTa).length != 0, "TA belum terdaftar");

        AddDataSkripsi memory newDataSkripsi = AddDataSkripsi({
            abstrak: _abstrak,
            keyword: _keywords
        });

        DataTa memory taData = dataTaMapping[_nim];
        DataMhs memory mhsData = dataMhsMapping[_nim];

        SkripsiWithTa memory newSkripsiWithTa = SkripsiWithTa({
            nim: _nim,
            nama: mhsData.nama,
            abstrak: newDataSkripsi.abstrak,
            keyword: newDataSkripsi.keyword,
            judulTa: taData.judulTa,
            dospem1: taData.dospem1,
            dospem2: taData.dospem2
        });

        dataSkripsiMapping[_nim] = newDataSkripsi;
        allSkripsiWithTa.push(newSkripsiWithTa);
        allSkripsi.push(newDataSkripsi);

        emit SkripsiAdded(_nim, newSkripsiWithTa);
    }

    function getAllDataMhs() public view returns (DataMhs[] memory) {
        return allData;
    }

    function getDataTa(uint _nim) public view returns (DataTa memory) {
        require(isMhsRegistered[_nim], "Mahasiswa tidak terdaftar");
        return dataTaMapping[_nim];
    }

    function getAllTa() public view returns (DataTa[] memory) {
        return allTa;
    }

    function getAllJadwalTa1() public view returns (JadwalSkripsi[] memory) {
        return allJadwalSkripsi;
    }

    function getSkripsi() public view returns (SkripsiWithTa[] memory) {
        return allSkripsiWithTa;
    }
}
