import React, { useEffect, useState } from 'react';
import {BsFillTrashFill} from 'react-icons/bs' 
import {BiEdit} from 'react-icons/bi' 
import axios from 'axios';
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import Login from './Login';

const Posting = () => {
    
 
    const {
        // register,
        handleSubmit,
        // formState: {errors}
    } = useForm()

    const [Add, setAdd] = useState({
        title : "",
        category :"",
        status :false ,
        isiBerita :"",
        image:""
    });

    const [update, setUpdate] = useState({
        title : "",
        category :"",
        status :false ,
        isiBerita :"",
        image:""
    });

    const [Berita, setBerita] = useState([]);

    const getBerita=()=>{
        axios({
            method:'GET',
            url:'http://localhost:3004/news/'
        })
        .then((result)=>{
            setBerita(result.data)
            console.log(result.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const getDetail = async(id)=>{
        await axios({
            method:'GET',
            url:`http://localhost:3004/news/getDetail/${id}`
        })
        .then((result)=>{
            setUpdate(result.data)
            console.log(result)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    const submitHandler = async(data)=>{
        axios({
            method:'POST',
            url:'http://localhost:3004/news/addNews',
            data : Add
        })
        .then(()=>{
            Swal.fire(
                'Data Berhasil Ditambah',
                'Tekan Tombol!',
                'success'
            )
            getBerita();
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error : ${error.message}`
              })
        })
    }

    const updateHandler = async(id)=>{
        // console.log(update)
            axios({
            method:'PUT',
            url:`http://localhost:3004/news/updateNews/${id}`,
            data: update
        })
        .then((result)=>{
            console.log(result)
            Swal.fire(
                'Data Berhasil Diubah',
                'Tekan Tombol!',
                'success'
            )
            getBerita();
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error : ${error.message}`
            })
        })
    }


    const deleteHandler = async(id)=>{
        await Swal.fire({
            title: 'Apakah Kamu Yakin Ingin Menghapus Item ini?',
            showCancelButton: true,
            confirmButtonText: 'Hapus!',    
          }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method:'DELETE',
                    url:`http://localhost:3004/news/deleteNews/${id}`
                })
                Swal.fire('Data Sukses Terhapus!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Data Gagal Terhapus', '', 'info')
            }
        })
        getBerita();   
    }
    

    const updateStatus = async (e,id)=>{
        let status = true;
        e.target.checked
        ? status= true
        : status= false;

        axios({
            method:'PUT',
            url:`http://localhost:3004/news/updateStatus/${id}`,
            data:{
                status : status,
            }
        }).then((res)=>{
            Swal.fire(
                'Data Berhasil Diubah!',
                'Tekan Tombol!',
                'success'
            )
        }).catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Data Gagal Diubah!',
                text: `Error : ${err.message}`
              })
        })
        getBerita();
    }
   
    useEffect(() => {
        getBerita();
        // getToken
    }, []);


    
    return (
        <div className='container-fluid'>
            <div className='container'>

            <div className="card text-center align-content-between mt-5 ">
                    
                    <div className="card-header">
                        <h2>Tambah Berita</h2>
                    </div>
                    
                    <div className="card-body ">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="row g-3  mb-3">
                                <div className="col-3 ">
                                    <div className="col-form-div">Judul Berita</div>
                                </div>
                                <div className="col-8 text-end">
                                    <input type="text" id="judulBerita" className="form-control"  onChange={(e)=>setAdd({...Add,title:e.target.value})} />
                                </div>
                            </div>

                            <div className="row g-3  mb-3">
                                <div className="col-3">
                                    <div className="col-form-div">Category</div>
                                </div>
                                <div className="col-8">
                                    <input type="text" id="category" className="form-control" onChange={(e)=>setAdd({...Add,category:e.target.value})}/>
                                </div>
                            </div>

                            <div className="row g-3  mb-3">
                                <div className="col-3">
                                    <div className="col-form-div">Status</div>
                                </div>
                                <div className="col-8 text-start">
                                     
                                    <label className='form-check-div'> 
                                    <input className='form-check-input me-3' id='status' type='checkbox' name='status' value={true} onChange={(e)=>setAdd({...Add,status: e.target.checked})} /> 
                                    Posting</label>
                                </div>
                            </div>

                            <div className="row g-3 align-top mb-3">
                                <div className="col-3">
                                    <div className="col-form-div">Isi Berita</div>
                                </div>
                                <div className="col-8">
                                    <textarea type="textarea" className="form-control" style={{height:200, resize:'none'}} onChange={(e)=>setAdd({...Add,isiBerita:e.target.value})}/>
                                </div>
                            </div>

                            <div className="row g-3 align-items-center mb-3">
                                <div className="col-3">
                                    <div className="col-form-div">Image</div>
                                </div>
                                <div className="col-8">
                                    <input type="text" id="image" className="form-control" onChange={(e)=>setAdd({...Add,image:e.target.value})}/>
                                </div>
                            </div>
                            
                                <button type="submit" className="btn btn-primary mt-3">Tambah Data</button>  

                            <div className="row g-3 justify-content-end align-items-end mb-3">
                                <div className="col-2">
                                </div>
                                <div className="col-9">
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <table className='table table-responsive align-middle mt-5 table-bordered rounded'>
                        <thead className='table-dark text-center'>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>Judul Berita</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>Isi Berita</th>
                                <th scope='col'>Gambar Berita</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {Berita.map((data,index)=>{
                                const {id,title,category,status,isiBerita,image} = data;
                                return(
                                <tr key={id}>
                                    <th scope='row' className='text-center'>{index+1}</th>
                                    <td style={{maxWidth:'100px',textAlign:'justify'}}>{title}</td>
                                    <td>{category}</td>
                                    <td className='text-center'>
                                        <input className='form-check-input' type='checkbox' defaultChecked={status} onChange={(e)=> updateStatus(e,id)}/> 
                                        <label className='form-check-div ms-2'>Posting</label> 
                                    </td>
                                    <td style={{textAlign:'justify', padding:10, maxWidth:'300px'}}>{isiBerita}</td>
                                    <td className='text-center'><img src={image} style={{maxWidth:'150px'}} alt='Thumbnail Berita'/></td>
                                    <td className='text-center'> 
                                        
                                        <button className='btn btn-sm' onClick={()=>getDetail(id)}>
                                        <BiEdit className='text-warning me-1' size={25} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        </BiEdit>
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Data</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                
                                                        <div className="row g-3 mb-3">
                                                            <div className="col-3 align-middle">
                                                                <div className="col-form-div">Judul Berita</div>
                                                            </div>
                                                            <div className="col-8 text-end">
                                                                <input type="text" id="judulBerita" value={update.title} className="form-control" onChange={(e)=>setUpdate({...update,title:e.target.value})}/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="row g-3  mb-3">
                                                            <div className="col-3">
                                                                <div className="col-form-div">Category</div>
                                                            </div>
                                                            <div className="col-8">
                                                                <input type="text" id="category" value={update.category}className="form-control" onChange={(e)=>setUpdate({...update,category:e.target.value})}/>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3  mb-3">
                                                            <div className="col-3">
                                                                <div className="col-form-div">Status</div>
                                                            </div>
                                                            <div className="col-8 text-start">
                                                                
                                                                <label className='form-check-div'> 
                                                                <input className='form-check-input me-3' type='checkbox' name='status' checked={update.status} onChange={(e)=>setUpdate({...update,status: e.target.checked})} /> 
                                                                Posting</label>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 align-top mb-3">
                                                            <div className="col-3">
                                                                <div className="col-form-div">Isi Berita</div>
                                                            </div>
                                                            <div className="col-8">
                                                                <textarea type="textarea" className="form-control" value={update.isiBerita} style={{height:200, resize:'none'}} onChange={(e)=>setUpdate({...update,isiBerita:e.target.value})}/>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 align-items-center mb-3">
                                                            <div className="col-3">
                                                                <div className="col-form-div">Image</div>
                                                            </div>
                                                            <div className="col-8">
                                                                <input type="text" id="image" className="form-control" value={update.image} onChange={(e)=>setUpdate({...update,image:e.target.value})}/>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                                <div className="modal-footer">
                                                    <form onSubmit={()=>handleSubmit(updateHandler(update.id))}>
                                                    <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                                    </form>
                                                    
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        <button className='btn btn-sm' onClick={()=>deleteHandler(id)}>    
                                        <BsFillTrashFill className='text-danger' size={20}></BsFillTrashFill>
                                        </button>
                                    </td>
                                </tr>
                                )
                            })}
                           
                        </tbody>

                    </table>
            </div>
        </div>
        </div>
    );
}

export default Posting;
