// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Blog {
    address public admin;

    struct BlogUp {
        string judul;
        string deskripsi;
        string isi;
    }

    mapping (uint => BlogUp) public mappingBlog;

    BlogUp[] public allBlogs;

    event BlogAdded(BlogUp newBlog);

    modifier onlyAdmin(){
        require(msg.sender == admin, "Hanya admin yang dapat mengakses");
        _;
    }

    constructor(){
        admin = msg.sender;
    }

    function addBlog(
        string memory _judul,
        string memory _deskripsi,
        string memory _isi
    ) public onlyAdmin {
        BlogUp memory newBlog = BlogUp({
            judul: _judul,
            deskripsi: _deskripsi,
            isi: _isi
        });
        
        allBlogs.push(newBlog);
        mappingBlog[allBlogs.length - 1] = newBlog;
        emit BlogAdded(newBlog);
    }

    function getBlog() public view returns (BlogUp[] memory) {
        return allBlogs;
    }
}
